// What Makes Me Different Component
const Difference = () => {
  const pillars = [
    {
      num: '01',
      title: 'I BUILD',
      desc: 'I turn ideas into practical digital solutions, building clean code and usable web applications.',
    },
    {
      num: '02',
      title: 'I EXPLORE',
      desc: 'I continuously explore technology, data, and emerging AI tools to expand my skills.',
    },
    {
      num: '03',
      title: 'I CREATE',
      desc: 'I combine technical development with visual design creativity for engaging user experiences.',
    },
    {
      num: '04',
      title: 'I CONNECT',
      desc: 'I value clear communication, team collaboration, and building meaningful digital experiences.',
    },
  ];

  return (
    <section class="relative py-28 bg-[#08070B] overflow-hidden border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div class="mb-16">
          <p class="text-xs font-bold tracking-widest text-violet-400 uppercase mb-2">MY VALUE PROPOSITION</p>
          <h2 class="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            WHAT MAKES ME DIFFERENT<span class="text-violet-400">.</span>
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              class="glass-panel glass-panel-hover p-10 rounded-3xl relative overflow-hidden group"
            >
              <div class="text-6xl font-display font-black text-violet-500/15 group-hover:text-violet-400/30 transition-colors mb-4">
                {pillar.num}
              </div>

              <h3 class="font-display font-black text-2xl sm:text-3xl text-white mb-3 tracking-wide">
                {pillar.title}
              </h3>

              <p class="text-base text-gray-300 leading-relaxed">
                {pillar.desc}
              </p>

              <div class="mt-6 w-12 h-1 bg-violet-500/30 group-hover:w-24 group-hover:bg-violet-400 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

window.Difference = Difference;
