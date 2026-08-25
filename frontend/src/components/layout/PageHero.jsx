import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ornament } from "@/components/ui/Bits";

export const PageHero = ({ title, crumb, children }) => (
  <section className="page-hero">
    <div className="page-hero-glow" aria-hidden="true" />
    <div className="container page-hero-content">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Ornament />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        data-testid="page-hero-title"
      >
        {title}
      </motion.h1>
      <motion.nav
        className="breadcrumb"
        aria-label="Breadcrumb"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link to="/">Home</Link>
        <span className="crumb-sep">◆</span>
        <span className="current">{crumb}</span>
      </motion.nav>
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{ marginTop: 12 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  </section>
);
