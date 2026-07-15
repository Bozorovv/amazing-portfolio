import { useEffect, useState } from "react";
import { Folder, FileText, Briefcase, User, Globe, Moon, Sun, Terminal, Menu, X, Gamepad } from "lucide-react";

// Ikonkalar har xil rangda (xuddi VS Code'dagi Material Icon Theme kabi)
const navigation = [
  { label: "Home", href: "#hero", icon: <FileText size={13} className="text-sky-400" /> },
  { label: "Projects", href: "#projects", icon: <Folder size={13} className="text-amber-400" /> },
  { label: "Experience", href: "#skills", icon: <Briefcase size={13} className="text-purple-400" /> },
  { label: "About", href: "#about", icon: <User size={13} className="text-emerald-400" /> },
  { label: "Playground", href: "#playground", icon: <Gamepad size={13} className="text-emerald-400" /> },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const handleNavClick = () => setMenuOpen(false);

  const toggleTheme = () => setDark((prev) => !prev);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.04] bg-[#161923]/80 backdrop-blur-md">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Left: Logo */}
                <a href="#hero" className="flex shrink-0 items-center gap-2 font-mono">
            <div className="flex h-7 w-7 items-center justify-center rounded-md border border-emerald-500/20 bg-emerald-500/10">
              <Terminal size={14} className="text-emerald-400" />
            </div>
            <div className="text-sm font-bold tracking-tight text-white">
              web.doston
              <span
                className="ml-0.5 text-emerald-400"
                style={{ animation: "nav-cursor-blink 1s step-end infinite" }}
              >
                _
              </span>
            </div>
          </a>

          {/* Center: URL Bar (Hali ham o'sha kreativ muhitni ushlab turadi) */}
          <div className="hidden lg:flex items-center gap-2 bg-[#0d1117]/60 border border-white/[0.05] rounded-lg px-3 py-1.5 w-[320px] text-slate-500 font-mono text-xs mx-4">
            <Globe size={12} className="text-slate-500 shrink-0" />
            <div className="overflow-hidden text-ellipsis whitespace-nowrap select-none">
              localhost:3000/<span className="text-slate-300">portfolio</span>
            </div>
          </div>

          {/* Right: Hammabop lekin Dev-style Navigatsiya */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1 font-mono text-xs">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 rounded-md px-3 py-1.5 text-slate-400 border border-transparent transition-all duration-200 hover:bg-[#0d1117] hover:text-white hover:border-white/[0.04]"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Far Right: Tools */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-white/[0.05] bg-[#0d1117]/40 text-slate-400 transition-all duration-200 hover:text-emerald-400"
            >
              {dark ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            <a
              href="#footer"
              className="
                hidden
                md:inline-flex
                items-center
                justify-center
                rounded-md
                border
                border-white/[0.05]
                bg-[#0d1117]/60
                px-3
                py-1.5
                font-mono
                text-xs
                text-slate-300
                transition-all
                duration-200
                hover:border-emerald-500/40
                hover:text-emerald-400
              "
            >
              contact()
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-white/[0.05] bg-[#0d1117]/40 text-white md:hidden"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
          } md:hidden font-mono text-xs`}
        >
          <nav className="mb-4 rounded-xl border border-white/[0.05] bg-[#0d1117] p-4">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-slate-400 hover:bg-[#161923] hover:text-white"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-3 flex items-center justify-center rounded-lg border border-white/[0.05] bg-[#161923] py-2 text-slate-300 hover:text-emerald-400"
            >
              contact()
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}