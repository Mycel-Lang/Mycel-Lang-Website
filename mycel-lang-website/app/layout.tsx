import { Geist, Geist_Mono } from "next/font/google";
import { Inter, JetBrains_Mono, Merriweather } from "next/font/google";
import "./globals.css";
import "./themes.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ExternalLinkProvider } from "@/components/ExternalLinkProvider";
import {Metadata} from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: '--font-jetbrains-mono',
    subsets: ['latin'],
    weight: ['400']
})

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mycel Lang",
  description: "The website for the Mycel language.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${jetbrainsMono.variable} ${merriweather.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ExternalLinkProvider>{children}</ExternalLinkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
