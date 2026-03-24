import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    title: "What is DevOps? How to Become a DevOps Engineer in 2026",
    excerpt: "DevOps is a methodology that brings Development and Operations teams together. Learn how you can start a DevOps career.",
    date: "March 20, 2026",
    author: "Lucky Rajput",
    category: "DevOps",
  },
  {
    title: "The Best Way to Learn Web Development",
    excerpt: "Start with HTML, CSS, JavaScript and progress to React and Node.js. A step-by-step guide for beginners.",
    date: "March 15, 2026",
    author: "Ajay Shakya",
    category: "Web Dev",
  },
  {
    title: "Data Science vs Software Development — Which Career is Better?",
    excerpt: "Both fields have great opportunities, but which one is right for you? Learn about salary, growth, and scope.",
    date: "March 10, 2026",
    author: "Devendra Singh",
    category: "Career",
  },
  {
    title: "5 Best Programming Languages to Start Coding",
    excerpt: "Python, JavaScript, Java, C++, and Go — which language is the best for beginners?",
    date: "March 5, 2026",
    author: "Lucky Rajput",
    category: "Coding",
  },
];

const BlogSection = () => (
  <section className="section-padding bg-background" id="blog">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Knowledge Hub</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">Latest Blog Posts</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          IT industry की latest trends, career tips, और coding tutorials — सब कुछ हिंदी में।
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl overflow-hidden card-elevated border border-border group flex flex-col"
          >
            {/* Category header */}
            <div className="bg-primary/10 px-5 py-3 flex items-center justify-between">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">{b.category}</span>
              <Calendar className="text-muted-foreground" size={14} />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-display font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                {b.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{b.excerpt}</p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                  <User size={12} />
                  <span>{b.author}</span>
                </div>
                <span className="text-muted-foreground text-xs">{b.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button variant="outline" size="lg">
          View All Posts <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  </section>
);

export default BlogSection;
