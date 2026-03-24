import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Globe, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We will get back to you shortly." });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section className="section-padding bg-muted" id="contact-us">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            किसी भी query के लिए हमसे संपर्क करें। हम आपकी मदद के लिए हमेशा तैयार हैं।
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 card-elevated border border-border"
          >
            <h3 className="font-display font-bold text-foreground text-xl mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name *" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} required />
                <Input type="email" placeholder="Email Address *" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Phone Number" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} />
                <Input placeholder="Subject *" value={formData.subject} onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))} required />
              </div>
              <Textarea placeholder="Your Message *" rows={5} value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} required />
              <Button type="submit" size="lg" className="w-full">
                <Send size={16} /> Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: MapPin, label: "Address", value: "Sukhendra Sadan, Roadways Bus Stand, Kasganj, Uttar Pradesh" },
              { icon: Mail, label: "Email", value: "luckytechacademy@gmail.com", href: "mailto:luckytechacademy@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 8630873796", href: "tel:+918630873796" },
              { icon: Globe, label: "Website", value: "www.luckytechacademy.in", href: "https://www.luckytechacademy.in" },
              { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 7:00 PM" },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl p-5 card-elevated border border-border flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm">{item.label}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map Embed */}
            <div className="bg-card rounded-xl overflow-hidden card-elevated border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14073.5!2d78.6569!3d27.8077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974b0a3b3a7e8a9%3A0x3e3e3e3e3e3e3e3e!2sKasganj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Lucky Tech Academy Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
