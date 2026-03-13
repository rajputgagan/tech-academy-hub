import { MapPin, Mail, Phone, Globe } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground" id="contact-us">
    <div className="container mx-auto px-4 py-14">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-display text-xl font-bold mb-4">Lucky Tech Academy</h3>
          <p className="text-secondary-foreground/60 text-sm leading-relaxed">
            Empowering students with industry-ready IT skills. Your journey to a successful tech career starts here.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <div className="grid grid-cols-2 gap-2">
            {["Home", "About Us", "Courses", "Placement", "Our Team", "Blog", "Career", "Contact"].map((l) => (
              <a key={l} href="#" className="text-secondary-foreground/60 text-sm hover:text-accent transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold mb-4">Contact Us</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3 text-secondary-foreground/60">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>Sukhendra Sadan, Roadways Bus Stand, Kasganj, Uttar Pradesh</span>
            </div>
            <div className="flex items-center gap-3 text-secondary-foreground/60">
              <Mail size={16} className="shrink-0 text-accent" />
              <a href="mailto:luckytechacademy@gmail.com" className="hover:text-accent transition-colors">luckytechacademy@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 text-secondary-foreground/60">
              <Phone size={16} className="shrink-0 text-accent" />
              <a href="tel:+918630873796" className="hover:text-accent transition-colors">+91 8630873796</a>
            </div>
            <div className="flex items-center gap-3 text-secondary-foreground/60">
              <Globe size={16} className="shrink-0 text-accent" />
              <a href="https://www.luckytechacademy.in" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">www.luckytechacademy.in</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-secondary-foreground/10">
      <div className="container mx-auto px-4 py-5 text-center text-secondary-foreground/50 text-sm">
        © 2026 Lucky Tech Academy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
