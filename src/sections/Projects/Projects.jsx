import { useState } from "react";
import { Globe, Layers3, ExternalLink } from "lucide-react";
import { GiThunderBlade } from "react-icons/gi";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce App",
    browserPath: "localhost:3000/shops/electro-mart",
    liveUrl: "https://shop.webdoston.com",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    techStack: [
      { name: "React", bg: "bg-sky-500/10", text: "text-sky-400" },
      { name: "Tailwind CSS", bg: "bg-cyan-500/10", text: "text-cyan-400" },
      { name: "Next.js 14", bg: "bg-white/10", text: "text-white" },
      { name: "Stripe", bg: "bg-indigo-500/10", text: "text-indigo-400" },
    ],
    description: "Multi-vendor platformasi, real-vaqt rejimida inventarizatsiya va premium Stripe to'lovi integratsiyalangan. Performans va UX'ga urg'u berilgan.",
  },
  {
    id: 2,
    title: "Crypto Dashboard",
    browserPath: "doston-dev.github.io/crypto-vision",
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=600&auto=format&fit=crop",
    techStack: [
      { name: "React", bg: "bg-sky-500/10", text: "text-sky-400" },
      { name: "Chart.js", bg: "bg-rose-500/10", text: "text-rose-400" },
      { name: "Framer Motion", bg: "bg-fuchsia-500/10", text: "text-fuchsia-400" },
      { name: "CoinGecko API", bg: "bg-emerald-500/10", text: "text-emerald-400" },
    ],
    description: "Kriptovalyuta kurslarini real-vaqt rejimida kuzatuvchi, murakkab chartlar va silliq animatsiyalarga ega bo'lgan analitik interfeys.",
  },
  {
    id: 3,
    title: "Chat Application",
    browserPath: "chat.webdoston.com",
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=600&auto=format&fit=crop",
    techStack: [
      { name: "React", bg: "bg-sky-500/10", text: "text-sky-400" },
      { name: "Firebase", bg: "bg-amber-500/10", text: "text-amber-400" },
      { name: "Zustand", bg: "bg-red-500/10", text: "text-red-400" },
      { name: "Sass", bg: "bg-pink-500/10", text: "text-pink-400" },
    ],
    description: "Guruhli va shaxsiy chatlar, rasm almashish hamda Firebase orqali xabarlarni saqlash imkoniyatiga ega bo'lgan silliq real-vaqt chat dasturi.",
  },
];

