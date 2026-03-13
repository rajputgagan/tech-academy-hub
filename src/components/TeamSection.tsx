import { motion } from "framer-motion";
import teamLucky from "@/assets/team-lucky.jpg";
import teamAjay from "@/assets/team-ajay.jpg";
import teamRamniwas from "@/assets/team-ramniwas.jpg";
import teamJyoti from "@/assets/team-jyoti.jpg";
import teamDevendra from "@/assets/team-devendra.jpg";
import teamCv from "@/assets/team-cv.jpg";

const team = [
  { name: "Lucky Rajput", role: "Software Consultant", img: teamLucky },
  { name: "Ajay Shakya", role: "Sr. Software Developer", img: teamAjay },
  { name: "Ramniwas Verma", role: "Sr. Salesforce Developer", img: teamRamniwas },
  { name: "Jyoti Shakya", role: "Computer Instructor", img: teamJyoti },
  { name: "Devendra Singh", role: "DSA Expert", img: teamDevendra },
  { name: "C.V. Singh", role: "English Communication Trainer", img: teamCv },
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
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl overflow-hidden card-elevated border border-border group"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-display font-semibold text-foreground text-lg">{m.name}</h3>
              <p className="text-primary text-sm mt-1">{m.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
