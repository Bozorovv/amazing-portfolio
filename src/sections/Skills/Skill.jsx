
import { useState,  } from "react";
import { ChevronDown, ChevronRight, Files, Search, GitBranch,  Settings, Check, CornerDownLeft } from "lucide-react";
import { DiReact, DiJavascript1, DiCss3, DiHtml5 } from "react-icons/di";
import { SiTailwindcss, SiTypescript, SiChakraui } from "react-icons/si";
import { BiExtension } from "react-icons/bi";

const skillsData = {
  "React.jsx": {
    icon: <DiReact className="text-[#61dafb] text-lg shrink-0" />,
    language: "React JSX",
    isDirty: true,
    lines: [
      { text: "// React.jsx — React Ecosystem", type: "comment" },
      { text: "const reactExpertise = {", type: "code" },
      { text: '  framework: "React 19",', type: "string" },
      { text: '  state: ["Context API", "Zustand", "Redux Toolkit"],', type: "string" },
      { text: '  routing: "React Router",', type: "string" },
      { text: '  api: ["REST API", "Axios", "Fetch"],', type: "string" },
      { text: '  performance: ["Memo", "Lazy", "Suspense"]', type: "string" },
      { text: "};", type: "code" },
      { text: "", type: "cursor" }
    ]
  },

  "TypeScript.ts": {
    icon: <SiTypescript className="text-[#3178c6] text-xs shrink-0" />,
    language: "TypeScript",
    isDirty: false,
    lines: [
      { text: "// TypeScript.ts — Type Safety", type: "comment" },
      { text: "interface FrontendDeveloper {", type: "code" },
      { text: '  status: "Learning";', type: "string" },
      { text: '  current: ["Interfaces", "Types", "Generics"];', type: "string" },
      { text: '  goal: "Production Ready";', type: "string" },
      { text: "}", type: "code" },
      { text: "", type: "cursor" }
    ]
  },

  "Tailwind.css": {
    icon: <SiTailwindcss className="text-[#38bdf8] text-base shrink-0" />,
    language: "CSS",
    isDirty: true,
    lines: [
      { text: "/* Tailwind.css — Utility First */", type: "comment" },
      { text: "@theme {", type: "code" },
      { text: "  colors: customPalette;", type: "string" },
      { text: "  spacing: fluidScale;", type: "string" },
      { text: "}", type: "code" },
      { text: "", type: "code" },
      { text: ".card {", type: "code" },
      { text: "  @apply rounded-2xl p-6 backdrop-blur;", type: "string" },
      { text: "}", type: "code" },
      { text: "", type: "cursor" }
    ]
  },

  "ChakraUI.jsx": {
    icon: <SiChakraui className="text-[#319795] text-xs shrink-0" />,
    language: "React JSX",
    isDirty: false,
    lines: [
      { text: "// ChakraUI.jsx — Design System", type: "comment" },
      { text: "const theme = {", type: "code" },
      { text: '  mode: "Dark / Light",', type: "string" },
      { text: '  semanticTokens: true,', type: "string" },
      { text: '  customComponents: true,', type: "string" },
      { text: '  responsive: "Mobile First"', type: "string" },
      { text: "};", type: "code" },
      { text: "", type: "cursor" }
    ]
  },

  "JavaScript.js": {
    icon: <DiJavascript1 className="text-[#f7df1e] text-lg shrink-0" />,
    language: "JavaScript",
    isDirty: false,
    lines: [
      { text: "// JavaScript.js — Core Language", type: "comment" },
      { text: "const javascript = {", type: "code" },
      { text: '  syntax: "ES6+",', type: "string" },
      { text: '  async: ["Promise", "Async/Await"],', type: "string" },
      { text: '  concepts: ["Closures", "Event Loop", "Modules"],', type: "string" },
      { text: '  patterns: ["Map", "Filter", "Reduce"]', type: "string" },
      { text: "};", type: "code" },
      { text: "", type: "cursor" }
    ]
  },

  "Style.css": {
    icon: <DiCss3 className="text-[#2965f1] text-lg shrink-0" />,
    language: "CSS",
    isDirty: false,
    lines: [
      { text: "/* Style.css — Modern CSS */", type: "comment" },
      { text: ".layout {", type: "code" },
      { text: "  display: grid;", type: "string" },
      { text: "  gap: 2rem;", type: "string" },
      { text: "}", type: "code" },
      { text: "", type: "code" },
      { text: ".hero {", type: "code" },
      { text: "  animation: fadeIn 600ms ease;", type: "string" },
      { text: "}", type: "code" },
      { text: "", type: "cursor" }
    ]
  },

  "Index.html": {
    icon: <DiHtml5 className="text-[#e34f26] text-lg shrink-0" />,
    language: "HTML",
    isDirty: true,
    lines: [
      { text: "<!-- HTML5 Semantic Layout -->", type: "comment" },
      { text: "<main>", type: "code" },
      { text: "  <section id='hero' />", type: "string" },
      { text: "  <section id='projects' />", type: "string" },
      { text: "  <section id='skills' />", type: "string" },
      { text: "  <section id='contact' />", type: "string" },
      { text: "</main>", type: "code" },
      { text: "", type: "cursor" }
    ]
  }
};

