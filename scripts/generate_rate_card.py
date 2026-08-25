import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import simpleSplit
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

OUT = "/app/frontend/public/brandroot-service-menu.pdf"
W, H = A4
M = 64

GOLD = HexColor("#9A7B32")
GOLD_BRIGHT = HexColor("#C8A44E")
DARK = HexColor("#0A0A0A")
CREAM = HexColor("#F7EFE2")
TEXTD = HexColor("#1A1815")
GRAY = HexColor("#5C564E")
OFFWHITE = HexColor("#FAF5EF")
MUTED = HexColor("#B8B0A4")
RULE = HexColor("#D9C79F")

FD = "/app/scripts/fonts"


def reg(name, fname, fb):
    try:
        pdfmetrics.registerFont(TTFont(name, os.path.join(FD, fname)))
        return name
    except Exception:
        return fb


SERIF = reg("Cormorant", "CormorantGaramond.ttf", "Times-Roman")
SERIF_IT = reg("CormorantIt", "CormorantGaramond-Italic.ttf", "Times-Italic")
SANS = reg("Poppins", "Poppins-Regular.ttf", "Helvetica")
SANS_M = reg("PoppinsM", "Poppins-Medium.ttf", "Helvetica-Bold")

SERVICES = [
    ("Hair Care", "Expert Cuts, Color & Transformations", [
        ("Haircuts & Styling", "Precision cuts, layering, and trending styles by expert stylists for men and women"),
        ("Hair Wash & Blow Dry", "Deep cleansing and professional styling with premium products"),
        ("Hair Color & Highlights", "Full color, highlights, balayage, and ombre techniques using top salon brands"),
        ("Hair Treatments", "Keratin smoothing, hair spa, deep conditioning, and scalp treatments"),
        ("Hair Extensions", "Premium quality extensions for volume and length"),
    ]),
    ("Skin Care", "Radiant, Rejuvenated Complexion", [
        ("Beautification & Organic Facials", "Rejuvenating facials using organic products including O3+ premium facials — steam, exfoliation, masks, serums, and massage"),
        ("Advanced Skin Treatments", "Anti-aging, pigmentation correction, and skin brightening treatments"),
        ("Threading & Waxing", "Precision threading and full-body waxing services"),
        ("Clean-Up & Tan Removal", "Deep cleansing, de-tanning, and skin polish treatments"),
    ]),
    ("Spa & Wellness", "Deep Relaxation & Renewal", [
        ("Classical Relaxing Spa", "Full body deep tissue holistic treatment combining gentle stretches, reflexology — improving blood and oxygen flow for deep calm and relaxation"),
        ("Swedish Massage", "Full-body relaxation massage with long flowing strokes"),
        ("Deep Tissue Massage", "Targeted pressure massage for muscle tension and pain relief"),
        ("Aromatherapy", "Essential oil-infused massage for mind-body balance"),
        ("Head & Shoulder Massage", "Stress-relieving massage focused on upper body tension"),
        ("Steam & Shower", "Post-treatment steam bath and shower facilities for complete wellness"),
    ]),
    ("Bridal & Makeup", "Your Perfect Day, Perfected", [
        ("Bridal Makeup", "Complete bridal transformation with premium HD/airbrush makeup"),
        ("Party & Event Makeup", "Professional makeup for special occasions and events"),
        ("Makeover", "Complete beauty makeover — skin, hair, and makeup transformation"),
        ("Mehendi & Pre-Bridal", "Pre-bridal packages including skin prep, hair treatments, and glow facials"),
    ]),
    ("Nail Studio", "Artistry at Your Fingertips", [
        ("Manicure", "Classic, spa, and luxury manicure treatments"),
        ("Pedicure", "Relaxing pedicure with exfoliation, massage, and nail care"),
        ("Nail Art", "Creative nail designs, gel nails, and extensions"),
        ("Nail Extensions", "Acrylic and gel nail extensions"),
    ]),
    ("Men's Grooming", "The Modern Gentleman's Retreat", [
        ("Men's Haircut & Styling", "Trending cuts, fades, and professional styling"),
        ("Beard Grooming", "Beard trim, shaping, and conditioning"),
        ("Men's Facial", "Deep cleansing facial designed for men's skin"),
        ("Men's Spa", "Relaxing full-body massage and spa treatments for men"),
    ]),
]

