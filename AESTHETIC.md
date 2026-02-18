# SMUI Aesthetic Guide

This document describes the complete visual language of SMUI (SpaceMolt UI) -- a terminal theme for shadcn/ui with light and dark modes. Use this as a reference when building interfaces that match the SMUI aesthetic.

## Philosophy

SMUI is inspired by the bridge terminals of starships in science fiction. Every design decision stems from three principles:

1. **Terminal-grade readability** -- Monospace type, high-contrast text on dark surfaces, uppercase labels for scanability
2. **Utilitarian precision** -- No decorative border radius, no gradients, no shadows. Everything has hard edges and clear boundaries
3. **Status at a glance** -- A five-color aurora palette makes system states immediately recognizable

The theme supports both light and dark modes. Light mode uses Nord's Snow Storm palette, dark mode uses Polar Night. Extended colors (frost, aurora, surfaces) are contrast-adjusted per mode.

## Color System

### Base shadcn/ui Variables

These are the standard shadcn semantic tokens, mapped to the SMUI palette:

| Variable | HSL | Hex | Usage |
|---|---|---|---|
| `--background` | `213 16% 12%` | `#1a1e24` | Page background |
| `--foreground` | `213 27% 88%` | `#d8dee9` | Primary text |
| `--card` | `217 16% 15.5%` | `#21262e` | Card/panel backgrounds |
| `--card-foreground` | `213 27% 88%` | `#d8dee9` | Card text |
| `--primary` | `193 44% 67%` | `#88c0d0` | Primary accent (frost blue) |
| `--primary-foreground` | `213 16% 12%` | `#1a1e24` | Text on primary |
| `--secondary` | `216 15% 19%` | `#282e37` | Secondary surfaces |
| `--secondary-foreground` | `213 27% 88%` | `#d8dee9` | Text on secondary |
| `--muted` | `216 15% 19%` | `#282e37` | Muted backgrounds |
| `--muted-foreground` | `213 14% 65%` | `#8e99a8` | Muted/secondary text |
| `--accent` | `193 10% 16%` | `#242c30` | Accent hover backgrounds |
| `--accent-foreground` | `193 44% 67%` | `#88c0d0` | Accent text |
| `--destructive` | `355 52% 64%` | `#d4737c` | Error/danger |
| `--border` | `217 17% 28%` | `#3b4252` | Borders |
| `--input` | `217 17% 28%` | `#3b4252` | Input borders |
| `--ring` | `193 44% 67%` | `#88c0d0` | Focus rings |
| `--radius` | `0rem` | -- | No border radius |

### Extended SMUI Palette

Beyond the standard shadcn variables, SMUI defines additional CSS custom properties. These are stored as raw HSL triplets so they can be used with alpha values: `hsl(var(--smui-frost-2) / 0.3)`.

#### Frost Blues (Nord-inspired)

| Variable | HSL | Hex | Usage |
|---|---|---|---|
| `--smui-frost-1` | `176 25% 65%` | `#8fbcbb` | Teal accent |
| `--smui-frost-2` | `193 44% 67%` | `#88c0d0` | Primary frost blue (= `--primary`) |
| `--smui-frost-3` | `210 34% 63%` | `#81a1c1` | Steel blue |
| `--smui-frost-4` | `213 32% 52%` | `#5e81ac` | Deep blue |

#### Aurora Status Colors

These are the core semantic status colors. Use them consistently throughout your UI:

| Variable | HSL | Hex | Meaning |
|---|---|---|---|
| `--smui-green` | `92 28% 65%` | `#a3be8c` | Success, online, nominal, positive change |
| `--smui-yellow` | `40 71% 73%` | `#ebcb8b` | Warning, standby, caution |
| `--smui-orange` | `14 51% 63%` | `#d08770` | Alert, degraded |
| `--smui-red` | `355 52% 64%` | `#d4737c` | Critical, error, danger, destructive |
| `--smui-purple` | `311 24% 63%` | `#b48ead` | Info, special, rare |

#### Surface Hierarchy

Four background depth levels for creating visual layering:

