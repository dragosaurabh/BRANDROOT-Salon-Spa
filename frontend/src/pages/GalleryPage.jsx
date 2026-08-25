import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, Eye } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/Bits";
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "@/data/gallery";

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const items = filter === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.cat === filter);

  useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, items.length]);

  return (
    <>
      <PageHero title="Gallery" crumb="Gallery" />

      <section className="section dark-section" data-testid="gallery-page-section">
        <div className="container">
          <SectionHeader
            label="Our World"
            title={
              <>
                Moments of <em>Beauty &amp; Calm</em>
              </>
            }
          />
          <div className="filter-tabs" role="tablist" aria-label="Gallery filters">
            {GALLERY_CATEGORIES.map((c) => (
              <button
                key={c}
                className={`filter-tab ${filter === c ? "active" : ""}`}
                onClick={() => {
                  setFilter(c);
                  setLightbox(null);
                }}
                data-testid={`gallery-filter-${c.toLowerCase()}`}
              >
                {c}
              </button>
            ))}
          </div>
          <motion.div className="masonry" layout>
            <AnimatePresence>
              {items.map((item, i) => (
                <motion.div
                  key={item.src}
                  className="masonry-item"
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightbox(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setLightbox(i)}
                  data-testid={`gallery-item-${i}`}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <div className="masonry-hover">
                    <Eye size={16} /> View
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && items[lightbox] && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            data-testid="gallery-lightbox"
          >
            <motion.img
              key={items[lightbox].src}
              src={items[lightbox].src}
              alt={items[lightbox].alt}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="circle-btn lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
              data-testid="lightbox-close-btn"
            >
              <X size={18} />
            </button>
            <button
              className="circle-btn lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((i) => (i - 1 + items.length) % items.length);
              }}
              aria-label="Previous image"
              data-testid="lightbox-prev-btn"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              className="circle-btn lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((i) => (i + 1) % items.length);
              }}
              aria-label="Next image"
              data-testid="lightbox-next-btn"
            >
              <ArrowRight size={18} />
            </button>
            <div className="lightbox-caption">{items[lightbox].alt}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
