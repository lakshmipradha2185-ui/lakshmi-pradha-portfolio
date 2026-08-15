// Footer Component
const Footer = () => {
  return (
    <footer class="relative py-16 bg-[#050408] border-t border-white/10 overflow-hidden text-gray-400 text-xs">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-center">
          
          {/* Brand Info */}
          <div class="md:col-span-6 space-y-3">
            <div class="font-display font-black text-3xl text-white tracking-tighter">
              LP<span class="text-violet-400">.</span>
            </div>
            <p class="text-sm font-semibold text-white">G. Lakshmi Pradha</p>
            <p class="text-xs text-gray-400 max-w-sm">
              Building ideas into digital experiences. AI & Data Science student, developer and creative technologist.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div class="md:col-span-6 flex flex-wrap gap-6 md:justify-end font-medium">
            <a href="#about" class="hover:text-violet-300 transition-colors">About</a>
            <a href="#skills" class="hover:text-violet-300 transition-colors">Skills</a>
            <a href="#experience" class="hover:text-violet-300 transition-colors">Experience</a>
            <a href="#projects" class="hover:text-violet-300 transition-colors">Projects</a>
            <a href="#certifications" class="hover:text-violet-300 transition-colors">Certifications</a>
            <a href="#education" class="hover:text-violet-300 transition-colors">Education</a>
            <a href="#contact" class="hover:text-violet-300 transition-colors">Contact</a>
          </div>

        </div>

        {/* Bottom Copyright & Social */}
        <div class="pt-8 flex flex-wrap items-center justify-between gap-4 text-gray-400">
          <p>© 2026 G. Lakshmi Pradha. All rights reserved.</p>

          <div class="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/lakshmi-pradha/"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-violet-300 transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/lakshmipradha2185-ui/dalkbotai"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-violet-300 transition-colors"
            >
              GitHub ↗
            </a>
            <a href="mailto:lakshmipradha2185@gmail.com" class="hover:text-violet-300 transition-colors">
              Email ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

window.Footer = Footer;
