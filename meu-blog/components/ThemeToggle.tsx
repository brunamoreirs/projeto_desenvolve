"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-4 py-2 rounded-md text-sm font-medium 
                 bg-purple-500 dark:bg-purple-700 
                 text-white 
                 shadow-md hover:shadow-lg transition-colors"
    >
      {theme === "light" ? "🌙 Escuro" : "☀️ Claro"}
    </button>
  );
}
