import { IMG } from "./images";

export const SERVICE_CATEGORIES = [
  {
    id: "hair-care",
    name: "Hair Care",
    tag: "Expert Cuts, Color & Transformations",
    image: IMG.catHair,
    description:
      "Precision cuts, transformative color, and restorative treatments by expert stylists using top salon brands.",
    services: [
      { name: "Haircuts & Styling", desc: "Precision cuts, layering, and trending styles by expert stylists for men and women" },
      { name: "Hair Wash & Blow Dry", desc: "Deep cleansing and professional styling with premium products" },
      { name: "Hair Color & Highlights", desc: "Full color, highlights, balayage, and ombre techniques using top salon brands" },
      { name: "Hair Treatments", desc: "Keratin smoothing, hair spa, deep conditioning, and scalp treatments" },
      { name: "Hair Extensions", desc: "Premium quality extensions for volume and length" },
    ],
  },
  {
    id: "skin-care",
    name: "Skin Care",
    tag: "Radiant, Rejuvenated Complexion",
    image: IMG.catSkin,
    description:
      "Organic facials, advanced skin treatments, and flawless finishing touches for skin that glows from within.",
    services: [
      { name: "Beautification & Organic Facials", desc: "Rejuvenating facials using organic products including O3+ premium facials — steam, exfoliation, masks, serums, and massage" },
      { name: "Advanced Skin Treatments", desc: "Anti-aging, pigmentation correction, and skin brightening treatments" },
      { name: "Threading & Waxing", desc: "Precision threading and full-body waxing services" },
      { name: "Clean-Up & Tan Removal", desc: "Deep cleansing, de-tanning, and skin polish treatments" },
    ],
  },
  {
    id: "spa-wellness",
    name: "Spa & Wellness",
    tag: "Deep Relaxation & Renewal",
    image: IMG.catSpa,
    description:
      "The BrandRoot Relaxing Spa — holistic therapies, aromatic oils, and steam rituals for complete renewal.",
    services: [
      { name: "Classical Relaxing Spa", desc: "Full body deep tissue holistic treatment combining gentle stretches, reflexology — improving blood and oxygen flow for deep calm and relaxation" },
      { name: "Swedish Massage", desc: "Full-body relaxation massage with long flowing strokes" },
      { name: "Deep Tissue Massage", desc: "Targeted pressure massage for muscle tension and pain relief" },
      { name: "Aromatherapy", desc: "Essential oil-infused massage for mind-body balance" },
      { name: "Head & Shoulder Massage", desc: "Stress-relieving massage focused on upper body tension" },
      { name: "Steam & Shower", desc: "Post-treatment steam bath and shower facilities for complete wellness" },
    ],
  },
  {
    id: "bridal-makeup",
    name: "Bridal & Makeup",
    tag: "Your Perfect Day, Perfected",
    image: IMG.catBridal,
    description:
      "Stunning bridal transformations, party glam, and pre-bridal rituals crafted with premium HD & airbrush artistry.",
    services: [
      { name: "Bridal Makeup", desc: "Complete bridal transformation with premium HD/airbrush makeup" },
      { name: "Party & Event Makeup", desc: "Professional makeup for special occasions and events" },
      { name: "Makeover", desc: "Complete beauty makeover — skin, hair, and makeup transformation" },
      { name: "Mehendi & Pre-Bridal", desc: "Pre-bridal packages including skin prep, hair treatments, and glow facials" },
    ],
  },
  {
    id: "nail-studio",
    name: "Nail Studio",
    tag: "Artistry at Your Fingertips",
    image: IMG.catNails,
    description:
      "Luxury manicures, relaxing pedicures, and creative nail artistry — beauty down to the finest detail.",
    services: [
      { name: "Manicure", desc: "Classic, spa, and luxury manicure treatments" },
      { name: "Pedicure", desc: "Relaxing pedicure with exfoliation, massage, and nail care" },
      { name: "Nail Art", desc: "Creative nail designs, gel nails, and extensions" },
      { name: "Nail Extensions", desc: "Acrylic and gel nail extensions" },
    ],
  },
  {
    id: "mens-grooming",
    name: "Men's Grooming",
    tag: "The Modern Gentleman's Retreat",
    image: IMG.catMens,
    description:
      "Gentleman's Choices — sharp cuts, beard craftsmanship, and grooming rituals for the modern man.",
    services: [
      { name: "Men's Haircut & Styling", desc: "Trending cuts, fades, and professional styling" },
      { name: "Beard Grooming", desc: "Beard trim, shaping, and conditioning" },
      { name: "Men's Facial", desc: "Deep cleansing facial designed for men's skin" },
      { name: "Men's Spa", desc: "Relaxing full-body massage and spa treatments for men" },
    ],
  },
];

export const FEATURED_SERVICES = [
  {
    name: "Classical Relaxing Spa",
    desc: "Full body deep tissue holistic treatment — stretches, reflexology, and deep relaxation. Leave renewed.",
    image: IMG.featSpa,
  },
  {
    name: "Beautification & Organic Facial",
    desc: "Premium organic facial with steam, exfoliation, masks, serums & massage for fresh, rejuvenated skin.",
    image: IMG.featFacial,
  },
  {
    name: "Bridal Makeover",
    desc: "Your special day deserves a stunning transformation. Premium HD & airbrush bridal makeup.",
    image: IMG.featBridal,
  },
  {
    name: "Hair Transformation",
    desc: "From precision cuts to trendy colors, keratin treatments & styling — your hair, redefined.",
    image: IMG.featHair,
  },
];