export default function Skills() {
  const [activeFile, setActiveFile] = useState("React.jsx");
  const [isFileTreeOpen, setIsFileTreeOpen] = useState(true);
  const [isVscodeLight, setIsVscodeLight] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState(["WebDoston ~ % npx my-skills-portfolio initialized successfully."]);

  const currentFileData = skillsData[activeFile];

  // Terminal buyruqlarini boshqarish
  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    
    let response = `command not found: ${terminalInput}`;
    if (terminalInput.toLowerCase() === "clear") {
      setTerminalLogs([]);
      setTerminalInput("");
      return;
    }
    if (terminalInput.toLowerCase() === "ls") response = Object.keys(skillsData).join("   ");
    if (terminalInput.toLowerCase() === "whoami") response = "doston_developer";

    setTerminalLogs([...terminalLogs, `WebDoston ~ % ${terminalInput}`, response]);
    setTerminalInput("");
  };

  // VS Code Ranglar Palitrasi (One Dark Pro va VS Code Light)
  const theme = {
    bgMain: isVscodeLight ? "bg-[#ffffff]" : "bg-[#282c34]",
    bgHeader: isVscodeLight ? "bg-[#f3f3f3]" : "bg-[#21252b]",
    bgSidebar: isVscodeLight ? "bg-[#f3f3f3]" : "bg-[#181a1f]",
    bgActivity: isVscodeLight ? "bg-[#2c2c2c]" : "bg-[#1e1e1e]",
    bgTerminal: isVscodeLight ? "bg-[#f3f3f3] border-t border-[#e4e4e4]" : "bg-[#1e1e1e] border-t border-[#15171c]",
    border: isVscodeLight ? "border-[#e4e4e4]" : "border-[#15171c]",
    textMain: isVscodeLight ? "text-[#383a42]" : "text-[#abb2bf]",
    textMuted: isVscodeLight ? "text-[#a0a1a7]" : "text-[#5c6370]",
    lineNumbers: isVscodeLight ? "text-[#9d9d9f]" : "text-[#4b5263]",
    activeLineBg: isVscodeLight ? "bg-[#f2f2f2]" : "bg-[#2c313c]/40",
    tabActive: isVscodeLight ? "bg-[#ffffff] text-[#333333]" : "bg-[#282c34] text-white",
    tabInactive: isVscodeLight ? "bg-[#ececec] text-[#6a6a6a]" : "bg-[#21252b] text-[#abb2bf]/60",
    syntaxComment: isVscodeLight ? "text-[#a0a1a7] italic" : "text-[#5c6370] italic",
    syntaxCode: isVscodeLight ? "text-[#a626a4]" : "text-[#c678dd]",
    syntaxString: isVscodeLight ? "text-[#50a14f]" : "text-[#98c379]",
    minimapBg: isVscodeLight ? "bg-[#f9f9f9]/50" : "bg-[#21252b]/30"
  };

  return (
    <section id="skills" className="py-14 bg-[#090a0f] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">

        {/* Section Title */}
<div className="flex items-center gap-4 mb-8 font-mono">
  <span className="text-emerald-400 font-bold text-lg">&gt;</span>
  <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-white">
    cat <span className="text-slate-500">~/</span><span className="text-emerald-400">skills.md</span>
  </h2>
  <div className="h-px flex-1 bg-white/[0.04]" />
</div>
        
        {/* VS Code Window Container */}
        <div className={`relative overflow-hidden rounded-xl border ${isVscodeLight ? "border-black/10" : "border-white/[0.08]"} shadow-[0_30px_100px_rgba(0,0,0,0.8)]`}>
          
          {/* Top Window Header Control */}
          <div className={`flex items-center justify-between border-b ${theme.border} ${theme.bgHeader} px-4 py-2 select-none`}>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57] border border-[#e0443e]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e] border border-[#dfa023]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840] border border-[#1caa30]" />
            </div>
            
            {/* Ctrl+P Search Bar Simulyatsiyasi (Header markazida) */}
            <div className="flex-1 max-w-sm mx-auto px-2 relative">
              <div className={`w-full flex items-center gap-2 px-3 py-1 rounded text-[11px] border font-sans ${isVscodeLight ? "bg-white border-neutral-300 text-neutral-400" : "bg-[#1e1e1e] border-neutral-800 text-neutral-500"}`}>
                <Search size={12} />
                <span>search skills (e.g. Ctrl + P)</span>
              </div>
            </div>
            <div className="w-12" />
          </div>

          {/* Editor Main Layout */}
          <div className="flex font-mono text-xs relative">
            
            {/* 1. Activity Bar */}
            <div className={`${theme.bgActivity} w-12 hidden sm:flex flex-col items-center justify-between py-4 text-neutral-400 border-r ${theme.border} select-none shrink-0`}>
              <div className="flex flex-col items-center gap-5 w-full">
                <div className={`${isVscodeLight ? "text-neutral-800" : "text-emerald-400"} border-l-2 ${isVscodeLight ? "border-neutral-800" : "border-emerald-400"} w-full flex justify-center py-0.5 cursor-pointer`}><Files size={18} /></div>
                <div className="hover:text-white transition-colors cursor-pointer"><Search size={18} /></div>
                <div className="hover:text-white transition-colors cursor-pointer"><GitBranch size={18} /></div>
                <div className="hover:text-white transition-colors cursor-pointer"><BiExtension size={18} /></div>
              </div>
              <div className="relative">
                <button onClick={() => setShowSettingsMenu(!showSettingsMenu)} className="hover:text-white transition-colors block">
                  <Settings size={18} />
                </button>
                {showSettingsMenu && (
                  <div className={`absolute bottom-6 left-2 w-44 rounded-md shadow-2xl border ${isVscodeLight ? "bg-white border-neutral-200 text-neutral-800" : "bg-[#1f2428] border-neutral-800 text-neutral-300"} py-1 z-50 font-sans text-[11px]`}>
                    <div className="px-3 py-1 text-neutral-500 font-bold uppercase text-[9px] tracking-wider border-b border-neutral-700/20">Color Theme</div>
                    <button onClick={() => { setIsVscodeLight(false); setShowSettingsMenu(false); }} className="w-full flex items-center justify-between px-3 py-1.5 text-left hover:bg-emerald-500 hover:text-white transition-colors">
                      <span>One Dark Pro</span>
                      {!isVscodeLight && <Check size={12} />}
                    </button>
                    <button onClick={() => { setIsVscodeLight(true); setShowSettingsMenu(false); }} className="w-full flex items-center justify-between px-3 py-1.5 text-left hover:bg-emerald-500 hover:text-white transition-colors">
                      <span>VS Code Light</span>
                      {isVscodeLight && <Check size={12} />}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* 2. File Explorer Sidebar */}
            <div className={`${theme.bgSidebar} ${theme.textMain} border-r ${theme.border} p-2 w-48 flex flex-col gap-1 select-none shrink-0`}>
              <div className="mb-2 px-1">
                <input 
                  type="text"
                  placeholder="Filter files..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full px-2 py-1 text-[11px] rounded border font-sans focus:outline-none ${isVscodeLight ? "bg-white border-neutral-300 text-neutral-800" : "bg-[#21252b] border-neutral-800 text-neutral-200"}`}
                />
              </div>

              {/* Togglabel Folder (src/skills ni bossa ro'yxat yopiladi) */}
              <button 
                onClick={() => setIsFileTreeOpen(!isFileTreeOpen)}
                className={`text-[10px] uppercase font-bold tracking-wider ${theme.textMuted} px-1 py-1 flex items-center gap-1 w-full text-left`}
              >
                {isFileTreeOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />} 
                src / skills
              </button>
              
              {isFileTreeOpen && (
                <div className="flex flex-col gap-[2px] pl-1">
                  {Object.keys(skillsData)
                    .filter(name => name.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((fileName) => {
                      const isActive = activeFile === fileName;
                      const fileInfo = skillsData[fileName];
                      return (
                        <button
                          key={fileName}
                          onClick={() => setActiveFile(fileName)}
                          className={`flex items-center justify-between px-2 py-1 rounded text-left transition-all duration-100 ${isActive ? (isVscodeLight ? "bg-[#e4e4e4] text-black" : "text-white bg-[#2c313c]") : "hover:bg-neutral-500/5"}`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            {fileInfo.icon}
                            <span className="truncate text-[11px]">{fileName}</span>
                          </div>
                          {/* Dirty file uchun chiroyli oq / to'q doira chirog'i */}
                          {fileInfo.isDirty && (
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 mr-1 ${isActive ? "bg-emerald-400" : "bg-neutral-500"}`} />
                          )}
                        </button>
                      );
                    })}
                </div>
              )}
            </div>

            {/* 3. Code & Workspace Section (Minimap va Fake Terminal bilan) */}
            <div className="flex-1 flex flex-col min-h-[360px]">
              
              {/* Tabs Top Header Row */}
              <div className={`${theme.bgHeader} border-b ${theme.border} flex overflow-x-auto no-scrollbar`}>
                <div className={`flex items-center gap-2 px-4 py-2 ${theme.tabActive} border-t-2 ${isVscodeLight ? "border-t-blue-500" : "border-t-emerald-400"} text-[11px] border-r ${theme.border} select-none shrink-0`}>
                  {currentFileData.icon}
                  <span>{activeFile}</span>
                  {currentFileData.isDirty && <span className="text-[10px] ml-1 text-amber-500">●</span>}
                </div>
              </div>

              {/* Central Code Space & Minimap Layout */}
              <div className={`flex-1 ${theme.bgMain} flex overflow-hidden relative min-h-[180px]`}>
                
                {/* Real Editor Pane */}
                <div className="flex-1 p-3 overflow-y-auto no-scrollbar font-mono text-[12px] leading-6 select-text">
                  {currentFileData.lines.map((line, index) => {
                    const isLastLine = index === currentFileData.lines.length - 1;
                    return (
                      <div key={index} className={`flex w-full ${isLastLine ? theme.activeLineBg : ""}`}>
                        {/* 1. Line Numbers Column */}
                        <div className={`w-8 text-right pr-3 select-none ${theme.lineNumbers}`}>{index + 1}</div>
                        
                        {/* 2. Code Line content */}
                        <div className="flex-1 whitespace-pre pl-1 relative">
                          {line.type === "comment" && <span className={theme.syntaxComment}>{line.text}</span>}
                          {line.type === "code" && <span className={theme.textMain}>{line.text}</span>}
                          {line.type === "string" && <span className={theme.syntaxString}>{line.text}</span>}
                          
                          {/* 3. Blink qiluvchi cursor simulyatsiyasi */}
                          
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 10. Minimap (O'ng tomondagi juda xira real kod shakli) */}
                <div className={`w-14 md:w-20 ${theme.minimapBg} border-l ${theme.border} hidden sm:flex flex-col gap-[2px] p-1 select-none opacity-70 text-[3px] leading-[3px] overflow-hidden`}>
                  {currentFileData.lines.map((line, index) => (
                    <div key={index} className={`truncate h-[4px] ${line.type === "comment" ? "text-neutral-500" : "text-emerald-500"}`}>
                      {line.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* 14. Fake Terminal Panel (Editor ostida) */}
              <div className={`h-28 ${theme.bgTerminal} p-3 font-mono text-[11px] flex flex-col justify-between overflow-y-auto`}>
                <div className="overflow-y-auto flex-1 no-scrollbar flex flex-col gap-1">
                  {terminalLogs.map((log, idx) => (
                    <div key={idx} className={log.startsWith("WebDoston") ? "text-sky-400" : "text-neutral-400"}>{log}</div>
                  ))}
                </div>
                <form onSubmit={handleTerminalSubmit} className="flex items-center gap-1 mt-1 shrink-0 border-t border-neutral-800/20 pt-1.5">
                  <span className="text-emerald-400 shrink-0">WebDoston ~ %</span>
                  <input 
                    type="text" 
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="Type commands (ls, whoami, clear)..."
                    className="flex-1 bg-transparent border-none text-neutral-200 focus:outline-none placeholder-neutral-600"
                  />
                  <CornerDownLeft size={10} className="text-neutral-600 shrink-0" />
                </form>
              </div>

              {/* 4. Status Bar (Haqiqiy VS Code paneli) */}
              <div className={`${theme.bgHeader} border-t ${theme.border} px-4 py-1 flex items-center justify-between text-[11px] ${isVscodeLight ? "text-neutral-500" : "text-[#abb2bf]/60"} select-none font-sans shrink-0`}>
                <div className="flex items-center gap-3">
                  <span className={`${isVscodeLight ? "bg-blue-500/10 text-blue-600" : "bg-emerald-400/10 text-emerald-400"} px-1.5 rounded font-mono font-bold text-[10px]`}>main</span>
                  <span className="flex items-center gap-1.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${isVscodeLight ? "bg-blue-500" : "bg-[#98c379]"}`} /> 
                    Prettier
                  </span>
                  <span className="text-neutral-500/60 hidden md:inline">|</span>
                  <span className="items-center gap-1 text-[10px] hidden md:flex text-neutral-500">
                    <GitBranch size={11} /> Git Branch Connected
                  </span>
                </div>
                <div className="flex items-center gap-4 font-mono text-[10px]">
                  <span>UTF-8</span>
                  <span>LF</span>
                  <span className="hidden sm:inline">{currentFileData.language}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}