import { useEffect, useState } from "react";
import { ArrowUp, Cpu, Mail, Terminal, Send } from "lucide-react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="footer" className="relative border-t border-white/[0.04] bg-[#07080d] pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        {/* terminal command */}

        <div className="mb-10 flex items-center gap-3 font-mono text-xs tracking-[0.28em]">
          <Terminal size={15} className="text-emerald-400" />

          <span className="text-emerald-400">$</span>

          <span className="text-neutral-300">connect</span>

          <span className="animate-pulse text-emerald-400">_</span>
        </div>

        {/* dock */}

        <div className="mb-14 flex justify-center">
          <div
            className="
              flex
              items-center
              gap-5

              rounded-3xl

              border
              border-white/[0.05]

              bg-[#11151d]/80

              px-7
              py-4

              backdrop-blur-xl

              shadow-[0_20px_80px_rgba(0,0,0,.45)]
            "
          >
            <a
              href="#"
              className="
                group
                relative

                rounded-2xl

                border
                border-white/[0.04]

                bg-[#171c24]

                p-4

                transition-all
                duration-300

                hover:-translate-y-2
                hover:border-sky-500/40
                hover:bg-sky-500/10
              "
            >
              <Send size={22} />

              <span
                className="
                  absolute
                  -top-10
                  left-1/2

                  -translate-x-1/2

                  whitespace-nowrap

                  rounded-md

                  border
                  border-white/[0.06]

                  bg-[#0f1319]

                  px-2
                  py-1

                  font-mono
                  text-[10px]

                  opacity-0

                  transition

                  group-hover:opacity-100
                "
              >
                t.me/webdoston
              </span>
            </a>
            <a
              href="#"
              className="
                group
                relative

                rounded-2xl

                border
                border-white/[0.04]

                bg-[#171c24]

                p-4

                transition-all
                duration-300

                hover:-translate-y-2
                hover:border-white/20
              "
            >
              <BsGithub size={22} />

              <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/[0.06] bg-[#0f1319] px-2 py-1 font-mono text-[10px] opacity-0 transition group-hover:opacity-100">
                github.com/webdoston
              </span>
            </a>
            <a
              href="#"
              className="
                group
                relative

                rounded-2xl

                border
                border-white/[0.04]

                bg-[#171c24]

                p-4

                transition-all
                duration-300

                hover:-translate-y-2
               hover:border-red-500/20
                hover:bg-red-500/10
              "
            >
              <BsInstagram size={22} />

              <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/[0.06] bg-[#0f1319] px-2 py-1 font-mono text-[10px] opacity-0 transition group-hover:opacity-100">
                github.com/webdoston
              </span>
            </a>{" "}
            <a
              href="#"
              className="
                group
                relative

                rounded-2xl

                border
                border-white/[0.04]

                bg-[#171c24]

                p-4

                transition-all
                duration-300

                hover:-translate-y-2
                hover:border-blue-500/40
                hover:bg-blue-500/10
              "
            >
              <BsLinkedin size={22} />

              <span
                className="
                  absolute
                  -top-10
                  left-1/2

                  -translate-x-1/2

                  whitespace-nowrap

                  rounded-md

                  border
                  border-white/[0.06]

                  bg-[#0f1319]

                  px-2
                  py-1

                  font-mono
                  text-[10px]

                  opacity-0

                  transition

                  group-hover:opacity-100
                "
              >
                linkedin.com/in/webdoston
              </span>
            </a>
            <a
              href="mailto:hello@webdoston.dev"
              className="
                group
                relative

                rounded-2xl

                border
                border-white/[0.04]

                bg-[#171c24]

                p-4

                transition-all
                duration-300

                hover:-translate-y-2
                hover:border-emerald-500/40
                hover:bg-emerald-500/10
              "
            >
              <Mail size={22} />

              <span
                className="
                  absolute
                  -top-10
                  left-1/2

                  -translate-x-1/2

                  whitespace-nowrap

                  rounded-md

                  border
                  border-white/[0.06]

                  bg-[#0f1319]

                  px-2
                  py-1

                  font-mono
                  text-[10px]

                  opacity-0

                  transition

                  group-hover:opacity-100
                "
              >
                hello@webdoston.dev
              </span>
            </a>
          </div>
        </div>

        {/* system status */}

        <div
          className="
            flex
            flex-col
            gap-5

            border-t
            border-white/[0.04]

            pt-6

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* left */}

          <div className="space-y-2 font-mono text-xs text-neutral-500">
            <div className="flex items-center gap-2">
              <Cpu size={13} className="text-emerald-400" />

              <span>web.doston</span>
            </div>

            <div>build: react + vite + tailwind</div>

            <div>version: v1.0.0</div>
          </div>

          {/* center */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-4

              font-mono
              text-xs
              text-neutral-500
            "
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Open to work
            </span>

            <span className="text-neutral-700">│</span>

            <span>Ping: 18ms</span>

            <span className="text-neutral-700">│</span>

            <span>Branch: main</span>
          </div>

          {/* right */}

          <div className="flex items-center gap-3">
            <div
              className="
                rounded-lg

                border
                border-white/[0.05]

                bg-[#12161d]

                px-3
                py-1

                font-mono
                text-sm
                text-neutral-300
              "
            >
              {time} UZ
            </div>

            <button
              onClick={scrollTop}
              className="
                rounded-lg

                border
                border-white/[0.05]

                bg-[#12161d]

                p-2

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-emerald-500/40
                hover:text-emerald-400
              "
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* eof */}

        <div
          className="
            mt-8

            border-t
            border-white/[0.04]

            pt-5

            text-center

            font-mono
            text-[11px]

            tracking-[0.22em]

            text-neutral-700
          "
        >
          Process exited successfully.
        </div>
      </div>
    </footer>
  );
}
