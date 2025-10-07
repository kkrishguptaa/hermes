import { MeshGradient } from "@paper-design/shaders-react";
import type { Metadata } from "next";
import { Bebas_Neue, Playfair_Display } from "next/font/google";
//@ts-expect-error
import "./globals.css";

export const metadata: Metadata = {
  title: "Krish Gupta",
  description:
    "The personal website of Krish Gupta. A high school senior, software engineer, poet and human. This is a website where I share to people who wish to connect with me and know more about me!",
};

const DisplayFont = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});
const TextFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playfair-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${DisplayFont.variable} ${TextFont.variable}`}>
      <body className="relative min-h-screen">
        <div className="h-screen w-screen overflow-hidden fixed inset-0 -z-10 flex items-center justify-center">
          <MeshGradient
            width="120vw"
            height="120vh"
            colors={["#1b1b1d", "#3b2a8d"]}
            distortion={1}
            swirl={1}
            grainMixer={0.26}
            grainOverlay={0.3}
            speed={1}
          />
        </div>
        <main className="container mx-auto">
          <div className="mx-4 my-4 md:my-8 px-4 py-8 md:px-8 bg-zinc-900/70 rounded-lg background-blur">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
