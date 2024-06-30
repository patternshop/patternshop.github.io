"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";

import logo from "../public/logo.gif";
import bandeau from "../public/bandeau.jpg";

export default function MyTitle({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <h1 className="font-bold text-nice-red">
      {children}
    </h1>
  );
}
