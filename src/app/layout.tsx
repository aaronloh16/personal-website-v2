import LightDarkModeToggle from "@/components/LightDarkModeToggle";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { headline, tagline } from "@/lib/siteData";

const title = `Aaron Loh — ${tagline}`;
const description = headline;

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords:
    "Aaron Loh, Software Engineer, Growth, AI Agents, McMaster University, Stan, RBC, Full Stack Developer, Hack the North",
  creator: "Aaron Loh",
  authors: [{ name: "Aaron Loh" }],

  openGraph: {
    title: title,
    description: description,
    url: "https://aaronloh.xyz",
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
      className={jetbrains_mono.variable}
    >
      <Script
        src="https://app.tinyanalytics.io/pixel/DbzDhIpSbsBIoTz9"
        strategy="lazyOnload"
      />
      <body className="font-mono">
        <ThemeProvider disableTransitionOnChange attribute="data-mode">
          <div className="relative">
            <div className="fixed bottom-0 right-0 z-20">
              <LightDarkModeToggle />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
