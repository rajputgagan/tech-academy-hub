import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const slides = [
  {
    title: "IT Training Students",
    subtitle: "Join us to make your future successful",
    description:
      "Join us to unlock a world of opportunities and build a successful future. Our team is dedicated to helping you achieve your goals with the right support and resources. Embrace the journey to success with us and watch your dreams turn into reality.",
  },
  {
    title: "Master Modern Technologies",
    subtitle: "Learn from industry experts",
    description:
      "Get hands-on experience with cutting-edge technologies. Our comprehensive curriculum is designed to prepare you for real-world challenges in the IT industry.",
  },
  {
    title: "100% Placement Assistance",
    subtitle: "Launch your career with confidence",
    description:
      "We provide dedicated placement support to help you land your dream job. Our strong industry connections ensure you get the best opportunities.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="IT Training" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/85" />
      </div>

      <div className="container relative mx-auto px-4 pt-24 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Lucky Tech Academy
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-foreground leading-tight mb-4">
              {slides[current].title}
            </h1>
            <p className="text-xl sm:text-2xl text-accent font-medium mb-4">
              {slides[current].subtitle}
            </p>
            <p className="text-secondary-foreground/70 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
              {slides[current].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Join Now</Button>
              <Button size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                View Courses
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider nav */}
        <div className="flex items-center gap-4 mt-12">
          <button onClick={prev} className="p-2 rounded-full border border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-secondary-foreground/30"}`}
              />
            ))}
          </div>
          <button onClick={next} className="p-2 rounded-full border border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
