import { useState } from "react";

import {
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[#30363d] sticky top-0 bg-[#0d1117]/80 backdrop-blur-xl z-50">
      
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        <h1 className="text-2xl font-bold text-[#3fb950]">
          {"</>"} Soumyodipto
        </h1>

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-[#8b949e]">
          <li className="hover:text-white transition cursor-pointer">
            About
          </li>

          <li className="hover:text-white transition cursor-pointer">
            Skills
          </li>

          <li className="hover:text-white transition cursor-pointer">
            Projects
          </li>

          <li className="hover:text-white transition cursor-pointer">
            Contact
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-[#30363d] bg-[#161b22]">
          <ul className="flex flex-col p-6 gap-6 text-[#8b949e]">
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;