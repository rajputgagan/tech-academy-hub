import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import teamLucky from "@/assets/team-lucky.jpg";
import teamAjay from "@/assets/team-ajay.jpg";
import teamRamniwas from "@/assets/team-ramniwas.jpg";
import teamJyoti from "@/assets/team-jyoti.jpg";
import teamDevendra from "@/assets/team-devendra.jpg";
import teamCv from "@/assets/team-cv.jpg";

const team = [
  { name: "Lucky Rajput", role: "Founder & Software Consultant", img: teamLucky, expertise: "Full Stack Development, Cloud Architecture" },
  { name: "Ajay Shakya", role: "Sr. Software Developer", img: teamAjay, expertise: "Java, Spring Boot, Microservices" },
  { name: "Ramniwas Verma", role: "Sr. Salesforce Developer", img: teamRamniwas, expertise: "Salesforce Admin, Lightning, Apex" },
  { name: "Jyoti Shakya", role: "Computer Instructor", img: teamJyoti, expertise: "Basic Computing, MS Office, Tally" },
  { name: "Devendra Singh", role: "DSA Expert", img: teamDevendra, expertise: "Data Structures, Algorithms, C++" },
  { name: "C.V. Singh", role: "English Communication Trainer", img: teamCv, expertise: "Business English, IELTS Prep" },
];

const TeamSection = () => (
  <section className="section-padding bg-background" id="our-team">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Meet the Experts</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          Industry professionals who deliver the best education with years of experience and dedication.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl overflow-hidden card-elevated border border-border group"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/40 transition-colors">
                  <Linkedin className="text-secondary-foreground" size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/40 transition-colors">
                  <Mail className="text-secondary-foreground" size={18} />
                </a>
              </div>
            </div>
            <div className="p-5 text-center">
              <h3 className="font-display font-bold text-foreground text-lg">{m.name}</h3>
              <p className="text-primary text-sm font-semibold mt-1">{m.role}</p>
              <p className="text-muted-foreground text-xs mt-2">{m.expertise}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
