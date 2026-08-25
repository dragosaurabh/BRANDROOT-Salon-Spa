import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PACKAGES } from "@/data/packages";
import { SectionHeader } from "@/components/ui/Bits";

export const PackagesPreview = () => (
  <section className="section cream-section" data-testid="packages-preview-section">
    <div className="container">
      <SectionHeader
        label="Exclusive Packages"
        title={
          <>
            Membership <em>Packages</em>
          </>
        }
        sub="Unlock premium savings with our curated 12-month wellness memberships."
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
            data-testid={`package-card-${p.id}`}
          >
            {p.popular && <span className="pkg-pop-badge">Popular</span>}
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
            <Link to="/packages" className="btn btn-dark" data-testid={`package-details-btn-${p.id}`}>
              View Details <ArrowRight size={15} />
            </Link>
          </motion.article>
        ))}
      </div>
      <div className="cats-cta">
        <Link to="/packages" className="text-link" style={{ color: "#9a7b32" }} data-testid="compare-plans-link">
          Compare All Plans <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  </section>
);
