import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

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
        <h1
          onClick={() => scrollToSection("home")}
          className="text-xl sm:text-2xl font-bold cursor-pointer text-[#3fb950] hover:text-[#58a6ff] transition"
        >
          {"</>"} Soumyodipto
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`relative cursor-pointer text-sm font-medium transition duration-300 hover:text-[#3fb950] ${
                  active === link.id ? "text-white" : "text-[#8b949e]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-[#3fb950] transition-all duration-300 ${
                    active === link.id ? "w-full" : "w-0"
                  }`}
                />
              </button>
            </li>
          ))}

          {/* Socials */}
          <li>
            <a
              href="https://github.com/soumyodipto68"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b949e] hover:text-[#3fb950] transition"
            >
              <VscGithub size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/soumyodipto/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b949e] hover:text-[#3fb950] transition"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white hover:text-[#3fb950] transition z-50"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      {open && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setOpen(false)}
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Sidebar */}
          <div className="md:hidden fixed top-0 right-0 h-full w-[280px] bg-[#0b62055b] backdrop-blur-xl border-l border-[#30363d] z-50 flex flex-col">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setOpen(false)}
                className="text-white hover:text-[#3fb950] transition "
              >
                <X size={28} />
              </button>
            </div>

            {/* Links */}
            <ul className="flex flex-col p-6 gap-6 flex-grow bg-[#0e5009dc]">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`text-left text-lg transition hover:text-[#3fb950] ${
                      active === link.id ? "text-white" : "text-[#8b949e]"
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            {/* Socials */}
            <div className="flex items-center gap-5 p-6 border-t border-[#30363d] bg-[#0b6205e4]">
              <a
                href="https://github.com/soumyodipto68"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8b949e] hover:text-[#3fb950] transition"
              >
                <VscGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/soumyodipto/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8b949e] hover:text-[#3fb950] transition"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
