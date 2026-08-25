import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { IMG } from "@/data/images";

const ease = [0.22, 1, 0.36, 1];

const MARQUEE_ITEMS = [
  "★ 4.8 Google Rating",
  "350+ Happy Clients",
  "Hair",
  "Skin",
  "Spa",
  "Bridal",
  "Nails",
  "Men's Grooming",
];

const Line = ({ children, delay }) => (
  <span className="line-mask">
    <motion.span
      style={{ display: "inline-block" }}
      initial={{ y: "115%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay, ease }}
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = () => (
  <section className="hero" data-testid="hero-section">
    <div className="hero-bg" style={{ backgroundImage: `url(${IMG.hero})` }} role="img" aria-label="Luxury spa interior with warm candlelight and hot stone treatment bed" />
    <div className="hero-overlay" />
    <div className="hero-glow" aria-hidden="true" />

    <div className="hero-content">
      <motion.div
        className="ornament"
        initial={{ opacity: 0, scaleX: 0.4 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
      >
        <span>◆</span>
      </motion.div>

      <motion.p
        className="hero-pre"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease }}
      >
        Welcome to BrandRoot
      </motion.p>

      <h1 className="hero-title" data-testid="hero-title">
        <Line delay={0.6}>Where Luxury</Line>
        <Line delay={0.75}>
          Meets <em>Wellness</em>
        </Line>
      </h1>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.05, ease }}
      >
        Nashik's most luxurious salon &amp; spa experience. Expert hair care, rejuvenating skin
        treatments, relaxing spa therapies &amp; stunning bridal transformations.
      </motion.p>

      <motion.div
        className="hero-ctas"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.25, ease }}
      >
        <Link to="/appointment" className="btn btn-gold" data-testid="hero-book-appointment-btn">
          Book Appointment <ArrowRight size={15} />
        </Link>
        <Link to="/services" className="btn btn-outline" data-testid="hero-explore-services-btn">
          Explore Services
        </Link>
      </motion.div>
    </div>

    <motion.div
      className="hero-scroll"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
      aria-hidden="true"
    >
      Scroll
      <ChevronDown size={16} />
    </motion.div>

    <div className="hero-marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div key={half} style={{ display: "flex" }}>
            {[0, 1, 2].map((rep) =>
              MARQUEE_ITEMS.map((item, i) => (
                <span key={`${half}-${rep}-${i}`}>
                  {item} <i>◆</i>
                </span>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
