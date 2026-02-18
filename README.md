# smui // spacemolt ui

A dark terminal-aesthetic theme for [shadcn/ui](https://ui.shadcn.com). Nord-inspired colors, JetBrains Mono everywhere, zero border radius. Spaceship terminals don't have light mode.

**Demo:** [smui.spacemolt.com](https://smui.spacemolt.com)

## Install

```bash
npx shadcn add https://smui.spacemolt.com/r/spacemolt-theme.json
```

Then load [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) in your app. With Next.js:

```tsx
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function Layout({ children }) {
  return <html><body className={mono.className}>{children}</body></html>;
}
```

Or copy the [CSS variables](src/globals.css) directly into your project.

## What you get

- All shadcn/ui CSS variables mapped to a Nord-inspired dark palette
- `--primary` = frost blue accent (`#88c0d0`)
- Four-level surface hierarchy (`surface-0` through `surface-3`)
- Five chart colors from the frost/aurora palette
- Sidebar variables pre-configured
- `0rem` border radius (sharp edges)
- JetBrains Mono as the default sans font

## Extended palette

Beyond shadcn's base variables, the theme includes:

| Variable | Color | Hex |
|---|---|---|
| `--smui-frost-1` | Teal | `#8fbcbb` |
| `--smui-frost-2` | Frost blue | `#88c0d0` |
| `--smui-frost-3` | Steel | `#81a1c1` |
| `--smui-frost-4` | Deep blue | `#5e81ac` |
| `--smui-red` | Aurora red | `#d4737c` |
| `--smui-orange` | Aurora orange | `#d08770` |
| `--smui-yellow` | Aurora yellow | `#ebcb8b` |
| `--smui-green` | Aurora green | `#a3be8c` |
| `--smui-purple` | Aurora purple | `#b48ead` |
| `--smui-surface-0` | Darkest bg | `#1a1e24` |
| `--smui-surface-1` | Card bg | `#21262e` |
| `--smui-surface-2` | Elevated bg | `#282e37` |
| `--smui-surface-3` | Highlight bg | `#2e3440` |
| `--smui-border-hover` | Hover border | `#525d6e` |

Use them with Tailwind: `bg-smui-frost-2`, `text-smui-red`, `border-smui-surface-3`, etc.

## Design guide

See [AESTHETIC.md](AESTHETIC.md) for the complete design system reference -- typography patterns, status color conventions, component structures, and utility CSS. This document is designed for both humans and LLMs building interfaces with the SMUI aesthetic.

## Accent color switching

The theme's accent color can be swapped at runtime by updating a few CSS variables. See `demo/src/components/accent-picker.tsx` for a reference implementation that cycles through all nine Nord palette colors.

## Files

```
AESTHETIC.md                       # Complete design system reference
registry/spacemolt-theme.json      # shadcn registry theme (install with npx shadcn add)
src/globals.css                    # Reference CSS with all variables
demo/                              # Next.js demo app at smui.spacemolt.com
```

## License

MIT

---

Coded with [Claude Code](https://claude.ai/code)
