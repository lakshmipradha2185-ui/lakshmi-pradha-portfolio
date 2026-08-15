// Resume View Modal Component
const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div class="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md transition-all duration-300">
      <div class="relative w-full max-w-4xl max-h-[90vh] bg-[#0F0E17] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div class="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-violet-500/20 text-violet-300 flex items-center justify-center font-semibold text-sm">
              LP
            </div>
            <div>
              <h3 class="text-lg font-display font-bold text-white">G. Lakshmi Pradha — Resume</h3>
              <p class="text-xs text-gray-400">B.Tech AI & Data Science · PRIST University</p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <a
              href="/public/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 text-xs font-semibold rounded-lg bg-violet-600 hover:bg-violet-500 text-white flex items-center gap-1.5 transition-all shadow-lg shadow-violet-600/20"
            >
              <span>OPEN FULL PAGE</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
            <button
              onClick={onClose}
              class="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        </div>

        {/* Content Viewer iframe */}
        <div class="flex-1 w-full bg-white overflow-hidden min-h-[500px]">
          <iframe
            src="/public/resume.html"
            title="Resume View"
            class="w-full h-full min-h-[600px] border-0"
          />
        </div>

        {/* Footer */}
        <div class="flex items-center justify-between px-6 py-3 border-t border-white/10 bg-white/[0.02] text-xs text-gray-400">
          <span>Official Resume Snapshot — G. Lakshmi Pradha</span>
          <button
            onClick={onClose}
            class="px-4 py-1.5 rounded-md border border-white/10 hover:bg-white/10 text-gray-300 transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

window.ResumeModal = ResumeModal;
