import { Braces, FileCode2, FolderOpen, GitBranch, Settings2 } from "lucide-react";

const tabs = [
  { id: 1, title: "DeveloperProfile.ts", active: true },
  { id: 2, title: "portfolio.tsx", active: false },
];

const tokenColors = {
  keyword: "text-[#c678dd]",   
  variable: "text-[#61afef]",  
  property: "text-[#e5c07b]",  
  string: "text-[#98c379]",    
  punct: "text-[#abb2bf]",     
};

const codeLines = [
  { indent: 0, tokens: [{ t: "const", c: "keyword" }, { t: " developer", c: "variable" }, { t: " = {", c: "punct" }] },
  { indent: 1, tokens: [{ t: "name", c: "property" }, { t: ": ", c: "punct" }, { t: '"Doston"', c: "string" }, { t: ",", c: "punct" }] },
  { indent: 1, tokens: [{ t: "role", c: "property" }, { t: ": ", c: "punct" }, { t: '"Frontend Developer"', c: "string" }, { t: ",", c: "punct" }] },
  { indent: 1, tokens: [{ t: "location", c: "property" }, { t: ": ", c: "punct" }, { t: '"Uzbekistan"', c: "string" }, { t: ",", c: "punct" }] },
  { indent: 1, tokens: [{ t: "stack", c: "property" }, { t: ": [", c: "punct" }] },
  { indent: 2, tokens: [{ t: '"React"', c: "string" }, { t: ",", c: "punct" }] },
  { indent: 2, tokens: [{ t: '"JavaScript"', c: "string" }, { t: ",", c: "punct" }] },
  { indent: 2, tokens: [{ t: '"Tailwind CSS"', c: "string" }, { t: ",", c: "punct" }] },
  { indent: 2, tokens: [{ t: '"Vite"', c: "string" }] },
  { indent: 1, tokens: [{ t: "]", c: "punct" }] },
  { indent: 0, tokens: [{ t: "}", c: "punct" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: "export default", c: "keyword" }, { t: " developer", c: "variable" }] },
];

const statusItems = [
  { icon: <GitBranch size={14} />, label: "main" },
  { icon: <Braces size={14} />, label: "React" },
  { icon: <FileCode2 size={14} />, label: "UTF-8" },
  { icon: <Settings2 size={14} />, label: "Ln 13, Col 1" },
];

const INDENT_PX = 22;
const LAST_LINE = codeLines.length;

export default function CodeEditor() {
  return (
    <div className="relative mx-auto w-full max-w-[640px]" style={{ perspective: "1200px" }}>
      <style>{`
        @keyframes editor-float {
          from { transform: translateY(-8px) rotateX(2deg); }
          to   { transform: translateY(8px) rotateX(-2deg); }
        }
        @keyframes cursor-blink {
          0%, 49%  { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>

      <div
        className="[transform-style:preserve-3d]"
        style={{ animation: "editor-float 5s ease-in-out infinite alternate" }}
      >
        {/* Window - Soya loyqaligi butunlay tozalangan va o'tkir qirrali soyalar berilgan */}
        <div
          className="group overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0d1117] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-700/90 shadow-[0_1px_1px_rgba(0,0,0,0.8),0_8px_24px_rgba(0,0,0,0.7),0_20px_40px_rgba(0,0,0,0.6)]"
          style={{ 
            boxShadow: `
              0 1px 0 0 rgba(255, 255, 255, 0.1) inset, 
              0 1px 1px rgba(0, 0, 0, 0.8), 
              0 8px 24px rgba(0, 0, 0, 0.7), 
              0 20px 40px rgba(0, 0, 0, 0.6)
            `
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#161b22] px-6 py-3.5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f57] border border-[#e0443e]">
                <span className="text-[8px] font-bold leading-none text-black/60 opacity-0 transition-opacity duration-150 hover:opacity-100 cursor-pointer">×</span>
              </span>
              <span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[#febc2e] border border-[#dfa023]">
                <span className="text-[8px] font-bold leading-none text-black/60 opacity-0 transition-opacity duration-150 hover:opacity-100 cursor-pointer">−</span>
              </span>
              <span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[#28c840] border border-[#1caa30]">
                <span className="text-[8px] font-bold leading-none text-black/60 opacity-0 transition-opacity duration-150 hover:opacity-100 cursor-pointer">+</span>
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <FolderOpen size={14} className="text-slate-500" />
              Portfolio Workspace
            </div>

            <div className="w-[56px]" />
          </div>

          {/* Tabs */}
          <div className="flex items-center border-b border-slate-800/80 bg-[#0f141b]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`relative flex items-center gap-2 border-r border-slate-800/80 px-5 py-3 text-xs font-medium tracking-wide transition-all duration-200 ${
                  tab.active
                    ? "-mt-px bg-[#0d1117] text-white"
                    : "text-slate-500 hover:bg-slate-900/50 hover:text-slate-300"
                }`}
              >
                {tab.active && (
                  <span className="absolute inset-x-0 top-0 h-[2px] bg-emerald-500/80" />
                )}
                <FileCode2 size={14} className={tab.active ? "text-emerald-400" : "text-slate-500"} />
                {tab.title}
              </button>
            ))}
          </div>

          {/* Body */}
          <div className="flex bg-[#0d1117]">
            {/* Qator raqamlari */}
            <div className="select-none border-r border-slate-800/80 bg-[#0b0f14] py-5 pl-5 pr-4 text-right font-mono text-sm leading-7 text-slate-600">
              {codeLines.map((_, index) => (
                <div key={index}>{index + 1}</div>
              ))}
            </div>

            {/* Kod */}
            <div className="relative flex-1 overflow-x-auto px-5 py-5 font-mono text-sm leading-7">
              {codeLines.map((line, index) => {
                const isLastLine = index === LAST_LINE - 1;

                return (
                  <div
                    key={index}
                    style={{ paddingLeft: line.indent * INDENT_PX }}
                    className={`flex items-center whitespace-pre rounded px-2 -mx-2 ${
                      isLastLine ? "bg-white/[0.03]" : ""
                    }`}
                  >
                    {line.tokens.length === 0 ? (
                      <span>&nbsp;</span>
                    ) : (
                      line.tokens.map((token, tokenIndex) => (
                        <span key={tokenIndex} className={tokenColors[token.c]}>
                          {token.t}
                        </span>
                      ))
                    )}

                    {isLastLine && (
                      <span
                        className="ml-1 inline-block h-5 w-[2px] bg-emerald-400"
                        style={{ animation: "cursor-blink 1s step-end infinite" }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Status Bar */}
          <div className="flex items-center justify-between border-t border-slate-800/80 bg-[#11151b] px-6 py-1.5">
            <div className="flex items-center gap-4">
              {statusItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-1.5 text-xs text-slate-400 ${
                    index === 0 ? "" : "border-l border-slate-800/80 pl-4"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </div>
              ))}
            </div>

            <span className="text-xs text-slate-500">Portfolio v1.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}