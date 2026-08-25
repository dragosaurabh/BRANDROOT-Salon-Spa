import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { IMG } from "@/data/images";
import { Reveal, Counter } from "@/components/ui/Bits";

export const AboutPreview = () => (
  <section className="section cream-section" data-testid="about-preview-section">
    <div className="container about-grid">
      <div className="about-img-col">
        <Reveal className="about-img-wrap">
          <img src={IMG.realLounge} alt="BrandRoot Salon & Spa waiting lounge with classic furniture and chandelier" loading="lazy" className="img-warm" />
          <div className="about-badge" data-testid="about-rating-badge">
            <Star size={15} fill="currentColor" /> 4.8★ Google Rating
          </div>
        </Reveal>
        <Reveal delay={0.15} className="about-stats">
          <div className="stat-box" data-testid="stat-happy-clients">
            <div className="stat-num">
              <Counter value={350} suffix="+" />
            </div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-box" data-testid="stat-google-rating">
            <div className="stat-num">
              <Counter value={4.8} decimals={1} suffix="★" />
            </div>
            <div className="stat-label">Google Rating</div>
          </div>
          <div className="stat-box" data-testid="stat-service-categories">
            <div className="stat-num">
              <Counter value={6} suffix="+" />
            </div>
            <div className="stat-label">Service Categories</div>
          </div>
        </Reveal>
      </div>

      <div className="about-text-col">
        <Reveal>
          <span className="label">— About Us</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">
            Nashik's Most Luxurious <em>Salon &amp; Spa</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p>
            BrandRoot Salon &amp; Spa Limited is a family-run luxury salon and spa destination that has
            earned its place as Nashik's most sought-after beauty and wellness brand. Located opposite
            the iconic City Centre Mall, we offer a sanctuary where world-class beauty treatments meet
            unparalleled relaxation.
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <p>
            Our team of highly trained professionals uses only premium products and cutting-edge
            techniques to deliver results that exceed expectations. Every visit is an experience, every
            treatment a transformation.
          </p>
        </Reveal>
        <Reveal delay={0.36}>
          <Link to="/about" className="btn btn-dark" data-testid="discover-story-btn">
            Discover Our Story <ArrowRight size={15} />
          </Link>
        </Reveal>
      </div>
    </div>
  </section>
);
