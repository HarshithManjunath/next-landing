import type { Metadata } from "next";
import { geistMono, geistSans } from "./ui/fonts";
import "./globals.css";
import Header from "./ui/components/header";

export const metadata: Metadata = {
  title: "Harshith Manjunath",
  description: "Check out my work - Harshith Manjunath",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
