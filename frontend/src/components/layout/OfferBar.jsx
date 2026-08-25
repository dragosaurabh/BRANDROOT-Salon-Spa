import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ArrowRight } from "lucide-react";
import { OFFERS } from "@/data/content";

export const OfferBar = ({ open, onDismiss }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % OFFERS.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="offer-bar"
          initial={{ y: -46 }}
          animate={{ y: 0 }}
          exit={{ y: -46 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          data-testid="offer-bar"
        >
          <div className="offer-inner">
            <Sparkles size={13} className="offer-sparkle" aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                className="offer-msg"
                initial={{ opacity: 0, y: 9 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -9 }}
                transition={{ duration: 0.4 }}
                data-testid="offer-message"
              >
                {OFFERS[idx]}
              </motion.span>
            </AnimatePresence>
            <Link to="/appointment" className="offer-link" data-testid="offer-book-link">
              Book Now <ArrowRight size={11} />
            </Link>
            <button className="offer-close" onClick={onDismiss} aria-label="Dismiss offers" data-testid="offer-close-btn">
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
