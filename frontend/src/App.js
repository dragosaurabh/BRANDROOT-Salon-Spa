import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";
import "@/styles/pages.css";
import { Layout } from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";

const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const PackagesPage = lazy(() => import("@/pages/PackagesPage"));
const GalleryPage = lazy(() => import("@/pages/GalleryPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const AppointmentPage = lazy(() => import("@/pages/AppointmentPage"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
