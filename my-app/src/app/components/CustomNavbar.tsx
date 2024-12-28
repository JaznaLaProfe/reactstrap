"use client";

import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import { useAppContext } from "../context/AppContext";

export default function CustomNavbar() {
  const { count } = useAppContext(); // Acceso al contexto

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Mi App</NavbarBrand>
      <Nav className="ms-auto" navbar>
        <NavItem>
          <NavLink href="#" style={{ color: "white" }}>
            Interacciones: {count}
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

/*
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } 
from "reactstrap";
 */
//export default function CustomNavbar() {
//  const [isOpen, setIsOpen] = useState(false);
//  const toggleNavbar = () => setIsOpen(!isOpen);

//  return (
//    <Navbar color="dark" dark expand="md" className="mb-4">
 //     {/* Marca del Navbar */}
//      <NavbarBrand href="/">Ejemplo</NavbarBrand>

//      {/* Botón toggle para dispositivos pequeños */}
//      <NavbarToggler onClick={toggleNavbar} />

//      {/* Links de navegación */}
//      <Collapse isOpen={isOpen} navbar>
//        <Nav className="me-auto" navbar>
//          <NavItem>
//            <NavLink href="/">Inicio</NavLink>
//          </NavItem>
//          <NavItem>
//            <NavLink href="/about">Acerca de</NavLink>
//          </NavItem>
 //         <NavItem>
 //           <NavLink href="/contact">Contacto</NavLink>
 //         </NavItem>
 //       </Nav>
 //     </Collapse>
 //   </Navbar>
 // );
//}
