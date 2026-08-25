export const COMPANY = {
  name: "BrandRoot Salon & Spa Ltd.",
  short: "BRANDROOT",
  sub: "SALON & SPA",
  tagline: "Where Luxury Meets Wellness",
  secondaryTagline: "Nashik's Most Luxurious Salon & Spa Experience",
  phone: "+91 7507 515 957",
  phoneHref: "tel:+917507515957",
  email: "info@brandrootsalon.com",
  address:
    "Shop No. 9/10/11, Shreeji The Status, Opp. City Centre Mall, Forest Colony, Parijat Nagar, Lavate Nagar, Nashik — 422002, Maharashtra, India",
  hours: "Mon – Sun: 10:00 AM – 9:00 PM",
  rating: "4.8",
  reviews: "350+",
  followers: "4.4K+",
  whatsapp:
    "https://wa.me/917507515957?text=Hi%20BrandRoot!%20I%27d%20like%20to%20book%20an%20appointment.",
  instagram: "https://www.instagram.com/brandrootsalonandspa/",
  facebook: "https://www.facebook.com/",
  youtube: "https://www.youtube.com/",
  mapsEmbed:
    "https://www.google.com/maps?q=Shreeji+The+Status,+Opp.+City+Centre+Mall,+Forest+Colony,+Parijat+Nagar,+Nashik+422002&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Shreeji+The+Status+Opp+City+Centre+Mall+Parijat+Nagar+Nashik+422002",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Our Packages", to: "/packages" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
];

export const TESTIMONIALS = [
  {
    author: "Priya Sharma",
    service: "Spa & Facial",
    quote:
      "The ambience at BrandRoot is absolutely stunning. The spa massage was deeply relaxing, and the facial left my skin glowing for days. The staff is so warm and professional — truly a five-star experience!",
  },
  {
    author: "Sneha Patil",
    service: "Bridal Makeup",
    quote:
      "BrandRoot made my wedding day unforgettable! The bridal makeup was flawless — exactly the look I dreamed of. The team understood my vision perfectly and executed it beautifully.",
  },
  {
    author: "Rahul Deshmukh",
    service: "Men's Grooming",
    quote:
      "Best salon experience in Nashik, hands down. The haircut was precise, the beard grooming was excellent, and the hot towel finish was the cherry on top. Every man deserves this.",
  },
  {
    author: "Anjali Kulkarni",
    service: "Hair Color & Spa",
    quote:
      "I've been coming to BrandRoot for two years now, and the quality never drops. My balayage turned out gorgeous, and the scalp spa treatment is addictive. Worth every rupee!",
  },
  {
    author: "Manish & Pooja Joshi",
    service: "Couples Spa",
    quote:
      "We tried the couples spa package for our anniversary and it was pure bliss. The treatment rooms are beautifully done, and the staff made us feel so pampered. Highly recommend!",
  },
];

export const OFFERS = [
  "Bridal Season Special — Complimentary Pre-Bridal Glow Facial with Every Bridal Package",
  "Diwali Glow Offer — 20% Off O3+ Premium Facials This Festive Season",
  "Couples Spa Retreat — 50% Off the Second Classical Relaxing Spa",
];

export const HERO_SLIDES = [
  {
    l1: "Where Luxury",
    l2pre: "Meets",
    em: "Wellness",
    sub: "Nashik's most luxurious salon & spa experience. Expert hair care, rejuvenating skin treatments, relaxing spa therapies & stunning bridal transformations.",
  },
  {
    l1: "Bridal Season,",
    l2pre: "Beautifully",
    em: "Perfected",
    sub: "Flawless HD & airbrush bridal artistry, pre-bridal glow rituals and mehendi — your big day, crafted to perfection.",
  },
  {
    l1: "This Festive Season,",
    l2pre: "Simply",
    em: "Glow",
    sub: "O3+ premium facials, radiant hair colour and festive glam — arrive glowing at every celebration.",
  },
];

export const TIME_SLOTS = (() => {
  const slots = [];
  for (let h = 10; h <= 20; h++) {
    for (const m of [0, 30]) {
      if (h === 20 && m > 30) continue;
      const hour12 = h > 12 ? h - 12 : h;
      const ampm = h >= 12 ? "PM" : "AM";
      slots.push(`${hour12}:${m === 0 ? "00" : "30"} ${ampm}`);
    }
  }
  return slots;
})();
