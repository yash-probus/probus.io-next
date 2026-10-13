import type { Metadata } from "next";
import { Roboto, Playball } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const playball = Playball({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playball",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://probus.io'),
  title: "Probus - Smart Grid IoT Solutions",
  description: "Probus stands among top smart meter manufacturing companies, delivering reliable smart grid IoT solutions.",
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${roboto.variable} ${playball.variable}`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
