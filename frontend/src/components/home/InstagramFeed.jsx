import { motion } from "framer-motion";
import { Instagram, Users } from "lucide-react";
import { INSTAGRAM_POSTS } from "@/data/gallery";
import { COMPANY } from "@/data/content";
import { SectionHeader } from "@/components/ui/Bits";

export const InstagramFeed = () => (
  <section className="section cream-section" data-testid="instagram-section">
    <div className="container">
      <SectionHeader
        label="Follow Us"
        title={
          <>
            Join the <em>BrandRoot</em> Family
          </>
        }
      />
      <div className="ig-handle" style={{ marginTop: -32 }}>
        <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" data-testid="instagram-handle-link">
          @brandrootsalonandspa
        </a>
        <span className="ig-followers">
          <Users size={13} /> 4.4K+ Followers
        </span>
      </div>
      <div className="ig-grid">
        {INSTAGRAM_POSTS.map((p, i) => (
          <motion.a
            key={p.src}
            href={COMPANY.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-item"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.55, delay: (i % 6) * 0.07 }}
            aria-label={`Open BrandRoot Instagram — ${p.alt}`}
            data-testid={`instagram-post-${i}`}
          >
            <img src={p.src} alt={p.alt} loading="lazy" />
            <div className="ig-item-hover">
              <Instagram size={22} />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
