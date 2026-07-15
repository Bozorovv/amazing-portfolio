import Playground from "../Playground/Playground";
import About from "../sections/Hero/About/About";
import Hero from "../sections/Hero/Hero";
import Projects from "../sections/Projects/Projects";
import Skills from "../sections/Skills/Skill";


export default function Home() {
  return (
    <>
    <Hero />
    <Projects />
    <Skills />
    <About />
    <Playground />
    </>
  );
}
