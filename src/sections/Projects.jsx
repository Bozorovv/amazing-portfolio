import Button from "../components/ui/Button";
import SectionTitle from "../utils/SectionReveal";
import { projects } from "../constants/projects";
import { SectionReveal, StaggerContainer, StaggerItem } from "./AnimationComponents";

export default function Projects() {
  return (
    <SectionReveal id="projects">
      <div className="container py-16 md:py-24 max-w-5xl mx-auto px-4">
        
        {/* Ichidagi barcha elementlar ketma-ket chiqishi uchun StaggerContainer */}
        <StaggerContainer className="flex flex-col gap-10">
          
          {/* 1. Section Title Stagger Element */}
          <StaggerItem>
            <div id="projects-title" className="w-full">
              <SectionTitle
                title="Projects"
                subtitle="Selected work and side projects"
              />
            </div>
          </StaggerItem>

          {/* 2. Projects Grid Layout */}
          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map(({ title, description, tags, github, live }, ) => (
              <StaggerItem key={title}>
                {/* Premium Browser Window Box:
                  "premium-hover" klassi orqali yengil translateY(-2px), border va shadow transition berildi.
                */}
                <article className="premium-hover h-full flex flex-col rounded-xl border border-white/[0.06] bg-[#12141a] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  
                  {/* Mac style Browser Window Header Row */}
                  <div className="bg-[#161920] px-4 py-3 border-b border-white/[0.04] flex items-center justify-between select-none">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
                    </div>
                    {/* URL Bar Simulyatsiyasi */}
                    <div className="bg-[#090a0f] text-[10px] text-neutral-500 px-6 py-0.5 rounded-md font-mono max-w-[180px] truncate">
                      localhost:3000/{title.toLowerCase().replace(/\s+/g, "-")}
                    </div>
                    <div className="w-6" />
                  </div>

                  {/* Browser Window Core Content Area */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="mb-2 text-xl font-bold text-white tracking-tight">{title}</h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-400">
                      {description}
                    </p>

                    {/* Tags List */}
                    <ul
                      className="mb-6 flex flex-wrap gap-2"
                      aria-label="Technologies used"
                    >
                      {tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md bg-white/[0.03] border border-white/[0.05] px-2.5 py-0.5 text-xs font-mono font-medium text-neutral-300"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    {/* Action Buttons with minimal design */}
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <Button
                        as="a"
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                        size="sm"
                        className="premium-hover font-mono text-xs"
                        aria-label={`View ${title} on GitHub`}
                      >
                        GitHub
                      </Button>
                      <Button
                        as="a"
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="sm"
                        className="premium-hover font-mono text-xs bg-white text-black hover:bg-neutral-200"
                        aria-label={`View ${title} live demo`}
                      >
                        Live Demo
                      </Button>
                    </div>
                  </div>

                </article>
              </StaggerItem>
            ))}
          </div>

        </StaggerContainer>
      </div>
    </SectionReveal>
  );
}