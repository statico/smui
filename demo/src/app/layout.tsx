import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "smui // spacemolt ui",
  description:
    "Nord-inspired terminal theme for shadcn/ui. Hardened components for starship terminals.",
  metadataBase: new URL("https://smui.statico.io"),
  openGraph: {
    title: "smui // spacemolt ui",
    description:
      "Nord-inspired terminal theme for shadcn/ui. Hardened components for starship terminals.",
    images: [{ url: "https://smui.statico.io/screenshot.gif", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "smui // spacemolt ui",
    description:
      "Nord-inspired terminal theme for shadcn/ui. Hardened components for starship terminals.",
    images: ["https://smui.statico.io/screenshot.gif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.className} antialiased`}>
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
