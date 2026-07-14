import  { useState, useEffect } from "react";
import { ArrowUpRight, GitBranch, Radio } from "lucide-react";

export default function HeroContent() {
  // Real vaqtda o'zgarib turadigan ping simulyatsiyasi
  const [ping, setPing] = useState(14);
  useEffect(() => {
    const interval = setInterval(() => {
      setPing(Math.floor(Math.random() * (18 - 12 + 1)) + 12);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[560px] space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-[88px] font-black uppercase leading-[0.88] tracking-[-0.07em] text-text lg:text-[108px]">
          FRONTEND
        </h1>
        <h2
          className="
            -mt-4
            text-[88px]
            font-black
            uppercase
            leading-[0.88]
            tracking-[-0.07em]
            lg:text-[108px]
            [-webkit-text-stroke:1px_rgba(255,255,255,.10)]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                -135deg,
                rgba(255,255,255,0.06) 0%,
                rgba(255,255,255,0.06) 52%,
                rgba(105,115,255,.95) 52%,
                rgba(105,115,255,.95) 52%,
                rgba(86,98,246,1) 52%,
                rgba(86,98,246,1) 100%
              )
            `,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          DEVELOPER
        </h2>
      </div>

      {/* 1. Yangi Toza Description (Silliq gorizontal matn) */}
   <p className="max-w-[565px] font-mono text-smd uppercase leading-relaxed tracking-[0.18em] text-text-secondary">
  BUILDING SCALABLE FRONTEND  APPLICATIONS <br /> WITH MODERN WEB

  TECHNOLOGIES, CLEAN ARCHITECTURE AND EXCEPTIONAL UX.
</p>

      {/* 2. KREATIV LIVE METRICS (Katta bo'shliqni yo'qotuvchi dashboard bar) */}
      <div className="flex flex-wrap items-center gap-6 border-t border-glass-border/30 pt-6 font-mono text-[10px] tracking-[0.2em] text-text-muted/70">
        <div className="flex items-center gap-2">
          <Radio size={12} className="text-emerald-500 animate-pulse" />
          <span>STATUS: <span className="text-emerald-400 font-bold">READY TO BUILD</span></span>
        </div>
        <div className="h-3 w-px bg-glass-border/40" />
        <div>
          PING: <span className="text-text font-bold">{ping}ms</span>
        </div>
        <div className="h-3 w-px bg-glass-border/40" />
        <div>
          ENV: <span className="text-primary font-bold">PRODUCTION</span>
        </div>
      </div>

      {/* 3. GIT PIPELINE BUTTONS (Eski tugmalar va tarqoq skillar o'rniga) */}
      <div className="relative pl-6 border-l border-glass-border/40 space-y-4 pt-4">
        {/* Git Branch burchak bezak ikonkasi */}
        <div className="absolute -left-[9px] -top-2 bg-slate-950 p-0.5 text-glass-border/60">
          <GitBranch size={16} />
        </div>

        {/* REZYUME TUGMASI (git checkout commit) */}
        <div className="relative flex items-center gap-4 group">
          <div className="absolute -left-[31px] h-3 w-3 rounded-full bg-slate-950 border-2 border-glass-border group-hover:border-primary transition-colors flex items-center justify-center">
            <div className="h-1 w-1 bg-transparent group-hover:bg-primary rounded-full transition-colors" />
          </div>
          <a
            href="/resume.pdf"
            className="font-mono text-xs uppercase tracking-wider text-text-muted hover:text-text flex items-center gap-2 transition-colors"
          >
            <span className="text-primary/70 font-bold">git</span> clone portfolio <span className="text-text border border-glass-border px-2 py-1 rounded bg-glass/30 group-hover:border-primary/40 transition-colors">resume.pdf</span>
          </a>
        </div>

        {/* ALOQA TUGMASI (git push merge) */}
        <div className="relative flex items-center gap-4 group">
          <div className="absolute -left-[31px] h-3 w-3 rounded-full bg-slate-950 border-2 border-glass-border group-hover:border-emerald-500 transition-colors flex items-center justify-center">
            <div className="h-1 w-1 bg-transparent group-hover:bg-emerald-500 rounded-full transition-colors" />
          </div>
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-wider text-text-muted hover:text-text flex items-center gap-2 transition-colors"
          >
            <span className="text-emerald-500/70 font-bold">git</span> push origin <span className="text-text border border-glass-border px-2 py-1 rounded bg-glass/30 group-hover:border-emerald-500/40 transition-colors">contact</span>
            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
}