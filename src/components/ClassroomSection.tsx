import { motion } from "framer-motion";
import { Monitor, Building2, Wrench, GraduationCap } from "lucide-react";

const sessions = [
  { icon: Monitor, title: "Interactive Learning", description: "Engage with live, dynamic sessions that encourage participation and hands-on learning with real-time feedback.", color: "from-primary/10 to-primary/5" },
  { icon: Building2, title: "Modern Facilities", description: "State-of-the-art labs equipped with the latest technology for the best learning experience.", color: "from-accent/10 to-accent/5" },
  { icon: Wrench, title: "Practical Training", description: "Real-world projects and exercises that prepare you for industry challenges and job responsibilities.", color: "from-primary/10 to-primary/5" },
  { icon: GraduationCap, title: "Expert Guidance", description: "Learn from industry professionals with years of real-world experience and mentorship.", color: "from-accent/10 to-accent/5" },
];

const ClassroomSection = () => (
  <section className="section-padding bg-muted/30" id="classroom">
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
            className="bg-card rounded-2xl p-6 card-elevated border border-border group hover:border-primary/30 transition-colors"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
              <s.icon className="text-primary" size={30} />
            </div>
            <h3 className="font-display font-bold text-foreground mb-2 text-lg">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ClassroomSection;