| Variable | HSL | Hex | Usage |
|---|---|---|---|
| `--smui-surface-0` | `213 16% 12%` | `#1a1e24` | Page background (= `--background`) |
| `--smui-surface-1` | `217 16% 15.5%` | `#21262e` | Cards, panels (= `--card`) |
| `--smui-surface-2` | `216 15% 19%` | `#282e37` | Elevated elements, dropdowns |
| `--smui-surface-3` | `215 14% 22%` | `#2f3640` | Highlights, active states |

#### Interactive

| Variable | HSL | Hex | Usage |
|---|---|---|---|
| `--smui-border-hover` | `216 12% 37%` | `#4c566a` | Border color on hover |

### Light Mode Values

In light mode (`:root`), colors are adjusted for contrast against Snow Storm backgrounds:

#### Light Mode Base Variables

| Variable | HSL | Hex | Usage |
|---|---|---|---|
| `--background` | `218 27% 94%` | `#eceff4` | Page background (Snow Storm 3) |
| `--foreground` | `220 16% 22%` | `#2e3440` | Primary text (Polar Night 1) |
| `--card` | `218 27% 92%` | `#e5e9f0` | Card/panel backgrounds (Snow Storm 2) |
| `--primary` | `213 32% 44%` | `#4c6d94` | Primary accent (Frost 4, darkened for WCAG contrast) |
| `--muted-foreground` | `220 17% 36%` | `#4c566a` | Muted text (Polar Night 4) |
| `--border` | `219 18% 80%` | `#c9cfda` | Borders |

#### Light Mode Extended Colors

| Variable | HSL | Hex | Notes |
|---|---|---|---|
| `--smui-frost-1` | `176 30% 40%` | `#478c89` | Darkened teal |
| `--smui-frost-2` | `193 40% 42%` | `#407a95` | Darkened frost blue |
| `--smui-frost-3` | `210 34% 45%` | `#4c6d8e` | Darkened steel |
| `--smui-frost-4` | `213 32% 40%` | `#456487` | Darkened deep blue |
| `--smui-green` | `92 35% 38%` | `#558040` | Darkened success |
| `--smui-yellow` | `40 70% 38%` | `#a57e1d` | Darkened warning |
| `--smui-orange` | `14 55% 48%` | `#be5637` | Darkened alert |
| `--smui-red` | `355 55% 48%` | `#be3744` | Darkened danger |
| `--smui-purple` | `311 28% 45%` | `#8d5283` | Darkened info |

#### Light Mode Surface Hierarchy

| Variable | HSL | Hex | Usage |
|---|---|---|---|
| `--smui-surface-0` | `218 27% 94%` | `#eceff4` | Page background |
| `--smui-surface-1` | `218 27% 92%` | `#e5e9f0` | Cards, panels |
| `--smui-surface-2` | `219 28% 88%` | `#d8dee9` | Elevated elements |
| `--smui-surface-3` | `219 20% 82%` | `#c9cfda` | Highlights, active states |

### Theme Switching

Use `next-themes` for theme switching. Wrap your app:

```tsx
import { ThemeProvider } from "next-themes";

<ThemeProvider attribute="class" defaultTheme="dark">
  {children}
</ThemeProvider>
```

CSS variables automatically switch between light (`:root`) and dark (`.dark`) values.

### Using Extended Colors in Tailwind

Register the extended palette in your `@theme inline` block:

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

Then use in Tailwind: `bg-smui-frost-2`, `text-smui-red`, `border-smui-surface-3`.

For inline usage with alpha, use the raw HSL triplet: `text-[hsl(var(--smui-green))]`, `border-[hsl(var(--smui-yellow)/0.3)]`, `bg-[hsl(var(--smui-frost-2)/0.04)]`.

## Typography

### Font

JetBrains Mono is the only font. It is used for both `--font-sans` and `--font-mono`. All text is monospace.

Load it in your layout:

```tsx
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Apply as: <body className={mono.className}>
```

### Typography Scale Variables

