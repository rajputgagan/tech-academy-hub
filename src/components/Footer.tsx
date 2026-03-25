import { MapPin, Mail, Phone, Globe } from "lucide-react";
import logo from "@/assets/logo.webp";

const onlineCourses = ["Web Development", "Python Programming", "Data Science & AI", "DevOps Engineering", "Cyber Security"];
const offlineCourses = ["CCC Certification", "MS Office", "Tally + GST", "ADCA", "DCA"];

const socialLinks = [
  { icon: "📸", href: "#", label: "Instagram" },
  { icon: "💬", href: "#", label: "WhatsApp" },
  { icon: "🔗", href: "#", label: "LinkedIn" },
  { icon: "📘", href: "#", label: "Facebook" },
  { icon: "🌐", href: "https://www.luckytechacademy.in", label: "Website" },
];

const Footer = () => (
  <footer className="bg-gradient-to-br from-[hsl(220,40%,13%)] to-[hsl(195,60%,18%)]" id="footer">
    <div className="container mx-auto px-4 py-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Institute Info */}
        <div>
          <h4 className="text-primary font-display font-bold text-sm uppercase tracking-wider mb-4">Institute Name</h4>
          <p className="text-white/80 text-sm mb-4">Lucky Tech Academy</p>
          <div className="flex gap-3">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/30 transition-colors text-sm"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Online Courses */}
        <div>
          <h4 className="text-primary font-display font-bold text-sm uppercase tracking-wider mb-4">Online Courses</h4>
          <div className="space-y-2">
            {onlineCourses.map((c) => (
              <a key={c} href="#all-courses" className="block text-white/60 text-sm hover:text-accent transition-colors">{c}</a>
            ))}
          </div>
        </div>

        {/* Offline Courses */}
        <div>
          <h4 className="text-primary font-display font-bold text-sm uppercase tracking-wider mb-4">Offline Courses</h4>
          <div className="space-y-2">
            {offlineCourses.map((c) => (
              <a key={c} href="#all-courses" className="block text-white/60 text-sm hover:text-accent transition-colors">{c}</a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-primary font-display font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3 text-white/60">
              <MapPin size={14} className="mt-0.5 shrink-0 text-accent" />
              <span>Sukhendra Sadan, Roadways Bus Stand, Kasganj, Uttar Pradesh</span>
            </div>
            <div className="flex items-center gap-3 text-white/60">
              <Mail size={14} className="shrink-0 text-accent" />
              <a href="mailto:luckytechacademy@gmail.com" className="hover:text-accent transition-colors">luckytechacademy@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 text-white/60">
              <Phone size={14} className="shrink-0 text-accent" />
              <a href="tel:+918630873796" className="hover:text-accent transition-colors">+91 8630873796</a>
            </div>
            <div className="flex items-center gap-3 text-white/60">
              <Globe size={14} className="shrink-0 text-accent" />
              <a href="https://www.luckytechacademy.in" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">www.luckytechacademy.in</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container mx-auto px-4 py-5 text-center text-white/40 text-sm">
        © 2026 Copyright luckytechacademy@gmail.com
      </div>
    </div>
  </footer>
);

export default Footer;
