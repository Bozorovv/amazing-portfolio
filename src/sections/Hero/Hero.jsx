import HeroContent from "./HeroContent";
import CodeEditor from "./CodeEditor";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#090d16_0%,#0b1120_45%,#090d16_100%)]" />

        {/* Left Aurora */}
        <div className="absolute -left-40 top-20 h-[650px] w-[650px] rounded-full bg-primary/15 blur-[180px]" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[220px]" />

        {/* Right Aurora */}
        <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-400/8 blur-[200px]" />

        {/* Top Glow */}
        <div className="absolute left-1/2 top-[-250px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[180px]" />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Noise */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.015]
            [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]
            [background-size:18px_18px]
          "
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,.45) 100%)",
          }}
        />
      </div>

      <div className="container">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <HeroContent />
          <CodeEditor />
        </div>
      </div>
    </section>
  );
}