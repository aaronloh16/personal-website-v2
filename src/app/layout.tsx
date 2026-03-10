import LightDarkModeToggle from "@/components/LightDarkModeToggle";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Crimson_Pro, DM_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { headline, tagline } from "./page";

const title = `Aaron Loh — ${tagline}`;
const description = headline;

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords:
    "Aaron Loh, Software Engineer, Community, Growth, Distribution, McMaster University, Stan, RBC, Full Stack Developer, Hack the North",
  creator: "Aaron Loh",
  authors: [{ name: "Aaron Loh" }],

  openGraph: {
    title: title,
    description: description,
    url: "https://aaronloh.xyz",
    images: {
      url: "/opengraph-image.webp",
      alt: "Aaron Loh info",
    },
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://aaronloh.xyz"),
  alternates: {
    canonical: "/",
  },
};

const crimson_pro = Crimson_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson-pro",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${crimson_pro.variable} ${dm_sans.variable} ${jetbrains_mono.variable}`}
    >
      <Script
        src="https://app.tinyanalytics.io/pixel/DbzDhIpSbsBIoTz9"
        strategy="lazyOnload"
      />
      <body className="font-sans">
        <ThemeProvider disableTransitionOnChange attribute="data-mode">
          <div className="relative">
            <div className="fixed right-0 top-0 z-20">
              <LightDarkModeToggle />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
