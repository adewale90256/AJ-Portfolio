import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/8 bg-[#080b12]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 font-bold text-blue-400 transition duration-300 group-hover:bg-blue-500/20">
            AJ
          </div>

          <div>
            <p className="text-sm font-bold tracking-[0.15em] text-white">
              ADEWALE JOHN
            </p>

            <p className="text-xs tracking-wide text-gray-500">
              Frontend Developer
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-400 transition duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/Adeniji-Adewale-CV.pdf"
            download
            className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/4 px-4 py-2.5 text-sm font-medium text-white transition duration-300 hover:border-blue-400/40 hover:bg-blue-500/10"
          >
            Download Résumé
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:bg-white/5 md:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/8 bg-[#080b12] px-6 py-6 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-300 transition hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="flex w-fit items-center gap-2 rounded-lg bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Download Résumé
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
