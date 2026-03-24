import { motion } from "framer-motion";
import { Rocket, GraduationCap, BookOpen, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const careerPaths = [
  { icon: Rocket, title: "Software Developer", salary: "₹4-12 LPA", skills: "Java, Python, React, Node.js", growth: "High" },
  { icon: GraduationCap, title: "DevOps Engineer", salary: "₹6-15 LPA", skills: "Docker, Kubernetes, AWS, CI/CD", growth: "Very High" },
  { icon: BookOpen, title: "Data Scientist", salary: "₹5-18 LPA", skills: "Python, ML, TensorFlow, SQL", growth: "Very High" },
  { icon: Lightbulb, title: "Salesforce Developer", salary: "₹4-14 LPA", skills: "Apex, Lightning, Admin", growth: "High" },
];

const openings = [
  { role: "Jr. Software Developer Intern", type: "Internship", location: "Kasganj (On-site)" },
  { role: "Computer Lab Assistant", type: "Part-time", location: "Kasganj (On-site)" },
  { role: "Content Writer (Tech Blog)", type: "Remote", location: "Work from Home" },
];

const CareerSection = () => (
  <section className="section-padding bg-secondary" id="career">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-accent font-semibold text-sm tracking-widest uppercase">Career Opportunities</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-secondary-foreground">Build Your IT Career</h2>
        <p className="text-secondary-foreground/70 max-w-2xl mx-auto mt-4">
          IT industry में career options explore करें। जानें कौन सी roles demand में हैं और कितनी salary मिलती है।
        </p>
      </motion.div>

      {/* Career Paths */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {careerPaths.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-secondary-foreground/5 rounded-xl p-6 border border-secondary-foreground/10 group hover:bg-secondary-foreground/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
              <c.icon className="text-accent" size={24} />
            </div>
            <h3 className="font-display font-bold text-secondary-foreground mb-2">{c.title}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-secondary-foreground/60">Salary</span>
                <span className="text-accent font-semibold">{c.salary}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary-foreground/60">Growth</span>
                <span className="text-accent font-semibold">{c.growth}</span>
              </div>
            </div>
            <p className="text-secondary-foreground/50 text-xs mt-3">Skills: {c.skills}</p>
          </motion.div>
        ))}
      </div>

      {/* Current Openings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-display font-bold text-secondary-foreground text-2xl text-center mb-8">Current Openings at Lucky Tech Academy</h3>
        <div className="max-w-2xl mx-auto space-y-4">
          {openings.map((o, i) => (
            <div key={i} className="bg-secondary-foreground/5 rounded-xl p-5 border border-secondary-foreground/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="font-display font-semibold text-secondary-foreground">{o.role}</h4>
                <p className="text-secondary-foreground/60 text-sm">{o.location}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/20 text-accent">{o.type}</span>
                <Button size="sm" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                  Apply <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CareerSection;
