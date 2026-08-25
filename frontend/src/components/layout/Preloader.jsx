import { motion } from "framer-motion";

export const Preloader = () => (
  <motion.div
    className="preloader"
    exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
    data-testid="signature-preloader"
  >
    <div className="preloader-glow" aria-hidden="true" />
    <motion.img
      src="/assets/logo-full.png"
      alt="BrandRoot Salon & Spa Ltd."
      className="preloader-logo"
      initial={{ opacity: 0, scale: 0.9, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    />
    <motion.div
      className="preloader-line"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.7, delay: 0.35, ease: "easeInOut" }}
    />
    <motion.p
      className="preloader-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      Where Luxury Meets Wellness
    </motion.p>
  </motion.div>
);
