import { Hero } from "@/components/home/Hero";
import { ServiceCategories } from "@/components/home/ServiceCategories";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { CinematicCTA } from "@/components/home/CinematicCTA";
import { PackagesPreview } from "@/components/home/PackagesPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { HowItWorks } from "@/components/home/HowItWorks";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function HomePage() {
  usePageMeta(
    "BrandRoot Salon & Spa Ltd. | Best Luxury Salon & Spa in Nashik",
    "BrandRoot Salon & Spa Ltd. — Nashik's most luxurious salon and spa. Expert hair care, bridal makeup, organic facials, relaxing spa treatments & nail studio. 4.8★ rated. Book now!"
  );
  return (
    <>
      <Hero />
      <ServiceCategories />
      <AboutPreview />
      <FeaturedServices />
      <CinematicCTA />
      <PackagesPreview />
      <GalleryPreview />
      <Testimonials />
      <HowItWorks />
      <InstagramFeed />
    </>
  );
}