SMUI defines a set of CSS custom properties for font sizes. These are configurable via CSS variables:

| CSS Variable | Default | Tailwind Utility | Usage |
|---|---|---|---|
| `--text-label` | `11px` | `text-label` | Labels, badges, status text, kbd shortcuts |
| `--text-ui` | `13px` | `text-ui` | Buttons, nav items, table body, alerts |
| `--text-heading` | `22px` | `text-heading` | Section headings |
| `--text-stat` | `26px` | `text-stat` | Big stat numbers |
| `--text-hero` | `42px` | `text-hero` | Hero display text |

Standard Tailwind sizes `text-xs` (12px) and `text-sm` (14px) are also used for card titles and body text respectively.

#### Registering in Tailwind v4

Add a **non-inline** `@theme` block (separate from your `@theme inline` colors). This is important -- `@theme inline` does not emit CSS custom properties, so font-size utilities won't resolve:

```css
@theme {
  --text-label: 11px;
  --text-ui: 13px;
  --text-heading: 22px;
  --text-stat: 26px;
  --text-hero: 42px;
}
```

#### tailwind-merge Configuration

Because `text-label`, `text-ui`, etc. look like color classes to tailwind-merge, you must extend your `cn()` helper so they aren't merged away by color classes like `text-foreground`:

```ts
import { extendTailwindMerge } from "tailwind-merge"

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-label",
        "text-ui",
        "text-heading",
        "text-stat",
        "text-hero",
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

#### Overriding

To adjust font sizes globally, override the CSS custom properties:

```css
:root {
  --text-label: 12px;  /* make labels slightly larger */
  --text-stat: 28px;   /* bigger stat numbers */
}
```

### Type Scale and Patterns

SMUI uses a small number of recurring typography patterns. Apply these consistently:

#### Card / Section Title
```
text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal
```
Used for card headers, section labels, and panel titles. Always uppercase with wide letter-spacing.

Example: `VESSEL CONFIG`, `SYSTEM READOUTS`, `CARGO MANIFEST`

#### Field Label
```
text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1
```
Used above form inputs, data fields, and grouped content. Slightly smaller than card titles.

Example: `VESSEL NAME`, `POWER ALLOCATION`, `AUTH CODE`

#### Status / Role Text
```
text-label text-muted-foreground tracking-wider
```
Used for secondary descriptive text like crew roles, subtitles, and status descriptions.

Example: `COMMANDING OFFICER`, `broadcast vessel identity`

#### Big Number / Stat
```
text-stat font-medium text-foreground tracking-tight
```
Used for prominent numeric displays in stat cards.

Example: `1,247,830`, `142 / 7`

#### Stat Change Indicator
```
text-xs text-[hsl(var(--smui-green))] mt-0.5
```
Used below stat numbers to show positive/negative changes. Use `--smui-green` for positive, `--smui-red` for negative.

Example: `+23,450 this cycle`

#### Section Eyebrow
```
text-xs text-muted-foreground tracking-[2px] uppercase mb-1.5
```
Used above section headings as category labels.

Example: `COMPONENTS`, `EXAMPLE // LAYOUT`

#### Section Heading
```
text-heading font-medium text-foreground tracking-tight mb-1
```
Used for main section titles on the page.

#### Body Text
```
text-sm text-muted-foreground
```
Used for descriptive paragraphs.

#### Status Badge Text
```
text-label tracking-wider uppercase px-1.5 py-px border
```
Used for inline status indicators. Combine with color classes.

### Key Typography Rules

1. **Labels are always uppercase** with `tracking-[1.5px]` or `tracking-wider`
2. **Never use serif or sans-serif fonts** -- monospace only
3. **Use muted-foreground for secondary text**, foreground for primary
4. **Primary color for emphasis** -- links, active values, important numbers
5. **Stat numbers use tracking-tight** to keep them compact

## Layout

### Border Radius

`--radius: 0rem`. All components have sharp corners. No exceptions. The only rounded elements are:
- Status indicator dots: `rounded-full` (5px circles)
- Toggle switch knobs: `rounded-full` (part of the switch metaphor)
- Avatar fallbacks: `rounded-full` (inherent to the component)

