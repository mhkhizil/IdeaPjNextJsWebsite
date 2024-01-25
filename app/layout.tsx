// RootLayout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  darkMode=false// Add a prop to determine dark mode
}: Readonly<{
  children: React.ReactNode;
  darkMode?: boolean; // Make darkMode optional
}>)

 {
  return (
    <html lang="en">
      <body
        className={`${
          inter.className
        } ${darkMode ? "dark-theme" : ""}   bg-textColor`}
       
      >
        {darkMode}
        {children}
      </body>
    </html>
  );
}
