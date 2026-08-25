import { IMG } from "./images";

export const GALLERY_CATEGORIES = ["All", "Hair", "Skin", "Spa", "Makeup", "Nails", "Ambience"];

export const GALLERY_ITEMS = [
  { src: IMG.realLogoWall, cat: "Ambience", alt: "The BrandRoot emblem glowing on the backlit reception wall", tall: false },
  { src: IMG.galInterior, cat: "Ambience", alt: "Luxury salon interior with brass mirrors and warm lighting", tall: false },
  { src: IMG.featHair, cat: "Hair", alt: "Hair transformation in progress at BrandRoot salon", tall: true },
  { src: IMG.galMassage, cat: "Spa", alt: "Relaxing head and shoulder massage at candlelit spa", tall: false },
  { src: IMG.realLounge, cat: "Ambience", alt: "BrandRoot waiting lounge with classic sofas and chandelier", tall: false },
  { src: IMG.galProducts, cat: "Ambience", alt: "Premium spa products display with candles and towels", tall: true },
  { src: IMG.galBridal, cat: "Makeup", alt: "Radiant bridal look with traditional gold jewellery", tall: false },
  { src: IMG.galNailart, cat: "Nails", alt: "Luxury gold and burgundy nail art close-up", tall: true },
  { src: IMG.catSkin, cat: "Skin", alt: "Luxury organic facial treatment in serene spa room", tall: false },
  { src: IMG.galMens, cat: "Hair", alt: "Upscale men's grooming section with leather barber chair", tall: true },
  { src: IMG.galAmbience, cat: "Spa", alt: "Spa ambience with candles, orchids and folded towels", tall: false },
  { src: IMG.realLogoAngle, cat: "Ambience", alt: "BrandRoot Salon & Spa signature wall signage", tall: false },
  { src: IMG.catHair, cat: "Hair", alt: "Elegant hair styling session in luxury salon", tall: false },
  { src: IMG.featFacial, cat: "Skin", alt: "Organic clay mask facial treatment", tall: true },
  { src: IMG.galLounge, cat: "Ambience", alt: "Luxury spa waiting lounge with warm evening light", tall: false },
  { src: IMG.catSpa, cat: "Spa", alt: "Hot stone massage with candles and warm oils", tall: false },
  { src: IMG.featBridal, cat: "Makeup", alt: "Bridal makeover in progress with vanity mirror lights", tall: true },
  { src: IMG.catNails, cat: "Nails", alt: "Elegant manicured nails on dark marble", tall: false },
  { src: IMG.ig5, cat: "Ambience", alt: "Salon interior detail with brass sconce, candles and fresh flowers", tall: false },
];

export const HOME_GALLERY = GALLERY_ITEMS.slice(0, 8);

export const INSTAGRAM_POSTS = [
  { src: IMG.ig1, alt: "Behind the scenes hair styling at BrandRoot" },
  { src: IMG.ig2, alt: "Gold facial mask treatment in progress" },
  { src: IMG.ig3, alt: "Premium hair care product flat lay" },
  { src: IMG.ig4, alt: "Happy client admiring fresh balayage in salon mirror" },
  { src: IMG.ig5, alt: "Luxury salon interior detail with candles and flowers" },
  { src: IMG.ig6, alt: "BrandRoot team celebration at the salon" },
];