### Card Pattern

The standard card structure used throughout SMUI:

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

Key details:
- `card-glow` adds a subtle border-color transition on hover
- Header has `py-2.5 px-3.5` compact padding
- Title/description are on a single row with `justify-between`
- Status dots are 5px circles with aurora colors

### Stat Card Pattern

```tsx
<Card className="card-glow p-2.5 px-3">
  <span className="text-label text-muted-foreground tracking-[1.5px] uppercase block">
    total credits
  </span>
  <div className="text-stat font-medium text-foreground tracking-tight">
    1,247,830
  </div>
  <div className="text-xs text-[hsl(var(--smui-green))] mt-0.5">
    +23,450 this cycle
  </div>
</Card>
```

### List Item Pattern

For roster-style lists with avatars/icons and status:

```tsx
<div className="flex items-center gap-2.5 py-[7px] border-b border-border last:border-b-0">
  {/* Icon/avatar box */}
  <div className="w-[34px] h-[34px] flex items-center justify-center text-xs font-semibold tracking-wider border border-border text-muted-foreground bg-background shrink-0">
    CMD
  </div>
  {/* Content */}
  <div className="flex-1">
    <div className="text-sm">Kael Voss</div>
    <div className="text-label text-muted-foreground tracking-wider">COMMANDING OFFICER</div>
  </div>
  {/* Status badge */}
  <span className="text-label tracking-wider uppercase px-1.5 py-px border text-[hsl(var(--smui-green))] border-[hsl(var(--smui-green)/0.3)]">
    online
  </span>
</div>
```

### Data Display Pattern

For read-only data fields (like location display):

```tsx
<div>
  <span className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1">
    system
  </span>
  <div className="text-sm px-2 py-1.5 bg-background border border-border text-primary">
    GAMMA DRACONIS
  </div>
</div>
```

### Sidebar Navigation Pattern

```tsx
<div className={`flex items-center gap-2 text-ui py-[5px] px-2.5 cursor-pointer transition-all ${
  active
    ? "text-primary bg-primary/10"
    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
}`}>
  <span className={`text-xs w-3.5 text-center ${active ? "opacity-100" : "opacity-50"}`}>
    ~
  </span>
  overview
</div>
```

## Status Colors

### Consistent Status Mapping

Always use the same aurora color for the same semantic meaning:

| State | Color Variable | Examples |
|---|---|---|
| Success / Online / Nominal | `--smui-green` | "online", "active", "nominal", positive delta |
| Warning / Standby / Caution | `--smui-yellow` | "standby", "warning", "degraded" |
| Alert / Degraded | `--smui-orange` | "alert", "offline" |
| Critical / Error / Danger | `--smui-red` | "critical", "error", "reactor warning" |
| Info / Special | `--smui-purple` | special items, rare loot |
| Neutral / Inactive | `text-muted-foreground` | "off-duty", disabled |

### Status Badge Pattern

```tsx
<span className="text-label tracking-wider uppercase px-1.5 py-px border text-[hsl(var(--smui-green))] border-[hsl(var(--smui-green)/0.3)]">
  online
</span>
```

Replace `--smui-green` with the appropriate aurora color for the status.

### Status Dot Pattern

```tsx
<span className="inline-block w-[5px] h-[5px] rounded-full bg-[hsl(var(--smui-green))]" />
```

### Colored Alert Pattern

