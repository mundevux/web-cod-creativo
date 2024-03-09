"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "@/public/Logo_Codigo_Creativo_2.png";
import icono from "@/public/Icono_Codigo_Creativo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import PrincipalButton from "./PrincipalButton";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Inicio", "Nosotros", "Servicios", "Portafolio"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="py-3">
      <NavbarContent className="max-w-7xl mx-auto">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <Image
              src={logo}
              alt="Código Creativo"
              className="hidden md:block w-48"
            />
            <Image
              src={icono}
              alt="Código Creativo"
              className="block md:hidden w-12"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Portafolio
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <PrincipalButton as={Link} variant="flat" href="/contacto">
            Contacto
          </PrincipalButton>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="mt-7">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
