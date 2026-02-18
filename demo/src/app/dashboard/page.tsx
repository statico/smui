import Link from "next/link";
import { AccentPicker } from "@/components/accent-picker";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import {
  Code2,
  Compass,
  Crosshair,
  Wrench,
  Package,
  MessageSquare,
  Users,
  Settings,
  AlertTriangle,
  LayoutDashboard,
} from "lucide-react";

function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between h-12 px-6 bg-card border-b border-border">
      <div className="flex items-center gap-1">
        <span className="text-sm font-semibold tracking-[2px] uppercase text-foreground mr-4">
          smui
        </span>
        <Link
          href="/"
          className="text-xs text-muted-foreground uppercase tracking-wider px-2.5 py-1.5 hover:text-foreground transition-colors"
        >
          docs
        </Link>
        <Link
          href="/"
          className="text-xs text-muted-foreground uppercase tracking-wider px-2.5 py-1.5 hover:text-foreground transition-colors"
        >
          components
        </Link>
        <Link
          href="/dashboard"
          className="text-xs text-primary uppercase tracking-wider px-2.5 py-1.5"
        >
          dashboard
        </Link>
      </div>
      <div className="flex items-center gap-1">
        <div className="text-xs text-muted-foreground px-2.5 py-1 bg-background border border-border flex items-center justify-between min-w-[180px]">
          <span>search...</span>
          <kbd className="text-label text-muted-foreground border border-border px-1 bg-card">
            ctrl+k
          </kbd>
        </div>
        <button className="w-8 h-8 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-[hsl(var(--smui-border-hover))] transition-colors">
          <Code2 className="w-3.5 h-3.5" />
        </button>
        <span className="text-xs text-muted-foreground ml-1">v1.0.0</span>
      </div>
    </nav>
  );
}

const SIDE_NAV = [
  { icon: LayoutDashboard, label: "overview", active: true },
  { icon: Compass, label: "navigation", active: false },
  { icon: Crosshair, label: "weapons", active: false },
  { icon: Wrench, label: "engineering", active: false },
  { icon: Package, label: "cargo hold", active: false },
  { icon: MessageSquare, label: "comms", active: false },
  { icon: Users, label: "crew", active: false },
  { icon: Settings, label: "settings", active: false },
];

const CARGO = [
  {
    item: "Palladium Ore",
    type: "ore",
    qty: 450,
    unit: "127 cr",
    total: "57,150 cr",
  },
  {
    item: "Plasma Coil MkII",
    type: "wpn",
    qty: 2,
    unit: "18,500 cr",
    total: "37,000 cr",
  },
  {
    item: "Flux Capacitor",
    type: "mod",
    qty: 6,
    unit: "3,200 cr",
    total: "19,200 cr",
  },
  {
    item: "Refined Titanium",
    type: "ref",
    qty: 800,
    unit: "84 cr",
    total: "67,200 cr",
  },
  {
    item: "Shield Emitter",
    type: "mod",
    qty: 4,
    unit: "8,900 cr",
    total: "35,600 cr",
  },
];

const BAR_DATA = [
  { label: "01", height: 45, alt: false },
  { label: "02", height: 62, alt: false },
  { label: "03", height: 38, alt: false },
  { label: "04", height: 80, alt: true },
  { label: "05", height: 55, alt: false },
  { label: "06", height: 70, alt: false },
  { label: "07", height: 48, alt: true },
  { label: "08", height: 90, alt: false },
  { label: "09", height: 65, alt: false },
  { label: "10", height: 78, alt: false },
  { label: "11", height: 52, alt: true },
  { label: "12", height: 95, alt: false },
];

