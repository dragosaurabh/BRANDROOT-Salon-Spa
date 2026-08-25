import numpy as np
from PIL import Image, ImageFilter

def dekey(path):
    im = Image.open(path).convert("RGB")
    a = np.array(im, dtype=np.int16)
    mx = a.max(axis=2)
    mn = a.min(axis=2)
    sat = mx - mn
    alpha = np.full(mx.shape, 255, dtype=np.uint8)
    bg = (sat < 26) & (mx > 35) & (mx < 165)
    alpha[bg] = 0
    edge = (sat >= 26) & (sat < 42) & (mx > 35) & (mx < 165)
    alpha[edge] = ((sat[edge] - 26) * 16).clip(0, 255).astype(np.uint8)
    am = Image.fromarray(alpha).filter(ImageFilter.GaussianBlur(0.7))
    out = Image.merge("RGBA", (*im.split(), am))
    return out, np.array(am)

def crop_bbox(img, alpha, pad=14):
    ys, xs = np.where(alpha > 24)
    y0, y1 = max(ys.min() - pad, 0), min(ys.max() + pad, img.height)
    x0, x1 = max(xs.min() - pad, 0), min(xs.max() + pad, img.width)
    return img.crop((x0, y0, x1, y1))

full, fa = dekey("/tmp/full.img")
crop_bbox(full, fa).save("/app/frontend/public/assets/logo-full.png")

mark, ma = dekey("/tmp/mark.img")
rows = (ma > 24).sum(axis=1)
active = np.where(rows > 4)[0]
start = active[0]
end = start
for y in range(start, len(rows)):
    if rows[y] > 4:
        end = y
    elif y - end > 40:
        break
seg = mark.crop((0, max(start - 14, 0), mark.width, min(end + 14, mark.height)))
sa = np.array(seg.getchannel("A"))
crop_bbox(seg, sa).save("/app/frontend/public/assets/logo-mark.png")
print("saved")
