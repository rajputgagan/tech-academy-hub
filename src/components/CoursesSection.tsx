import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Server, Globe, Database, Terminal, Smartphone, Brain, Shield, Cloud, Cpu, Monitor, FileText, BarChart3, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "software", label: "💻 Software Development", icon: Code },
  { id: "cloud", label: "☁️ Cloud & DevOps", icon: Cloud },
  { id: "office", label: "🏢 Office & Business", icon: FileText },
];

const allCourses: Record<string, Array<{ icon: any; title: string; duration: string; description: string; tag: string }>> = {
  software: [
    { icon: Code, title: "Web Development", duration: "6 Months", description: "HTML, CSS, JavaScript, React, Node.js — become a full-stack web developer.", tag: "Popular" },
    { icon: Terminal, title: "Python Programming", duration: "4 Months", description: "Python basics to advanced, Django, Flask — build powerful applications.", tag: "Trending" },
    { icon: Smartphone, title: "App Development", duration: "4 Months", description: "React Native, Flutter — learn to build Android & iOS applications.", tag: "In-Demand" },
    { icon: Terminal, title: "Java Full Stack", duration: "6 Months", description: "Core Java, Spring Boot, Hibernate, Microservices — enterprise development.", tag: "Professional" },
    { icon: Code, title: "C/C++ Programming", duration: "3 Months", description: "C, C++ fundamentals, Data Structures & Algorithms — strong coding base.", tag: "Beginner" },
    { icon: Terminal, title: "C# Programming", duration: "3 Months", description: ".NET framework, ASP.NET, desktop and web applications with C#.", tag: "Enterprise" },
    { icon: Database, title: "Database Management", duration: "2 Months", description: "MySQL, PostgreSQL, MongoDB — master database design and queries.", tag: "Core" },
    { icon: Brain, title: "Data Science & AI", duration: "6 Months", description: "Python, Machine Learning, TensorFlow — be part of the AI revolution.", tag: "Hot" },
    { icon: BarChart3, title: "Data Analytics", duration: "3 Months", description: "Excel, Power BI, SQL, Tableau — transform data into business insights.", tag: "Growing" },
  ],
  cloud: [
    { icon: Server, title: "DevOps Engineering", duration: "4 Months", description: "Docker, Kubernetes, CI/CD, AWS, Linux — become a DevOps expert.", tag: "High-Paying" },
    { icon: Cloud, title: "AWS Cloud", duration: "3 Months", description: "EC2, S3, Lambda, CloudFormation — master Amazon Web Services.", tag: "Top" },
    { icon: Cloud, title: "Azure Cloud", duration: "3 Months", description: "Azure VMs, Functions, DevOps — Microsoft cloud platform mastery.", tag: "Enterprise" },
    { icon: Server, title: "Linux Administration", duration: "2 Months", description: "Linux commands, shell scripting, server management — essential IT skills.", tag: "Foundation" },
    { icon: Shield, title: "Cyber Security", duration: "4 Months", description: "Ethical Hacking, Network Security, Penetration Testing — secure the digital world.", tag: "Advanced" },
    { icon: Settings, title: "Computer Networking", duration: "3 Months", description: "CCNA, network protocols, routing, switching — networking fundamentals.", tag: "Essential" },
    { icon: Server, title: "Kubernetes", duration: "2 Months", description: "Container orchestration, pods, services, deployments — master K8s.", tag: "DevOps" },
    { icon: Shield, title: "Docker", duration: "2 Months", description: "Containerization, images, Docker Compose — modern deployment skills.", tag: "DevOps" },
    { icon: Settings, title: "Jenkins CI/CD", duration: "1 Month", description: "Pipeline automation, continuous integration and delivery workflows.", tag: "Automation" },
  ],
  office: [
    { icon: FileText, title: "CCC Certification", duration: "3 Months", description: "Course on Computer Concepts — government recognized computer literacy.", tag: "Govt" },
    { icon: Monitor, title: "MS Office", duration: "2 Months", description: "Word, Excel, PowerPoint, Outlook — master all Microsoft Office tools.", tag: "Essential" },
    { icon: FileText, title: "Tally + GST", duration: "3 Months", description: "Accounting, taxation, GST returns — become finance-ready with Tally.", tag: "Finance" },
    { icon: FileText, title: "O Level", duration: "1 Year", description: "NIELIT O Level — government recognized IT diploma with certification.", tag: "Diploma" },
    { icon: Brain, title: "ADCA", duration: "1 Year", description: "Advanced Diploma in Computer Applications — comprehensive IT diploma.", tag: "Diploma" },
    { icon: Monitor, title: "DCA", duration: "6 Months", description: "Diploma in Computer Applications — essential computer skills certification.", tag: "Diploma" },
    { icon: FileText, title: "PGDCA", duration: "1 Year", description: "Post Graduate Diploma in Computer Applications — advanced IT qualification.", tag: "PG" },
    { icon: Cpu, title: "Digital Marketing", duration: "3 Months", description: "SEO, social media, Google Ads, content marketing — grow businesses online.", tag: "Marketing" },
    { icon: Brain, title: "Salesforce", duration: "5 Months", description: "Salesforce Admin, Developer, Lightning — build a career in CRM.", tag: "Corporate" },
  ],
};

const tagColors: Record<string, string> = {
  Popular: "bg-primary/10 text-primary",
  Trending: "bg-accent/10 text-accent",
  Hot: "bg-primary/10 text-primary",
  "In-Demand": "bg-accent/10 text-accent",
  Professional: "bg-primary/10 text-primary",
  Advanced: "bg-accent/10 text-accent",
  Corporate: "bg-primary/10 text-primary",
  Beginner: "bg-accent/10 text-accent",
  "High-Paying": "bg-primary/10 text-primary",
  Top: "bg-accent/10 text-accent",
  Enterprise: "bg-primary/10 text-primary",
  Foundation: "bg-accent/10 text-accent",
  Essential: "bg-primary/10 text-primary",
  DevOps: "bg-accent/10 text-accent",
  Automation: "bg-primary/10 text-primary",
  Govt: "bg-primary/10 text-primary",
  Finance: "bg-accent/10 text-accent",
  Diploma: "bg-primary/10 text-primary",
  PG: "bg-accent/10 text-accent",
  Marketing: "bg-primary/10 text-primary",
  Growing: "bg-accent/10 text-accent",
  Core: "bg-primary/10 text-primary",
};

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState("software");

  return (
    <section className="section-padding bg-background" id="all-courses">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Programs</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">All Courses</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Explore our wide range of professional IT courses designed to make you industry-ready with hands-on training and expert guidance.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-muted rounded-full p-1.5 border border-border">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === cat.id
                    ? "bg-secondary text-secondary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {allCourses[activeTab].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl p-6 card-elevated border border-border group flex flex-col hover:border-primary/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <c.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors[c.tag] || "bg-muted text-muted-foreground"}`}>
                    {c.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-1">{c.title}</h3>
                <p className="text-accent text-xs font-semibold mb-3">Duration: {c.duration}</p>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{c.description}</p>
                <Button size="sm" variant="outline" className="mt-4 w-full rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CoursesSection;
