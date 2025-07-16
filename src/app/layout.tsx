import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Footer from "./sections/Footer";
import { Header } from "./sections/Header";
import { StagewiseToolbar } from "@stagewise/toolbar-next";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetBrainMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akinde Dipo",
  description: "Akinde Dipo's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Akinde Dipo</title>
        <meta name="description" content="Akinde Dipo's portfolio" />
        <meta property="og:title" content="Akinde Dipo" />
        <meta property="og:description" content="Akinde Dipo's portfolio" />
        <meta name="twitter:title" content="Akinde Dipo" />
        <meta name="twitter:description" content="Akinde Dipo's portfolio" />
      </head>
      <body
        className={twMerge(
          inter.variable,
          jetBrainMono.variable,
          "bg-[#333333] text-[#D6D2BD] font-sans antialiased"
        )}
      >
        <Header />
        {children}
        <Footer />
        <StagewiseToolbar
          config={{
            plugins: [], // Add your custom plugins here
          }}
        />
      </body>
    </html>
  );
}
