import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star, Users, MapPin } from "lucide-react";
import { IMG } from "@/data/images";

const ease = [0.22, 1, 0.36, 1];

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

export const Hero = () => {
  return (
  <section className="hero" data-testid="hero-section">
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

      <h1 className="hero-title" data-testid="hero-title">
        <Line delay={0.6}>Where Luxury</Line>
        <Line delay={0.75}>
          Meets <em className="shimmer-text">Wellness</em>
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
      transition={{ delay: 1.9, duration: 1 }}
      aria-hidden="true"
    >
      Scroll
      <ChevronDown size={16} />
    </motion.div>

    <div className="hero-info-wrap">
      <motion.div
        className="hero-info-bar"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.55, duration: 0.85, ease }}
        data-testid="hero-info-bar"
      >
        <span className="hib-item">
          <Star size={13} fill="currentColor" /> 4.8 Google Rating
        </span>
        <span className="hib-sep">◆</span>
        <span className="hib-item">
          <Users size={13} /> 350+ Happy Clients
        </span>
        <span className="hib-sep hib-hide-mobile">◆</span>
        <span className="hib-item hib-hide-mobile">
          <MapPin size={13} /> Opp. City Centre Mall, Nashik
        </span>
      </motion.div>
    </div>
  </section>
  );
};
