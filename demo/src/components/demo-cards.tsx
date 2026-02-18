import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Textarea } from "@/components/ui/textarea";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Info,
  AlertTriangle,
  XCircle,
  CheckCircle2,
  Compass,
  Crosshair,
  Package,
} from "lucide-react";

// ============================================================
// DATA
// ============================================================

const CREW = [
  {
    code: "CMD",
    name: "Kael Voss",
    role: "COMMANDING OFFICER",
    status: "online" as const,
  },
  {
    code: "NAV",
    name: "Lyra Chen",
    role: "NAVIGATION",
    status: "online" as const,
  },
  {
    code: "WPN",
    name: "Drak Morin",
    role: "WEAPONS OFFICER",
    status: "standby" as const,
  },
  {
    code: "ENG",
    name: "Saya Okon",
    role: "CHIEF ENGINEER",
    status: "off-duty" as const,
  },
];

const READOUTS = [
  { label: "hull integrity", value: 94, variant: "default" },
  { label: "shield matrix", value: 71, variant: "warn" },
  { label: "reactor core", value: 28, variant: "crit" },
  { label: "fuel reserves", value: 82, variant: "ok" },
  { label: "cargo capacity", value: 56, variant: "default" },
] as const;

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

// ============================================================
// DEMO COMPONENTS
// ============================================================

export function VesselConfig() {
  return (
    <Card className="card-glow">
      <CardHeader className="flex flex-row items-center justify-between py-2.5 px-3.5">
        <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
          vessel config
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground flex items-center gap-1">
          <span className="inline-block w-[5px] h-[5px] rounded-full bg-[hsl(var(--smui-green))]" />
          active
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <div className="grid grid-cols-2 gap-3.5">
          <div>
            <label className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1">
              vessel name
            </label>
            <Input defaultValue="ISS EREBUS" />
          </div>
          <div>
            <label className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1">
              class
            </label>
            <div className="flex items-center justify-between h-9 px-2 py-1.5 bg-background border border-border text-sm cursor-pointer">
              CRUISER-MK4
              <span className="text-muted-foreground text-xs">&#9662;</span>
            </div>
          </div>
          <div>
            <label className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1">
              reg code
            </label>
            <Input defaultValue="NCC-48271" />
          </div>
          <div>
            <label className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1">
              sector
            </label>
            <Input defaultValue="GAMMA-7" />
          </div>
        </div>
        <Button size="sm" className="w-full mt-2.5">
          commit
        </Button>
      </CardContent>
    </Card>
  );
}

export function CrewRoster() {
  const statusColors = {
    online:
      "text-[hsl(var(--smui-green))] border-[hsl(var(--smui-green)/0.3)]",
    standby:
      "text-[hsl(var(--smui-yellow))] border-[hsl(var(--smui-yellow)/0.3)]",
    "off-duty": "text-muted-foreground border-border",
  };

  return (
    <Card className="card-glow">
      <CardHeader className="flex flex-row items-center justify-between py-2.5 px-3.5">
        <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
          bridge crew
        </CardTitle>
        <CardDescription className="text-xs">4 assigned</CardDescription>
      </CardHeader>
      <CardContent className="">
        {CREW.map((c) => (
          <div
            key={c.code}
            className="flex items-center gap-2.5 py-[7px] border-b border-border last:border-b-0"
          >
            <div className="w-[34px] h-[34px] flex items-center justify-center text-xs font-semibold tracking-wider border border-border text-muted-foreground bg-background shrink-0">
              {c.code}
            </div>
            <div className="flex-1">
              <div className="text-sm">{c.name}</div>
              <div className="text-label text-muted-foreground tracking-wider">
                {c.role}
              </div>
            </div>
            <span
              className={`text-label tracking-wider uppercase px-1.5 py-px border ${statusColors[c.status]}`}
            >
              {c.status}
            </span>
          </div>
        ))}
        <Button variant="outline" size="sm" className="w-full mt-2">
          + assign crew
        </Button>
      </CardContent>
    </Card>
  );
}

