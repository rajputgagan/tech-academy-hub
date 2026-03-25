import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, GraduationCap, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "IT Training Students",
    subtitle: "Join us to make your future successful",
    description:
      "Join us to unlock a world of opportunities and build a successful future. Our team is dedicated to helping you achieve your goals with the right support and resources.",
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

const stats = [
  { icon: GraduationCap, value: "500+", label: "Students Trained" },
  { icon: Users, value: "15+", label: "Expert Trainers" },
  { icon: Award, value: "95%", label: "Placement Rate" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="home">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,40%,13%)] via-[hsl(195,60%,20%)] to-[hsl(195,100%,30%)]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6 border border-primary/30">
                  🎓 Lucky Tech Academy
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  {slides[current].title}
                </h1>
                <p className="text-xl sm:text-2xl text-accent font-medium mb-4">
                  {slides[current].subtitle}
                </p>
                <p className="text-white/60 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
                  {slides[current].description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-full px-8 shadow-lg" onClick={() => scrollTo("contact-us")}>
                    Join Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 border-white/30 text-white hover:bg-white/10"
                    onClick={() => scrollTo("all-courses")}
                  >
                    View Courses
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider nav */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={prev}
                className="p-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-primary" : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Stats cards */}
          <div className="hidden lg:flex flex-col gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex items-center gap-5 hover:bg-white/15 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <stat.icon className="text-primary" size={28} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-white font-display">{stat.value}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
