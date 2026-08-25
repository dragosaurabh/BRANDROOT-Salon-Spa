import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IMG } from "@/data/images";
import { HERO_SLIDES } from "@/data/content";

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
      animate={{ y: 0, transition: { duration: 0.95, delay, ease } }}
      exit={{ y: "-115%", transition: { duration: 0.55, ease: [0.6, 0, 0.4, 1] } }}
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const [idx, setIdx] = useState(0);
  const [booted, setBooted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(window.matchMedia("(min-width: 768px)").matches);
    const boot = setTimeout(() => setBooted(true), 2600);
    const id = setInterval(() => setIdx((i) => (i + 1) % HERO_SLIDES.length), 7000);
    return () => {
      clearTimeout(boot);
      clearInterval(id);
    };
  }, []);

  const slide = HERO_SLIDES[idx];
  const d = booted ? [0.08, 0.2, 0.42] : [0.6, 0.75, 1.05];

  return (
  <section className="hero" data-testid="hero-section">
    {showVideo ? (
      <video
        className="hero-video"
        ref={(el) => {
          if (el) {
            el.muted = true;
            el.play().catch(() => {});
          }
        }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={IMG.hero}
        aria-hidden="true"
        data-testid="hero-video"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
        <source src="/assets/hero-video.webm" type="video/webm" />
      </video>
    ) : (
      <div className="hero-bg-wrap" aria-hidden="true">
        <div className="hero-bg" style={{ backgroundImage: `url(${IMG.hero})` }} />
      </div>
    )}
    <div className="hero-overlay" />
    <div className="hero-vignette" aria-hidden="true" />
    <div className="hero-glow" aria-hidden="true" />

    <div className="hero-content">
      <motion.div
        className="hero-crest"
        initial={{ opacity: 0, scale: 0.85, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.05, ease }}
      >
        <img src="/assets/logo-mark.png" alt="BrandRoot ornamental golden emblem" className="hero-logo-mark" />
      </motion.div>

      <motion.p
        className="hero-pre"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease }}
      >
        Welcome to BrandRoot
      </motion.p>

      <AnimatePresence mode="wait">
        <motion.div key={idx} className="hero-headline">
          <h1 className="hero-title" data-testid="hero-title">
            <Line delay={d[0]}>{slide.l1}</Line>
            <Line delay={d[1]}>
              {slide.l2pre} <em className="shimmer-text">{slide.em}</em>
            </Line>
          </h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: d[2], ease } }}
            exit={{ opacity: 0, y: -12, transition: { duration: 0.4 } }}
          >
            {slide.sub}
          </motion.p>
        </motion.div>
      </AnimatePresence>

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

      <motion.div
        className="hero-slide-dots"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hs-dot ${i === idx ? "active" : ""}`}
            onClick={() => setIdx(i)}
            aria-label={`Show headline ${i + 1}`}
            data-testid={`hero-slide-dot-${i}`}
          />
        ))}
      </motion.div>
    </div>

    <motion.div
      className="hero-scroll-cue"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      aria-hidden="true"
    >
      <span className="cue-text">Scroll</span>
      <span className="cue-line">
        <span className="cue-dot" />
      </span>
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
};