export function SystemReadouts() {
  const colorMap = {
    default: "",
    warn: "[&>div]:bg-[hsl(var(--smui-yellow))]",
    crit: "[&>div]:bg-[hsl(var(--smui-red))]",
    ok: "[&>div]:bg-[hsl(var(--smui-green))]",
  };

  return (
    <Card className="card-glow">
      <CardHeader className="flex flex-row items-center justify-between py-2.5 px-3.5">
        <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
          system readouts
        </CardTitle>
        <CardDescription className="text-xs flex items-center gap-1">
          <span className="inline-block w-[5px] h-[5px] rounded-full bg-[hsl(var(--smui-green))]" />
          nominal
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-[11px]">
        {READOUTS.map((r) => (
          <div key={r.label}>
            <div className="flex justify-between mb-1">
              <span className="text-xs text-muted-foreground tracking-[1.5px] uppercase">
                {r.label}
              </span>
              <span className="text-xs text-muted-foreground">{r.value}%</span>
            </div>
            <Progress value={r.value} className={colorMap[r.variant]} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function BridgeSystems() {
  return (
    <Card className="card-glow">
      <CardHeader className="flex flex-row items-center justify-between py-2.5 px-3.5">
        <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
          bridge systems
        </CardTitle>
        <CardDescription className="text-xs">config</CardDescription>
      </CardHeader>
      <CardContent className="space-y-0">
        {[
          {
            label: "IFF Transponder",
            sub: "broadcast vessel identity",
            on: true,
          },
          {
            label: "Stealth Profile",
            sub: "minimize em signature",
            on: false,
          },
          { label: "Auto-Targeting", sub: "weapons lock assist", on: true },
          {
            label: "Distress Beacon",
            sub: "emergency broadcast signal",
            on: false,
          },
        ].map((item, i) => (
          <div
            key={item.label}
            className={`flex items-center justify-between py-1.5 ${i > 0 ? "border-t border-border" : ""}`}
          >
            <div>
              <div className="text-sm">{item.label}</div>
              <div className="text-label text-muted-foreground tracking-wider uppercase mt-px">
                {item.sub}
              </div>
            </div>
            <div
              className={`relative w-9 h-[18px] rounded-full border shrink-0 cursor-pointer transition-all ${
                item.on
                  ? "bg-primary/10 border-primary"
                  : "bg-background border-border"
              }`}
            >
              <div
                className={`absolute top-[2px] w-3 h-3 rounded-full transition-all ${
                  item.on
                    ? "left-5 bg-primary"
                    : "left-[2px] bg-muted-foreground"
                }`}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function CommsLog() {
  return (
    <Card className="card-glow">
      <CardHeader className="flex flex-row items-center justify-between py-2.5 px-3.5">
        <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
          comms log
        </CardTitle>
        <CardDescription className="text-xs">4 alerts</CardDescription>
      </CardHeader>
      <CardContent className="space-y-1.5">
        <Alert className="border-[hsl(var(--smui-frost-2)/0.25)] bg-[hsl(var(--smui-frost-2)/0.04)] [&>svg]:text-[hsl(var(--smui-frost-2))]">
          <Info className="h-3.5 w-3.5" />
          <div>
            <AlertTitle className="text-[hsl(var(--smui-frost-2))]">
              System Update
            </AlertTitle>
            <AlertDescription>Nav firmware v3.2.1 ready</AlertDescription>
          </div>
        </Alert>
        <Alert className="border-[hsl(var(--smui-yellow)/0.25)] bg-[hsl(var(--smui-yellow)/0.04)] [&>svg]:text-[hsl(var(--smui-yellow))]">
          <AlertTriangle className="h-3.5 w-3.5" />
          <div>
            <AlertTitle className="text-[hsl(var(--smui-yellow))]">
              Shield Degradation
            </AlertTitle>
            <AlertDescription>Port shields at 71%</AlertDescription>
          </div>
        </Alert>
        <Alert variant="destructive">
          <XCircle className="h-3.5 w-3.5" />
          <div>
            <AlertTitle>Reactor Warning</AlertTitle>
            <AlertDescription>
              Core temp +12% above nominal
            </AlertDescription>
          </div>
        </Alert>
        <Alert className="border-[hsl(var(--smui-green)/0.25)] bg-[hsl(var(--smui-green)/0.04)] [&>svg]:text-[hsl(var(--smui-green))]">
          <CheckCircle2 className="h-3.5 w-3.5" />
          <div>
            <AlertTitle className="text-[hsl(var(--smui-green))]">
              Dock Confirmed
            </AlertTitle>
            <AlertDescription>
              Bay 7 clearance at Station Helix
            </AlertDescription>
          </div>
        </Alert>
      </CardContent>
    </Card>
  );
}

export function WeaponLoadout() {
  return (
    <Card className="card-glow">
      <CardHeader className="flex flex-row items-center justify-between py-2.5 px-3.5">
        <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
          weapon loadout
        </CardTitle>
        <CardDescription className="text-xs">armed</CardDescription>
      </CardHeader>
      <CardContent className="">
        <label className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1">
          active systems
        </label>
        <div className="flex flex-wrap gap-1 mb-3">
          <Badge variant="outline" className="text-primary border-primary/30">
            railgun
          </Badge>
          <Badge variant="outline" className="text-primary border-primary/30">
            missiles
          </Badge>
          <Badge variant="outline" className="text-muted-foreground">
            point def
          </Badge>
          <Badge variant="outline" className="text-muted-foreground">
            ecm suite
          </Badge>
          <Badge variant="outline" className="text-muted-foreground">
            mines
          </Badge>
        </div>
        <label className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1">
          power allocation
        </label>
        <Slider defaultValue={[65]} max={100} step={1} className="mb-1" />
        <div className="flex justify-between text-label text-muted-foreground">
          <span>0%</span>
          <span className="text-primary">65%</span>
          <span>100%</span>
        </div>
        <div className="mt-3">
          <label className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1">
            cycle status
          </label>
          <Tabs defaultValue="loaded">
            <TabsList variant="line">
              <TabsTrigger value="loaded">loaded</TabsTrigger>
              <TabsTrigger value="charging">charging</TabsTrigger>
              <TabsTrigger value="cooldown">cooldown</TabsTrigger>
            </TabsList>
            <TabsContent value="loaded">
              <p className="text-xs text-muted-foreground">
                All weapon banks loaded. Ready to fire.
              </p>
            </TabsContent>
            <TabsContent value="charging">
              <p className="text-xs text-muted-foreground">
                Charging capacitors... 73% complete.
              </p>
            </TabsContent>
            <TabsContent value="cooldown">
              <p className="text-xs text-muted-foreground">
                Thermal regulation in progress. 12s remaining.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
}

export function CheckboxRadioPanel() {
  return (
    <Card className="card-glow">
      <CardHeader className="flex flex-row items-center justify-between py-2.5 px-3.5">
        <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
          checkbox / radio
        </CardTitle>
        <CardDescription className="text-xs">selection</CardDescription>
      </CardHeader>
      <CardContent className="">
        <label className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1">
          permissions
        </label>
        <div className="space-y-2 mb-3">
          {[
            {
              label: "Read Access",
              desc: "view cargo manifests",
              checked: true,
            },
            {
              label: "Write Access",
              desc: "modify ship config",
              checked: true,
            },
            {
              label: "Admin Access",
              desc: "manage crew roster",
              checked: false,
            },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <Checkbox defaultChecked={item.checked} />
              <div>
                <div className="text-sm">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <Separator className="my-2" />
        <label className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1">
          scan mode
        </label>
        <div className="space-y-2">
          {["Passive scan", "Active scan", "Deep scan"].map((mode, i) => (
            <div
              key={mode}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                  i === 0
                    ? "border-primary"
                    : "border-border bg-background"
                }`}
              >
                {i === 0 && (
                  <div className="w-2 h-2 rounded-full bg-primary" />
                )}
              </div>
              <span className="text-sm">{mode}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function TextareaAvatarBreadcrumb() {
  return (
    <Card className="card-glow">
      <CardHeader className="py-2.5 px-3.5">
        <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
          textarea / avatar / breadcrumb
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <label className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1">
          breadcrumb
        </label>
        <Breadcrumb className="mb-3">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">systems</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">gamma draconis</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>station helix</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <label className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1">
          avatar group
        </label>
        <div className="flex -space-x-2 mb-3">
          {["KV", "LC", "DM", "SO"].map((initials) => (
            <Avatar key={initials} className="border-2 border-card size-9">
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          ))}
          <Avatar className="border-2 border-card size-9">
            <AvatarFallback className="text-muted-foreground">
              +3
            </AvatarFallback>
          </Avatar>
        </div>
        <label className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1">
          ship log entry
        </label>
        <Textarea defaultValue="Arrived at Station Helix, Gamma Draconis system. Docked at Bay 7. Hull integrity nominal. Offloading palladium ore." />
      </CardContent>
    </Card>
  );
}

export function SkeletonSeparator() {
  return (
    <Card className="card-glow">
      <CardHeader className="py-2.5 px-3.5">
        <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
          skeleton / separator
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <label className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1.5">
          loading state
        </label>
        <div className="flex items-center gap-2 mb-1.5">
          <Skeleton className="w-8 h-8 rounded-full shrink-0" />
          <div className="flex-1">
            <Skeleton className="w-[60%] h-[11px] mb-1.5" />
            <Skeleton className="w-[40%] h-[9px]" />
          </div>
        </div>
        <div className="mb-1.5">
          <Skeleton className="w-full h-[11px] mb-1.5" />
          <Skeleton className="w-[80%] h-[11px] mb-1.5" />
          <Skeleton className="w-[90%] h-[11px]" />
        </div>
        <div className="flex items-center gap-2 my-3 text-label text-muted-foreground uppercase tracking-wider">
          <Separator className="flex-1" />
          <span>or</span>
          <Separator className="flex-1" />
        </div>
        <label className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1.5">
          tooltip
        </label>
        <div className="text-center my-3">
          <Tooltip open>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">
                hover target
              </Button>
            </TooltipTrigger>
            <TooltipContent>Shield capacity: 4,200 HP</TooltipContent>
          </Tooltip>
        </div>
        <div className="flex items-center gap-2 my-3 text-label text-muted-foreground uppercase tracking-wider">
          <Separator className="flex-1" />
          <span>end of section</span>
          <Separator className="flex-1" />
        </div>
      </CardContent>
    </Card>
  );
}

export function PaginationPanel() {
  return (
    <Card className="card-glow">
      <CardHeader className="py-2.5 px-3.5">
        <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
          pagination
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <label className="text-label text-muted-foreground tracking-[1.5px] uppercase block mb-1.5">
          cargo results (page 3 of 12)
        </label>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">12</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  );
}

export function AccordionPanel() {
  return (
    <Card className="card-glow">
      <CardHeader className="py-2.5 px-3.5">
        <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
          accordion
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is SpaceMolt?</AccordionTrigger>
            <AccordionContent>
              <a
                href="https://smui.statico.io"
                className="text-primary hover:underline"
              >
                SpaceMolt
              </a>{" "}
              is a massively-multiplayer online game played by thousands of LLMs
              simultaneously. smui is a theme inspired by its terminal aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I get started?</AccordionTrigger>
            <AccordionContent>
              Register a new player, choose an empire, and start mining in the
              safe zone to earn your first credits.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I build my own client?</AccordionTrigger>
            <AccordionContent>
              Yes. Players connect via WebSocket or MCP. The reference client is
              open source but you are encouraged to build your own.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}

export function CommandPalettePanel() {
  return (
    <Card className="card-glow">
      <CardHeader className="py-2.5 px-3.5">
        <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
          command palette
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-3.5">
        <div className="bg-card border border-border w-full">
          <div className="flex items-center gap-2 px-2.5 py-2 border-b border-border">
            <span className="text-ui text-muted-foreground">&gt;</span>
            <input
              type="text"
              placeholder="type a command..."
              className="text-sm bg-transparent border-none outline-none flex-1 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="text-label text-muted-foreground tracking-wider uppercase px-3 pt-2 pb-1">
            navigation
          </div>
          {[
            {
              icon: <Compass className="w-3.5 h-3.5" />,
              label: "overview",
              kbd: "ctrl+1",
            },
            {
              icon: <Compass className="w-3.5 h-3.5" />,
              label: "navigation",
              kbd: "ctrl+2",
            },
            {
              icon: <Crosshair className="w-3.5 h-3.5" />,
              label: "weapons",
              kbd: "ctrl+3",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-3 py-1.5 text-ui text-muted-foreground cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <span className="w-3.5 text-center">{item.icon}</span>
              {item.label}
              <kbd className="ml-auto text-label text-muted-foreground border border-border px-1 bg-background">
                {item.kbd}
              </kbd>
            </div>
          ))}
          <div className="text-label text-muted-foreground tracking-wider uppercase px-3 pt-2 pb-1">
            actions
          </div>
          {[
            {
              icon: <Compass className="w-3.5 h-3.5" />,
              label: "jump to system",
            },
            {
              icon: <Package className="w-3.5 h-3.5" />,
              label: "open cargo",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-3 py-1.5 text-ui text-muted-foreground cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <span className="w-3.5 text-center">{item.icon}</span>
              {item.label}
            </div>
          ))}
          <div className="p-1" />
        </div>
      </CardContent>
    </Card>
  );
}

export function CargoTable() {
  const typeColors: Record<string, string> = {
    ore: "text-[hsl(var(--smui-yellow))] border-[hsl(var(--smui-yellow)/0.3)]",
    wpn: "text-[hsl(var(--smui-red))] border-[hsl(var(--smui-red)/0.3)]",
    mod: "text-[hsl(var(--smui-frost-3))] border-[hsl(var(--smui-frost-3)/0.3)]",
    ref: "text-[hsl(var(--smui-green))] border-[hsl(var(--smui-green)/0.3)]",
  };

  return (
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
              <TableCell className="text-primary">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
