import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { HOME_GALLERY } from "@/data/gallery";
import { SectionHeader } from "@/components/ui/Bits";

export const GalleryPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="section dark-section" data-testid="gallery-preview-section">
      <div className="container">
        <SectionHeader
          label="Gallery"
          title={
            <>
              An Incredible Salon &amp; Spa <em>Experience</em>
            </>
          }
          sub="Stunning treatment rooms, wellness steam bath, and premium ambience."
        />
        <div className="masonry">
          {HOME_GALLERY.map((item, i) => (
            <motion.div
              key={item.src}
              className={`masonry-item ${item.tall ? "tall" : ""}`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              onClick={() => navigate("/gallery")}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate("/gallery")}
              data-testid={`gallery-preview-item-${i}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="masonry-hover">
                <Eye size={16} /> View Gallery
              </div>
            </motion.div>
          ))}
        </div>
        <div className="cats-cta">
          <Link to="/gallery" className="btn btn-outline" data-testid="view-full-gallery-btn">
            View Full Gallery <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};
