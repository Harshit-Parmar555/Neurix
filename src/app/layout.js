import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Neurix : An AI-Powered Code Editor",
  description: "Generated by create next app",
};

import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          poppins.variable,
          jetbrainsMono.variable,
          "min-h-screen min-w-screen overflow-x-hidden bg-background text-foreground antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
