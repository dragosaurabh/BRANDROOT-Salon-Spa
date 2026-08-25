import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Calendar, Heart } from "lucide-react";
import { SectionHeader, Reveal } from "@/components/ui/Bits";

const STEPS = [
  { num: "01", icon: Sparkles, title: "Choose Your Service", desc: "Browse our complete menu of hair, skin, spa, and beauty services." },
  { num: "02", icon: Calendar, title: "Pick Your Slot", desc: "Select your preferred date and time — we'll confirm instantly." },
  { num: "03", icon: Heart, title: "Enjoy the Experience", desc: "Arrive, relax, and let our experts work their magic." },
];

export const HowItWorks = () => (
  <section className="section dark-section" data-testid="how-it-works-section">
    <div className="container">
      <SectionHeader
        label="Easy Booking"
        title={
          <>
            How It <em>Works</em>
          </>
        }
      />
      <div className="steps">
        {STEPS.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.15} className="step">
            <div className="step-circle">
              <s.icon size={22} />
              <span className="step-num">{s.num}</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </Reveal>
        ))}
      </div>
      <div className="cats-cta" style={{ marginTop: 72 }}>
        <Link to="/appointment" className="btn btn-gold" data-testid="how-it-works-book-btn">
          Book Your Appointment <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  </section>
);