```tsx
{/* Info: frost blue */}
<Alert className="border-[hsl(var(--smui-frost-2)/0.25)] bg-[hsl(var(--smui-frost-2)/0.04)] [&>svg]:text-[hsl(var(--smui-frost-2))]">
  <Info className="h-3.5 w-3.5" />
  <div>
    <AlertTitle className="text-[hsl(var(--smui-frost-2))]">Title</AlertTitle>
    <AlertDescription>Description</AlertDescription>
  </div>
</Alert>

{/* Warning: yellow */}
<Alert className="border-[hsl(var(--smui-yellow)/0.25)] bg-[hsl(var(--smui-yellow)/0.04)] [&>svg]:text-[hsl(var(--smui-yellow))]">
  <AlertTriangle className="h-3.5 w-3.5" />
  <div>
    <AlertTitle className="text-[hsl(var(--smui-yellow))]">Title</AlertTitle>
    <AlertDescription>Description</AlertDescription>
  </div>
</Alert>

{/* Success: green */}
<Alert className="border-[hsl(var(--smui-green)/0.25)] bg-[hsl(var(--smui-green)/0.04)] [&>svg]:text-[hsl(var(--smui-green))]">
  <CheckCircle2 className="h-3.5 w-3.5" />
  <div>
    <AlertTitle className="text-[hsl(var(--smui-green))]">Title</AlertTitle>
    <AlertDescription>Description</AlertDescription>
  </div>
</Alert>

{/* Error: use the built-in destructive variant */}
<Alert variant="destructive">
  <XCircle className="h-3.5 w-3.5" />
  <div>
    <AlertTitle>Title</AlertTitle>
    <AlertDescription>Description</AlertDescription>
  </div>
</Alert>
```

The pattern for custom-colored alerts is:
- Border: `border-[hsl(var(--smui-COLOR)/0.25)]` (25% opacity)
- Background: `bg-[hsl(var(--smui-COLOR)/0.04)]` (4% opacity)
- Icon color: `[&>svg]:text-[hsl(var(--smui-COLOR))]`
- Title color: `text-[hsl(var(--smui-COLOR))]`

### Progress Bar Colors

```tsx
const colorMap = {
  default: "",                                         // uses --primary
  warn: "[&>div]:bg-[hsl(var(--smui-yellow))]",
  crit: "[&>div]:bg-[hsl(var(--smui-red))]",
  ok:   "[&>div]:bg-[hsl(var(--smui-green))]",
};

<Progress value={71} className={colorMap["warn"]} />
```

### Type Badge Pattern

For item type indicators in tables:

```tsx
const typeColors = {
  ore: "text-[hsl(var(--smui-yellow))] border-[hsl(var(--smui-yellow)/0.3)]",
  wpn: "text-[hsl(var(--smui-red))] border-[hsl(var(--smui-red)/0.3)]",
  mod: "text-[hsl(var(--smui-frost-3))] border-[hsl(var(--smui-frost-3)/0.3)]",
  ref: "text-[hsl(var(--smui-green))] border-[hsl(var(--smui-green)/0.3)]",
};

<span className={`text-label tracking-wider uppercase px-1.5 py-px border ${typeColors[type]}`}>
  {type}
</span>
```

## Interactive States

### Card Hover

Add the `card-glow` class to cards for a border-color transition on hover:

```css
.card-glow {
  transition: border-color 0.15s;
}
.card-glow:hover {
  border-color: hsl(var(--smui-border-hover));
}
```

### Focus States

Focus states use the `--ring` variable (frost blue) via shadcn's built-in focus ring system. No customization needed.

### Selection Style

```css
::selection {
  background: hsl(193 44% 67% / 0.2);
  color: hsl(193 44% 67%);
}
```

### Skeleton Shimmer

```css
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
.skeleton {
  background: linear-gradient(90deg,
    hsl(var(--smui-surface-2)) 25%,
    hsl(var(--smui-surface-3)) 50%,
    hsl(var(--smui-surface-2)) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
```

## Component Conventions

### Buttons

Use shadcn Button with uppercase text (built into the component variant). Common patterns:

```tsx
<Button>commit</Button>                    {/* Primary action */}
<Button variant="outline">cancel</Button>  {/* Secondary action */}
<Button variant="ghost" size="sm">abort</Button>  {/* Tertiary/dismiss */}
<Button size="sm" className="w-full mt-2.5">submit</Button>  {/* Full-width in card */}
```

### Badges

Active items use primary color, inactive use muted:

```tsx
<Badge variant="outline" className="text-primary border-primary/30">active</Badge>
<Badge variant="outline" className="text-muted-foreground">inactive</Badge>
```

