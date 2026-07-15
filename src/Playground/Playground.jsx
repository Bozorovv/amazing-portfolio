import { useState, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { Terminal, Play, RotateCcw, Monitor, Code2 } from "lucide-react";

// Oddiy foydalanuvchi uchun maksimal darajada soddalashtirilgan boshlang'ich kod
const DEFAULT_CODE = `export default function App() {
  return (
    <div>
      <h1>Hello World 👋</h1>
      <p>Koddagi ushbu matnni o'zgartirib ko'ring...</p>
    </div>
  );
}`;

export default function Playground() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [runState, setRunState] = useState("idle"); // idle | running
  const [previewContent, setPreviewContent] = useState({
    title: "Hello World 👋",
    desc: "Koddagi ushbu matnni o'zgartirib ko'ring..."
  });

  // Koddagi o'zgarishlarni regex orqali parsing qilish
  const handleRun = useCallback(() => {
    setRunState("running");

    setTimeout(() => {
      try {
        const titleMatch = code.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
        const descMatch = code.match(/<p[^>]*>([\s\S]*?)<\/p>/);

        setPreviewContent({
          title: titleMatch ? titleMatch[1].trim() : "Hello World 👋",
          desc: descMatch ? descMatch[1].trim() : ""
        });
        
        setRunState("idle");
      } catch (err) {
        setRunState("idle");
        console.log(err);
        
      }
    }, 450); // Premium silliq yuklanish vaqti
  }, [code]);

  const handleReset = () => {
    setCode(DEFAULT_CODE);
    setPreviewContent({
      title: "Hello World 👋",
      desc: "Koddagi ushbu matnni o'zgartirib ko'ring..."
    });
    setRunState("idle");
  };

  return (
    <section id="playground" className="relative overflow-hidden border-t border-white/[0.03] bg-[#090a0f] py-16">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mb-8 flex items-center gap-4 font-mono select-none">
          <Terminal size={20} className="text-emerald-400" />
          <h2 className="text-lg font-black uppercase tracking-[0.22em] text-white">
            run<span className="mx-2 text-slate-600">~/</span><span className="text-emerald-400">playground.jsx</span>
          </h2>
          <div className="h-px flex-1 bg-white/[0.05]" />
        </div>

        {/* Unified IDE Window */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#1e1e1e] shadow-[0_30px_80px_rgba(0,0,0,.6)]">
          
          {/* Top Control Bar */}
          <div className="flex h-12 items-center justify-between border-b border-[#181a1f] bg-[#21252b] px-4 select-none">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/90" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#abb2bf] border-l border-white/[0.05] pl-5">
                <Code2 size={14} className="text-sky-400" />
                <span>App.jsx</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                disabled={runState === "running"}
                className="flex items-center gap-1.5 rounded-md border border-white/[0.05] bg-[#282c34] px-3 py-1.5 font-mono text-xs text-[#abb2bf] transition-colors hover:text-white disabled:opacity-50"
              >
                <RotateCcw size={12} />
                Reset
              </button>
              
              {/* TUZATILDI: Ajralib turuvchi, yuqori kontrastli faol yashil rangli Run Code tugmasi */}
              <button
                onClick={handleRun}
                disabled={runState === "running"}
                className="flex items-center gap-1.5 rounded-md bg-[#10b981] hover:bg-[#059669] px-4 py-1.5 font-mono text-xs font-bold text-white shadow-[0_4px_20px_rgba(16,185,129,0.15)] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                <Play size={11} fill="currentColor" />
                {runState === "running" ? "Compiling..." : "Run Code"}
              </button>
            </div>
          </div>

          {/* Core IDE Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[340px]">
            
            {/* LEFT: VS Code Editor */}
            <div className="flex flex-col border-r border-[#181a1f] bg-[#282c34]">
              <div className="flex items-center gap-2 bg-[#21252b] px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider text-neutral-500 select-none border-b border-[#181a1f]">
                <span>Source Code</span>
              </div>
              
              <div className="flex-1 min-h-0 text-[13px] overflow-auto">
                <CodeMirror
                  value={code}
                  onChange={(value) => setCode(value)}
                  theme={oneDark}
                  height="100%"
                  extensions={[javascript({ jsx: true })]}
                  basicSetup={{
                    lineNumbers: true,
                    foldGutter: false,
                    highlightActiveLine: true,
                  }}
                  style={{ backgroundColor: "#282c34" }}
                />
              </div>
            </div>

            {/* RIGHT: Live Workspace Preview */}
            <div className="flex flex-col bg-[#14161a]">
              <div className="flex items-center justify-between bg-[#14161a] px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider text-neutral-500 select-none border-b border-white/[0.03]">
                <span className="flex items-center gap-1"><Monitor size={10} /> Live Workspace Preview</span>
                <span className="text-[#28c840] flex items-center gap-1">
                  <span className="h-1 w-1 rounded-full bg-[#28c840] animate-ping" /> online
                </span>
              </div>
              
              <div className="flex-1 p-6 flex items-center justify-center relative select-none">
                {runState === "running" ? (
                  <div className="flex flex-col items-center gap-2 font-mono text-xs text-neutral-500">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-400 border-t-transparent" />
                    <span>Updating view...</span>
                  </div>
                ) : (
                  <div className="w-full max-w-sm rounded-xl border border-white/[0.03] bg-[#1c1f26]/60 p-6 shadow-2xl backdrop-blur-sm">
                    <div className="space-y-2">
                      {/* Har qanday murakkab csslarsiz, juda toza render ko'rinishi */}
                      <h1 className="text-xl font-black text-white tracking-tight">
                        {previewContent.title}
                      </h1>
                      <p className="text-xs leading-5 text-neutral-400">
                        {previewContent.desc}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}