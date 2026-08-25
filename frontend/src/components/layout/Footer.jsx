import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, MessageCircle, MapPin, Clock, Mail, Phone, ArrowUp, ArrowRight, Gem } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/data/content";
import { SERVICE_CATEGORIES } from "@/data/services";
import { scrollToTop } from "@/hooks/useSmoothScroll";

export const Footer = () => (
  <footer className="footer">
    <div className="footer-watermark" aria-hidden="true">
      BRANDROOT
    </div>
    <div className="container">
      <div className="footer-top">
        <img src="/assets/logo-full.png" alt="BrandRoot Salon & Spa Ltd. golden emblem" className="footer-logo-img" loading="lazy" />
        <p className="footer-tagline">{COMPANY.tagline}</p>
      </div>

      <div className="footer-cols">
        <div className="footer-col">
          <h4>About</h4>
          <p>Nashik's most luxurious salon &amp; spa. Premium hair, skin, spa &amp; bridal services.</p>
          <div className="footer-contact-item">
            <Mail size={15} />
            <a href={`mailto:${COMPANY.email}`} data-testid="footer-email-link">{COMPANY.email}</a>
          </div>
          <div className="footer-contact-item">
            <Phone size={15} />
            <a href={COMPANY.phoneHref} data-testid="footer-phone-link">{COMPANY.phone}</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/appointment">Book Appointment</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {SERVICE_CATEGORIES.map((c) => (
              <li key={c.id}>
                <Link to={`/services#${c.id}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Visit Us</h4>
          <div className="footer-contact-item" style={{ marginTop: 0 }}>
            <MapPin size={15} />
            <span>{COMPANY.address}</span>
          </div>
          <div className="footer-contact-item">
            <Clock size={15} />
            <span>{COMPANY.hours}</span>
          </div>
          <div className="footer-socials">
            <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Instagram" data-testid="footer-instagram-link">
              <Instagram size={17} />
            </a>
            <a href={COMPANY.facebook} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Facebook" data-testid="footer-facebook-link">
              <Facebook size={17} />
            </a>
            <a href={COMPANY.youtube} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="YouTube" data-testid="footer-youtube-link">
              <Youtube size={17} />
            </a>
            <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="WhatsApp" data-testid="footer-whatsapp-link">
              <MessageCircle size={17} />
            </a>
          </div>
          <a href={COMPANY.mapsLink} target="_blank" rel="noopener noreferrer" className="text-link" style={{ marginTop: 18 }} data-testid="footer-directions-link">
            Get Directions <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container footer-bottom-inner">
        <span>© 2026 BrandRoot Salon &amp; Spa Ltd. All Rights Reserved.</span>
        <span className="footer-credits">
          <span className="crafted">
            Crafted with <Gem size={11} /> in Nashik
          </span>
          <span className="dot">◆</span>
          <a href="https://ready2up.com" target="_blank" rel="noopener noreferrer" data-testid="footer-ready2up-link">
            Powered by <b>Ready2UP</b>
          </a>
          <span className="dot">◆</span>
          <a href="https://dragosaurabh.com" target="_blank" rel="noopener noreferrer" data-testid="footer-dragosaurabh-link">
            Designed by <b>dragosaurabh</b>
          </a>
        </span>
        <button className="back-top-inline" onClick={() => scrollToTop()} data-testid="footer-back-to-top-btn">
          Back to Top <ArrowUp size={13} />
        </button>
      </div>
    </div>
  </footer>
);