PKGS = [
    ("Silver Plan", "Rs. 32,000", "Rs. 45,600",
     [("12x", "Relaxing Massage (60 min)"), ("12x", "Haircut + Wash")],
     "Regular spa-goers who love monthly massage & grooming", False),
    ("Gold Plan", "Rs. 55,000", "Rs. 75,600",
     [("12x", "Relaxing Massage (60 min)"), ("12x", "Haircut + Wash"), ("12x", "Head Massage"), ("6x", "O3+ Premium Facial")],
     "Wellness enthusiasts seeking comprehensive care", True),
    ("Platinum Plan", "Rs. 75,000", "Rs. 1,10,000",
     [("9x", "Relaxing Massage (60 min)"), ("6x", "Manicure + Pedicure"), ("6x", "Haircut + Wash"), ("6x", "O3+ Premium Facial"), ("6x", "Full Body Waxing")],
     "Total luxury — the ultimate head-to-toe pampering package", False),
]

c = canvas.Canvas(OUT, pagesize=A4)


def spaced(text, x, y, font, size, color, cs=3, center=True):
    w = pdfmetrics.stringWidth(text, font, size) + cs * max(len(text) - 1, 0)
    t = c.beginText()
    t.setFont(font, size)
    t.setFillColor(color)
    t.setCharSpace(cs)
    t.setTextOrigin(x - w / 2 if center else x, y)
    t.textLine(text)
    t.setCharSpace(0)
    c.drawText(t)


def ornament(cx, y, color=GOLD_BRIGHT, half=44):
    c.setStrokeColor(color)
    c.setLineWidth(0.7)
    c.line(cx - half - 10, y, cx - 10, y)
    c.line(cx + 10, y, cx + half + 10, y)
    c.saveState()
    c.translate(cx, y)
    c.rotate(45)
    c.rect(-2.4, -2.4, 4.8, 4.8, stroke=1, fill=0)
    c.restoreState()


def footer(page_num, dark=False):
    c.setFont(SANS, 7)
    c.setFillColor(MUTED if dark else GRAY)
    c.drawCentredString(W / 2, 32, f"BrandRoot Salon & Spa Ltd.  ·  Opp. City Centre Mall, Nashik  ·  +91 7507 515 957  ·  Page {page_num:02d}")


def cream_page():
    c.setFillColor(CREAM)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setStrokeColor(RULE)
    c.setLineWidth(0.8)
    c.rect(20, 20, W - 40, H - 40, stroke=1, fill=0)


# ---------- COVER ----------
c.setFillColor(DARK)
c.rect(0, 0, W, H, fill=1, stroke=0)
c.setStrokeColor(GOLD_BRIGHT)
c.setLineWidth(1)
c.rect(26, 26, W - 52, H - 52)
c.setLineWidth(0.4)
c.rect(33, 33, W - 66, H - 66)
ornament(W / 2, H - 190)
spaced("BRANDROOT", W / 2, H - 258, SERIF, 48, GOLD_BRIGHT, cs=12)
spaced("SALON & SPA", W / 2, H - 284, SANS, 9, MUTED, cs=7)
c.setFont(SERIF_IT, 19)
c.setFillColor(OFFWHITE)
c.drawCentredString(W / 2, H - 336, "Where Luxury Meets Wellness")
ornament(W / 2, H / 2 + 16)
spaced("SERVICE MENU", W / 2, H / 2 - 30, SANS_M, 16, OFFWHITE, cs=6)
spaced("& RATE CARD", W / 2, H / 2 - 54, SANS_M, 10, GOLD_BRIGHT, cs=5)
c.setFont(SANS, 8)
c.setFillColor(MUTED)
c.drawCentredString(W / 2, 148, "4.8 Google Rating   ·   350+ Happy Clients   ·   Family-Run Luxury")
c.drawCentredString(W / 2, 130, "Shop No. 9/10/11, Shreeji The Status, Opp. City Centre Mall, Nashik — 422002")
c.drawCentredString(W / 2, 112, "+91 7507 515 957   ·   info@brandrootsalon.com   ·   @brandrootsalonandspa")
c.showPage()

# ---------- SERVICE PAGES ----------
page = 2
cream_page()
y = H - 96


def new_page():
    global y, page
    footer(page)
    c.showPage()
    page += 1
    cream_page()
    y = H - 96


