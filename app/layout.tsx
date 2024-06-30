import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import MyNavbar from "../components/my-navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "PATTERNSHOP : Print design software, artworks design, for textile fabrics",
  description:
    "Patternshop is a powerful tool enabling the repetition of images in organisation of networks, creation of textures and realistic mapping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge("bg-slate-50 dark:bg-gray-900", inter.className)}>
        <main className="container max-w-3xl mx-auto rounded-xl border-solid border-2 border-gray-200 m-5 p-5 bg-white">
          <MyNavbar />
          {children}
        </main>
      </body>
    </html>
  );
}
