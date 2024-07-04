import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import MyNavbar from "@/components/my-navbar";

import "@/app/globals.css";

import github from "@/public/images/github.png";

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
      <body
        className={twMerge("bg-slate-50 dark:bg-gray-900", inter.className)}
      >
        <div className="container max-w-3xl mx-auto">
          <main>
            <div className="rounded-xl border-solid border-2 border-gray-200 m-5 p-5 bg-white">
              <MyNavbar />
              {children}
            </div>
            <div className="pr-8 pt-1 pb-5">
              <Link href="https://github.com/patternshop">
                <div className="flex flex-row gap-1 items-center justify-end">
                  <div className="text-sm">View project on Github</div>
                  <div>
                    <Image src={github} className="h-10 w-auto" alt="Github" />
                  </div>
                </div>
              </Link>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
