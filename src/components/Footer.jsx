import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#090a0f]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 font-bold text-white">
              AJ
            </div>

            <div>
              <p className="font-semibold text-white">Adewale John</p>
              <p className="text-xs text-gray-500">Frontend Developer</p>
            </div>
          </a>

          {/* Copyright */}
          <p className="text-center text-sm text-gray-500">
            © {currentYear} Adewale John. All rights reserved.
          </p>

          {/* Social links and back to top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/adewale90256"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-white/10 p-3 text-gray-400 transition hover:border-blue-500/40 hover:text-blue-400"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-white/10 p-3 text-gray-400 transition hover:border-blue-500/40 hover:text-blue-400"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="rounded-lg bg-blue-500 p-3 text-white transition hover:bg-blue-600"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