### Tabs

Use the `line` variant for underline-style tabs:

```tsx
<Tabs defaultValue="tab1">
  <TabsList variant="line">
    <TabsTrigger value="tab1">first</TabsTrigger>
    <TabsTrigger value="tab2">second</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content</TabsContent>
</Tabs>
```

### Toggle / Switch

Manual toggle switches (not using the shadcn Switch component):

```tsx
<div className={`relative w-9 h-[18px] rounded-full border shrink-0 cursor-pointer transition-all ${
  on ? "bg-primary/10 border-primary" : "bg-background border-border"
}`}>
  <div className={`absolute top-[2px] w-3 h-3 rounded-full transition-all ${
    on ? "left-5 bg-primary" : "left-[2px] bg-muted-foreground"
  }`} />
</div>
```

### Dialog

Dialogs use the card surface with bordered header/footer:

```tsx
<div className="bg-card border border-border">
  <div className="p-2.5 px-3 border-b border-border">
    <div className="text-sm font-medium text-foreground uppercase tracking-wider">title</div>
    <div className="text-xs text-muted-foreground mt-0.5">subtitle</div>
  </div>
  <div className="p-3">
    {/* body */}
  </div>
  <div className="p-2 px-3 border-t border-border flex gap-1 justify-end">
    <Button variant="ghost" size="sm">cancel</Button>
    <Button size="sm">confirm</Button>
  </div>
</div>
```

### Separator with Text

```tsx
<div className="flex items-center gap-2 text-label text-muted-foreground uppercase tracking-wider">
  <Separator className="flex-1" />
  <span>or</span>
  <Separator className="flex-1" />
</div>
```

### Keyboard Shortcuts

```tsx
<kbd className="text-label text-muted-foreground border border-border px-1 bg-background">
  ctrl+k
</kbd>
```

### Bar Charts

Simple bar charts using divs:

```tsx
<div className="flex items-end gap-1 h-[100px]">
  {data.map((value, i) => (
    <div key={i} className="flex-1 flex flex-col items-center gap-[3px] h-full justify-end">
      <div
        className="w-full bg-primary opacity-70"
        style={{ height: `${value}%` }}
      />
      <span className="text-xs text-muted-foreground">
        {String(i + 1).padStart(2, "0")}
      </span>
    </div>
  ))}
</div>
```

Use `bg-[hsl(var(--smui-frost-4))]` to highlight specific bars.

## Icons

Use [Lucide React](https://lucide.dev/) for all icons. Never use emoji. Common sizes:

- `w-3 h-3` -- inline with small text
- `w-3.5 h-3.5` -- alerts, list items
- `w-5 h-5` -- navigation, standalone

## Runtime Accent Switching

The theme supports runtime accent color switching by updating CSS variables on `document.documentElement`. To change the accent:

1. Convert the desired hex color to HSL
2. Update `--primary`, `--ring`, `--accent-foreground`, `--sidebar-primary`, `--sidebar-accent-foreground`, `--sidebar-ring`, `--chart-1`, `--smui-frost-2` with the new HSL value
3. Darken the color and update `--accent` and `--sidebar-accent` with the darkened value

See `demo/src/components/accent-picker.tsx` for a complete reference implementation.

## Summary of Key Classes

These are the most frequently used class combinations in SMUI interfaces:

```
Card title:     text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal
Field label:    text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1
Status badge:   text-label tracking-wider uppercase px-1.5 py-px border
Big number:     text-stat font-medium text-foreground tracking-tight
Section eyebrow: text-xs text-muted-foreground tracking-[2px] uppercase mb-1.5
Section title:  text-heading font-medium text-foreground tracking-tight mb-1
Body text:      text-sm text-muted-foreground
Status dot:     inline-block w-[5px] h-[5px] rounded-full bg-[hsl(var(--smui-COLOR))]
Card hover:     card-glow (CSS class)
Active nav:     text-primary bg-primary/10
Inactive nav:   text-muted-foreground hover:text-foreground hover:bg-secondary
```
