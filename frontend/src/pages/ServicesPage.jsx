import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Bits";
import { SERVICE_CATEGORIES } from "@/data/services";

export default function ServicesPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <>
      <PageHero title="Our Services" crumb="Our Services">
        <a
          href="/brandroot-service-menu.pdf"
          download="BrandRoot-Service-Menu.pdf"
          className="btn btn-outline"
          data-testid="download-rate-card-btn"
        >
          <Download size={15} /> Download Rate Card (PDF)
        </a>
      </PageHero>
      {SERVICE_CATEGORIES.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`section ${idx % 2 === 0 ? "dark-section" : "cream-section"}`}
          style={{ scrollMarginTop: 80 }}
          data-testid={`services-section-${cat.id}`}
        >
          <div className="container">
            <div className="svc-cat-head">
              <Reveal>
                <img src={cat.image} alt={`${cat.name} at BrandRoot`} className="svc-cat-img" loading="lazy" />
              </Reveal>
              <Reveal delay={0.08}>
                <span className="label">— {cat.name}</span>
              </Reveal>
              <Reveal delay={0.14}>
                <h2 className="section-title">
                  <em>{cat.tag}</em>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="section-sub">{cat.description}</p>
              </Reveal>
            </div>
            <div className="svc-grid">
              {cat.services.map((s, i) => (
                <Reveal key={s.name} delay={(i % 3) * 0.1} className="svc-card" data-testid={`service-card-${cat.id}-${i}`}>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                  <Link to="/appointment" className="text-link" data-testid={`service-book-btn-${cat.id}-${i}`}>
                    Book Now <ArrowRight size={14} />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="section warm-section">
        <div className="container cta-strip">
          <Reveal>
            <h2>
              Can't Decide? Let Our <em>Experts</em> Guide You
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link to="/appointment" className="btn btn-gold" data-testid="services-cta-book-btn">
              Book a Consultation <ArrowRight size={15} />
            </Link>
          </Reveal>
          <Reveal delay={0.25}>
            <a
              href="/brandroot-service-menu.pdf"
              download="BrandRoot-Service-Menu.pdf"
              className="text-link"
              data-testid="download-rate-card-bottom-link"
            >
              <Download size={14} /> Download the Full Service Menu
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
