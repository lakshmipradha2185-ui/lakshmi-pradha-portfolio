// Certifications Section Component
const Certifications = () => {
  const certs = [
    { title: 'Network Security', provider: 'NPTEL', date: 'April 2026', icon: '🛡️' },
    { title: 'Business Analysis & Process Management', provider: 'Coursera Project Network', date: 'January 2025', icon: '📈' },
    { title: 'PwC Switzerland — Power BI Job Simulation', provider: 'Forage', date: 'January 2025', icon: '📊' },
    { title: 'Build a Free Website with WordPress', provider: 'Coursera Project Network', date: 'August 2024', icon: '🌐' },
    { title: 'Create a Simple Web Page with HTML in 10 Minutes', provider: 'Cognitive Class', date: 'August 2024', icon: '💻' },
    { title: 'Getting Started with Microsoft Excel', provider: 'Coursera Project Network', date: 'July 2024', icon: '📑' },
    { title: 'Introduction to Microsoft Excel', provider: 'Coursera Project Network', date: 'July 2024', icon: '📊' },
    { title: 'Fundamentals of Generative AI', provider: 'GUVI (SAWIT.AI Learnathon)', date: 'Learned', icon: '✨' },
    { title: 'Microsoft Excel Project', provider: 'Coursera', date: 'Completed', icon: '📑' },
    { title: 'Digital Design using Canva', provider: 'Coursera', date: 'Completed', icon: '🎨' },
    { title: 'Workshop on Python Programming', provider: 'Technical Workshop', date: 'Completed', icon: '🐍' },
    { title: 'Workshop on Artificial Intelligence', provider: 'Technical Workshop', date: 'Completed', icon: '🧠' },
  ];

  return (
    <section id="certifications" class="relative py-28 bg-gradient-to-b from-[#08070B] via-[#0E0C17] to-[#08070B] overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div class="mb-16">
          <p class="text-xs font-bold tracking-widest text-violet-400 uppercase mb-2">05 / CERTIFICATIONS</p>
          <h2 class="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            ALWAYS LEARNING<span class="text-violet-400">.</span>
          </h2>
          <p class="text-sm text-gray-400 mt-2 max-w-xl">
            Verified courses, technical workshops, and hands-on simulation certifications.
          </p>
        </div>

        {/* Certifications Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <div
              key={index}
              class="glass-panel glass-panel-hover p-6 rounded-2xl relative flex flex-col justify-between group"
            >
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-2xl">{cert.icon}</span>
                  <span class="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-violet-300">
                    {cert.date}
                  </span>
                </div>

                <h3 class="font-display font-bold text-base text-white group-hover:text-violet-300 transition-colors leading-snug mb-2">
                  {cert.title}
                </h3>

                <p class="text-xs font-medium text-gray-400">
                  {cert.provider}
                </p>
              </div>

              <div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                <span>Verified Learning</span>
                <span class="text-violet-400 font-bold">✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

window.Certifications = Certifications;
