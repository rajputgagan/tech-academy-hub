import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, UserPlus, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";

const Register = () => {
  const { toast } = useToast();
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", password: "", confirmPassword: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      toast({ title: "Error", description: "Passwords do not match!", variant: "destructive" });
      return;
    }
    toast({ title: "Registration Successful!", description: "Welcome to Lucky Tech Academy! 🎉" });
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-card rounded-2xl p-8 card-elevated border border-border">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/">
              <img src={logo} alt="Lucky Tech Academy" className="h-14 mx-auto mb-4" />
            </Link>
            <h1 className="font-display text-2xl font-bold text-foreground">Student Registration</h1>
            <p className="text-muted-foreground text-sm mt-1">नया account बनाएं और सीखना शुरू करें</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
              <Input placeholder="अपना पूरा नाम लिखें" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <Input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                <Input placeholder="+91 XXXXXXXXXX" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} required />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Select Course</label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={form.course}
                onChange={e => setForm(p => ({ ...p, course: e.target.value }))}
                required
              >
                <option value="">-- Course चुनें --</option>
                <option value="basic-coding">Basic Coding</option>
                <option value="web-dev">Web Development</option>
                <option value="devops">DevOps Engineering</option>
                <option value="data-science">Data Science & AI</option>
                <option value="app-dev">App Development</option>
                <option value="java">Java Full Stack</option>
                <option value="cyber-security">Cyber Security</option>
                <option value="salesforce">Salesforce</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <Input
                  type={showPass ? "text" : "password"}
                  placeholder="Password बनाएं"
                  value={form.password}
                  onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Confirm Password</label>
              <Input
                type="password"
                placeholder="Password दोबारा लिखें"
                value={form.confirmPassword}
                onChange={e => setForm(p => ({ ...p, confirmPassword: e.target.value }))}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              <UserPlus size={18} /> Register Now
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm">
              पहले से account है?{" "}
              <Link to="/login" className="text-primary font-semibold hover:underline">Login करें</Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link to="/" className="text-muted-foreground text-sm hover:text-primary transition-colors inline-flex items-center gap-1">
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
