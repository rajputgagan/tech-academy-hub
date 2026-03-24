import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Target, Eye, BookOpen, Award, Users, TrendingUp } from "lucide-react";

const stats = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Courses Offered" },
  { value: 15, suffix: "+", label: "Qualified Staff" },
  { value: 20, suffix: "+", label: "Master Certifications" },
  { value: 500, suffix: "+", label: "Students Trained" },
  { value: 95, suffix: "%", label: "Placement Rate" },
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
          const step = Math.ceil(target / 40);
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(current);
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      <span className="font-display text-3xl md:text-4xl font-bold text-primary">{count}{suffix}</span>
    </div>
  );
};

const highlights = [
  { icon: Target, title: "Our Mission", description: "Kasganj और आसपास के क्षेत्र के students को world-class IT education देना, ताकि वो industry-ready बनें और अपने career में सफलता हासिल करें।" },
  { icon: Eye, title: "Our Vision", description: "एक ऐसा institute बनाना जो हर student को technology की power से empower करे और उन्हें global opportunities के लिए तैयार करे।" },
  { icon: BookOpen, title: "Our Approach", description: "Practical + Theory based learning approach जहाँ students real-world projects पर काम करते हैं, industry experts से सीखते हैं और placement-ready बनते हैं।" },
];

const AboutSection = () => (
  <section className="section-padding bg-secondary" id="about-us">
    <div className="container mx-auto">
      {/* Header */}
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
        <p className="text-secondary-foreground/70 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
          <strong className="text-secondary-foreground">Lucky Tech Academy</strong> — Kasganj का सबसे भरोसेमंद IT Training Institute। 
          हम students को industry-oriented courses, expert trainers, और 100% placement assistance के साथ एक successful IT career बनाने में मदद करते हैं। 
          हमारा goal है कि हर student latest technologies सीखे और corporate world में अपनी जगह बनाये।
        </p>
      </motion.div>

      {/* Mission, Vision, Approach */}
      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-secondary-foreground/5 rounded-xl p-6 border border-secondary-foreground/10 group hover:bg-secondary-foreground/10 transition-colors"
          >
            <div className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
              <h.icon className="text-accent" size={28} />
            </div>
            <h3 className="font-display font-semibold text-secondary-foreground text-lg mb-2">{h.title}</h3>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">{h.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-secondary-foreground/5 rounded-xl p-5 border border-secondary-foreground/10 text-center"
          >
            <Counter target={s.value} suffix={s.suffix} />
            <p className="text-secondary-foreground/70 text-sm mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us mini */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14 grid sm:grid-cols-3 gap-6"
      >
        {[
          { icon: Award, text: "ISO Certified Institute" },
          { icon: Users, text: "Experienced Faculty Team" },
          { icon: TrendingUp, text: "Career Growth Focused" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 bg-secondary-foreground/5 rounded-lg p-4 border border-secondary-foreground/10">
            <item.icon className="text-accent shrink-0" size={24} />
            <span className="text-secondary-foreground font-medium">{item.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
