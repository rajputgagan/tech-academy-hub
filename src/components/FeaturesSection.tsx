import { motion } from "framer-motion";
import { Award, Briefcase, Users, CreditCard, BookOpen, Laptop, HeadphonesIcon, Clock } from "lucide-react";

const features = [
  { icon: Award, title: "Industry Oriented IT Certification", description: "Certifications recognized by top IT companies worldwide." },
  { icon: Briefcase, title: "100% Placement Assistance", description: "Dedicated placement cell to help you land your dream job." },
  { icon: Users, title: "Expert Trainers", description: "Learn from professionals with 10+ years of industry experience." },
  { icon: CreditCard, title: "Easy EMI Options", description: "Flexible payment plans so education is accessible to everyone." },
  { icon: Laptop, title: "Hands-on Training", description: "Practical labs and real-world projects for every course module." },
  { icon: BookOpen, title: "Updated Curriculum", description: "Course content updated regularly to match industry standards." },
  { icon: HeadphonesIcon, title: "Lifetime Support", description: "Career guidance and doubt clearing support even after course completion." },
  { icon: Clock, title: "Flexible Timings", description: "Morning, evening and weekend batch options for working professionals." },
];

const FeaturesSection = () => (
  <section className="section-padding bg-muted/50" id="features">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">Lucky Tech Academy Features</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          Everything you need to build a successful career in technology
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-card rounded-2xl p-6 card-elevated border border-border text-center group hover:border-primary/30 transition-colors"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <f.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
