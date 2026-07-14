import { useEffect, useMemo, useState } from "react";
import ThemeContext from "./theme-context";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      isDark: theme === "dark",
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}