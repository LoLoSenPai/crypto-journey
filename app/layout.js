import { Nunito, PT_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackgroundWrapper from "@/components/BackgroundWrapper";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"], // ou autre selon ton style
  display: "swap",
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Crypto Journey",
  description: "Your journey into the world of cryptocurrency starts here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${ptSerif.variable} ${jetBrains.variable} antialiased`}>
        <BackgroundWrapper>
          <Navbar />
          <main className="max-w-7xl mx-auto">{children}</main>
        </BackgroundWrapper>
      </body>
    </html>
  );
}
