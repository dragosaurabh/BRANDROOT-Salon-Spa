import { IMG } from "./images";

export const PACKAGES = [
  {
    id: "silver",
    name: "Silver Plan",
    symbol: "◆",
    price: "₹32,000",
    value: "₹45,600",
    validity: "12 Months",
    popular: false,
    image: IMG.pkgSilver,
    bestFor: "Regular spa-goers who love monthly massage & grooming",
    inclusions: [
      { qty: "12×", item: "Relaxing Massage (60 min)" },
      { qty: "12×", item: "Haircut + Wash" },
    ],
    wa: "https://wa.me/917507515957?text=Hi%20BrandRoot!%20I%27m%20interested%20in%20the%20Silver%20Membership%20Plan%20(%E2%82%B932%2C000).%20Please%20share%20details.",
  },
  {
    id: "gold",
    name: "Gold Plan",
    symbol: "★",
    price: "₹55,000",
    value: "₹75,600",
    validity: "12 Months",
    popular: true,
    image: IMG.pkgGold,
    bestFor: "Wellness enthusiasts seeking comprehensive care",
    inclusions: [
      { qty: "12×", item: "Relaxing Massage (60 min)" },
      { qty: "12×", item: "Haircut + Wash" },
      { qty: "12×", item: "Head Massage" },
      { qty: "6×", item: "O3+ Premium Facial" },
    ],
    wa: "https://wa.me/917507515957?text=Hi%20BrandRoot!%20I%27m%20interested%20in%20the%20Gold%20Membership%20Plan%20(%E2%82%B955%2C000).%20Please%20share%20details.",
  },
  {
    id: "platinum",
    name: "Platinum Plan",
    symbol: "♛",
    price: "₹75,000",
    value: "₹1,10,000",
    validity: "12 Months",
    popular: false,
    image: IMG.pkgPlatinum,
    bestFor: "Total luxury — the ultimate head-to-toe pampering package",
    inclusions: [
      { qty: "9×", item: "Relaxing Massage (60 min)" },
      { qty: "6×", item: "Manicure + Pedicure" },
      { qty: "6×", item: "Haircut + Wash" },
      { qty: "6×", item: "O3+ Premium Facial" },
      { qty: "6×", item: "Full Body Waxing" },
    ],
    wa: "https://wa.me/917507515957?text=Hi%20BrandRoot!%20I%27m%20interested%20in%20the%20Platinum%20Membership%20Plan%20(%E2%82%B975%2C000).%20Please%20share%20details.",
  },
];

export const PACKAGE_FAQ = [
  {
    q: "How do memberships work?",
    a: "Choose your plan, and your services are credited to your membership account for 12 months. Simply book your slot anytime during salon hours and redeem your sessions at your convenience — no repeated payments, no hassle.",
  },
  {
    q: "Can I share my membership?",
    a: "Memberships are designed for individual use to ensure a personalised experience. However, select services within family plans can be discussed with our team — reach out on WhatsApp and we'll find the best fit for you.",
  },
  {
    q: "What's the cancellation policy?",
    a: "Appointments can be rescheduled up to 4 hours in advance at no charge. Membership plans are non-refundable, but unused sessions remain valid for the full 12-month validity period.",
  },
  {
    q: "Do memberships cover premium products?",
    a: "Yes — every membership service uses the same premium products and expert professionals as our regular services, including O3+ facials and top salon-grade hair care brands.",
  },
];
