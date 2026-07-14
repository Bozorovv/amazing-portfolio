import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";
import { projects } from "../constants/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="container py-16 md:py-24"
    >
      <SectionTitle
        id="projects-title"
        title="Projects"
        subtitle="Selected work and side projects"
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map(({ title, description, tags, github, live }) => (
          <Card key={title} as="article" className="flex flex-col">
            <h3 className="mb-2 text-xl font-bold text-text">{title}</h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-text-muted">
              {description}
            </p>
            <ul
              className="mb-6 flex flex-wrap gap-2"
              aria-label="Technologies used"
            >
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button
                as="a"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
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
                aria-label={`View ${title} live demo`}
              >
                Live
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
