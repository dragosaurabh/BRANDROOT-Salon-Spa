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

export default function HomePage() {
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
