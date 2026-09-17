import { useEffect, useState, useRef } from "react";
import { Download, Menu, X } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { CiBrightnessUp } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "journey" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [themeOpen, setThemeOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (!open) return;
      const target = e.target as Node;
      if (!sidebarRef.current) return;
      if (!sidebarRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#30363d]/70 bg-[#070912]/90 shadow-lg backdrop-blur-xl">
      <nav aria-label="Primary navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6">
        <button onClick={() => scrollToSection("home")} aria-label="Go to home" className="flex items-center gap-3 text-left">
          {/* <span className="text-lg font-black italic text-[#a78bfa]">SP</span> */}
          <span className="hidden border-l border-[#30363d] pl-3 sm:block">
            <strong className="block text-2xl leading-4 text-[#f8fafc]"> {"<Soumyodipto/>"} </strong>
            {/* <span className="flex items-center gap-1.5 text-[11px] text-[#8b949e]"><i className="h-1.5 w-1.5 rounded-full bg-[#34d399]" /> Available for opportunities</span> */}
          </span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-7 md:flex">
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
                aria-current={active === link.id ? "page" : undefined}
                className={`relative cursor-pointer text-sm font-medium transition duration-300 hover:text-[#3fb950] ${
                  active === link.id ? "text-[#f8fafc]" : "text-[#8b949e]"
                }`}
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-2 left-0 h-[2px] bg-[#a78bfa] transition-all duration-300"
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
              aria-label="Open GitHub profile"
              className="rounded-md p-2 text-[#8b949e] transition hover:text-white"
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
              href="https://www.linkedin.com/in/soumyodipto-pal-421a2331b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#3fb950" }}
              whileTap={{ scale: 0.9 }}
              aria-label="Open LinkedIn profile"
              className="rounded-md p-2 text-[#8b949e] transition hover:text-white"
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
          aria-label="Theme information"
          aria-expanded={themeOpen}
          className="cursor-pointer rounded-md p-2 text-[#8b949e] transition hover:text-[#3fb950]">
          <CiBrightnessUp size={24} />
        </motion.button>
        <AnimatePresence>
          {themeOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute top-12 right-0 w-44 rounded-2xl border border-[#30363d] bg-[#161b22]/95 backdrop-blur-xl shadow-2xl p-2 z-50">
              Dark interface · optimized for focused work
            </motion.div>
          )}
        </AnimatePresence>
        </motion.li>
          <li>
            <a href="/SOUMYODIPTO_PAL_RESUME.pdf" download className="inline-flex items-center gap-2 rounded-lg border border-[#30363d] bg-[#151c2d] px-3 py-2 text-xs font-semibold text-[#f8fafc] hover:bg-[#1b2538]">
              Download CV <Download size={14} />
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <motion.button
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Open navigation menu"
          aria-expanded={open}
          className="z-50 rounded-md p-2 text-white transition hover:text-[#3fb950] md:hidden"
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
        className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        ref={(el) => { sidebarRef.current = el; }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-[320px] flex-col border-l border-[#30363d] bg-[#070912]/95 shadow-2xl backdrop-blur-md md:hidden
        border-l border-[#30363d]
        shadow-2xl z-50 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#30363d]">
          <div>
            <h2 className="text-lg font-bold text-[#3fb950]">
              Soumyodipto
            </h2>
            <p className="text-xs text-[#8b949e]">
              Full Stack Developer
            </p>
          </div>

          <motion.button
            onClick={() => setOpen(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close navigation menu"
            className="rounded-md p-2 text-[#8b949e] hover:text-white"
          >
            <X size={24} />
          </motion.button>
        </div>

        {/* Links */}
        <ul className="p-4 flex-grow space-y-2  bg-[#161b22]/95 backdrop-blur-md
        border-l border-[#30363d]
        shadow-2xl rounded-xl">
          {links.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <motion.button
                onClick={() => scrollToSection(link.id)}
                whileTap={{ scale: 0.97 }}
                aria-current={active === link.id ? "page" : undefined}
                className={`w-full flex items-center justify-between
                px-4 py-3 rounded-xl transition-all duration-300
                ${
                  active === link.id
                    ? "bg-[#3fb950]/10 text-[#3fb950]"
                    : "text-[#8b949e] hover:bg-[#21262d] hover:text-white"
                }`}
              >
                <span>{link.name}</span>

                {active === link.id && (
                  <div className="w-2 h-2 rounded-full bg-[#3fb950]" />
                )}
              </motion.button>
            </motion.li>
          ))}
        </ul>

        {/* Developer Quote */}
        <div className="px-4 pb-4  bg-[#161b22]/95 backdrop-blur-md
        border-l border-[#30363d]
        shadow-2xl rounded-xl">
          <div className="p-4 rounded-xl bg-[#21262d] border border-[#30363d]">
            <p className="text-xs text-[#8b949e] leading-5">
              Focused interfaces make complex work easier to navigate.
            </p>
          </div>
        </div>

        {/* Socials */}
        <div className="border-t border-[#30363d] p-5  bg-[#161b22]/95 backdrop-blur-md
        border-l border-[#30363d]
        shadow-2xl rounded-xl">
          <p className="text-sm text-[#8b949e] mb-4">
            Connect with me
          </p>

          <div className="flex gap-5">
            <motion.a
              href="https://github.com/soumyodipto68"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Open GitHub profile"
              className="rounded-md p-2 text-[#8b949e] transition hover:text-[#3fb950]"
            >
              <VscGithub size={24} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/soumyodipto/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Open LinkedIn profile"
              className="rounded-md p-2 text-[#8b949e] transition hover:text-[#3fb950]"
            >
              <FaLinkedin size={24} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </header>
  );
};

export default Navbar;
