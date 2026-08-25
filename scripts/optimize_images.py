import os, re, io, requests
from PIL import Image

SRC = open("/app/frontend/src/data/images.js").read()
base = re.search(r'const BASE = "([^"]+)"', SRC).group(1)
entries = re.findall(r'(\w+): `\$\{BASE\}/([^`]+)`', SRC)
reals = re.findall(r'(\w+): "(https://customer-assets[^"]+)"', SRC)
urls = {k: f"{base}/{p}" for k, p in entries}
urls.update({k: u for k, u in reals})

WIDE = {"hero": 1600, "ctaBanner": 1600, "aboutInterior": 1400, "realLounge": 1400, "realLogoWall": 1200, "realLogoAngle": 1000}
OUT = "/app/frontend/public/assets/img"
os.makedirs(OUT, exist_ok=True)

total = 0
for k, u in urls.items():
    r = requests.get(u, timeout=40)
    r.raise_for_status()
    im = Image.open(io.BytesIO(r.content)).convert("RGB")
    maxw = WIDE.get(k, 900)
    if im.width > maxw:
        im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
    path = f"{OUT}/{k}.webp"
    im.save(path, "WEBP", quality=72, method=4)
    kb = os.path.getsize(path) // 1024
    total += kb
    print(k, im.size, kb, "KB")
print("DONE", len(urls), "images,", total, "KB total")
