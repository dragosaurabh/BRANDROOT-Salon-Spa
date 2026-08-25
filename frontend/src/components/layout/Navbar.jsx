import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Facebook, Youtube } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/data/content";
import { Crest } from "@/components/ui/Crest";

export const Navbar = ({ topOffset = 0 }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`} style={{ top: topOffset }}>
        <div className="container nav-inner">
          <Link to="/" className="nav-logo" data-testid="nav-logo" aria-label="BrandRoot Salon & Spa — Home">
            <Crest size={32} className="nav-crest" />
            <span className="nav-logo-text">
              <span className="brand">BRANDROOT</span>
              <span className="brand-sub">Salon &amp; Spa</span>
            </span>
          </Link>
          <nav className="nav-links" aria-label="Main navigation">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-right">
            <Link to="/appointment" className="btn btn-outline nav-cta" data-testid="nav-book-now-btn">
              Book Now
            </Link>
            <button
              className="nav-burger"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              data-testid="nav-burger-btn"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            data-testid="mobile-menu-overlay"
          >
            <button
              className="mobile-menu-close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              data-testid="mobile-menu-close-btn"
            >
              <X size={22} />
            </button>
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              style={{ color: "var(--accent-gold)", marginBottom: 18, textAlign: "center" }}
            >
              <Crest size={44} />
            </motion.div>
            {NAV_LINKS.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) => `mobile-menu-link ${isActive ? "active" : ""}`}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span className="mml-num">0{i + 1}</span>
                  {l.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + NAV_LINKS.length * 0.08, duration: 0.5 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <div className="mobile-menu-socials">
                <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href={COMPANY.facebook} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href={COMPANY.youtube} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="YouTube">
                  <Youtube size={18} />
                </a>
              </div>
              <Link to="/appointment" className="btn btn-gold" data-testid="mobile-menu-book-btn">
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
