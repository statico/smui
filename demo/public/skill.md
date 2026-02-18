# smui -- Dark Terminal Theme for shadcn/ui

You are building a UI with the **smui** theme, a Nord-inspired dark terminal aesthetic for shadcn/ui. Read this entire document before writing any code.

## Install

```bash
npx shadcn add https://smui.statico.io/r/spacemolt-theme.json
```

This sets all shadcn/ui CSS variables. You also need JetBrains Mono:

```tsx
import { JetBrains_Mono } from "next/font/google";
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
// Apply: <body className={mono.className}>
```

## Core Rules

1. **Dark mode only.** `:root` and `.dark` are identical. There is no light mode.
2. **Zero border radius.** `--radius: 0rem`. All components have sharp corners. The only `rounded-full` elements are status dots, toggle knobs, and avatars.
3. **Monospace everything.** JetBrains Mono is the only font. No serif, no sans-serif.
4. **No emoji.** Use [lucide-react](https://lucide.dev/) icons instead.
5. **Labels are uppercase.** All labels, card titles, and status text use `uppercase` with wide letter-spacing.

## Color Palette

### Semantic Variables (shadcn)

| Variable | Hex | Usage |
|---|---|---|
| `--background` | `#1a1e24` | Page background |
| `--foreground` | `#d8dee9` | Primary text |
| `--card` | `#21262e` | Card/panel backgrounds |
| `--primary` | `#88c0d0` | Primary accent (frost blue) |
| `--muted-foreground` | `#8e99a8` | Secondary/muted text |
| `--border` | `#3b4252` | Borders |
| `--destructive` | `#d4737c` | Error/danger |

### Extended SMUI Colors

These are raw HSL triplets. Use with `hsl()` and optional alpha: `text-[hsl(var(--smui-green))]`, `border-[hsl(var(--smui-yellow)/0.3)]`, `bg-[hsl(var(--smui-frost-2)/0.04)]`.

| Variable | Hex | Usage |
|---|---|---|
| `--smui-frost-1` | `#8fbcbb` | Teal accent |
| `--smui-frost-2` | `#88c0d0` | Primary frost blue (= `--primary`) |
| `--smui-frost-3` | `#81a1c1` | Steel blue |
| `--smui-frost-4` | `#5e81ac` | Deep blue |
| `--smui-green` | `#a3be8c` | Success, online, nominal |
| `--smui-yellow` | `#ebcb8b` | Warning, standby, caution |
| `--smui-orange` | `#d08770` | Alert, degraded |
| `--smui-red` | `#d4737c` | Critical, error, danger |
| `--smui-purple` | `#b48ead` | Info, special, rare |

### Surface Hierarchy

Four background levels for depth:

| Variable | Hex | Usage |
|---|---|---|
| `--smui-surface-0` | `#1a1e24` | Page background |
| `--smui-surface-1` | `#21262e` | Cards, panels |
| `--smui-surface-2` | `#282e37` | Elevated elements |
| `--smui-surface-3` | `#2f3640` | Highlights, active states |

## Typography Patterns

### Typography Scale

| Tailwind Class | Size | Usage |
|---|---|---|
| `text-label` | 11px | Labels, badges, status text |
| `text-ui` | 13px | Buttons, nav, table body |
| `text-xs` | 12px | Card titles, small text |
| `text-sm` | 14px | Body text, list items |
| `text-heading` | 22px | Section headings |
| `text-stat` | 26px | Big stat numbers |
| `text-hero` | 42px | Hero display text |

Register the custom sizes in Tailwind v4:

```css
@theme {
  --text-label: 11px;
  --text-ui: 13px;
  --text-heading: 22px;
  --text-stat: 26px;
  --text-hero: 42px;
}
```

### Recurring Class Patterns

**Card title:**
```
text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal
```

**Field label:**
```
text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1
```

**Status/role text:**
```
text-label text-muted-foreground tracking-wider
```

**Big stat number:**
```
text-stat font-medium text-foreground tracking-tight
```

**Status badge:**
```
text-label tracking-wider uppercase px-1.5 py-px border text-[hsl(var(--smui-green))] border-[hsl(var(--smui-green)/0.3)]
```

**Section eyebrow:**
```
text-xs text-muted-foreground tracking-[2px] uppercase mb-1.5
```

## Component Patterns

### Card Structure

Always use `card-glow` for hover border effect:

```tsx
<Card className="card-glow">
  <CardHeader className="flex flex-row items-center justify-between py-2.5 px-3.5">
    <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
      section title
    </CardTitle>
    <CardDescription className="text-xs text-muted-foreground flex items-center gap-1">
      <span className="inline-block w-[5px] h-[5px] rounded-full bg-[hsl(var(--smui-green))]" />
      status
    </CardDescription>
  </CardHeader>
  <CardContent>
    {/* content */}
  </CardContent>
</Card>
```

### Status Colors in Alerts

```tsx
{/* Info -- frost blue */}
<Alert className="border-[hsl(var(--smui-frost-2)/0.25)] bg-[hsl(var(--smui-frost-2)/0.04)] [&>svg]:text-[hsl(var(--smui-frost-2))]">

{/* Warning -- yellow */}
<Alert className="border-[hsl(var(--smui-yellow)/0.25)] bg-[hsl(var(--smui-yellow)/0.04)] [&>svg]:text-[hsl(var(--smui-yellow))]">

{/* Success -- green */}
<Alert className="border-[hsl(var(--smui-green)/0.25)] bg-[hsl(var(--smui-green)/0.04)] [&>svg]:text-[hsl(var(--smui-green))]">

{/* Error -- use variant="destructive" */}
<Alert variant="destructive">
```

### Status Dot

```tsx
<span className="inline-block w-[5px] h-[5px] rounded-full bg-[hsl(var(--smui-green))]" />
```

### Utility CSS

Add these to your stylesheet:

```css
.card-glow {
  transition: border-color 0.15s;
}
.card-glow:hover {
  border-color: hsl(var(--smui-border-hover));
}

::selection {
  background: hsl(193 44% 67% / 0.2);
  color: hsl(193 44% 67%);
}
```

## Extended Palette in Tailwind

Register colors in your `globals.css` so you can use `bg-smui-frost-2`, `text-smui-red`, etc.:

```css
@theme inline {
  --color-smui-frost-1: hsl(var(--smui-frost-1));
  --color-smui-frost-2: hsl(var(--smui-frost-2));
  --color-smui-frost-3: hsl(var(--smui-frost-3));
  --color-smui-frost-4: hsl(var(--smui-frost-4));
  --color-smui-red: hsl(var(--smui-red));
  --color-smui-orange: hsl(var(--smui-orange));
  --color-smui-yellow: hsl(var(--smui-yellow));
  --color-smui-green: hsl(var(--smui-green));
  --color-smui-purple: hsl(var(--smui-purple));
  --color-smui-surface-0: hsl(var(--smui-surface-0));
  --color-smui-surface-1: hsl(var(--smui-surface-1));
  --color-smui-surface-2: hsl(var(--smui-surface-2));
  --color-smui-surface-3: hsl(var(--smui-surface-3));
  --color-smui-border-hover: hsl(var(--smui-border-hover));
}
```

## tailwind-merge Fix

Custom text sizes conflict with tailwind-merge. Extend your `cn()`:

```ts
import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": ["text-label", "text-ui", "text-heading", "text-stat", "text-hero"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Quick Reference

- Theme: dark only, Nord-inspired, zero radius, monospace
- Primary accent: `#88c0d0` (frost blue)
- Status: green=success, yellow=warning, red=error, purple=info
- Labels: always uppercase with wide tracking
- Cards: use `card-glow` class, `py-2.5 px-3.5` header padding
- No emoji -- use lucide-react icons
- See live examples: https://smui.statico.io
