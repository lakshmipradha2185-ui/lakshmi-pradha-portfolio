// About Me Component
const About = () => {
  const interests = [
    'Artificial Intelligence',
    'Data Science',
    'Data Analysis',
    'Web Development',
    'Creative Design',
    'Problem Solving',
    'Technology',
  ];

  const personalityPillars = [
    { title: 'Curious', desc: 'Driven to explore emerging technologies & real-world data patterns.' },
    { title: 'Creative', desc: 'Combining technical code logic with visual design aesthetics.' },
    { title: 'Adaptable', desc: 'Thriving across web development, data analysis & AI tools.' },
    { title: 'Practical', desc: 'Focusing on building functional, usable digital solutions.' },
    { title: 'Continuous Learner', desc: 'Constantly acquiring new knowledge through hands-on project building.' },
  ];

  const journeySteps = [
    { step: '01', title: 'LEARN', desc: 'Acquiring theoretical foundations in AI, Data Science & web engineering.' },
    { step: '02', title: 'BUILD', desc: 'Creating functional web apps, chatbots & analytical Excel/Python projects.' },
    { step: '03', title: 'EXPLORE', desc: 'Experimenting with APIs, data insights & modern frameworks.' },
    { step: '04', title: 'CREATE', desc: 'Delivering polished digital experiences that connect with users.' },
  ];

  return (
    <section id="about" class="relative py-28 bg-[#08070B] overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div class="absolute top-1/2 left-0 w-96 h-96 bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div class="mb-16">
          <p class="text-xs font-bold tracking-widest text-violet-400 uppercase mb-2">01 / ABOUT</p>
          <h2 class="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            A LITTLE ABOUT ME<span class="text-violet-400">.</span>
          </h2>
        </div>

        {/* Narrative & Info Grid */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Main Narrative Card */}
          <div class="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl relative">
            <h3 class="font-display font-bold text-2xl text-white mb-6 leading-snug">
              B.Tech student specializing in Artificial Intelligence and Data Science at <span class="text-violet-300">PRIST University</span>.
            </h3>
            
            <div class="space-y-4 text-gray-300 text-base leading-relaxed">
              <p>
                I enjoy exploring technology, working with data, building web applications and turning ideas into practical solutions.
              </p>
              <p>
                I like learning by building real projects and experimenting with different technologies — bridging the gap between raw data insights and clean interactive interfaces.
              </p>
            </div>

            {/* Personality Attributes Tags */}
            <div class="mt-8 pt-6 border-t border-white/10">
              <p class="text-xs font-bold tracking-wider text-violet-400 uppercase mb-4">PERSONALITY TRAITS</p>
              <div class="flex flex-wrap gap-2.5">
                {['Curious', 'Creative', 'Adaptable', 'Practical', 'Continuous Learner'].map((trait) => (
                  <span
                    key={trait}
                    class="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-400/20 text-xs font-semibold text-violet-200"
                  >
                    ✦ {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Areas of Interest Card */}
          <div class="lg:col-span-5 glass-panel p-8 sm:p-10 rounded-3xl">
            <p class="text-xs font-bold tracking-wider text-violet-400 uppercase mb-6">AREAS OF INTEREST</p>
            <div class="space-y-3">
              {interests.map((interest, idx) => (
                <div
                  key={interest}
                  class="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all group"
                >
                  <span class="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{interest}</span>
                  <span class="text-xs font-mono text-violet-400/60 group-hover:text-violet-300">0{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Visual Journey Ribbon: LEARN -> BUILD -> EXPLORE -> CREATE */}
        <div>
          <div class="text-center mb-8">
            <p class="text-xs font-bold tracking-widest text-violet-400 uppercase mb-1">THE DEVELOPMENT CYCLE</p>
            <h3 class="font-display font-bold text-2xl text-white">MY VISUAL JOURNEY</h3>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((item) => (
              <div
                key={item.step}
                class="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group"
              >
                <div class="text-4xl font-display font-black text-violet-500/20 group-hover:text-violet-400/40 transition-colors mb-3">
                  {item.step}
                </div>
                <h4 class="font-display font-extrabold text-xl text-white mb-2 flex items-center justify-between">
                  <span>{item.title}</span>
                  <span class="text-violet-400 text-base group-hover:translate-x-1 transition-transform">→</span>
                </h4>
                <p class="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

window.About = About;
