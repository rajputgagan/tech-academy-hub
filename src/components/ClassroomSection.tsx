import { motion } from "framer-motion";
import { Monitor, Building2, Wrench, GraduationCap } from "lucide-react";

const sessions = [
  { icon: Monitor, title: "Classroom Session 1", subtitle: "Interactive Learning", description: "Engage with live, dynamic sessions that encourage participation and hands-on learning." },
  { icon: Building2, title: "Classroom Session 2", subtitle: "Modern Facilities", description: "State-of-the-art labs equipped with the latest technology for the best learning experience." },
  { icon: Wrench, title: "Classroom Session 3", subtitle: "Practical Training", description: "Real-world projects and exercises that prepare you for industry challenges." },
  { icon: GraduationCap, title: "Classroom Session 4", subtitle: "Expert Guidance", description: "Learn from industry professionals with years of real-world experience." },
];

const ClassroomSection = () => (
  <section className="section-padding bg-background" id="all-courses">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Programs</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">Our Classroom Sessions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          Our Classroom has a very unique approach so that any student can be learning either via a live lesson, pre-programmed lesson, independently or being supervised in the classroom.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sessions.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 card-elevated border border-border group"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-1">{s.title}</h3>
            <p className="text-primary font-medium text-sm mb-3">{s.subtitle}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ClassroomSection;
