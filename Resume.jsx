// Resume Section Component
const Resume = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" class="relative py-28 bg-gradient-to-b from-[#08070B] via-[#100E1D] to-[#08070B] overflow-hidden">
      
      {/* Ambient Backdrop Glow */}
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div class="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Glass Card Container */}
        <div class="glass-panel p-10 sm:p-16 rounded-3xl relative border border-violet-500/20 shadow-2xl">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-400/20 text-xs font-mono font-bold text-violet-300 uppercase mb-6">
            📄 CURRICULUM VITAE
          </div>

          <h2 class="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            MY RESUME<span class="text-violet-400">.</span>
          </h2>

          <p class="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            A snapshot of my education, skills, projects and professional journey. Available for inline viewing or direct PDF download.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-5">
            <button
              onClick={onOpenResumeModal}
              class="px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-xl bg-violet-600 hover:bg-violet-500 text-white transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.4)] flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              <span>VIEW RESUME</span>
            </button>

            <a
              href="/public/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              class="px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-xl bg-white/[0.05] border border-white/10 hover:border-violet-400 text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

window.Resume = Resume;
