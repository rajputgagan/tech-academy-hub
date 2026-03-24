import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, LogIn, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";

const Login = () => {
  const { toast } = useToast();
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Login Successful!", description: "Welcome back to Lucky Tech Academy!" });
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4">
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
            <h1 className="font-display text-2xl font-bold text-foreground">Student Login</h1>
            <p className="text-muted-foreground text-sm mt-1">अपने account में login करें</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <Input
                  type={showPass ? "text" : "password"}
                  placeholder="Enter your password"
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
              <div className="text-right mt-1.5">
                <a href="#" className="text-primary text-xs hover:underline">Forgot Password?</a>
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full">
              <LogIn size={18} /> Login
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm">
              Account नहीं है?{" "}
              <Link to="/register" className="text-primary font-semibold hover:underline">Register करें</Link>
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

export default Login;
