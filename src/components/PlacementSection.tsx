import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Building2, Users, CheckCircle, GraduationCap, Award } from "lucide-react";

const placementStats = [
  { value: "5+", label: "Students Placed", color: "text-primary" },
  { value: "10+", label: "Hiring Partners", color: "text-accent" },
  { value: "5 LPA", label: "Highest Package", color: "text-primary" },
];

const hiringCompanies = ["TCS", "Infosys", "Wipro", "Accenture", "Capgemini", "HCL", "Tech Mahindra", "Cognizant"];

const placementFeatures = [
  { icon: Briefcase, title: "100% Placement Assistance", description: "Every student receives dedicated placement support — from resume building to interview preparation." },
  { icon: TrendingUp, title: "High Salary Packages", description: "Our students are securing packages ranging from ₹3 LPA to ₹12 LPA at top IT companies." },
  { icon: Building2, title: "Top Company Tie-ups", description: "We have direct tie-ups with leading IT companies for campus placement drives." },
  { icon: Users, title: "Mock Interviews & Training", description: "Regular mock interviews, group discussions, and soft skills training to make students interview-ready." },
];

const placementSteps = [
  "Course Enrollment & Training",
  "Live Project Experience",
  "Resume Building & Portfolio",
  "Mock Interviews & Aptitude",
  "Company Placement Drives",
  "Job Offer & Onboarding Support",
];

const PlacementSection = () => (
  <section className="section-padding bg-muted/50" id="placement">
    <div className="container mx-auto">
      {/* Header with gradient */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Career Launch</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-gradient">Our Placements</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          We prepare students for real-world jobs with industry-level training
        </p>
      </motion.div>

      {/* Placement Stats */}
      <div className="flex justify-center mb-14">
        <div className="inline-flex gap-6 md:gap-10">
          {placementStats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl px-8 py-5 border border-border text-center"
            >
              <p className={`text-3xl md:text-4xl font-bold font-display ${s.color}`}>{s.value}</p>
              <p className="text-muted-foreground text-xs mt-1 uppercase tracking-wider font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features & Process Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-14">
        <div className="grid gap-4">
          {placementFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-5 card-elevated border border-border flex gap-4 items-start hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <f.icon className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 card-elevated border border-border"
        >
          <h3 className="font-display font-bold text-foreground text-xl mb-6">Our Placement Process</h3>
          <div className="space-y-4">
            {placementSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <CheckCircle className="text-primary group-hover:text-primary-foreground transition-colors" size={16} />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-primary">Step {i + 1}</span>
                  <span className="text-foreground font-medium text-sm">{step}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top Hiring Companies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="font-display font-bold text-foreground text-2xl mb-8">Top Hiring Companies</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {hiringCompanies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-3 bg-card rounded-full border border-border card-elevated text-sm font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-all cursor-default"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default PlacementSection;
