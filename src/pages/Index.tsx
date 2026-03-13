import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClassroomSection from "@/components/ClassroomSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ClassroomSection />
    <AboutSection />
    <TeamSection />
    <FeaturesSection />
    <Footer />
  </div>
);

export default Index;