export default function DashboardPage() {
  const typeColors: Record<string, string> = {
    ore: "text-[hsl(var(--smui-yellow))] border-[hsl(var(--smui-yellow)/0.3)]",
    wpn: "text-[hsl(var(--smui-red))] border-[hsl(var(--smui-red)/0.3)]",
    mod: "text-[hsl(var(--smui-frost-3))] border-[hsl(var(--smui-frost-3)/0.3)]",
    ref: "text-[hsl(var(--smui-green))] border-[hsl(var(--smui-green)/0.3)]",
  };

  return (
    <main>
      <Nav />
      <AccentPicker />
      <div className="accent-line" />

      <section className="py-14 px-6 max-w-[1200px] mx-auto">
        <div className="text-xs text-muted-foreground tracking-[2px] uppercase mb-1.5">
          example // layout
        </div>
        <h2 className="text-heading font-medium text-foreground tracking-tight mb-1">
          bridge dashboard
        </h2>
        <p className="text-sm text-muted-foreground mb-7">
          Sidebar navigation, data readouts, tables, charts combined.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] items-start gap-2">
          {/* Sidebar */}
          <div className="flex flex-col gap-2">
            <Card className="card-glow">
              <CardHeader className="flex flex-row items-center justify-between py-2.5 px-3.5">
                <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
                  iss erebus
                </CardTitle>
                <span className="inline-block w-[5px] h-[5px] rounded-full bg-[hsl(var(--smui-green))]" />
              </CardHeader>
              <div className="p-1">
                <nav className="flex flex-col">
                  {SIDE_NAV.map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2 text-ui py-[5px] px-2.5 cursor-pointer transition-colors ${
                        item.active
                          ? "text-primary bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      <item.icon
                        className={`w-3.5 h-3.5 ${item.active ? "opacity-100" : "opacity-50"}`}
                      />
                      {item.label}
                    </div>
                  ))}
                </nav>
              </div>
            </Card>

            <Card className="card-glow">
              <CardHeader className="py-2.5 px-3.5">
                <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
                  location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <span className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1">
                    system
                  </span>
                  <div className="text-sm text-primary px-2 py-1.5 bg-background border border-border">
                    GAMMA DRACONIS
                  </div>
                </div>
                <div>
                  <span className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1">
                    sector
                  </span>
                  <div className="text-sm px-2 py-1.5 bg-background border border-border">
                    7-ALPHA
                  </div>
                </div>
                <div>
                  <span className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1">
                    coords
                  </span>
                  <div className="text-xs px-2 py-1.5 bg-background border border-border">
                    X:4281 Y:-1892 Z:0042
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main content */}
          <div className="flex flex-col gap-2">
            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <Card className="hover:border-[hsl(var(--smui-border-hover))] transition-colors p-2.5 px-3">
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
              <Card className="hover:border-[hsl(var(--smui-border-hover))] transition-colors p-2.5 px-3">
                <span className="text-label text-muted-foreground tracking-[1.5px] uppercase block">
                  kills // losses
                </span>
                <div className="text-stat font-medium text-foreground tracking-tight">
                  142 / 7
                </div>
                <div className="text-xs text-[hsl(var(--smui-green))] mt-0.5">
                  k/d ratio: 20.3
                </div>
              </Card>
              <Card className="hover:border-[hsl(var(--smui-border-hover))] transition-colors p-2.5 px-3">
                <span className="text-label text-muted-foreground tracking-[1.5px] uppercase block">
                  systems charted
                </span>
                <div className="text-stat font-medium text-foreground tracking-tight">
                  89
                </div>
                <div className="text-xs text-[hsl(var(--smui-green))] mt-0.5">
                  +4 this cycle
                </div>
              </Card>
            </div>

            {/* Bar chart */}
            <Card className="card-glow">
              <CardHeader className="flex flex-row items-center justify-between py-2.5 px-3.5">
                <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
                  resource yield // 12 cycles
                </CardTitle>
                <CardDescription className="text-xs">
                  trend: positive
                </CardDescription>
              </CardHeader>
              <CardContent className="">
                <div className="flex items-end gap-1 h-[160px]">
                  {BAR_DATA.map((bar) => (
                    <div
                      key={bar.label}
                      className="flex-1 flex flex-col items-center gap-[3px] h-full justify-end"
                    >
                      <div
                        className={`w-full ${bar.alt ? "bg-[hsl(var(--smui-frost-4))]" : "bg-primary"} opacity-70`}
                        style={{ height: `${bar.height}%` }}
                      />
                      <span className="text-xs text-muted-foreground">
                        {bar.label}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cargo table */}
            <Card className="card-glow">
              <CardHeader className="flex flex-row items-center justify-between py-2.5 px-3.5">
                <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
                  cargo manifest
                </CardTitle>
                <CardDescription className="text-xs">
                  1,847 / 3,000 m3
                </CardDescription>
              </CardHeader>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>item</TableHead>
                    <TableHead>type</TableHead>
                    <TableHead>qty</TableHead>
                    <TableHead>unit</TableHead>
                    <TableHead>total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {CARGO.map((row) => (
                    <TableRow key={row.item}>
                      <TableCell>{row.item}</TableCell>
                      <TableCell>
                        <span
                          className={`text-label tracking-wider uppercase px-1.5 py-px border ${typeColors[row.type]}`}
                        >
                          {row.type}
                        </span>
                      </TableCell>
                      <TableCell>{row.qty}</TableCell>
                      <TableCell>{row.unit}</TableCell>
                      <TableCell className="text-primary">
                        {row.total}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>

            {/* Dialog */}
            <Card className="card-glow">
              <CardHeader className="py-2.5 px-3.5">
                <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
                  component // dialog
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="bg-black/35 p-4 flex items-center justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        open dialog
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="uppercase tracking-wider">
                          confirm jump
                        </DialogTitle>
                        <DialogDescription>
                          dest: nexus prime // est. 47 ticks
                        </DialogDescription>
                      </DialogHeader>
                      <div>
                        <label className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1">
                          auth code
                        </label>
                        <Input type="password" defaultValue="xxxxxxxxxxxx" />
                        <Alert className="mt-2 border-[hsl(var(--smui-yellow)/0.25)] bg-[hsl(var(--smui-yellow)/0.04)] [&>svg]:text-[hsl(var(--smui-yellow))]">
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription>
                            Unpoliced territory. Proceed with caution.
                          </AlertDescription>
                        </Alert>
                      </div>
                      <DialogFooter>
                        <Button variant="ghost" size="sm">
                          abort
                        </Button>
                        <Button size="sm">initiate jump</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  {/* Static preview of dialog */}
                  <div className="bg-card border border-border max-w-[280px] w-full ml-4">
                    <div className="px-3 py-2.5 border-b border-border">
                      <div className="text-sm font-medium text-foreground uppercase tracking-wider">
                        confirm jump
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        dest: nexus prime // est. 47 ticks
                      </div>
                    </div>
                    <div className="p-3">
                      <label className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1">
                        auth code
                      </label>
                      <Input type="password" defaultValue="xxxxxxxxxxxx" />
                      <Alert className="mt-2 border-[hsl(var(--smui-yellow)/0.25)] bg-[hsl(var(--smui-yellow)/0.04)] [&>svg]:text-[hsl(var(--smui-yellow))]">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                          Unpoliced territory. Proceed with caution.
                        </AlertDescription>
                      </Alert>
                    </div>
                    <div className="px-3 py-2 border-t border-border flex gap-1 justify-end">
                      <Button variant="ghost" size="sm">
                        abort
                      </Button>
                      <Button size="sm">initiate jump</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="accent-line" />
      <footer className="relative noise py-8 text-center text-xs text-muted-foreground tracking-wider">
        <div className="relative z-10">
          smui // spacemolt interface system // devteam
          <div className="flex justify-center gap-4 mt-2">
            <a
              href="https://github.com/statico/smui"
              className="hover:text-primary transition-colors"
            >
              github
            </a>
            <a
              href="https://spacemolt.com"
              className="hover:text-primary transition-colors"
            >
              spacemolt.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
