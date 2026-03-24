import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Building2, Users, CheckCircle } from "lucide-react";

const placementFeatures = [
  { icon: Briefcase, title: "100% Placement Assistance", description: "हर student को dedicated placement support मिलता है — resume building से लेकर interview preparation तक।" },
  { icon: TrendingUp, title: "High Salary Packages", description: "हमारे students ₹3 LPA - ₹12 LPA तक के packages पा रहे हैं top IT companies में।" },
  { icon: Building2, title: "Top Company Tie-ups", description: "TCS, Infosys, Wipro, HCL, Accenture जैसी companies से हमारे direct tie-ups हैं।" },
  { icon: Users, title: "Mock Interviews & Training", description: "Regular mock interviews, group discussions, और soft skills training से students को interview-ready बनाते हैं।" },
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
  <section className="section-padding bg-muted" id="placement">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Career Launch</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">Placement Support</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          हम सिर्फ पढ़ाते नहीं, बल्कि आपको job दिलाने तक साथ देते हैं। हमारी placement cell आपके career को सही direction देती है।
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-14">
        {/* Features */}
        <div className="grid gap-4">
          {placementFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-5 card-elevated border border-border flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <f.icon className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placement Process */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-8 card-elevated border border-border"
        >
          <h3 className="font-display font-bold text-foreground text-xl mb-6">Our Placement Process</h3>
          <div className="space-y-4">
            {placementSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="text-primary" size={16} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-primary">Step {i + 1}</span>
                    <span className="text-foreground font-medium text-sm">{step}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PlacementSection;
