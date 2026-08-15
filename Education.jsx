// Education Section Component
const Education = () => {
  return (
    <section id="education" class="relative py-28 bg-[#08070B] overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div class="absolute top-1/2 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div class="mb-16">
          <p class="text-xs font-bold tracking-widest text-violet-400 uppercase mb-2">06 / EDUCATION</p>
          <h2 class="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            MY FOUNDATION<span class="text-violet-400">.</span>
          </h2>
          <p class="text-sm text-gray-400 mt-2 max-w-xl">
            Academic degree program specializing in Artificial Intelligence & Data Science.
          </p>
        </div>

        {/* Education Hero Card */}
        <div class="glass-panel glass-panel-hover p-8 sm:p-12 rounded-3xl relative overflow-hidden max-w-4xl border border-violet-500/20">
          <div class="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

          <div class="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div class="md:col-span-8 space-y-4">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-400/20 text-xs font-mono font-bold text-violet-300 uppercase">
                🎓 UNDERGRADUATE DEGREE PROGRAM
              </div>

              <h3 class="font-display font-extrabold text-2xl sm:text-4xl text-white leading-tight">
                B.Tech in Artificial Intelligence & Data Science
              </h3>

              <p class="text-lg font-semibold text-violet-300/90">
                PRIST University
              </p>

              <div class="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-300 pt-2">
                <span class="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  📅 DURATION: 2023 — 2027
                </span>
                <span class="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  📍 LOCATION: India
                </span>
              </div>
            </div>

            {/* CGPA Badge */}
            <div class="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-center">
              <span class="text-xs font-mono font-bold tracking-widest text-violet-400 uppercase mb-1">CUMULATIVE GPA</span>
              <div class="font-display font-black text-5xl text-white gradient-accent-text my-1">
                8.9
              </div>
              <span class="text-xs text-gray-400">Scale of 10.0</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

window.Education = Education;
