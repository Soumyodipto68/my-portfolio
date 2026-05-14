const Navbar = () => {
  return (
    <header className="border-b border-[#30363d]">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#3fb950]">
          {"</>"} Soumyodipto
        </h1>

        <ul className="hidden md:flex items-center gap-8 text-sm text-[#8b949e]">
          <li className="hover:text-white transition">About</li>
          <li className="hover:text-white transition">Projects</li>
          <li className="hover:text-white transition">Skills</li>
          <li className="hover:text-white transition">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;