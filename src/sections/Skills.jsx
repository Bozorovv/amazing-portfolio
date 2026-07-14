import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";
import { skills } from "../constants/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="container py-16 md:py-24"
    >
      <SectionTitle
        id="skills-title"
        title="Skills"
        subtitle="Technologies and tools I work with"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ title, items }) => (
          <Card key={title} as="article">
            <h3 className="mb-4 text-lg font-bold text-text">{title}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-background px-3 py-1 text-sm text-text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
