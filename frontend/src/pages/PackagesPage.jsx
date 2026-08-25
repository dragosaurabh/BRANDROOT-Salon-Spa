import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Plus, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader, Reveal } from "@/components/ui/Bits";
import { PACKAGES, PACKAGE_FAQ } from "@/data/packages";

const FaqItem = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={index * 0.08} className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open} data-testid={`faq-question-${index}`}>
        {item.q}
        <Plus size={18} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: "hidden" }}
      >
        <p className="faq-a" data-testid={`faq-answer-${index}`}>{item.a}</p>
      </motion.div>
    </Reveal>
  );
};

export default function PackagesPage() {
  return (
    <>
      <PageHero title="Our Packages" crumb="Our Packages" />

      <section className="section cream-section" data-testid="packages-detail-section">
        <div className="container">
          <SectionHeader
            label="Exclusive Packages"
            title={
              <>
                Choose Your <em>Wellness Journey</em>
              </>
            }
            sub="12-month memberships crafted for every level of indulgence — from monthly essentials to total head-to-toe luxury."
          />
          <div className="pkg-grid">
            {PACKAGES.map((p, i) => (
              <motion.article
                key={p.id}
                className={`pkg-card ${p.popular ? "popular" : ""}`}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                data-testid={`package-detail-card-${p.id}`}
              >
                {p.popular && <span className="pkg-pop-badge">Most Popular</span>}
                <img src={p.image} alt={`${p.name} — BrandRoot luxury membership`} className="pkg-detail-img img-warm" loading="lazy" />
                <div className="pkg-symbol" aria-hidden="true">{p.symbol}</div>
                <h3 className="pkg-name">{p.name}</h3>
                <div>
                  <div className="pkg-price">{p.price}</div>
                  <div className="pkg-value">
                    Value: <s>{p.value}</s>
                  </div>
                </div>
                <div className="pkg-validity">Validity: {p.validity}</div>
                <ul className="pkg-list">
                  {p.inclusions.map((inc) => (
                    <li key={inc.item}>
                      <Check size={15} />
                      <span>
                        <b>{inc.qty}</b> {inc.item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="pkg-best">Best for: {p.bestFor}</p>
                <a href={p.wa} target="_blank" rel="noopener noreferrer" className="btn btn-gold" data-testid={`package-buy-btn-${p.id}`}>
                  Buy Now <ArrowRight size={15} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section" data-testid="packages-faq-section">
        <div className="container">
          <SectionHeader
            label="Questions"
            title={
              <>
                Frequently Asked <em>Questions</em>
              </>
            }
          />
          <div className="faq-list">
            {PACKAGE_FAQ.map((f, i) => (
              <FaqItem key={f.q} item={f} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
