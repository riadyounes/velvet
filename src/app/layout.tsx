import "./globals.css";

import type { Metadata } from "next";

import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Jost } from "next/font/google";

export const metadata: Metadata = {
  title: {
    template: "%s | Velvet bolo",
    default: "Velvet",
  },
  description: "Bem-vindo ao Velvet, a sua loja de bolos deliciosos.",
};

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jost.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="mx-auto w-full flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
