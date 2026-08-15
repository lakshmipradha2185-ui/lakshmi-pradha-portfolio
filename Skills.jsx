// Skills Section Component with interactive background canvas
const Skills = () => {
  const skillCategories = [
    {
      category: 'PROGRAMMING',
      icon: '⚡',
      skills: ['Python', 'HTML', 'CSS', 'JavaScript', 'PHP'],
    },
    {
      category: 'DATA & ANALYTICS',
      icon: '📊',
      skills: ['Data Analysis', 'Data Science', 'Basic Machine Learning', 'Pandas', 'NumPy', 'Excel'],
    },
    {
      category: 'DATABASE',
      icon: '🗄️',
      skills: ['MySQL', 'SQL'],
    },
    {
      category: 'AI & TECHNOLOGY',
      icon: '🤖',
      skills: ['Artificial Intelligence', 'Chatbot Development', 'Prompt Engineering', 'API Integration'],
    },
    {
      category: 'DESIGN',
      icon: '🎨',
      skills: ['Graphic Design', 'Logo Design', 'Canva', 'Creative Design'],
    },
    {
      category: 'PROFESSIONAL',
      icon: '🤝',
      skills: ['Communication', 'Critical Thinking', 'Team Collaboration', 'Time Management', 'Adaptability'],
    },
  ];

  return (
    <section id="skills" class="relative py-28 bg-[#08070B] overflow-hidden">
      
      {/* Background Interactive Node Canvas */}
      <window.SkillsCanvas />

      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div class="mb-16">
          <p class="text-xs font-bold tracking-widest text-violet-400 uppercase mb-2">02 / SKILLS</p>
          <h2 class="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            WHAT I WORK WITH<span class="text-violet-400">.</span>
          </h2>
          <p class="text-sm text-gray-400 mt-2 max-w-xl">
            Core technologies, analytical frameworks, and practical creative tools I use to build ideas into reality.
          </p>
        </div>

        {/* Interactive Skill Cards Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((item) => (
            <div
              key={item.category}
              class="glass-panel glass-panel-hover p-8 rounded-3xl skill-card relative overflow-hidden flex flex-col justify-between"
            >
              {/* Category Header */}
              <div>
                <div class="flex items-center justify-between mb-6">
                  <span class="text-2xl">{item.icon}</span>
                  <span class="text-[10px] font-mono font-bold tracking-widest px-3 py-1 rounded-full bg-violet-500/10 border border-violet-400/20 text-violet-300 uppercase">
                    {item.skills.length} TOOLS
                  </span>
                </div>

                <h3 class="font-display font-bold text-lg text-white tracking-wider mb-6 pb-3 border-b border-white/10">
                  {item.category}
                </h3>

                {/* Skills Pill Tags */}
                <div class="flex flex-wrap gap-2.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      class="px-3.5 py-2 text-xs font-medium rounded-xl bg-white/[0.04] border border-white/10 hover:border-violet-400/50 hover:bg-violet-600/20 text-gray-200 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Indicator */}
              <div class="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                <span>Practiced & Applied</span>
                <span class="text-violet-400">✦</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

window.Skills = Skills;
