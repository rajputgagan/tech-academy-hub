import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Courses" },
  { value: 15, suffix: "+", label: "Qualified Staff" },
  { value: 20, suffix: "+", label: "Master Certifications" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = Math.ceil(target / 30);
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(current);
            }
          }, 40);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <span className="font-display text-4xl md:text-5xl font-bold text-primary">{count}{suffix}</span>
    </div>
  );
};

const AboutSection = () => (
  <section className="section-padding bg-secondary" id="about-us">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-accent font-semibold text-sm tracking-widest uppercase">About Us</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-secondary-foreground">
          Best Coding Institute in Kasganj
        </h2>
        <p className="text-secondary-foreground/70 max-w-2xl mx-auto mt-4 text-lg">
          Join Lucky Tech Academy Institute! We provide world-class IT education with hands-on training and dedicated mentorship.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-secondary-foreground/5 rounded-xl p-6 border border-secondary-foreground/10"
          >
            <Counter target={s.value} suffix={s.suffix} />
            <p className="text-secondary-foreground/70 text-sm mt-2 text-center">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
