// Projects Section Component
const Projects = () => {
  const projects = [
    {
      id: '01',
      title: 'DalkBot AI',
      category: 'AI · CHATBOT · WEB APPLICATION',
      description:
        'An AI-powered personalized student chatbot designed to provide academic guidance, learning support and intelligent assistance.',
      tech: ['Python', 'AI', 'Chatbot Development', 'Prompt Engineering', 'API Integration', 'Streamlit'],
      github: 'https://github.com/lakshmipradha2185-ui/dalkbotai',
      featured: true,
      accentGradient: 'from-violet-600/30 to-purple-800/20',
      icon: '🤖',
    },
    {
      id: '02',
      title: 'ClimatePulse: Data-Driven Environmental Insights',
      category: 'DATA SCIENCE · ENVIRONMENT',
      description:
        'A Data Science project focused on transforming environmental data into meaningful, data-driven insights.',
      meta: 'Completed during Scion Research and Development Center',
      tech: ['Data Science', 'Data Analysis', 'Environmental Insights', 'Python'],
      featured: false,
      accentGradient: 'from-emerald-600/20 to-teal-800/10',
      icon: '🌱',
    },
    {
      id: '03',
      title: 'College Management System',
      category: 'WEB DEVELOPMENT · DATABASE',
      description:
        'A web-based college management system developed to manage student records and streamline administrative tasks.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      featured: false,
      accentGradient: 'from-blue-600/20 to-indigo-800/10',
      icon: '🎓',
    },
    {
      id: '04',
      title: 'Data Analysis Using Excel',
      category: 'DATA ANALYSIS',
      description:
        'A data analysis project involving data cleaning, analysis and visualization using Microsoft Excel to extract insights and support decision making.',
      tech: ['Microsoft Excel', 'Data Cleaning', 'Data Visualization', 'Pivot Tables'],
      featured: false,
      accentGradient: 'from-green-600/20 to-emerald-800/10',
      icon: '📊',
    },
    {
      id: '05',
      title: 'Web Development Project',
      category: 'WEB DEVELOPMENT',
      description:
        'Responsive web pages created using HTML and CSS with focus on layout design and user experience.',
      tech: ['HTML', 'CSS', 'Responsive Layout', 'UI Design'],
      featured: false,
      accentGradient: 'from-purple-600/20 to-violet-800/10',
      icon: '🌐',
    },
  ];

  return (
    <section id="projects" class="relative py-28 bg-[#08070B] overflow-hidden">
      
      {/* Background Radial Glow */}
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div class="mb-16">
          <p class="text-xs font-bold tracking-widest text-violet-400 uppercase mb-2">04 / SELECTED WORK</p>
          <h2 class="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            THINGS I'VE BUILT<span class="text-violet-400">.</span>
          </h2>
          <p class="text-sm text-gray-400 mt-2 max-w-xl">
            A showcase of AI applications, data analytics projects, and web solutions I have constructed.
          </p>
        </div>

        {/* Projects Grid */}
        <div class="space-y-10">
          
          {/* Main Featured Project Card (DalkBot AI) */}
          {projects.filter(p => p.featured).map((project) => (
            <div
              key={project.id}
              class="glass-panel glass-panel-hover p-8 sm:p-12 rounded-3xl project-card relative overflow-hidden group border border-violet-500/30"
            >
              <div class={`absolute inset-0 bg-gradient-to-br ${project.accentGradient} opacity-50 pointer-events-none`} />

              <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div class="lg:col-span-8 space-y-6">
                  <div class="flex items-center gap-3">
                    <span class="px-3.5 py-1 rounded-full bg-violet-500/20 border border-violet-400/30 text-xs font-mono font-bold text-violet-300">
                      FEATURED PROJECT {project.id}
                    </span>
                    <span class="text-xs font-mono text-gray-400">{project.category}</span>
                  </div>

                  <h3 class="font-display font-black text-3xl sm:text-4xl text-white tracking-tight flex items-center gap-3">
                    <span>{project.title}</span>
                    <span class="text-3xl">{project.icon}</span>
                  </h3>

                  <p class="text-base text-gray-200 leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  <div class="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} class="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/10 border border-white/10 text-violet-200">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div class="pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold tracking-wider rounded-xl bg-violet-600 hover:bg-violet-500 text-white transition-all shadow-lg shadow-violet-600/30 group-hover:scale-[1.02]"
                    >
                      <span>VIEW ON GITHUB</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>

                <div class="lg:col-span-4 flex justify-center">
                  <div class="w-full h-56 rounded-2xl bg-white/[0.03] border border-white/10 p-6 flex flex-col justify-between items-start backdrop-blur-md relative overflow-hidden group-hover:border-violet-400/40 transition-colors">
                    <span class="text-5xl">{project.icon}</span>
                    <div>
                      <p class="text-xs font-mono text-violet-400">AI ACADEMIC ASSISTANT</p>
                      <p class="text-sm font-bold text-white mt-1">Python & Streamlit Core</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}

          {/* Other Asymmetric Project Cards Grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => !p.featured).map((project) => (
              <div
                key={project.id}
                class="glass-panel glass-panel-hover p-8 rounded-3xl project-card relative overflow-hidden flex flex-col justify-between group"
              >
                <div class={`absolute inset-0 bg-gradient-to-br ${project.accentGradient} opacity-30 pointer-events-none`} />

                <div class="relative z-10">
                  <div class="flex items-center justify-between mb-4">
                    <span class="text-xs font-mono font-bold text-violet-400">{project.category}</span>
                    <span class="text-2xl">{project.icon}</span>
                  </div>

                  <h3 class="font-display font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>

                  <p class="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {project.meta && (
                    <p class="text-xs font-medium text-violet-300/80 mb-4 italic">
                      ✦ {project.meta}
                    </p>
                  )}

                  <div class="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} class="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/[0.04] border border-white/10 text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div class="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span class="inline-block px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider">
                    CASE STUDY COMING SOON
                  </span>
                  <span class="text-gray-500 group-hover:text-violet-400 transition-colors">↗</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

window.Projects = Projects;
