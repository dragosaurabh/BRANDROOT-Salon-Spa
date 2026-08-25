import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { OfferBar } from "./OfferBar";
import { Floaters } from "@/components/floating/Floaters";
import { initLenis, scrollToTop } from "@/hooks/useSmoothScroll";

export const Layout = ({ children }) => {
  const location = useLocation();
  const [offerOpen, setOfferOpen] = useState(() => sessionStorage.getItem("br-offer-dismissed") !== "1");

  const dismissOffer = () => {
    setOfferOpen(false);
    sessionStorage.setItem("br-offer-dismissed", "1");
  };

  useEffect(() => {
    initLenis();
  }, []);

  useEffect(() => {
    scrollToTop(true);
  }, [location.pathname]);

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <OfferBar open={offerOpen} onDismiss={dismissOffer} />
      <Navbar topOffset={offerOpen ? 42 : 0} />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
      <Footer />
      <Floaters />
    </>
  );
};
