// Experience Section Component
const Experience = () => {
  const experiences = [
    {
      id: '01',
      role: 'WEB DEVELOPMENT INTERN',
      company: 'CodeBind Technologies — Chennai',
      duration: '1 Month',
      tag: 'WEB DEVELOPMENT',
      bullets: [
        'Hands-on experience in web development technologies.',
        'Built basic web applications using HTML, CSS and backend tools.',
        'Learned real-world development workflow.',
        'Learned debugging techniques.',
      ],
    },
    {
      id: '02',
      role: 'DATA SCIENCE INTERN',
      company: 'Scion Research and Development Center',
      duration: '1 Month',
      projectTitle: 'ClimatePulse: Data-Driven Environmental Insights',
      tag: 'DATA SCIENCE',
      description:
        'A Data Science internship focused on applying data-driven thinking to environmental insights through the ClimatePulse project.',
    },
  ];

  return (
    <section id="experience" class="relative py-28 bg-gradient-to-b from-[#08070B] via-[#0D0B14] to-[#08070B] overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div class="absolute bottom-10 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div class="mb-16">
          <p class="text-xs font-bold tracking-widest text-violet-400 uppercase mb-2">03 / EXPERIENCE</p>
          <h2 class="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            LEARNING THROUGH EXPERIENCE<span class="text-violet-400">.</span>
          </h2>
          <p class="text-sm text-gray-400 mt-2 max-w-xl">
            Practical internships where I applied technical tools to real-world software and data workflows.
          </p>
        </div>

        {/* Timeline Container */}
        <div class="relative pl-6 sm:pl-10 border-l-2 border-violet-500/20 space-y-12 my-8">
          
          {experiences.map((exp) => (
            <div key={exp.id} class="relative group">
              
              {/* Animated Timeline Node Dot */}
              <div class="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#08070B] border-2 border-violet-400 group-hover:border-violet-300 group-hover:bg-violet-500 shadow-[0_0_15px_rgba(167,139,250,0.5)] transition-all duration-300 flex items-center justify-center">
                <div class="w-1.5 h-1.5 rounded-full bg-violet-300" />
              </div>

              {/* Experience Glass Card */}
              <div class="glass-panel glass-panel-hover p-8 sm:p-10 rounded-3xl relative">
                
                {/* Header Info */}
                <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <div class="inline-block px-3 py-1 rounded-md bg-violet-500/10 border border-violet-400/20 text-violet-300 text-xs font-mono font-bold uppercase mb-2">
                      {exp.tag} · INTERNSHIP {exp.id}
                    </div>
                    <h3 class="font-display font-extrabold text-xl sm:text-2xl text-white">
                      {exp.role}
                    </h3>
                    <p class="text-sm font-semibold text-violet-300/90 mt-1">{exp.company}</p>
                  </div>

                  <div class="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono font-semibold text-gray-300">
                    ⏱ {exp.duration}
                  </div>
                </div>

                {/* Content: Bullets or Project Description */}
                {exp.bullets && (
                  <ul class="mt-6 space-y-3 text-sm text-gray-300">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} class="flex items-start gap-3">
                        <span class="text-violet-400 mt-1">✦</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {exp.description && (
                  <div class="mt-6 p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                    <p class="text-xs font-mono font-bold text-violet-400 uppercase">PROJECT HIGHLIGHT</p>
                    <h4 class="text-base font-bold text-white">{exp.projectTitle}</h4>
                    <p class="text-sm text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

window.Experience = Experience;
