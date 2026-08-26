import { motion } from "framer-motion";

const easeCurve = [0.22, 1, 0.36, 1];

export const Preloader = () => (
  <motion.div
    className="preloader"
    exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
    style={{ clipPath: "inset(0 0 0% 0)" }}
    data-testid="signature-preloader"
  >
    <motion.div
      className="preloader-glow"
      animate={{ scale: [1, 1.18, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    />
    <motion.img
      src="/assets/logo-full.png"
      alt="BrandRoot Salon & Spa Ltd."
      className="preloader-logo"
      initial={{ opacity: 0, scale: 0.9, filter: "blur(14px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.5, ease: easeCurve }}
    />
    <motion.div
      className="preloader-line"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.9, delay: 0.5, ease: "easeInOut" }}
    />
    <motion.p
      className="preloader-text"
      initial={{ opacity: 0, letterSpacing: "9px" }}
      animate={{ opacity: 1, letterSpacing: "2px" }}
      transition={{ delay: 0.9, duration: 1.5, ease: easeCurve }}
    >
      Where Luxury Meets Wellness
    </motion.p>
    <div className="preloader-progress" aria-hidden="true">
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 3, delay: 0.2, ease: "easeInOut" }}
      />
    </div>
  </motion.div>
);
