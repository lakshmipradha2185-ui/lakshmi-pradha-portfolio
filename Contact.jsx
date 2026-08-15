// Contact Section Component with Form
const Contact = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 6000);
  };

  return (
    <section id="contact" class="relative py-28 bg-[#08070B] overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div class="absolute bottom-0 left-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div class="mb-16">
          <p class="text-xs font-bold tracking-widest text-violet-400 uppercase mb-2">07 / CONTACT</p>
          <h2 class="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            LET'S CREATE <br />
            <span class="gradient-text">SOMETHING GREAT.</span>
          </h2>
          <p class="text-base text-gray-300 mt-4 max-w-xl">
            Have an idea, opportunity or project in mind? Let's connect and explore how we can work together.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Channels Column */}
          <div class="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <a
              href="mailto:lakshmipradha2185@gmail.com"
              class="glass-panel glass-panel-hover p-6 rounded-2xl flex items-center gap-5 group block"
            >
              <div class="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-400/20 text-violet-300 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                ✉️
              </div>
              <div>
                <p class="text-xs font-mono font-bold text-violet-400 uppercase">EMAIL ME</p>
                <p class="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                  lakshmipradha2185@gmail.com
                </p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:7548872516"
              class="glass-panel glass-panel-hover p-6 rounded-2xl flex items-center gap-5 group block"
            >
              <div class="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-400/20 text-violet-300 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                📞
              </div>
              <div>
                <p class="text-xs font-mono font-bold text-violet-400 uppercase">CALL / PHONE</p>
                <p class="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                  +91 7548872516
                </p>
              </div>
            </a>

            {/* Social Profile Buttons */}
            <div class="pt-4 space-y-4">
              <a
                href="https://www.linkedin.com/in/lakshmi-pradha/"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-violet-400 text-white font-bold text-xs tracking-widest uppercase flex items-center justify-between transition-all group"
              >
                <span>VIEW LINKEDIN</span>
                <span class="group-hover:translate-x-1 transition-transform">↗</span>
              </a>

              <a
                href="https://github.com/lakshmipradha2185-ui/dalkbotai"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-violet-400 text-white font-bold text-xs tracking-widest uppercase flex items-center justify-between transition-all group"
              >
                <span>VIEW GITHUB</span>
                <span class="group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>

          </div>

          {/* Contact Form Column */}
          <div class="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl relative border border-white/10">
            <h3 class="font-display font-bold text-2xl text-white mb-6">
              Send Me A Message
            </h3>

            {submitted ? (
              <div class="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-3 animate-fadeIn">
                <div class="text-3xl">✨</div>
                <h4 class="font-bold text-lg text-white">Thank You for Reaching Out!</h4>
                <p class="text-xs text-gray-300">
                  Your message has been logged. I'll get back to you promptly at your email address.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} class="space-y-6">
                <div>
                  <label class="block text-xs font-mono font-semibold text-gray-300 uppercase mb-2">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    class="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-violet-400 focus:bg-white/[0.06] text-white placeholder-gray-500 text-sm focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label class="block text-xs font-mono font-semibold text-gray-300 uppercase mb-2">YOUR EMAIL</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    class="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-violet-400 focus:bg-white/[0.06] text-white placeholder-gray-500 text-sm focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label class="block text-xs font-mono font-semibold text-gray-300 uppercase mb-2">YOUR MESSAGE</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell me about your idea, opportunity or project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    class="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-violet-400 focus:bg-white/[0.06] text-white placeholder-gray-500 text-sm focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  class="w-full py-4 text-xs font-bold tracking-widest uppercase rounded-xl bg-violet-600 hover:bg-violet-500 text-white transition-all shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2 group"
                >
                  <span>SEND MESSAGE</span>
                  <span class="group-hover:translate-x-1 transition-transform">↗</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

window.Contact = Contact;
