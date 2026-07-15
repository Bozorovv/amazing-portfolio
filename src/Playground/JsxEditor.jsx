import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { RotateCcw, Check } from "lucide-react";
import { DiReact } from "react-icons/di";

/**
 * Run tugmasi holatlari: idle -> running -> success/error -> (avtomatik) idle.
 * Animatsiyalar ataylab minimal: faqat rang va opacity o'zgaradi,
 * hech qanday bounce/rotate/flashy effekt yo'q.
 */
function RunButton({ runState, onClick }) {
  const isRunning = runState === "running";
  const isSuccess = runState === "success";
  const isError = runState === "error";

  const label = isRunning
    ? "Running..."
    : isSuccess
    ? "Success"
    : isError
    ? "Error"
    : "Run";

  const colorClass = isSuccess
    ? "bg-emerald-500 text-[#0d1117]"
    : isError
    ? "bg-red-500/90 text-white"
    : "bg-emerald-500/90 text-[#0d1117] hover:bg-emerald-400";

  return (
    <button
      onClick={onClick}
      disabled={isRunning}
      className={`flex min-w-[96px] items-center justify-center gap-1.5 rounded-md px-4 py-1.5 font-mono text-xs font-medium transition-colors duration-200 disabled:cursor-not-allowed ${colorClass}`}
    >
      {isRunning && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#0d1117]" />}
      {isSuccess && <Check size={12} />}
      {label}
    </button>
  );
}

export default function JsxEditor({ code, onChange, runState, onRun, onReset, height }) {
  const isRunning = runState === "running";

  return (
    <div
      className="flex flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-[#21252b] shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
      style={{ height }}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#181a1f] bg-[#21252b] px-4 py-2.5 shrink-0">
        <div className="flex items-center gap-2 font-mono text-xs text-[#abb2bf]">
          <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
          App.jsx
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-[#61dafb]/20 bg-[#61dafb]/10 px-2 py-0.5 font-mono text-[10px] text-[#61dafb]">
          <DiReact size={12} />
          React
        </div>
      </div>

      {/* Editor tanasi — balandlik qat'iy, faqat shu yer scroll bo'ladi */}
      <div className="min-h-0 flex-1 overflow-hidden">
        <CodeMirror
          value={code}
          onChange={onChange}
          theme={oneDark}
          height="100%"
          extensions={[javascript({ jsx: true })]}
          basicSetup={{ lineNumbers: true, foldGutter: false, highlightActiveLine: true }}
          style={{ height: "100%", fontSize: 13 }}
        />
      </div>

      {/* Footer — Run / Reset */}
      <div className="flex items-center justify-between border-t border-[#181a1f] bg-[#21252b] px-4 py-2.5 shrink-0">
        <button
          onClick={onReset}
          disabled={isRunning}
          className="flex items-center gap-1.5 rounded-md border border-white/[0.06] px-3 py-1.5 font-mono text-xs text-[#abb2bf] transition-colors hover:text-white disabled:opacity-40"
        >
          <RotateCcw size={12} />
          Reset
        </button>

        <RunButton runState={runState} onClick={onRun} />
      </div>
    </div>
  );
}
