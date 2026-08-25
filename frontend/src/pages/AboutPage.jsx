import { Link } from "react-router-dom";
import { ArrowRight, Award, ShieldCheck, Lightbulb, HeartHandshake, Star, Gem, Users, Sofa } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader, Reveal } from "@/components/ui/Bits";
import { IMG } from "@/data/images";

const VALUES = [
  { num: "01", icon: Award, title: "Excellence", desc: "Every cut, every facial, every massage is delivered to the highest professional standard — nothing less." },
  { num: "02", icon: ShieldCheck, title: "Trust", desc: "A 4.8★ Google rating built on hundreds of honest experiences and consistent, dependable care." },
  { num: "03", icon: Lightbulb, title: "Innovation", desc: "Cutting-edge techniques, premium products like O3+, and the latest trends in beauty and wellness." },
  { num: "04", icon: HeartHandshake, title: "Warmth", desc: "A family-run heart beats behind our luxury — every guest is welcomed like family." },
];

const WHY = [
  { icon: Star, title: "4.8★ Rated", desc: "350+ delighted clients rate us Nashik's finest salon & spa experience." },
  { icon: Gem, title: "Premium Products", desc: "Only top salon brands and organic O3+ premium facials touch your skin and hair." },
  { icon: Users, title: "Expert Team", desc: "Highly trained stylists, estheticians, and therapists who master their craft." },
  { icon: Sofa, title: "Luxurious Ambience", desc: "Warm candlelit interiors opposite City Centre Mall — an oasis in the city." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" crumb="About Us" />

      <section className="section cream-section" data-testid="about-story-section">
        <div className="container story-grid">
          <Reveal>
            <img src={IMG.realLogoWall} alt="The BrandRoot emblem glowing on the salon's backlit reception wall" loading="lazy" className="img-warm" style={{ borderRadius: 20, width: "100%", aspectRatio: "4/3", objectFit: "cover" }} />
          </Reveal>
          <div className="story-text">
            <Reveal>
              <span className="label">— Our Story</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-title">
                A Family-Run <em>Luxury Destination</em>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p>
                BrandRoot Salon &amp; Spa Limited is a family-run luxury salon and spa destination that
                has earned its place as Nashik's most sought-after beauty and wellness brand. Located in
                the heart of the city — opposite the iconic City Centre Mall — BrandRoot offers a
                sanctuary where world-class beauty treatments meet unparalleled relaxation.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p>
                From expert hair transformations and rejuvenating organic facials to deeply relaxing spa
                therapies and stunning bridal makeovers, every service at BrandRoot is crafted to
                perfection. Our team of highly trained professionals uses only premium products and
                cutting-edge techniques to deliver results that exceed expectations.
              </p>
            </Reveal>
            <Reveal delay={0.34}>
              <p>
                With a 4.8-star Google rating from hundreds of delighted clients, BrandRoot has become
                synonymous with trust, quality, and luxury in Nashik. Step in, and experience the
                difference that true premium care makes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section dark-section" data-testid="about-values-section">
        <div className="container">
          <SectionHeader
            label="Our Values"
            title={
              <>
                The Pillars of <em>BrandRoot</em>
              </>
            }
          />
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1} className="value-card" data-testid={`value-card-${v.title.toLowerCase()}`}>
                <span className="value-num">{v.num}</span>
                <div className="value-icon">
                  <v.icon size={22} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream-section" data-testid="about-team-section">
        <div className="container story-grid">
          <div className="story-text">
            <Reveal>
              <span className="label">— The Team</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-title">
                Our Expert <em>Professionals</em>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p>
                Behind every transformation is a team of passionate specialists — master hair stylists,
                certified estheticians, bridal makeup artists, nail technicians, and wellness therapists
                — each trained in the latest international techniques.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p>
                Whether it's a precision haircut, a flawless bridal look, or a deeply restorative spa
                therapy, our professionals bring artistry, care, and years of experience to every single
                appointment.
              </p>
            </Reveal>
            <Reveal delay={0.34}>
              <Link to="/services" className="btn btn-dark" data-testid="about-explore-services-btn">
                Explore Our Services <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <img src={IMG.ig1} alt="BrandRoot stylist at work perfecting a client's hair" loading="lazy" className="img-warm" style={{ borderRadius: 20, width: "100%", aspectRatio: "4/3", objectFit: "cover" }} />
          </Reveal>
        </div>
      </section>

      <section className="section warm-section" data-testid="about-why-section">
        <div className="container">
          <SectionHeader
            label="Why BrandRoot"
            title={
              <>
                The BrandRoot <em>Difference</em>
              </>
            }
          />
          <div className="values-grid">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1} className="value-card" data-testid={`why-card-${i}`}>
                <div className="value-icon">
                  <w.icon size={22} />
                </div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container cta-strip">
          <Reveal>
            <h2>
              Ready to Experience <em>Luxury?</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link to="/appointment" className="btn btn-gold" data-testid="about-cta-book-btn">
              Book Now <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
