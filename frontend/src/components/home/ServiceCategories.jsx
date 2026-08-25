import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Scissors, Sparkles, Flower2, Gem, Hand, User } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/services";
import { SectionHeader } from "@/components/ui/Bits";

const ICONS = { "hair-care": Scissors, "skin-care": Sparkles, "spa-wellness": Flower2, "bridal-makeup": Gem, "nail-studio": Hand, "mens-grooming": User };

export const ServiceCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="section dark-section" data-testid="service-categories-section">
      <div className="container">
        <SectionHeader
          label="Our Services"
          title={
            <>
              A World of <em>Beauty &amp; Wellness</em>
            </>
          }
          sub="Discover our comprehensive range of premium beauty and wellness services, each delivered with expert precision and care."
        />
        <div className="cats-grid">
          {SERVICE_CATEGORIES.map((cat, i) => {
            const Icon = ICONS[cat.id];
            return (
              <motion.article
                key={cat.id}
                className="cat-card"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => navigate(`/services#${cat.id}`)}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && navigate(`/services#${cat.id}`)}
                data-testid={`category-card-${cat.id}`}
              >
                <div className="cat-img-wrap">
                  <div className="cat-img">
                    <img src={cat.image} alt={`${cat.name} at BrandRoot Salon & Spa Nashik`} loading="lazy" />
                  </div>
                  <div className="cat-badge" aria-hidden="true">
                    <Icon size={18} />
                  </div>
                </div>
                <h3 className="cat-name">{cat.name}</h3>
                <p className="cat-desc">{cat.tag}</p>
              </motion.article>
            );
          })}
        </div>
        <div className="cats-cta">
          <Link to="/services" className="btn btn-outline" data-testid="view-all-services-btn">
            View All Services <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};
