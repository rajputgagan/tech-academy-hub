import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import AboutSection from "@/components/AboutSection";
import PlacementSection from "@/components/PlacementSection";
import TeamSection from "@/components/TeamSection";
import FeaturesSection from "@/components/FeaturesSection";
import BlogSection from "@/components/BlogSection";
import CareerSection from "@/components/CareerSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <CoursesSection />
    <AboutSection />
    <PlacementSection />
    <TeamSection />
    <FeaturesSection />
    <BlogSection />
    <CareerSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
