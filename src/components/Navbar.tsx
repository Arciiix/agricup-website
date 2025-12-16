import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Info, Sprout, TrendingUp, Users, Mail } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about", icon: Info },
    { name: "Features", href: "#features", icon: Sprout },
    { name: "Impact", href: "#impact", icon: TrendingUp },
    { name: "Team & Partners", href: "#team", icon: Users },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/logo-full.png" alt="AgricUp" className="h-8 w-auto" />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <item.icon className="w-4 h-4 text-green-500 group-hover:text-green-400 transition-colors" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-green-500" />
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
