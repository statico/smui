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

function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between h-12 px-6 bg-card border-b border-border">
      <div className="flex items-center gap-1">
        <span className="text-sm font-semibold tracking-[2px] uppercase text-foreground mr-4">
          smui
        </span>
        <Link
          href="/"
          className="text-[13px] text-primary uppercase tracking-wider px-2.5 py-1.5"
        >
          docs
        </Link>
        <Link
          href="/"
          className="text-[13px] text-muted-foreground uppercase tracking-wider px-2.5 py-1.5 hover:text-foreground transition-colors"
        >
          components
        </Link>
        <Link
          href="/"
          className="text-[13px] text-muted-foreground uppercase tracking-wider px-2.5 py-1.5 hover:text-foreground transition-colors"
        >
          blocks
        </Link>
        <Link
          href="/"
          className="text-[13px] text-muted-foreground uppercase tracking-wider px-2.5 py-1.5 hover:text-foreground transition-colors"
        >
          charts
        </Link>
        <Link
          href="/"
          className="text-[13px] text-muted-foreground uppercase tracking-wider px-2.5 py-1.5 hover:text-foreground transition-colors"
        >
          systems
        </Link>
      </div>
      <div className="flex items-center gap-1">
        <div className="text-[13px] text-muted-foreground px-2.5 py-1 bg-background border border-border flex items-center justify-between min-w-[180px]">
          <span>search...</span>
          <kbd className="text-[11px] text-muted-foreground border border-border px-1 bg-card">
            ctrl+k
          </kbd>
        </div>
        <button className="w-8 h-8 flex items-center justify-center border border-border text-muted-foreground text-[13px] hover:text-foreground hover:border-[hsl(var(--smui-border-hover))] transition-colors">
          &lt;/&gt;
        </button>
        <span className="text-xs text-muted-foreground ml-1">v2.1.7</span>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-[72px] pb-14 px-6 text-center">
      <div className="text-xs text-muted-foreground tracking-[2px] uppercase mb-4">
        spacemolt interface components
      </div>
      <h1 className="text-[34px] font-medium text-foreground leading-[1.3] max-w-[560px] mx-auto mb-4 tracking-tight">
        the foundation for your{" "}
        <em className="not-italic text-primary">bridge interface</em>
      </h1>
      <p className="text-[15px] text-muted-foreground max-w-[480px] mx-auto mb-7 leading-relaxed">
        Hardened UI components for starship terminals, command consoles, and
        deep-space operations. Customize. Extend. Deploy. Open source.
      </p>
      <div className="flex gap-2 justify-center flex-wrap">
        <Button>get started</Button>
        <Button variant="outline">components</Button>
      </div>
      <div className="flex items-center max-w-[380px] mx-auto mt-5 border border-border bg-card">
        <code className="flex-1 px-3 py-[7px] text-sm text-muted-foreground">
          <span className="text-primary font-normal">$</span> npx smui@latest init
        </code>
        <button className="text-xs text-muted-foreground bg-secondary border-l border-border px-3 py-[7px] uppercase tracking-wider hover:text-foreground transition-colors">
          copy
        </button>
      </div>
    </section>
  );
}

