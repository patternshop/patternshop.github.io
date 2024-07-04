"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";

import logo from "@/public/images/logo.gif";
import bandeau from "@/public/images/bandeau.jpg";

export default function MyNavbar() {
  const currentPath = usePathname();
  var itemArray = [
    ["Presentation", "/"],
    ["Ressources", "/ressources"],
    ["Tutorials", "/tutorials"],
    ["Download", "/download"]
  ];
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <NavbarBrand href="/">
          <Image src={logo} className="mr-3 h-16 w-auto" alt="Pattersnhop" />
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          {itemArray.map((myItem, index) => (
            <Navbar.Link
              key={index}
              href={myItem[1]}
              active={currentPath == myItem[1]}
            >
              {myItem[0]}
            </Navbar.Link>
          ))}
        </NavbarCollapse>
      </Navbar>
      <Image src={bandeau} className="w-full h-auto" alt="Bandeau" />
    </div>
  );
}
