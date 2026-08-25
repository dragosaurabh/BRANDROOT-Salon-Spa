import { useState } from "react";
import { Phone, Clock, MapPin, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader, Reveal } from "@/components/ui/Bits";
import { COMPANY, TIME_SLOTS } from "@/data/content";
import { SERVICE_CATEGORIES } from "@/data/services";

const EMPTY = { name: "", email: "", phone: "", service: "", date: "", time: "", notes: "" };
const TODAY = new Date().toISOString().split("T")[0];

export default function AppointmentPage() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [booked, setBooked] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Please enter a valid email";
    if (!/^[\d\s+\-()]{10,}$/.test(form.phone)) err.phone = "Please enter a valid phone number";
    if (!form.service) err.service = "Please select a service";
    if (!form.date) err.date = "Please pick a date";
    if (!form.time) err.time = "Please pick a time";
    setErrors(err);
    if (Object.keys(err).length === 0) setBooked(true);
  };

  const waConfirm = `https://wa.me/917507515957?text=${encodeURIComponent(
    `Hi BrandRoot! I'd like to confirm my appointment.\nName: ${form.name}\nService: ${form.service}\nDate: ${form.date}\nTime: ${form.time}${form.notes ? `\nNotes: ${form.notes}` : ""}`
  )}`;

  return (
    <>
      <PageHero title="Book Appointment" crumb="Book Appointment" />

      <section className="section dark-section" data-testid="appointment-page-section">
        <div className="container appt-grid">
          <Reveal>
            <div className="appt-form-card">
              <SectionHeader
                center={false}
                label="Easy Booking"
                title={
                  <>
                    Reserve Your <em>Experience</em>
                  </>
                }
              />
              {booked ? (
                <div className="success-panel" data-testid="appointment-success-message">
                  <div className="success-icon">
                    <CheckCircle2 size={38} />
                  </div>
                  <h3>Thank You, {form.name.split(" ")[0]}!</h3>
                  <p>We'll confirm your appointment shortly via WhatsApp. You can also confirm instantly below.</p>
                  <a href={waConfirm} target="_blank" rel="noopener noreferrer" className="btn btn-gold" data-testid="appointment-whatsapp-confirm-btn">
                    Confirm on WhatsApp <ArrowRight size={15} />
                  </a>
                </div>
              ) : (
                <form onSubmit={submit} noValidate data-testid="appointment-form">
                  <div className="form-row">
                    <div className={`field ${errors.name ? "error" : ""}`}>
                      <label htmlFor="a-name">Full Name</label>
                      <input id="a-name" value={form.name} onChange={set("name")} placeholder="Your full name" data-testid="appointment-name-input" />
                      {errors.name && <span className="field-err">{errors.name}</span>}
                    </div>
                    <div className={`field ${errors.email ? "error" : ""}`}>
                      <label htmlFor="a-email">Email</label>
                      <input id="a-email" type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" data-testid="appointment-email-input" />
                      {errors.email && <span className="field-err">{errors.email}</span>}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className={`field ${errors.phone ? "error" : ""}`}>
                      <label htmlFor="a-phone">Phone Number</label>
                      <input id="a-phone" type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 XXXXX XXXXX" data-testid="appointment-phone-input" />
                      {errors.phone && <span className="field-err">{errors.phone}</span>}
                    </div>
                    <div className={`field ${errors.service ? "error" : ""}`}>
                      <label htmlFor="a-service">Service</label>
                      <select id="a-service" value={form.service} onChange={set("service")} data-testid="appointment-service-select">
                        <option value="">Select a service</option>
                        {SERVICE_CATEGORIES.map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                      {errors.service && <span className="field-err">{errors.service}</span>}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className={`field ${errors.date ? "error" : ""}`}>
                      <label htmlFor="a-date">Preferred Date</label>
                      <input id="a-date" type="date" min={TODAY} value={form.date} onChange={set("date")} data-testid="appointment-date-input" />
                      {errors.date && <span className="field-err">{errors.date}</span>}
                    </div>
                    <div className={`field ${errors.time ? "error" : ""}`}>
                      <label htmlFor="a-time">Preferred Time</label>
                      <select id="a-time" value={form.time} onChange={set("time")} data-testid="appointment-time-select">
                        <option value="">Select a time slot</option>
                        {TIME_SLOTS.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {errors.time && <span className="field-err">{errors.time}</span>}
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="a-notes">Special Notes (optional)</label>
                    <textarea id="a-notes" value={form.notes} onChange={set("notes")} placeholder="Any preferences or requests..." data-testid="appointment-notes-input" />
                  </div>
                  <button type="submit" className="btn btn-gold" style={{ width: "100%" }} data-testid="appointment-submit-btn">
                    Confirm Booking <ArrowRight size={15} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="appt-side">
            <div className="side-card" data-testid="appointment-side-contact">
              <h3>Quick Contact</h3>
              <div className="side-item">
                <Phone size={16} />
                <span>
                  Prefer to call? <a href={COMPANY.phoneHref} style={{ color: "var(--accent-gold)" }}>{COMPANY.phone}</a>
                </span>
              </div>
              <div className="side-item">
                <MessageCircle size={16} />
                <span>
                  Instant booking on{" "}
                  <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-gold)" }}>
                    WhatsApp
                  </a>
                </span>
              </div>
              <div className="side-item">
                <MapPin size={16} />
                <span>{COMPANY.address}</span>
              </div>
            </div>
            <div className="side-card" data-testid="appointment-side-hours">
              <h3>Operating Hours</h3>
              <div className="side-item">
                <Clock size={16} />
                <span>
                  Monday – Saturday: 10:00 AM – 9:00 PM
                  <br />
                  Sunday: 10:00 AM – 9:00 PM
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
