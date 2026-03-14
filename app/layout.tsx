import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hearth & Home Specialties | Las Vegas Commercial Exterior Solutions",
  description:
    "The ONLY company in Las Vegas that delivers every exterior solution a commercial building needs. Storefront glass, commercial doors, loading docks, security gates & more. 25+ years, 7,500+ clients. Licensed & Insured.",
  keywords: [
    "commercial exterior Las Vegas",
    "storefront glass Las Vegas",
    "commercial doors Las Vegas",
    "loading dock equipment Las Vegas",
    "security gates Las Vegas",
    "ADA door operators Las Vegas",
    "fire doors Las Vegas",
    "locksmith commercial Las Vegas",
  ],
  openGraph: {
    title: "Hearth & Home Specialties | Las Vegas Commercial Exterior Solutions",
    description:
      "One company. Every exterior solution. 25+ years serving Las Vegas.",
    type: "website",
    url: "https://hnhsi-inc.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
