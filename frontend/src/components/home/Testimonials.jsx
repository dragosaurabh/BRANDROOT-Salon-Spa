import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";
import { SectionHeader } from "@/components/ui/Bits";

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const t = TESTIMONIALS[index];
  const go = (dir) => setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section
      className="section cream-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      data-testid="testimonials-section"
    >
      <div className="container">
        <SectionHeader
          label="Client Love"
          title={
            <>
              What Our Clients <em>Say</em>
            </>
          }
        />
        <div className="testi-wrap">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1);
                else if (info.offset.x > 60) go(-1);
              }}
              style={{ margin: 0, cursor: "grab" }}
              data-testid="testimonial-card"
            >
              <div className="testi-quote-mark" aria-hidden="true">
                “
              </div>
              <p className="testi-text">{t.quote}</p>
              <div className="testi-author" data-testid="testimonial-author">{t.author}</div>
              <div className="testi-service">{t.service}</div>
              <div className="testi-stars" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="testi-controls">
          <button className="circle-btn" onClick={() => go(-1)} aria-label="Previous testimonial" data-testid="testimonial-prev-btn">
            <ArrowLeft size={18} />
          </button>
          <div className="testi-dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`testi-dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                data-testid={`testimonial-dot-${i}`}
              />
            ))}
          </div>
          <button className="circle-btn" onClick={() => go(1)} aria-label="Next testimonial" data-testid="testimonial-next-btn">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