function VesselConfig() {
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
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1">
              vessel name
            </label>
            <Input defaultValue="ISS EREBUS" />
          </div>
          <div>
            <label className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1">
              class
            </label>
            <div className="flex items-center justify-between px-2 py-1.5 bg-background border border-border text-sm cursor-pointer">
              CRUISER-MK4
              <span className="text-muted-foreground text-xs">&#9662;</span>
            </div>
          </div>
          <div>
            <label className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1">
              reg code
            </label>
            <Input defaultValue="NCC-48271" />
          </div>
          <div>
            <label className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1">
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

function CrewRoster() {
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
              <div className="text-[11px] text-muted-foreground tracking-wider">
                {c.role}
              </div>
            </div>
            <span
              className={`text-[11px] tracking-wider uppercase px-1.5 py-px border ${statusColors[c.status]}`}
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

const READOUTS = [
  { label: "hull integrity", value: 94, variant: "default" },
  { label: "shield matrix", value: 71, variant: "warn" },
  { label: "reactor core", value: 28, variant: "crit" },
  { label: "fuel reserves", value: 82, variant: "ok" },
  { label: "cargo capacity", value: 56, variant: "default" },
] as const;

function SystemReadouts() {
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
      <CardContent className="space-y-2.5">
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

function BridgeSystems() {
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
              <div className="text-[11px] text-muted-foreground tracking-wider uppercase mt-px">
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

function CommsLog() {
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
            <AlertTitle className="text-[hsl(var(--smui-frost-2))]">System Update</AlertTitle>
            <AlertDescription>Nav firmware v3.2.1 ready</AlertDescription>
          </div>
        </Alert>
        <Alert className="border-[hsl(var(--smui-yellow)/0.25)] bg-[hsl(var(--smui-yellow)/0.04)] [&>svg]:text-[hsl(var(--smui-yellow))]">
          <AlertTriangle className="h-3.5 w-3.5" />
          <div>
            <AlertTitle className="text-[hsl(var(--smui-yellow))]">Shield Degradation</AlertTitle>
            <AlertDescription>Port shields at 71%</AlertDescription>
          </div>
        </Alert>
        <Alert variant="destructive">
          <XCircle className="h-3.5 w-3.5" />
          <div>
            <AlertTitle>Reactor Warning</AlertTitle>
            <AlertDescription>Core temp +12% above nominal</AlertDescription>
          </div>
        </Alert>
        <Alert className="border-[hsl(var(--smui-green)/0.25)] bg-[hsl(var(--smui-green)/0.04)] [&>svg]:text-[hsl(var(--smui-green))]">
          <CheckCircle2 className="h-3.5 w-3.5" />
          <div>
            <AlertTitle className="text-[hsl(var(--smui-green))]">Dock Confirmed</AlertTitle>
            <AlertDescription>Bay 7 clearance at Station Helix</AlertDescription>
          </div>
        </Alert>
      </CardContent>
    </Card>
  );
}

function WeaponLoadout() {
  return (
    <Card className="card-glow">
      <CardHeader className="flex flex-row items-center justify-between py-2.5 px-3.5">
        <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
          weapon loadout
        </CardTitle>
        <CardDescription className="text-xs">armed</CardDescription>
      </CardHeader>
      <CardContent className="">
        <label className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1">
          active systems
        </label>
        <div className="flex flex-wrap gap-1 mb-3">
          <Badge variant="outline" className="text-primary border-primary/30">
            railgun
          </Badge>
          <Badge variant="outline" className="text-primary border-primary/30">
            missiles
          </Badge>
          <Badge variant="outline" className="text-muted-foreground">point def</Badge>
          <Badge variant="outline" className="text-muted-foreground">ecm suite</Badge>
          <Badge variant="outline" className="text-muted-foreground">
            mines
          </Badge>
        </div>
        <label className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1">
          power allocation
        </label>
        <Slider defaultValue={[65]} max={100} step={1} className="mb-1" />
        <div className="flex justify-between text-[11px] text-muted-foreground">
          <span>0%</span>
          <span className="text-primary">65%</span>
          <span>100%</span>
        </div>
        <div className="mt-3">
          <label className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1">
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

function CheckboxRadioPanel() {
  return (
    <Card className="card-glow">
      <CardHeader className="flex flex-row items-center justify-between py-2.5 px-3.5">
        <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
          checkbox / radio
        </CardTitle>
        <CardDescription className="text-xs">selection</CardDescription>
      </CardHeader>
      <CardContent className="">
        <label className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1">
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
        <label className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1">
          scan mode
        </label>
        <div className="space-y-2">
          {["Passive scan", "Active scan", "Deep scan"].map((mode, i) => (
            <div key={mode} className="flex items-center gap-2 cursor-pointer">
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

function TextareaAvatarBreadcrumb() {
  return (
    <Card className="card-glow">
      <CardHeader className="py-2.5 px-3.5">
        <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
          textarea / avatar / breadcrumb
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <label className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1">
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
        <label className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1">
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
        <label className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1">
          ship log entry
        </label>
        <Textarea defaultValue="Arrived at Station Helix, Gamma Draconis system. Docked at Bay 7. Hull integrity nominal. Offloading palladium ore." />
      </CardContent>
    </Card>
  );
}

function SkeletonSeparator() {
  return (
    <Card className="card-glow">
      <CardHeader className="py-2.5 px-3.5">
        <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
          skeleton / separator
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <label className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1.5">
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
        <div className="flex items-center gap-2 my-3 text-[11px] text-muted-foreground uppercase tracking-wider">
          <Separator className="flex-1" />
          <span>or</span>
          <Separator className="flex-1" />
        </div>
        <label className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1.5">
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
        <div className="flex items-center gap-2 my-3 text-[11px] text-muted-foreground uppercase tracking-wider">
          <Separator className="flex-1" />
          <span>end of section</span>
          <Separator className="flex-1" />
        </div>
      </CardContent>
    </Card>
  );
}

function PaginationPanel() {
  return (
    <Card className="card-glow">
      <CardHeader className="py-2.5 px-3.5">
        <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
          pagination
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <label className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1.5">
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

function AccordionPanel() {
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
              A massively-multiplayer online game played by thousands of LLMs
              simultaneously in a distant future where spacefaring humans and AI
              coexist.
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

function CommandPalettePanel() {
  return (
    <Card className="card-glow">
      <CardHeader className="py-2.5 px-3.5">
        <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
          command palette
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="bg-card border border-border max-w-[360px] w-full">
          <div className="flex items-center gap-2 px-2.5 py-2 border-b border-border">
            <span className="text-[13px] text-muted-foreground">&gt;</span>
            <input
              type="text"
              placeholder="type a command..."
              className="text-sm bg-transparent border-none outline-none flex-1 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="text-[11px] text-muted-foreground tracking-wider uppercase px-3 pt-2 pb-1">
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
              className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-muted-foreground cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <span className="w-3.5 text-center">{item.icon}</span>
              {item.label}
              <kbd className="ml-auto text-[11px] text-muted-foreground border border-border px-1 bg-background">
                {item.kbd}
              </kbd>
            </div>
          ))}
          <div className="text-[11px] text-muted-foreground tracking-wider uppercase px-3 pt-2 pb-1">
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
              className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-muted-foreground cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
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

function CargoTable() {
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
                  className={`text-[11px] tracking-wider uppercase px-1.5 py-px border ${typeColors[row.type]}`}
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

export default function Home() {
  return (
    <main>
      <Nav />
      <AccentPicker />
      <Hero />
      <hr className="border-none h-px bg-border m-0" />

      <section className="py-14 px-6 max-w-[1200px] mx-auto">
        <div className="text-xs text-muted-foreground tracking-[2px] uppercase mb-1.5">
          components
        </div>
        <h2 className="text-[22px] font-medium text-foreground tracking-tight mb-1">
          system modules
        </h2>
        <p className="text-sm text-muted-foreground mb-7">
          Every component built for terminal-grade interfaces. Copy, customize,
          ship.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {[VesselConfig, CrewRoster, SystemReadouts, BridgeSystems, CommsLog, WeaponLoadout].map((Component, i) => (
            <div key={i} className="animate-fade-in-up h-full [&>*]:h-full" style={{ animationDelay: `${0.1 * i}s` }}>
              <Component />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
          {[CheckboxRadioPanel, TextareaAvatarBreadcrumb, SkeletonSeparator, PaginationPanel, AccordionPanel, CommandPalettePanel].map((Component, i) => (
            <div key={i} className="animate-fade-in-up h-full [&>*]:h-full" style={{ animationDelay: `${0.1 * i}s` }}>
              <Component />
            </div>
          ))}
        </div>

      </section>

      <hr className="border-none h-px bg-border m-0" />

      <section className="py-14 px-6 max-w-[1200px] mx-auto">
        <div className="text-xs text-muted-foreground tracking-[2px] uppercase mb-1.5">
          example // layout
        </div>
        <h2 className="text-[22px] font-medium text-foreground tracking-tight mb-1">
          bridge dashboard
        </h2>
        <p className="text-sm text-muted-foreground mb-7">
          Sidebar navigation, data readouts, tables, charts combined.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 mt-6">
          {/* Sidebar */}
          <div className="flex flex-col gap-2">
            <Card className="card-glow">
              <CardHeader className="flex flex-row items-center justify-between py-2.5 px-3.5">
                <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
                  iss erebus
                </CardTitle>
                <CardDescription className="text-xs flex items-center gap-1">
                  <span className="inline-block w-[5px] h-[5px] rounded-full bg-[hsl(var(--smui-green))]" />
                </CardDescription>
              </CardHeader>
              <div className="p-1">
                <nav className="flex flex-col">
                  {[
                    { icon: "~", label: "overview", active: true },
                    { icon: "*", label: "navigation", active: false },
                    { icon: "x", label: "weapons", active: false },
                    { icon: "=", label: "engineering", active: false },
                    { icon: "#", label: "cargo hold", active: false },
                    { icon: ">", label: "comms", active: false },
                    { icon: "@", label: "crew", active: false },
                    { icon: "%", label: "settings", active: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2 text-[13px] py-[5px] px-2.5 cursor-pointer transition-all ${
                        item.active
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      <span className={`text-xs w-3.5 text-center ${item.active ? "opacity-100" : "opacity-50"}`}>
                        {item.icon}
                      </span>
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
              <CardContent className="">
                <div className="mb-2">
                  <span className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1">system</span>
                  <div className="text-sm px-2 py-1.5 bg-background border border-border text-primary">GAMMA DRACONIS</div>
                </div>
                <div className="mb-2">
                  <span className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1">sector</span>
                  <div className="text-sm px-2 py-1.5 bg-background border border-border">7-ALPHA</div>
                </div>
                <div>
                  <span className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1">coords</span>
                  <div className="text-xs px-2 py-1.5 bg-background border border-border">X:4281 Y:-1892 Z:0042</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main content */}
          <div className="flex flex-col gap-2">
            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <Card className="card-glow p-2.5 px-3">
                <span className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block">total credits</span>
                <div className="text-[26px] font-medium text-foreground tracking-tight">1,247,830</div>
                <div className="text-xs text-[hsl(var(--smui-green))] mt-0.5">+23,450 this cycle</div>
              </Card>
              <Card className="card-glow p-2.5 px-3">
                <span className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block">kills // losses</span>
                <div className="text-[26px] font-medium text-foreground tracking-tight">142 / 7</div>
                <div className="text-xs text-[hsl(var(--smui-green))] mt-0.5">k/d ratio: 20.3</div>
              </Card>
              <Card className="card-glow p-2.5 px-3">
                <span className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block">systems charted</span>
                <div className="text-[26px] font-medium text-foreground tracking-tight">89</div>
                <div className="text-xs text-[hsl(var(--smui-green))] mt-0.5">+4 this cycle</div>
              </Card>
            </div>

            {/* Bar chart */}
            <Card className="card-glow">
              <CardHeader className="flex flex-row items-center justify-between py-2.5 px-3.5">
                <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
                  resource yield // 12 cycles
                </CardTitle>
                <CardDescription className="text-xs">trend: positive</CardDescription>
              </CardHeader>
              <CardContent className="">
                <div className="flex items-end gap-1 h-[100px]">
                  {[45, 62, 38, 80, 55, 70, 48, 90, 65, 78, 52, 95].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-[3px] h-full justify-end">
                      <div
                        className={`w-full ${[3, 6, 10].includes(i) ? "bg-[hsl(var(--smui-frost-4))]" : "bg-primary"} opacity-70`}
                        style={{ height: `${h}%` }}
                      />
                      <span className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cargo table */}
            <CargoTable />

            {/* Dialog */}
            <Card className="card-glow">
              <CardHeader className="py-2.5 px-3.5">
                <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
                  component // dialog
                </CardTitle>
              </CardHeader>
              <div className="bg-black/35 p-6 flex items-center justify-center min-h-[180px]">
                <div className="bg-card border border-border w-full max-w-[300px]">
                  <div className="p-2.5 px-3 border-b border-border">
                    <div className="text-sm font-medium text-foreground uppercase tracking-wider">confirm jump</div>
                    <div className="text-xs text-muted-foreground mt-0.5">dest: nexus prime // est. 47 ticks</div>
                  </div>
                  <div className="p-3">
                    <div className="mb-2">
                      <span className="text-[11px] text-muted-foreground tracking-[1.5px] uppercase block mb-1">auth code</span>
                      <Input type="password" defaultValue="xxxxxxxxxxxx" />
                    </div>
                    <Alert className="border-[hsl(var(--smui-yellow)/0.25)] bg-[hsl(var(--smui-yellow)/0.04)] [&>svg]:text-[hsl(var(--smui-yellow))]">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      <div><AlertDescription>Unpoliced territory. Proceed with caution.</AlertDescription></div>
                    </Alert>
                  </div>
                  <div className="p-2 px-3 border-t border-border flex gap-1 justify-end">
                    <Button variant="ghost" size="sm">abort</Button>
                    <Button size="sm">initiate jump</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <hr className="border-none h-px bg-border m-0" />

      <section className="py-14 px-6 max-w-[1200px] mx-auto">
        <div className="text-xs text-muted-foreground tracking-[2px] uppercase mb-1.5">
          installation
        </div>
        <h2 className="text-[22px] font-medium text-foreground tracking-tight mb-1">
          deploy to your terminal
        </h2>
        <p className="text-sm text-muted-foreground mb-7">
          Zero dependencies beyond the standard runtime.
        </p>
        <div className="bg-background border border-border p-3 text-[13px] leading-relaxed overflow-x-auto">
          <span className="text-muted-foreground italic">{"// Initialize SMUI in your bridge terminal project"}</span>
          <br />
          <span className="text-[hsl(var(--smui-frost-3))]">import</span>
          {" { Panel, DataField, ProgressBar } "}
          <span className="text-[hsl(var(--smui-frost-3))]">from</span>{" "}
          <span className="text-[hsl(var(--smui-green))]">{`'@smui/core'`}</span>;
          <br />
          <span className="text-[hsl(var(--smui-frost-3))]">import</span>
          {" { ShipStatus, CrewRoster } "}
          <span className="text-[hsl(var(--smui-frost-3))]">from</span>{" "}
          <span className="text-[hsl(var(--smui-green))]">{`'@smui/composites'`}</span>;
          <br /><br />
          <span className="text-[hsl(var(--smui-frost-3))]">const</span>{" "}
          <span className="text-[hsl(var(--smui-yellow))]">terminal</span>
          {" = "}
          <span className="text-[hsl(var(--smui-frost-3))]">new</span>{" "}
          <span className="text-[hsl(var(--smui-yellow))]">BridgeTerminal</span>
          {"({"}
          <br />
          {"  vessel: "}
          <span className="text-[hsl(var(--smui-green))]">{`'ISS Erebus'`}</span>,
          <br />
          {"  theme: "}
          <span className="text-[hsl(var(--smui-green))]">{`'nord-dark'`}</span>,
          <br />
          {"  refresh: "}
          <span className="text-[hsl(var(--smui-purple))]">60</span>,
          <br />
          {"});"}
          <br /><br />
          <span className="text-[hsl(var(--smui-yellow))]">terminal</span>
          {".mount("}
          <span className="text-[hsl(var(--smui-green))]">{`'#root'`}</span>
          {");"}
          <br />
          <span className="text-[hsl(var(--smui-yellow))]">terminal</span>
          {".connect("}
          <span className="text-[hsl(var(--smui-green))]">{`'wss://game.spacemolt.com/ws'`}</span>
          {");"}
        </div>
        <div className="flex flex-wrap gap-1 justify-center mt-4">
          <Badge variant="outline">mit license</Badge>
          <Badge variant="outline">zero deps</Badge>
          <Badge variant="outline">3.2kb gzip</Badge>
          <Badge variant="outline">a11y ready</Badge>
        </div>
      </section>

      <hr className="border-none h-px bg-border m-0" />
      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground tracking-wider">
        smui // spacemolt interface system // devteam
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">docs</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">components</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">github</a>
          <a href="https://spacemolt.com" className="text-muted-foreground hover:text-primary transition-colors">spacemolt.com</a>
        </div>
      </footer>
    </main>
  );
}
