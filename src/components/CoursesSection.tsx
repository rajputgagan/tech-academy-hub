import { motion } from "framer-motion";
import { Code, Server, Globe, Database, Terminal, Smartphone, Brain, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  { icon: Code, title: "Basic Coding", duration: "3 Months", description: "C, C++, Python basics, Data Structures & Algorithms — coding की foundation मजबूत बनाएं।", tag: "Beginner" },
  { icon: Globe, title: "Web Development", duration: "6 Months", description: "HTML, CSS, JavaScript, React, Node.js — full-stack web developer बनें।", tag: "Popular" },
  { icon: Server, title: "DevOps Engineering", duration: "4 Months", description: "Docker, Kubernetes, CI/CD, AWS, Linux — DevOps expert बनें और high-paying jobs पाएं।", tag: "Trending" },
  { icon: Database, title: "Data Science & AI", duration: "6 Months", description: "Python, Machine Learning, Data Analysis, TensorFlow — AI revolution का हिस्सा बनें।", tag: "Hot" },
  { icon: Smartphone, title: "App Development", duration: "4 Months", description: "React Native, Flutter — Android & iOS apps बनाना सीखें।", tag: "In-Demand" },
  { icon: Terminal, title: "Java Full Stack", duration: "6 Months", description: "Core Java, Spring Boot, Hibernate, Microservices — enterprise-level development सीखें।", tag: "Professional" },
  { icon: Shield, title: "Cyber Security", duration: "4 Months", description: "Ethical Hacking, Network Security, Penetration Testing — digital world को secure करें।", tag: "Advanced" },
  { icon: Brain, title: "Salesforce", duration: "5 Months", description: "Salesforce Admin, Developer, Lightning — CRM platform में career बनाएं।", tag: "Corporate" },
];

const tagColors: Record<string, string> = {
  Beginner: "bg-accent/20 text-accent",
  Popular: "bg-primary/20 text-primary",
  Trending: "bg-accent/20 text-accent",
  Hot: "bg-primary/20 text-primary",
  "In-Demand": "bg-accent/20 text-accent",
  Professional: "bg-primary/20 text-primary",
  Advanced: "bg-accent/20 text-accent",
  Corporate: "bg-primary/20 text-primary",
};

const CoursesSection = () => (
  <section className="section-padding bg-background" id="all-courses">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Programs</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">All Courses</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          Industry-oriented courses जो आपको job-ready बनाएं। हर course में practical training, live projects, और placement support included है।
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-card rounded-xl p-6 card-elevated border border-border group flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <c.icon className="text-primary" size={24} />
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors[c.tag]}`}>{c.tag}</span>
            </div>
            <h3 className="font-display font-semibold text-foreground mb-1">{c.title}</h3>
            <p className="text-accent text-xs font-medium mb-3">Duration: {c.duration}</p>
            <p className="text-muted-foreground text-sm leading-relaxed flex-1">{c.description}</p>
            <Button size="sm" variant="outline" className="mt-4 w-full">Learn More</Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
