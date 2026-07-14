import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";
import TerminalPreloader from "./components/TerminalPreloader";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* 1. Terminal Animatsiyasi */}
      {loading && <TerminalPreloader onComplete={() => setLoading(false)} />}

      {/* 2. Asosiy Sayt - Opacity va mayin masshtab effekti bilan */}
      <div 
        className={`transition-all duration-[1200ms] ease-in-out ${
          loading 
            ? "opacity-0 scale-[0.98] pointer-events-none fixed inset-0 overflow-hidden" 
            : "opacity-100 scale-100"
        }`}
      >
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;