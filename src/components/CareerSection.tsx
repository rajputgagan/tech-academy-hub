import { motion } from "framer-motion";
import { Rocket, GraduationCap, BookOpen, Lightbulb, ArrowRight, Award, Zap, Building2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const careerStats = [
  { value: "1000+", label: "Students Placed" },
  { value: "15+", label: "Industry Partners" },
  { value: "98%", label: "Placement Rate" },
];

const whyChoose = [
  { icon: Rocket, title: "Industry-Leading Institute", description: "Recognized as one of India's top coding institutes with partnerships with tech giants." },
  { icon: Zap, title: "Cutting-Edge Curriculum", description: "Stay ahead with our constantly updated courses in AI, Cloud, Cybersecurity, and more." },
  { icon: Shield, title: "Expert Faculty", description: "Learn from industry veterans with 10+ years of experience at top tech companies." },
  { icon: Award, title: "100% Placement Support", description: "Dedicated placement cell ensuring every student lands their dream job." },
];

const openings = [
  { role: "Senior Full-Stack Developer", description: "Lead development of cutting-edge web applications using React, Node.js, and cloud technologies.", skills: "", experience: "5+ years", location: "Kasganj", type: "On-site" },
  { role: "AI/ML Instructor", description: "Teach advanced machine learning concepts and guide students through AI projects.", skills: "Python, TensorFlow", experience: "", location: "Kasganj", type: "On-site" },
  { role: "DevOps Engineer", description: "Manage CI/CD pipelines and cloud infrastructure for our training platform.", skills: "", experience: "3+ years", location: "Remote/Hybrid", type: "Remote" },
  { role: "Cybersecurity Specialist", description: "Develop cybersecurity curriculum and conduct ethical hacking workshops.", skills: "CEH, CISSP", experience: "", location: "Kasganj", type: "On-site" },
  { role: "Corporate Relations Manager", description: "Build partnerships with tech companies for placements and industry collaborations.", skills: "", experience: "4+ years in B2B", location: "Kasganj", type: "On-site" },
  { role: "Data Science Mentor", description: "Mentor students in data analytics, machine learning, and big data technologies.", skills: "Python, R, SQL", experience: "", location: "Kasganj", type: "Remote" },
];

const CareerSection = () => (
  <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5" id="career">
    <div className="container mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient">Careers at Lucky Tech Academy</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          Join India's Leading Coding Institute & Shape the Future of Technology Education
        </p>
      </motion.div>

      {/* Stats */}
      <div className="flex justify-center gap-5 mb-16">
        {careerStats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl px-6 py-4 border border-primary/20 text-center"
          >
            <p className="text-2xl md:text-3xl font-bold text-primary font-display">{s.value}</p>
            <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Why Choose */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
          Why Choose Lucky Tech Academy?
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 card-elevated border border-border text-center group hover:border-primary/30"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <item.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="font-display font-bold text-foreground mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Current Openings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-10">Current Openings</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {openings.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-2xl p-6 card-elevated border border-border hover:border-primary/30 transition-colors group"
            >
              <h4 className="font-display font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{o.role}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{o.description}</p>
              <div className="space-y-1.5 text-sm">
                {o.skills && (
                  <p className="text-muted-foreground"><span className="text-primary font-semibold">Skills:</span> {o.skills}</p>
                )}
                {o.experience && (
                  <p className="text-muted-foreground"><span className="text-primary font-semibold">Experience:</span> {o.experience}</p>
                )}
                <p className="text-muted-foreground"><span className="text-primary font-semibold">Location:</span> {o.location}</p>
              </div>
              <Button size="sm" variant="outline" className="mt-4 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary">
                Apply Now <ArrowRight size={14} />
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CareerSection;
