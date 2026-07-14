import { useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";

const shortBio =
  "Passionate frontend developer with a love for crafting intuitive user interfaces. I enjoy turning complex problems into simple, elegant solutions.";

const fullBio =
  "With several years of experience in web development, I specialize in React ecosystems and modern CSS. I believe in writing maintainable code, collaborating closely with designers, and always putting the user first. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="container py-16 md:py-24"
    >
      <SectionTitle
        id="about-title"
        title="About Me"
        subtitle="A little bit about who I am and what I do"
      />
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base leading-relaxed text-text-secondary md:text-lg">
          {shortBio}
        </p>
        {expanded && (
          <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">
            {fullBio}
          </p>
        )}
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className="mt-6 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </section>
  );
}
