"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
  fontScale: number;
  setFontScale: (scale: number) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [fontScale, setFontScale] = useState<number>(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setMounted(true);
      try {
        const savedTheme = localStorage.getItem("jn_theme");
        if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);
        else if (window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");

        const savedScale = localStorage.getItem("jn_fscale");
        if (savedScale) setFontScale(parseFloat(savedScale));
      } catch (e) {
        // ignore
      }
    }, 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("jn_theme", theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.style.setProperty("--font-scale", fontScale.toString());
    localStorage.setItem("jn_fscale", fontScale.toString());
  }, [fontScale, mounted]);

  const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, fontScale, setFontScale }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
