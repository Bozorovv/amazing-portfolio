import { useState } from "react";
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
import { useRef } from "react";

export default function About() {
  const [isStarred, setIsStarred] = useState(false);
  const [starCount, setStarCount] = useState(1);
  const scrollRef = useRef(null);

  const [showHint, setShowHint] = useState(true);

  const handleScroll = () => {
    const el = scrollRef.current;

    if (!el) return;

    const isBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 15;

    setShowHint(!isBottom);
  };

  const handleStarToggle = () => {
    setStarCount((prev) => (isStarred ? prev - 1 : prev + 1));
    setIsStarred(!isStarred);
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.03] bg-[#090a0f] py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-10 flex items-center gap-4 font-mono">
          <Terminal size={22} className="text-emerald-400" />

          <h2 className="text-[34px] font-black uppercase tracking-[0.22em] text-white">
            cat
            <span className="mx-2 text-slate-600">~/</span>
            <span className="text-emerald-400">about.md</span>
          </h2>

          <div className="h-px flex-1 bg-white/[0.05]" />
        </div>

        {/* README Window */}

        <div className="overflow-hidden rounded-2xl border border-[#30363d] bg-[#0d1117] shadow-[0_30px_80px_rgba(0,0,0,.55)]">
          {/* Top Header */}

          <div className="flex h-[52px] items-center justify-between border-b border-[#30363d] bg-[#161b22] px-5">
            <div className="flex items-center gap-2 text-sm">
              <BookOpen size={16} className="text-[#8b949e]" />

              <span className="font-semibold text-[#58a6ff]">WebDoston</span>

              <span className="text-[#6e7681]">/</span>

              <span className="font-semibold text-[#c9d1d9]">README.md</span>

              <span className="rounded-full border border-[#30363d] bg-[#21262d] px-2 py-[2px] text-[10px] uppercase tracking-wider text-[#8b949e]">
                Public
              </span>
            </div>

            <button
              onClick={handleStarToggle}
              className={`flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs transition-all ${
                isStarred
                  ? "border-[#e3b341] bg-[#2d2100] text-[#e3b341]"
                  : "border-[#30363d] bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d]"
              }`}
            >
              ★{isStarred ? "Starred" : "Star"}
              <span className="rounded bg-[#30363d] px-2 py-[2px] text-[10px]">
                {starCount}
              </span>
            </button>
          </div>

          {/* File Header */}

          <div className="flex items-center justify-between border-b border-[#30363d] bg-[#0d1117] px-5 py-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#8b949e]">
              <GitBranch size={14} />
              README.md
            </div>

            <div className="flex items-center gap-5 text-[11px] text-[#8b949e]">
              <span>Markdown</span>

              <span className="text-emerald-400">● Preview</span>
            </div>
          </div>

          {/* Markdown */}
          <div className="relative">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="max-h-[650px] space-y-8 overflow-y-auto p-8 leading-8 text-[#c9d1d9] no-scrollbar"
            >
              <div>
                <h1 className="mb-2 text-4xl font-black text-white">
                  👋 Hi, I'm Doston
                </h1>

               
              </div>
              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                  ● Open To Work
                </span>

                <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs text-sky-400">
                  React Ecosystem
                </span>

                <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                  Clean Architecture
                </span>

                <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-300">
                  Performance First
                </span>
              </div>
              {/* Description */}
              <div className="space-y-5 text-[15px] leading-8 text-[#c9d1d9]">
                <p>
                  I build modern frontend applications with a strong focus on
                  reusable components, scalable architecture and performance.
                </p>

                <p>
                  My goal is to create interfaces that are visually polished,
                  easy to maintain and enjoyable for users while keeping the
                  codebase clean and production-ready.
                </p>
              </div>{" "}
              {/* Quote */}
              <div className="relative overflow-hidden rounded-xl border border-[#30363d] bg-[#161b22]/60">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-violet-500" />

                <div className="pl-6 pr-6 py-5 italic text-[#8b949e] leading-8">
                  "Good interfaces are not built by adding more features. They
                  are built by removing unnecessary complexity and making every
                  interaction feel natural."
                </div>
              </div>
              {/* Grid */}
              <div className="grid gap-5 lg:grid-cols-2">
                {/* Left */}

                <div
                  className="
                  rounded-xl
                  border
                  border-[#30363d]
                  bg-[#161b22]/50
                  p-5

                  transition-all
                  duration-300

                  hover:border-emerald-500/40
                  hover:bg-[#161b22]
                "
                >
                  <div className="mb-5 flex items-center gap-2">
                    <Award size={16} className="text-amber-400" />

                    <h3 className="font-semibold text-white">Core Expertise</h3>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[#8b949e]">React Architecture</span>

                      <span className="font-mono text-emerald-400">
                        Advanced
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#8b949e]">JavaScript (ES6+)</span>

                      <span className="font-mono text-emerald-400">
                        Advanced
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#8b949e]">Responsive UI</span>

                      <span className="font-mono text-emerald-400">
                        Pixel Perfect
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#8b949e]">Performance</span>

                      <span className="font-mono text-emerald-400">
                        Optimized
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#8b949e]">Clean Code</span>

                      <span className="font-mono text-emerald-400">Always</span>
                    </div>
                  </div>
                </div>

                {/* Right */}

                <div
                  className="
                  rounded-xl
                  border
                  border-[#30363d]
                  bg-[#161b22]/50
                  p-5

                  transition-all
                  duration-300

                  hover:border-sky-500/40
                  hover:bg-[#161b22]
                "
                >
                  <div className="mb-5 flex items-center gap-2">
                    <MapPin size={16} className="text-sky-400" />

                    <h3 className="font-semibold text-white">Environment</h3>
                  </div>

                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#8b949e]">Location</span>

                      <span className="text-white">Uzbekistan</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#8b949e]">Work Mode</span>

                      <span className="text-white">Remote</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#8b949e]">Currently</span>

                      <span className="text-white">Learning Next.js</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#8b949e]">Languages</span>

                      <span className="text-white">Uzbek / English</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#8b949e]">Editor</span>

                      <span className="text-white">VS Code</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Timeline */}
              <div className="rounded-xl border border-[#30363d] bg-[#161b22]/40 p-5">
                <div className="mb-4 flex items-center gap-2">
                  <Clock3 size={16} className="text-violet-400" />

                  <h3 className="font-semibold text-white">Recent Activity</h3>
                </div>

                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400">●</span>

                    <span className="text-[#8b949e]">
                      Updated portfolio hero section
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sky-400">●</span>

                    <span className="text-[#8b949e]">
                      Added new project showcase
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-violet-400">●</span>

                    <span className="text-[#8b949e]">
                      Refactored reusable components
                    </span>
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#30363d] pt-6">
                <div className="flex items-center gap-2 font-mono text-xs text-[#8b949e]">
                  <Calendar size={13} />
                  Last Commit • July 2026
                </div>

                <a
                  href="#"
                  className="
                  flex
                  items-center
                  gap-2

                  text-sm
                  text-[#58a6ff]

                  transition-all

                  hover:gap-3
                  hover:text-white
                "
                >
                  View GitHub Profile
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
           {showHint && (
  <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex flex-col items-center bg-gradient-to-t from-[#0d1117] via-[#0d1117]/80 to-transparent pb-4 pt-12">

    <span className="animate-bounce font-mono text-[11px] uppercase tracking-[0.25em] text-[#8b949e]/70">
      Continue Reading ↓
    </span>

  </div>
)}
          </div>
        </div>
      </div>
    </section>
  );
}
