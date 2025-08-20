import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hossein's Portfolio",
  description: "Minimalistic and Modern Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={
          {
            "--font-geist-sans": "Geist, system-ui, sans-serif",
            "--font-geist-mono": "Geist Mono, monospace",
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
