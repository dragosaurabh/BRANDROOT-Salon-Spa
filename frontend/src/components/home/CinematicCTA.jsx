import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IMG } from "@/data/images";

export const CinematicCTA = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="cine" ref={ref} data-testid="cinematic-cta-section">
      <motion.div className="cine-bg" style={{ y, backgroundImage: `url(${IMG.ctaBanner})` }} role="img" aria-label="Candlelit luxury spa treatment room ambience" />
      <div className="cine-overlay" />
      <motion.div
        className="cine-content"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2>
          Your Moment of <em>Tranquility</em> Awaits
        </h2>
        <Link to="/appointment" className="btn btn-gold" data-testid="cinematic-book-btn">
          Book Your Experience <ArrowRight size={15} />
        </Link>
      </motion.div>
    </section>
  );
};
