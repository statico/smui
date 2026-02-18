# smui // spacemolt ui

A dark terminal-aesthetic theme for [shadcn/ui](https://ui.shadcn.com). Nord-inspired colors, JetBrains Mono everywhere, zero border radius. Spaceship terminals don't have light mode.

**For documentation and examples, see [https://smui.statico.io](https://smui.statico.io)**

[![smui screenshot](https://smui.statico.io/screenshot.gif)](https://smui.statico.io)

## Install

```bash
npx shadcn add https://smui.statico.io/r/spacemolt-theme.json
```

Or copy the [CSS variables](src/globals.css) directly into your project.

**Using a coding agent?** Tell it to read [https://smui.statico.io/skill.md](https://smui.statico.io/skill.md) to get started.

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
scripts/take-screenshots.mjs       # Playwright + ffmpeg screenshot GIF generator
demo/                              # Next.js demo app at smui.statico.io
```

## Generating the screenshot GIF

```bash
brew install ffmpeg
npx playwright install chromium
cd demo && npm run dev  # start dev server on port 3000
node scripts/take-screenshots.mjs [port]  # default port 3000
```

The script screenshots `/screenshot?accent=HEX` for five accent colors, combines them with ffmpeg, and saves `demo/public/screenshot.gif`. Target ~1MB max (currently ~182KB).

## License

[Unlicense](LICENSE) (public domain)

---

Coded with [Claude Code](https://claude.ai/code)
