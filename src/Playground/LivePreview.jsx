import { Component as ReactComponent } from "react";

function ErrorPanel({ title, message, line }) {
  return (
    <div className="m-4 flex flex-col gap-1 rounded-lg border-2 border-red-400/70 bg-red-50 px-5 py-4 font-mono text-sm text-red-600">
      <span className="font-bold tracking-tight">{title}</span>
      <span className="text-red-500">{message}</span>
      {line != null && <span className="text-xs text-red-400">Line {line}</span>}
    </div>
  );
}

/**
 * Kompilyatsiya (compile) muvaffaqiyatli bo'lsa-da, komponent render
 * paytida xato tashlashi mumkin (masalan, aniqlanmagan o'zgaruvchi).
 * Bu holatlarni shu ErrorBoundary ushlab, bir xil qizil panelda ko'rsatadi.
 */
class PreviewErrorBoundary extends ReactComponent {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <ErrorPanel title="Runtime Error" message={this.state.error.message} />;
    }
    return this.props.children;
  }
}

export default function LivePreview({ Component, error, runId, height }) {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-[#21252b] shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
      style={{ height }}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#181a1f] bg-[#21252b] px-4 py-2.5 shrink-0">
        <div className="flex items-center gap-2 font-mono text-xs text-[#abb2bf]">
          <span className="h-2 w-2 rounded-full bg-sky-400/70" />
          Preview
        </div>

        <div className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-[#abb2bf]/70">
          live
        </div>
      </div>

      {/* Preview tanasi — och fon, faqat render natijasi. Bu yer scroll qilishi mumkin. */}
      <div className="min-h-0 flex-1 overflow-auto bg-[#fafafa]">
        {error ? (
          <ErrorPanel
            title={error.kind === "compile" ? "Compile Error" : "Runtime Error"}
            message={error.message}
            line={error.line}
          />
        ) : Component ? (
          <div className="p-6 text-slate-900">
            {/* key={runId} — har yangi Run'da ErrorBoundary avvalgi xatoni unutib, qayta tiklanadi */}
            <PreviewErrorBoundary key={runId}>
              <Component />
            </PreviewErrorBoundary>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center font-mono text-xs text-slate-400">
            Run tugmasini bosing — natija shu yerda chiqadi
          </div>
        )}
      </div>
    </div>
  );
}
