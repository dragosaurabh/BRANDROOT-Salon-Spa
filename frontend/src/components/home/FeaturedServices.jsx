import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FEATURED_SERVICES } from "@/data/services";
import { Reveal } from "@/components/ui/Bits";

export const FeaturedServices = () => {
  const scrollRef = useRef(null);
  const scrollBy = (dir) => scrollRef.current?.scrollBy({ left: dir * 400, behavior: "smooth" });

  return (
    <section className="section warm-section" data-testid="featured-services-section">
      <div className="container">
        <div className="feat-head">
          <div>
            <Reveal>
              <span className="label">— Signature Treatments</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-title" style={{ marginTop: 14 }}>
                Indulge in Our <em>Most-Loved</em> Services
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/services" className="btn btn-outline" data-testid="featured-all-services-btn">
              All Services <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="feat-scroll" ref={scrollRef} data-testid="featured-scroll-container">
            {FEATURED_SERVICES.map((s) => (
              <article className="feat-card" key={s.name} data-testid={`featured-card-${s.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                <img src={s.image} alt={`${s.name} at BrandRoot Salon & Spa`} loading="lazy" />
                <div className="feat-card-overlay" />
                <div className="feat-card-content">
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                  <Link to="/appointment" className="text-link">
                    Book Now <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <div className="feat-nav">
          <button className="circle-btn" onClick={() => scrollBy(-1)} aria-label="Scroll left" data-testid="featured-prev-btn">
            <ArrowLeft size={18} />
          </button>
          <button className="circle-btn" onClick={() => scrollBy(1)} aria-label="Scroll right" data-testid="featured-next-btn">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
