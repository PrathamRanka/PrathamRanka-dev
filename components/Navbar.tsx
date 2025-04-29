"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navlinks = [
  { title: "About", path: "/" }, // Corrected route
  { title: "Portfolio", path: "portfolio" }, // Corrected route
  { title: "Stack", path: "stack" }, // Corrected route
  { title: "Contact", path: "contact" }, // Corrected route
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="z-50 fixed flex justify-center w-full text-white font-bold">
      {/* Desktop Navbar */}
      <div
        className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl 
                        hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto"
      >
        <ul className="flex flex-row p-2 space-x-8">
          {navlinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="transform hover:text-white/50 transition-all duration-300 ease-in-out"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-14 border rounded z-50
                           text-white/70 border-white/10 p-2"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-8 h-full">
          {navlinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                onClick={closeNav}
                className="text-5xl text-white hover:text-purple-500 transition duration-300"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};