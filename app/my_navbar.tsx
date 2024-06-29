"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";

import logo from "../public/logo.gif";
import bandeau from "../public/bandeau.jpg";

export default function MyNavbar() {
  return (
    <div>
        <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="#">
            <Image src={logo} className="mr-3 h-32 sm:h-9 w-auto" alt=" Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link href="/navbars" active={true}>
            Home
            </Navbar.Link>
            <Navbar.Link href="/navbars">About</Navbar.Link>
            <Navbar.Link href="/navbars">Services</Navbar.Link>
            <Navbar.Link href="/navbars">Pricing</Navbar.Link>
            <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
        <Image src={bandeau} className="w-full h-auto" alt="Bandeau" />
    </div>
  );
}