export default function Projects() {
  const [activeProjectId, setActiveProjectId] = useState(projectsData[0].id);
  const activeProject = projectsData.find((p) => p.id === activeProjectId);

  return (
    <section id="projects" className="py-14 relative overflow-hidden bg-[#090a0f]">
      
      <div className="absolute inset-0 -z-10 opacity-[0.02] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/[0.03] blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-8 font-mono">
          <Layers3 size={20} className="text-emerald-400" />
          <h2 className="text-xl font-bold uppercase tracking-[0.25em] text-white">
            git <span className="text-slate-500">status</span> <span className="text-emerald-400">./projects</span>
          </h2>
          <div className="h-px flex-1 bg-white/[0.04]" />
        </div>

        {/* Asosiy Oyna */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0f111a] shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
          
          {/* Header (Tablar joylashgan qism) — Pastki qismida border yo'q, tablar o'zi chegarani yopadi */}
          <div className="flex items-end bg-[#141724] px-2 pt-2">
            
            {/* Mac Buttons */}
            <div className="flex items-center gap-1.5 px-4 mb-3.5 select-none shrink-0">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57] border border-[#e0443e]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e] border border-[#dfa023]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840] border border-[#1caa30]" />
            </div>

            {/* Haqiqiy Brauzer Tablari */}
           <nav className="flex-1 flex overflow-x-auto font-mono text-xs no-scrollbar items-end">
  {projectsData.map((project) => {
    const isActive = activeProjectId === project.id;
    return (
      <button
        key={project.id}
        onClick={() => setActiveProjectId(project.id)}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-t-xl transition-all duration-200 relative whitespace-nowrap text-xs ${
          isActive
            ? "text-white bg-[#0f111a] font-bold shadow-[0_-4px_16px_rgba(0,0,0,0.3)] border-t border-x border-white/15"
            : "text-slate-500 hover:text-slate-300 bg-black/20 hover:bg-black/10 border-t border-x border-transparent mb-[1px]"
        }`}
      >
        {/* Faol tab tepasidagi yorqin emerald chiziq (Brauzer vibe) */}
        {isActive && (
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-emerald-400 rounded-t-xl" />
        )}

        {/* Nuqta effekti — faol holatda pulsatsiya (chiroq) beradi */}
        <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
          isActive 
            ? "bg-emerald-400 shadow-[0_0_10px_#34d399,0_0_4px_#34d399]" 
            : "bg-slate-600"
        }`} />
        
        <span className={isActive ? "text-emerald-400" : ""}>
          {project.title}
        </span>

        {/* Pastki uchrashish chizig'ini silliq yopish uchun separator */}
        {isActive && (
          <div className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-[#0f111a] z-20" />
        )}
      </button>
    );
  })}
</nav>
          </div>

          {/* Browser Body */}
          <div className="p-6 flex flex-col items-stretch">
            
            {/* URL Bar */}
            <div className="w-full flex items-center gap-3 bg-[#08090e] border border-white/[0.04] rounded-xl px-4 py-2 mb-4 text-slate-500 font-mono text-xs select-none">
              <Globe size={13} className="text-slate-600 shrink-0" />
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                <span className="text-emerald-500/70">https://</span>{activeProject.browserPath}
              </div>
            </div>

            {/* Content Layout */}
            <div className="w-full flex flex-col gap-4">
              
              {/* Image Preview */}
              <div className="w-full relative group overflow-hidden rounded-xl border border-white/[0.06] bg-[#08090e] aspect-video md:max-h-[240px] flex items-center justify-center shadow-md">
                <img 
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
                
                <div className="absolute inset-0 bg-[#090a0f]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-mono text-xs bg-[#0f111a] px-4 py-2 rounded-lg border border-white/[0.08] hover:border-emerald-500/40 shadow-2xl">
                    <ExternalLink size={13} />
                    View Live
                  </a>
                </div>
              </div>

              {/* Dev Vibe - Text Description */}
              <div className="w-full text-left flex flex-col items-start font-mono">
         <div className="w-full font-mono text-sm">

  <div className="mb-5">
    <span className="text-pink-500">const</span>{" "}
    <span className="text-sky-400">project</span>{" "}
    <span className="text-white">=</span>{" "}
    <span className="text-yellow-400">{"{"}</span>

    <div className="mt-3 space-y-2 border-l border-white/6 pl-5">

      <div>
        <span className="text-violet-400">name</span>
        <span className="text-slate-500">:</span>{" "}
        <span className="text-emerald-400">
          "{activeProject.title}"
        </span>
        <span className="text-slate-500">,</span>
      </div>

      <div>
        <span className="text-violet-400">type</span>
        <span className="text-slate-500">:</span>{" "}
        <span className="text-orange-400">
          "Frontend Application"
        </span>
        <span className="text-slate-500">,</span>
      </div>

      <div>
        <span className="text-violet-400">status</span>
        <span className="text-slate-500">:</span>{" "}
        <span className="text-emerald-400">
          "Production"
        </span>
        <span className="text-slate-500">,</span>
      </div>

      <div>
        <span className="text-violet-400">description</span>
        <span className="text-slate-500">:</span>{" "}
        <span className="text-slate-300">
          "{activeProject.description}"
        </span>
        <span className="text-slate-500">,</span>
      </div>

      <div className="flex items-start gap-2">
        <span className="text-violet-400">
          stack
        </span>

        <span className="text-slate-500">:</span>

        <div className="flex flex-wrap gap-2">
          {activeProject.techStack.map((tech) => (
            <span
              key={tech.name}
              className={`rounded-md px-2 py-1 text-[10px] uppercase tracking-wider ${tech.bg} ${tech.text}`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>

    </div>

    <div className="mt-1">
      <span className="text-yellow-400">{"}"}</span>
    </div>

  </div>

 

</div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 text-xs pl-4">
                  <a 
                    href={activeProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.08] bg-[#08090e] text-white hover:border-emerald-400/40 hover:text-emerald-400 transition-all duration-200"
                  >
                    <span className="text-purple-400">run</span>_live()
                    <ExternalLink size={12} className="opacity-70" />
                  </a>
                  <a 
                    href={activeProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-transparent text-slate-500 hover:text-white hover:bg-white/[0.03] transition-all duration-200"
                  >
                    <span className="text-slate-600">git</span> fetch_source
                    <GiThunderBlade size={12} />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}