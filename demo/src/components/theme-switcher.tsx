"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className="w-8 h-8 flex items-center justify-center border border-border text-muted-foreground">
        <Moon className="w-3.5 h-3.5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-8 h-8 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-[hsl(var(--smui-border-hover))] transition-colors cursor-pointer"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-3.5 h-3.5" />
      ) : (
        <Moon className="w-3.5 h-3.5" />
      )}
    </button>
  );
}
