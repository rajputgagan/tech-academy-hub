import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.webp";

const menuItems = [
  "Home", "About Us", "All Courses", "Placement", "Our Team", "Blog", "Career", "Contact Us",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Lucky Tech Academy" className="h-10" />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <Button size="sm">Student Login</Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-card border-b border-border"
          >
            <div className="flex flex-col gap-2 p-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm font-medium text-muted-foreground hover:text-primary py-2 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button size="sm" className="mt-2 w-fit">Student Login</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
