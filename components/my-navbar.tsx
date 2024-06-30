"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "../public/logo.gif";
import bandeau from "../public/bandeau.jpg";

export default function MyNavbar() {
  const currentPath = usePathname();
  var itemArray = [
    ["Home", "/"],
    ["Community", "/navbars"],
    ["Support", "/navbars"],
    ["Download", "/navbars"],
    ["Contact us", "/navbars"],
  ];
  /*
  array.map(val => ({
    key1: val.key1,
    key2: val.key2
  }));*/
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="#">
          <Image src={logo} className="mr-3 h-32 sm:h-9 w-auto" alt=" Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {itemArray.map((myItem, index) => (
            <Navbar.Link
              key={index}
              href={myItem[1]}
              active={currentPath == myItem[1]}
            >
              {myItem[0]}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
      <Image src={bandeau} className="w-full h-auto" alt="Bandeau" />
    </div>
  );
}
