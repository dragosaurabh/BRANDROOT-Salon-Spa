import { useState } from "react";
import { MapPin, Mail, Phone, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader, Reveal } from "@/components/ui/Bits";
import { COMPANY } from "@/data/content";

const EMPTY = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Please enter a valid email";
    if (!/^[\d\s+\-()]{10,}$/.test(form.phone)) err.phone = "Please enter a valid phone number";
    if (!form.subject.trim()) err.subject = "Please add a subject";
    if (!form.message.trim()) err.message = "Please write your message";
    setErrors(err);
    if (Object.keys(err).length === 0) setSent(true);
  };

  return (
    <>
      <PageHero title="Contact Us" crumb="Contact Us" />

      <section className="section dark-section" data-testid="contact-page-section">
        <div className="container">
          <div className="contact-cards">
            <Reveal className="contact-card" data-testid="contact-card-address">
              <div className="value-icon">
                <MapPin size={22} />
              </div>
              <h3>Visit Us</h3>
              <p>{COMPANY.address}</p>
            </Reveal>
            <Reveal delay={0.1} className="contact-card" data-testid="contact-card-email">
              <div className="value-icon">
                <Mail size={22} />
              </div>
              <h3>Email Us</h3>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </Reveal>
            <Reveal delay={0.2} className="contact-card" data-testid="contact-card-phone">
              <div className="value-icon">
                <Phone size={22} />
              </div>
              <h3>Call Us</h3>
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
            </Reveal>
          </div>

          <div className="contact-grid">
            <Reveal>
              <div className="map-wrap">
                <iframe
                  title="BrandRoot Salon & Spa location — Shreeji The Status, opposite City Centre Mall, Nashik"
                  src={COMPANY.mapsEmbed}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  data-testid="contact-map-iframe"
                />
              </div>
              <div className="hours-box" data-testid="contact-hours">
                <Clock size={22} />
                <div>
                  <strong>Operating Hours</strong>
                  <span>Monday – Sunday: 10:00 AM – 9:00 PM</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="appt-form-card">
                <SectionHeader
                  center={false}
                  label="Get In Touch"
                  title={
                    <>
                      Send Us a <em>Message</em>
                    </>
                  }
                />
                {sent ? (
                  <div className="success-panel" data-testid="contact-success-message">
                    <div className="success-icon">
                      <CheckCircle2 size={38} />
                    </div>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. Our team will get back to you shortly on your phone or email.</p>
                  </div>
                ) : (
                  <form onSubmit={submit} noValidate data-testid="contact-form">
                    <div className="form-row">
                      <div className={`field ${errors.name ? "error" : ""}`}>
                        <label htmlFor="c-name">Name</label>
                        <input id="c-name" value={form.name} onChange={set("name")} placeholder="Your full name" data-testid="contact-name-input" />
                        {errors.name && <span className="field-err">{errors.name}</span>}
                      </div>
                      <div className={`field ${errors.email ? "error" : ""}`}>
                        <label htmlFor="c-email">Email</label>
                        <input id="c-email" type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" data-testid="contact-email-input" />
                        {errors.email && <span className="field-err">{errors.email}</span>}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className={`field ${errors.phone ? "error" : ""}`}>
                        <label htmlFor="c-phone">Phone</label>
                        <input id="c-phone" type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 XXXXX XXXXX" data-testid="contact-phone-input" />
                        {errors.phone && <span className="field-err">{errors.phone}</span>}
                      </div>
                      <div className={`field ${errors.subject ? "error" : ""}`}>
                        <label htmlFor="c-subject">Subject</label>
                        <input id="c-subject" value={form.subject} onChange={set("subject")} placeholder="How can we help?" data-testid="contact-subject-input" />
                        {errors.subject && <span className="field-err">{errors.subject}</span>}
                      </div>
                    </div>
                    <div className={`field ${errors.message ? "error" : ""}`}>
                      <label htmlFor="c-message">Message</label>
                      <textarea id="c-message" value={form.message} onChange={set("message")} placeholder="Tell us more..." data-testid="contact-message-input" />
                      {errors.message && <span className="field-err">{errors.message}</span>}
                    </div>
                    <button type="submit" className="btn btn-gold" style={{ width: "100%" }} data-testid="contact-submit-btn">
                      Send Message <ArrowRight size={15} />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
