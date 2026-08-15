// Hero Section Component
const Hero = ({ onOpenResumeModal }) => {
  return (
    <section id="home" class="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#08070B] via-[#0F0E17] to-[#08070B]">
      
      {/* Background Decorative Ambient Glow & Geometric Lines */}
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div class="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div class="absolute inset-0 bg-grain pointer-events-none" />

      {/* Grid Pattern Background */}
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div class="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill Badge */}
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-violet-500/20 backdrop-blur-md mb-6 shadow-xl">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute" />
              <span class="text-xs font-bold tracking-wider text-violet-200 uppercase pl-3">
                OPEN TO INTERNSHIPS & OPPORTUNITIES
              </span>
            </div>

            {/* Small Label */}
            <p class="text-xs md:text-sm font-semibold tracking-widest text-violet-400 uppercase mb-3">
              AI & DATA SCIENCE · DEVELOPMENT · CREATIVITY
            </p>

            {/* Main Heading */}
            <h1 class="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] mb-4">
              HI, I'M <br />
              <span class="gradient-text">LAKSHMI PRADHA.</span>
            </h1>

            {/* Large Statement */}
            <h2 class="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-violet-200/90 tracking-wide mb-6 uppercase">
              BUILDING IDEAS <br class="hidden sm:block" />
              <span class="text-violet-400 font-extrabold">INTO DIGITAL EXPERIENCES.</span>
            </h2>

            {/* Supporting Text */}
            <p class="text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed mb-8">
              AI & Data Science student who enjoys building web applications, exploring data, working with emerging technologies and creating meaningful digital experiences.
            </p>

            {/* Action Buttons */}
            <div class="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                class="w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-xl bg-violet-600 hover:bg-violet-500 text-white transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] flex items-center justify-center gap-2 group"
              >
                <span>EXPLORE MY WORK</span>
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href="#contact"
                class="w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-xl bg-white/[0.05] border border-white/10 hover:border-violet-400 text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                LET'S CONNECT
              </a>

              <button
                onClick={onOpenResumeModal}
                class="w-full sm:w-auto px-6 py-4 text-xs font-bold tracking-widest uppercase rounded-xl bg-transparent border border-violet-500/30 hover:border-violet-400 text-violet-300 hover:bg-violet-500/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <span>DOWNLOAD RESUME</span>
              </button>
            </div>
          </div>

          {/* Profile Photo Column with Luxurious Halo Frame */}
          <div class="lg:col-span-5 flex justify-center items-center">
            <div class="relative group w-full max-w-sm sm:max-w-md">
              
              {/* Outer Glowing Pulsing Aura */}
              <div class="absolute -inset-4 bg-gradient-to-r from-violet-600/30 via-purple-500/20 to-indigo-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-80 animate-pulse-glow" />

              {/* Decorative Geometric Framing Dots */}
              <div class="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-violet-400 rounded-tl-lg" />
              <div class="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-violet-400 rounded-tr-lg" />
              <div class="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-violet-400 rounded-bl-lg" />
              <div class="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-violet-400 rounded-br-lg" />

              {/* Glass Frame Container */}
              <div class="relative rounded-2xl overflow-hidden p-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] animate-float">
                <img
                  src="/lakshmi-pradha.png"
                  alt="G. Lakshmi Pradha"
                  class="w-full h-[420px] sm:h-[480px] object-cover object-top rounded-xl filter contrast-[1.03] brightness-[1.02] transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Bottom Profile Badge overlay */}
                <div class="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0F0E17]/85 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-between">
                  <div>
                    <h3 class="text-sm font-display font-bold text-white">G. Lakshmi Pradha</h3>
                    <p class="text-xs text-violet-300">B.Tech AI & Data Science</p>
                  </div>
                  <div class="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-400/30 flex items-center justify-center text-violet-300 font-mono text-xs font-bold">
                    8.9
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;
