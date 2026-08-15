// Sticky Navigation Bar Component
const Navbar = ({ onOpenResumeModal }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CERTIFICATIONS', href: '#certifications' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'RESUME', href: '#resume' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      class={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#08070B]/80 backdrop-blur-md border-b border-white/[0.08] py-4 shadow-2xl shadow-purple-950/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div class="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" class="group flex items-center gap-2">
          <span class="font-display font-black text-2xl tracking-tighter text-white group-hover:text-violet-300 transition-colors">
            LP<span class="text-violet-400">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav class="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              class="text-xs font-semibold tracking-wider text-gray-300 hover:text-violet-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-violet-400 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div class="hidden sm:flex items-center gap-4">
          <a
            href="#contact"
            class="px-5 py-2.5 text-xs font-bold tracking-wider rounded-full bg-white/5 border border-violet-500/30 hover:border-violet-400 text-white hover:bg-violet-600/20 hover:shadow-[0_0_20px_rgba(167,139,250,0.3)] transition-all duration-300 flex items-center gap-1.5"
          >
            <span>LET'S TALK</span>
            <span class="text-violet-400">↗</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          class="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div class="lg:hidden fixed inset-x-0 top-[70px] bg-[#0F0E17]/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl transition-all animate-fadeIn">
          <div class="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                class="text-sm font-semibold tracking-wider text-gray-200 hover:text-violet-400 py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              class="mt-4 w-full py-3 text-center text-xs font-bold tracking-wider rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-600/30"
            >
              LET'S TALK ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

window.Navbar = Navbar;
