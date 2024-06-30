"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "../public/logo.gif";
import bandeau from "../public/bandeau.jpg";

export default function MyNavbar() {
  const currentPath = usePathname();
  var itemArray = [
    ["Home", "/"],
    ["Applications", "/applications"],
    /*
    ["Community", "/applications"],
    ["Support", "/navbars"],
    ["Download", "/navbars"],
    ["Contact us", "/navbars"],
    */
  ];
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <NavbarBrand href="/">
          <Image src={logo} className="mr-3 h-16 w-auto" alt=" Pattersnhop" />
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
