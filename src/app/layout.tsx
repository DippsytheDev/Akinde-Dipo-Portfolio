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
  title: "Long Nguyen",
  description: "Long Nguyen's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Long Nguyen</title>
        <meta name="description" content="Long Nguyen's portfolio" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://thanhlongnguyen.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Long Nguyen" />
        <meta property="og:description" content="Long Nguyen's portfolio" />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/9bd18980-2bde-4db0-8f61-8ec598aff2b6.png?token=_qTLRn6p4KnE4V7PrsKivjz0GDQRC5w3_ivOT_p9HSw&height=714&width=1200&expires=33278371349"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="thanhlongnguyen.vercel.app" />
        <meta
          property="twitter:url"
          content="https://thanhlongnguyen.vercel.app/"
        />
        <meta name="twitter:title" content="Long Nguyen" />
        <meta name="twitter:description" content="Long Nguyen's portfolio" />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/9bd18980-2bde-4db0-8f61-8ec598aff2b6.png?token=_qTLRn6p4KnE4V7PrsKivjz0GDQRC5w3_ivOT_p9HSw&height=714&width=1200&expires=33278371349"
        />
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
