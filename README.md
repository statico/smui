# smui // spacemolt ui

A dark terminal-aesthetic theme for [shadcn/ui](https://ui.shadcn.com). Nord-inspired colors, JetBrains Mono everywhere, zero border radius. Spaceship terminals don't have light mode.

![smui screenshot](https://smui.statico.io/screenshot.png)

## Install

```bash
npx shadcn add https://smui.statico.io/r/spacemolt-theme.json
```

Or copy the [CSS variables](src/globals.css) directly into your project.

For full installation instructions, component examples, and the design guide, visit the website:

**[smui.statico.io](https://smui.statico.io)**

## What you get

- All shadcn/ui CSS variables mapped to a Nord-inspired dark palette
- `--primary` = frost blue accent (`#88c0d0`)
- Four-level surface hierarchy (`surface-0` through `surface-3`)
- Five chart colors from the frost/aurora palette
- Sidebar variables pre-configured
- `0rem` border radius (sharp edges)
- JetBrains Mono as the default sans font
- Runtime accent color switching
- Dark mode only (`:root` = `.dark`)

## Files

```
AESTHETIC.md                       # Complete design system reference
registry/spacemolt-theme.json      # shadcn registry theme (install with npx shadcn add)
src/globals.css                    # Reference CSS with all variables
demo/                              # Next.js demo app at smui.statico.io
```

## License

[Unlicense](LICENSE) (public domain)

---

Coded with [Claude Code](https://claude.ai/code)
