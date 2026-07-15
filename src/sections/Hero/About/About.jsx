import { useState, useRef } from "react";
import {
  Terminal,
  BookOpen,
  ExternalLink,
  Calendar,
  MapPin,
  Award,
  GitBranch,
  Clock3,
} from "lucide-react";

export default function About() {
  const [isStarred, setIsStarred] = useState(false);
  const [starCount, setStarCount] = useState(1);
  const scrollRef = useRef(null);
  const [showHint, setShowHint] = useState(true);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    // Ixcham oyna uchun bottom chegarasini tekshirish
    const isBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 20;
    setShowHint(!isBottom);
  };

  const handleStarToggle = () => {
    setStarCount((prev) => (isStarred ? prev - 1 : prev + 1));
    setIsStarred(!isStarred);
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.03] bg-[#090a0f] py-12 md:py-16 flex items-center min-h-fit"
    >
      <div className="mx-auto max-w-7xl w-full px-6">
        
        {/* Heading */}
        <div className="mb-6 flex items-center gap-4 font-mono select-none">
          <Terminal size={20} className="text-emerald-400" />
          <h2 className="text-lg font-black uppercase tracking-[0.22em] text-white">
            cat<span className="mx-2 text-slate-600">~/</span><span className="text-emerald-400">about.md</span>
          </h2>
          <div className="h-px flex-1 bg-white/[0.05]" />
        </div>

        {/* README Window */}
        <div className="overflow-hidden rounded-xl border border-[#30363d] bg-[#0d1117] shadow-[0_20px_60px_rgba(0,0,0,.55)]">
          
          {/* Top Header */}
          <div className="flex h-11 items-center justify-between border-b border-[#30363d] bg-[#161b22] px-4 select-none">
            <div className="flex items-center gap-2 text-xs">
              <BookOpen size={14} className="text-[#8b949e]" />
              <span className="font-semibold text-[#58a6ff]">WebDoston</span>
              <span className="text-[#6e7681]">/</span>
              <span className="font-semibold text-[#c9d1d9]">README.md</span>
              <span className="rounded-full border border-[#30363d] bg-[#21262d] px-2 py-[1px] text-[9px] uppercase tracking-wider text-[#8b949e]">
                Public
              </span>
            </div>

            <button
              onClick={handleStarToggle}
              className={`flex items-center gap-1.5 rounded-md border  px-2.5 py-1 text-[11px] transition-all ${
                isStarred
                  ? "border-[#e3b341] bg-[#2d2100] text-[#e3b341]"
                  : "border-[#30363d] bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d]"
              }`}
            >
              ★ {isStarred ? "Starred" : "Star"}
              <span className="rounded bg-[#30363d] px-1.5 py-[1px] text-[10px] ml-0.5 text-white">
                {starCount}
              </span>
            </button>
          </div>

          {/* File Header */}
          <div className="flex h-9 items-center justify-between border-b border-[#30363d] bg-[#0d1117] px-4 select-none">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#8b949e]">
              <GitBranch size={12} />
              README.md
            </div>
            <div className="flex items-center gap-3 text-[10px] text-[#8b949e]">
              <span>Markdown</span>
              <span className="text-emerald-400">● Preview</span>
            </div>
          </div>

          {/* Markdown Content Wrapper */}
          <div className="relative">
            {/* max-h-[440px] orqali oyna balandligi jilovlandi */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="max-h-[440px] space-y-6 overflow-y-auto p-5 md:p-6 text-[14px] leading-6 text-[#c9d1d9] no-scrollbar scroll-smooth"
            >
              {/* Header Title & Badges mixed row to save vertical space */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#30363d] pb-4">
                <h1 className="text-2xl font-black text-white tracking-tight">
                  👋 Hi, I'm Doston
                </h1>
                
                {/* Badges Layout (Zichlashtirildi) */}
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-md border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 text-[10px] font-mono text-emerald-400">
                    ● Open To Work
                  </span>
                  <span className="rounded-md border border-sky-500/20 bg-sky-500/5 px-2 py-0.5 text-[10px] font-mono text-sky-400">
                    React Eco
                  </span>
                  <span className="rounded-md border border-violet-500/20 bg-violet-500/5 px-2 py-0.5 text-[10px] font-mono text-violet-300">
                    Clean Arch
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3 text-neutral-300">
                <p>
                  I build modern frontend applications with a strong focus on
                  reusable components, scalable architecture and performance.
                </p>
              </div>

              {/* Quote (Balandligi kamaytirildi) */}
              <div className="relative overflow-hidden rounded-lg border border-[#30363d] bg-[#161b22]/40">
                <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-emerald-400 to-cyan-500" />
                <div className="pl-4 pr-4 py-3 italic text-[#8b949e] text-xs leading-5">
                  "Good interfaces are built by removing unnecessary complexity and making every interaction feel natural."
                </div>
              </div>

              {/* Grid System */}
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Left - Core Expertise */}
                <div className="rounded-lg border border-[#30363d] bg-[#161b22]/30 p-4 transition-all hover:border-emerald-500/30">
                  <div className="mb-3 flex items-center gap-1.5">
                    <Award size={14} className="text-amber-400" />
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">Core Expertise</h3>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between border-b border-white/[0.02] py-1">
                      <span className="text-[#8b949e]">React & JS</span>
                      <span className="font-mono text-emerald-400">Advanced</span>
                    </div>
                    <div className="flex justify-between border-b border-white/[0.02] py-1">
                      <span className="text-[#8b949e]">Responsive UI</span>
                      <span className="font-mono text-emerald-400">Pixel Perfect</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#8b949e]">Performance</span>
                      <span className="font-mono text-emerald-400">Optimized</span>
                    </div>
                  </div>
                </div>

                {/* Right - Environment */}
                <div className="rounded-lg border border-[#30363d] bg-[#161b22]/30 p-4 transition-all hover:border-sky-500/30">
                  <div className="mb-3 flex items-center gap-1.5">
                    <MapPin size={14} className="text-sky-400" />
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">Environment</h3>
                  </div>
                  <div className="space-y-1 text-xs font-mono">
                    <div className="flex justify-between border-b border-white/[0.02] py-1">
                      <span className="text-[#8b949e]">Location</span>
                      <span className="text-white">Uzbekistan</span>
                    </div>
                    <div className="flex justify-between border-b border-white/[0.02] py-1">
                      <span className="text-[#8b949e]">Work Mode</span>
                      <span className="text-white">Remote</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#8b949e]">Stack</span>
                      <span className="text-white">VS Code / Next.js</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline (Gabariti kichraytirildi) */}
              <div className="rounded-lg border border-[#30363d] bg-[#161b22]/20 p-4">
                <div className="mb-2.5 flex items-center gap-1.5">
                  <Clock3 size={14} className="text-violet-400" />
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Recent Activity</h3>
                </div>
                <div className="space-y-1.5 font-mono text-xs text-[#8b949e]">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 text-[10px]">●</span>
                    <span>Refactored reusable components</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sky-400 text-[10px]">●</span>
                    <span>Optimized layout viewport metrics</span>
                  </div>
                </div>
              </div>

              {/* Footer Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#30363d] pt-4 text-xs">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#8b949e]">
                  <Calendar size={12} />
                  July 2026
                </div>
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-xs text-[#58a6ff] hover:text-white transition-colors"
                >
                  GitHub Profile <ExternalLink size={12} />
                </a>
              </div>

            </div>

            {/* Hint Overlay Indicator */}
            {showHint && (
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex flex-col items-center bg-gradient-to-t from-[#0d1117] via-[#0d1117]/90 to-transparent pb-3 pt-8 select-none">
                <span className="animate-bounce font-mono text-[9px] uppercase tracking-[0.25em] text-[#8b949e]/60">
                  Scroll Inside ↓
                </span>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}