import React from "react";

/**
 * @babel/standalone — faqat Run birinchi marta bosilganda dinamik
 * import qilinadi (code-splitting). Shu sabab boshlang'ich sahifa
 * yuklanishi og'irlashmaydi (~2MB'lik paket faqat kerak bo'lganda tortiladi).
 */
let babelPromise = null;
function loadBabel() {
  if (!babelPromise) {
    babelPromise = import("@babel/standalone");
  }
  return babelPromise;
}

export class PlaygroundError extends Error {
  constructor(message, line, kind = "compile") {
    super(message);
    this.line = line;
    this.kind = kind; // "compile" | "runtime"
  }
}

// Babelning uzun "code frame"li xato matnidan faqat qisqa, tushunarli
// qism va qator raqamini ajratib olamiz — masalan:
// "unknown: Unexpected token (5:3)\n\n  3 | ..." -> { message: "Unexpected token", line: 5 }
function parseBabelError(err) {
  const match = err.message.match(/\((\d+):(\d+)\)/);
  const line = match ? Number(match[1]) : null;

  const firstLine = err.message.split("\n")[0];
  const message = firstLine
    .replace(/^unknown:\s*/, "")
    .replace(/\s*\(\d+:\d+\)\s*$/, "")
    .trim();

  return { message: message || "Sintaksis xatosi", line };
}

/**
 * Foydalanuvchi yozgan "export default function App() {...}" ko'rinishidagi
 * JSX kodni oddiy o'zgaruvchiga aylantiramiz. Shu sababli native ES Modules
 * kerak bo'lmaydi — natijani `new Function` ichida xavfsiz ishga tushirish
 * mumkin bo'ladi.
 */
function normalizeSource(source) {
  return source.replace(/export\s+default\s+/, "const __PlaygroundComponent__ = ");
}

/**
 * JSX manba kodini compile qilib, ishlaydigan React komponentini qaytaradi.
 * Xato bo'lsa PlaygroundError tashlanadi (compile yoki runtime turi bilan).
 */
export async function compileJsx(source) {
  const Babel = await loadBabel();
  const normalized = normalizeSource(source);

  let transformed;
  try {
    transformed = Babel.transform(normalized, {
      presets: ["react"],
      filename: "App.jsx",
    }).code;
  } catch (err) {
    const { message, line } = parseBabelError(err);
    throw new PlaygroundError(message, line, "compile");
  }

  try {
    // eslint-disable-next-line no-new-func
    const factory = new Function(
      "React",
      `${transformed}
      if (typeof __PlaygroundComponent__ === "undefined") {
        throw new Error('Kod "export default" bilan bitta komponent qaytarishi kerak.');
      }
      return __PlaygroundComponent__;`
    );

    const Component = factory(React);

    if (typeof Component !== "function") {
      throw new Error("Eksport qilingan qiymat komponent (funksiya) emas.");
    }

    return Component;
  } catch (err) {
    throw new PlaygroundError(err.message, null, "runtime");
  }
}
