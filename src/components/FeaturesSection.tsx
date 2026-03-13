import { motion } from "framer-motion";
import { Award, Briefcase, Users, CreditCard } from "lucide-react";

const features = [
  { icon: Award, title: "Industry Oriented IT Certification", description: "Certifications recognized by top IT companies worldwide." },
  { icon: Briefcase, title: "Placement Assistance", description: "Dedicated placement cell to help you land your dream job." },
  { icon: Users, title: "Expert Trainers", description: "Learn from professionals with 10+ years of industry experience." },
  { icon: CreditCard, title: "Easy EMI Options", description: "Flexible payment plans so education is accessible to everyone." },
];

const FeaturesSection = () => (
  <section className="section-padding bg-muted" id="career">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">Lucky Tech Academy Features</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 card-elevated border border-border text-center group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <f.icon size={30} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
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
