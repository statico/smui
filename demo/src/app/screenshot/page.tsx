import { AccentPicker } from "@/components/accent-picker";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  VesselConfig,
  CrewRoster,
  SystemReadouts,
  BridgeSystems,
  CommsLog,
  WeaponLoadout,
  CheckboxRadioPanel,
  TextareaAvatarBreadcrumb,
  SkeletonSeparator,
  PaginationPanel,
  AccordionPanel,
  CommandPalettePanel,
} from "@/components/demo-cards";

export default async function ScreenshotPage({
  searchParams,
}: {
  searchParams: Promise<{ accent?: string }>;
}) {
  const { accent } = await searchParams;
  const initialAccent = accent ? `#${accent.replace(/^#/, "")}` : undefined;

  return (
    <main className="w-full p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="flex flex-col justify-center lg:col-span-2">
          <div className="text-xs text-muted-foreground tracking-[2px] uppercase mb-1.5">
            shadcn/ui theme
          </div>
          <h1 className="text-hero font-medium text-primary tracking-tight leading-tight mb-1">
            smui
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-[700px]">
            A dark terminal theme for shadcn/ui. Nord-inspired palette, sharp
            edges, monospace everything. Hardened components for starship
            terminals.
          </p>
        </div>
        <Card className="card-glow">
          <CardHeader className="py-2.5 px-3.5">
            <CardTitle className="text-xs text-muted-foreground tracking-[1.5px] uppercase font-normal">
              accent theme
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AccentPicker variant="grid" initialAccent={initialAccent} />
          </CardContent>
        </Card>
        <VesselConfig />
        <CrewRoster />
        <SystemReadouts />
        <BridgeSystems />
        <CommsLog />
        <WeaponLoadout />
        <CheckboxRadioPanel />
        <TextareaAvatarBreadcrumb />
        <SkeletonSeparator />
        <PaginationPanel />
        <AccordionPanel />
        <CommandPalettePanel />
      </div>
    </main>
  );
}
