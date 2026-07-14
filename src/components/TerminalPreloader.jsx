import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

export default function TerminalPreloader({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Kirish bilanoq silliq ko'rinishi uchun kichik kechikish bilan True qilamiz
    const mountTimeout = setTimeout(() => setIsMounted(true), 100);

    const command = "npm run dev";
    let charIndex = 0;
    const activeTimeouts = [];

    activeTimeouts.push({ type: "timeout", id: mountTimeout });

    // 1. Terminal paydo bo'lgach, 1 soniya kutib keyin yozishni boshlaydi
    const startTimeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (charIndex < command.length) {
          setCurrentInput(command.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          triggerTerminalLogs();
        }
      }, 80);
      
      activeTimeouts.push({ type: "interval", id: typingInterval });
    }, 1100); // 1.1 soniya kutish (kirish animatsiyasi tugashi uchun)

    activeTimeouts.push({ type: "timeout", id: startTimeout });

    // 2. Loglarni chiqarish
    const triggerTerminalLogs = () => {
      const logs = [
        { text: "", delay: 300 },
        { text: "> portfolio@0.0.0 dev", delay: 600, className: "text-slate-400/70" },
        { text: "> vite", delay: 900, className: "text-slate-400/70" },
        { text: "", delay: 1100 },
        { text: "  VITE v8.1.4  ready in 281 ms", delay: 1500, className: "text-emerald-400 font-bold" },
        { text: "", delay: 1600 },
        { text: "  ➜  Local:   http://localhost:5173/", delay: 1900, className: "text-cyan-400 font-semibold" },
        { text: "  ➜  Network: use --host to expose", delay: 2100, className: "text-slate-500" },
        { text: "  ➜  press h + enter to show help", delay: 2300, className: "text-slate-500" },
      ];

      logs.forEach((log) => {
        const t = setTimeout(() => {
          setLines((prev) => [...prev, log]);
        }, log.delay);
        activeTimeouts.push({ type: "timeout", id: t });
      });

      const finalTimeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, 2900);
      activeTimeouts.push({ type: "timeout", id: finalTimeout });
    };

    return () => {
      activeTimeouts.forEach((item) => {
        if (item.type === "timeout") clearTimeout(item.id);
        if (item.type === "interval") clearInterval(item.id);
      });
    };
  }, [onComplete]);

  return (
    // Orqa fon qop-qoradan To'q Space Ko'k rangga o'tkazildi (#0b0f19)
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0b0f19] p-4 font-mono text-xs md:text-sm select-none">
      
      {/* Terminal oynasining o'zi silliq opacity va pastga siljish bilan kirib keladi */}
      <div 
        className={`w-full max-w-2xl overflow-hidden rounded-xl border border-white/[0.06] bg-[#111625] shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-all duration-700 ease-out ${
          isMounted 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 -translate-y-4 scale-[0.98]"
        }`}
      >
        
        {/* Terminal Header - Moslashtirilgan To'q Ko'k IDE dizayni */}
        <div className="flex items-center justify-between bg-[#171e30] px-4 py-2.5 border-b border-white/[0.04]">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57] opacity-80" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e] opacity-80" />
            <span className="h-3 w-3 rounded-full bg-[#28c840] opacity-80" />
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-[11px] tracking-wide">
            <Terminal size={12} className="text-slate-500" />
            <span>bash — node</span>
          </div>
          <div className="w-10" />
        </div>

        {/* Terminal Body */}
        <div className="h-80 overflow-y-auto p-5 space-y-1.5 leading-relaxed text-slate-300">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-semibold">doston@MacBook-Pro portfolio %</span>
            <span>{currentInput}</span>
            <span className="h-4 w-[2px] bg-emerald-400 animate-pulse" />
          </div>

          {/* Loglar */}
          {lines.map((line, idx) => (
            <div key={idx} className={line.className || ""}>
              {line.text || <span className="block h-2" />}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}