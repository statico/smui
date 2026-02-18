"use client";

import { useState, useCallback } from "react";

const PRESETS = [
  { name: "Frost 2", hex: "#88c0d0" },
  { name: "Frost 1", hex: "#8fbcbb" },
  { name: "Frost 3", hex: "#81a1c1" },
  { name: "Frost 4", hex: "#5e81ac" },
  { name: "Green", hex: "#a3be8c" },
  { name: "Yellow", hex: "#ebcb8b" },
  { name: "Orange", hex: "#d08770" },
  { name: "Red", hex: "#bf616a" },
  { name: "Purple", hex: "#b48ead" },
];

function hexToHSL(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return `0 0% ${Math.round(l * 100)}%`;
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

function darkenForAccentBg(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  const s = max === min ? 0 : (max - min) / (1 - Math.abs(max + min - 1));
  if (max !== min) {
    const d = max - min;
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  return `${Math.round(h * 360)} ${Math.round(Math.min(s, 0.1) * 100)}% 16%`;
}

export function AccentPicker() {
  const [active, setActive] = useState("#88c0d0");

  const applyAccent = useCallback((hex: string) => {
    setActive(hex);
    const root = document.documentElement;
    const hsl = hexToHSL(hex);
    const dimHsl = darkenForAccentBg(hex);
    root.style.setProperty("--primary", `hsl(${hsl})`);
    root.style.setProperty("--ring", `hsl(${hsl})`);
    root.style.setProperty("--accent-foreground", `hsl(${hsl})`);
    root.style.setProperty("--sidebar-primary", `hsl(${hsl})`);
    root.style.setProperty("--sidebar-accent-foreground", `hsl(${hsl})`);
    root.style.setProperty("--sidebar-ring", `hsl(${hsl})`);
    root.style.setProperty("--chart-1", `hsl(${hsl})`);
    root.style.setProperty("--smui-frost-2", hsl);
    root.style.setProperty("--accent", `hsl(${dimHsl})`);
    root.style.setProperty("--sidebar-accent", `hsl(${dimHsl})`);
  }, []);

  return (
    <div className="flex items-center justify-center gap-1.5 py-2 px-5 bg-card border-b border-border text-xs text-muted-foreground tracking-widest uppercase">
      <span>accent</span>
      {PRESETS.map((p) => (
        <button
          key={p.hex}
          title={p.name}
          onClick={() => applyAccent(p.hex)}
          className="w-[18px] h-[18px] border-2 cursor-pointer transition-colors"
          style={{
            backgroundColor: p.hex,
            borderColor: active === p.hex ? "hsl(219 28% 94%)" : "transparent",
          }}
        />
      ))}
      <input
        type="color"
        value={active}
        onChange={(e) => applyAccent(e.target.value)}
        title="Custom accent"
        className="w-[18px] h-[18px] border border-border cursor-pointer bg-transparent p-0 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none"
      />
    </div>
  );
}
