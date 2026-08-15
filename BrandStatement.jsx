// Personal Brand Statement Section
const BrandStatement = () => {
  return (
    <section class="relative py-24 bg-gradient-to-r from-[#0B0A10] via-[#12101F] to-[#0B0A10] border-y border-white/10 overflow-hidden">
      
      {/* Decorative Light Rays */}
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)] pointer-events-none" />

      <div class="max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        <span class="inline-block text-violet-400 text-4xl font-serif mb-4 opacity-80">“</span>
        
        <h2 class="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          I BELIEVE THE BEST IDEAS HAPPEN WHEN <br class="hidden md:block" />
          <span class="gradient-accent-text">TECHNOLOGY MEETS CREATIVITY.</span>
        </h2>

        <div class="w-16 h-1 bg-gradient-to-r from-violet-500 to-purple-400 mx-auto rounded-full shadow-[0_0_15px_rgba(167,139,250,0.8)]" />
        
        <p class="mt-4 text-xs font-mono uppercase tracking-widest text-gray-400">
          G. Lakshmi Pradha · Student & Creative Technologist
        </p>

      </div>
    </section>
  );
};

window.BrandStatement = BrandStatement;
