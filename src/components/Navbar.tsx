import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { CiBrightnessUp } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "journey" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [themeOpen, setThemeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-[#0d1117]/80 to-[#161b22]/80 border-b border-[#30363d] shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          onClick={() => scrollToSection("home")}
          whileHover={{ scale: 1.1, color: "#58a6ff" }}
          whileTap={{ scale: 0.95 }}
          className="text-xl sm:text-2xl font-bold cursor-pointer text-[#3fb950] transition"
        >
          {"<Soumyodipto/>"} 
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <motion.li 
              key={link.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.button
                onClick={() => scrollToSection(link.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative cursor-pointer text-sm font-medium transition duration-300 hover:text-[#3fb950] ${
                  active === link.id ? "text-white" : "text-[#8b949e]"
                }`}
              >
                {link.name}
                <motion.span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-[#3fb950] transition-all duration-300`}
                  initial={{ width: 0 }}
                  animate={{ width: active === link.id ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.li>
          ))}

          {/* Socials */}
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="https://github.com/soumyodipto68"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#3fb950" }}
              whileTap={{ scale: 0.9 }}
              className="text-[#8b949e] transition"
            >
              <VscGithub size={24} />
            </motion.a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/soumyodipto/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#3fb950" }}
              whileTap={{ scale: 0.9 }}
              className="text-[#8b949e] transition"
            >
              <FaLinkedin size={24} />
            </motion.a>
          </motion.li>
         <motion.li 
           className="relative"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.8 }}
         >
        <motion.button 
          onClick={() =>setThemeOpen(!themeOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-[#8b949e] hover:text-[#3fb950] transition p-1 cursor-pointer">
          <CiBrightnessUp size={24} />
        </motion.button>
        <AnimatePresence>
          {themeOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              className="absolute top-12 right-0 w-44 rounded-2xl border border-[#30363d] bg-[#161b22]/95 backdrop-blur-xl shadow-2xl p-2 z-50">
              💡 Lights attract bugs, Good Developer only works in dark mode
            </motion.div>
          )}
        </AnimatePresence>
        </motion.li>
        </ul>

        {/* Mobile Toggle */}
        <motion.button
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white hover:text-[#3fb950] transition z-50"
        >
          <Menu size={28} />
        </motion.button>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Sidebar */}
            <motion.div 
              initial={{ x: 280 }}
              animate={{ x: 0 }}
              exit={{ x: 280 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="md:hidden fixed top-0 right-0 h-full w-[280px] bg-[#0b62055b] backdrop-blur-xl border-l border-[#30363d] z-50 flex flex-col"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <motion.button
                  onClick={() => setOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-[#3fb950] transition"
                >
                  <X size={28} />
                </motion.button>
              </div>

              {/* Links */}
              <ul className="flex flex-col p-6 gap-6 flex-grow bg-[#0e5009dc]">
                {links.map((link, index) => (
                  <motion.li 
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(link.id)}
                      whileHover={{ x: 10 }}
                      className={`text-left text-lg transition hover:text-[#3fb950] ${
                        active === link.id ? "text-white" : "text-[#8b949e]"
                      }`}
                    >
                      {link.name}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>

              {/* Socials */}
              <div className="flex items-center gap-5 p-6 border-t border-[#30363d] bg-[#0b6205e4]">
                <motion.a
                  href="https://github.com/soumyodipto68"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-[#8b949e] hover:text-[#3fb950] transition"
                >
                  <VscGithub size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/soumyodipto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-[#8b949e] hover:text-[#3fb950] transition"
                >
                  <FaLinkedin size={24} />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