for cat, tag, items in SERVICES:
    if y < 320:
        new_page()
    spaced("—   " + cat.upper() + "   —", W / 2, y, SANS_M, 10, GOLD, cs=4)
    y -= 30
    c.setFont(SERIF_IT, 20)
    c.setFillColor(TEXTD)
    c.drawCentredString(W / 2, y, tag)
    y -= 18
    ornament(W / 2, y, GOLD, 34)
    y -= 36
    for name, desc in items:
        lines = simpleSplit(desc, SANS, 9, W - 2 * M - 10)
        block = 18 + len(lines) * 13 + 16
        if y - block < 70:
            new_page()
        c.setFont(SERIF, 15)
        c.setFillColor(TEXTD)
        c.drawString(M, y, name)
        nw = c.stringWidth(name, SERIF, 15)
        c.setStrokeColor(RULE)
        c.setLineWidth(0.5)
        c.setDash(1, 3)
        c.line(M + nw + 12, y + 3, W - M, y + 3)
        c.setDash()
        y -= 16
        c.setFont(SANS, 9)
        c.setFillColor(GRAY)
        for ln in lines:
            c.drawString(M, y, ln)
            y -= 13
        y -= 14
    y -= 18

if y < 170:
    new_page()
ornament(W / 2, y, GOLD)
y -= 26
c.setFont(SERIF_IT, 12)
c.setFillColor(GRAY)
note = "For current service pricing, call +91 7507 515 957 or message us on WhatsApp — rates vary by hair length, product line and artist level."
for ln in simpleSplit(note, SERIF_IT, 12, W - 2 * M - 60):
    c.drawCentredString(W / 2, y, ln)
    y -= 17
footer(page)
c.showPage()
page += 1

# ---------- PACKAGES PAGE ----------
c.setFillColor(DARK)
c.rect(0, 0, W, H, fill=1, stroke=0)
c.setStrokeColor(GOLD_BRIGHT)
c.setLineWidth(0.8)
c.rect(24, 24, W - 48, H - 48)
y = H - 92
spaced("—   MEMBERSHIP PACKAGES   —", W / 2, y, SANS_M, 10, GOLD_BRIGHT, cs=4)
y -= 34
c.setFont(SERIF_IT, 22)
c.setFillColor(OFFWHITE)
c.drawCentredString(W / 2, y, "12-Month Wellness Memberships")
y -= 20
ornament(W / 2, y)
y -= 42

for name, price, value, incl, best, pop in PKGS:
    bh = 108 + 13 * len(incl)
    c.setStrokeColor(GOLD_BRIGHT)
    c.setLineWidth(1.3 if pop else 0.7)
    c.roundRect(M, y - bh, W - 2 * M, bh, 10, stroke=1, fill=0)
    iy = y - 32
    c.setFont(SERIF, 18)
    c.setFillColor(OFFWHITE)
    c.drawString(M + 26, iy, name)
    if pop:
        tw = pdfmetrics.stringWidth("MOST POPULAR", SANS_M, 7) + 18
        c.setFillColor(GOLD_BRIGHT)
        c.roundRect(W - M - 26 - tw, iy - 3, tw, 15, 7.5, stroke=0, fill=1)
        c.setFillColor(DARK)
        c.setFont(SANS_M, 7)
        c.drawCentredString(W - M - 26 - tw / 2, iy + 1.5, "MOST POPULAR")
    iy -= 26
    c.setFont(SERIF, 20)
    c.setFillColor(GOLD_BRIGHT)
    c.drawString(M + 26, iy, price)
    pw = pdfmetrics.stringWidth(price, SERIF, 20)
    c.setFont(SANS, 8.5)
    c.setFillColor(MUTED)
    c.drawString(M + 26 + pw + 14, iy + 3, f"Value {value}   ·   Validity: 12 Months")
    iy -= 22
    for q, it in incl:
        c.setFillColor(GOLD_BRIGHT)
        c.circle(M + 30, iy + 2.5, 1.3, stroke=0, fill=1)
        c.setFillColor(MUTED)
        c.setFont(SANS, 9)
        c.drawString(M + 40, iy, f"{q}  {it}")
        iy -= 13
    iy -= 6
    c.setFont(SERIF_IT, 10.5)
    c.setFillColor(HexColor("#C9B98F"))
    c.drawString(M + 26, iy, f"Best for: {best}")
    y -= bh + 20

ornament(W / 2, y - 8)
c.setFont(SANS, 8)
c.setFillColor(MUTED)
c.drawCentredString(W / 2, y - 34, "Book on WhatsApp: +91 7507 515 957   ·   Open Mon – Sun: 10:00 AM – 9:00 PM")
footer(page, dark=True)
c.showPage()
c.save()
print("PDF written:", OUT, os.path.getsize(OUT), "bytes")
