"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navlinks = [
  { title: "About", path: "#about" }, 
  { title: "Stack", path: "#stack" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Contact", path: "#contact" },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  return (
    <div className="z-50 fixed flex justify-center w-full text-white font-semibold text-base">
      {/* Desktop Navbar */}
      <div className="border border-white/20 mt-7 backdrop-blur-3xl rounded-3xl 
                      hidden md:flex items-center justify-center px-4 py-2 max-w-[360px] mx-auto text-sm">
        <ul className="flex flex-row space-x-7">
          {navlinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="hover:text-white/70 transition-all duration-300 ease-in-out
                           transform hover:scale-110 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(128,90,213,0.15)]"
                style={{
                  willChange: 'transform',
                }}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Toggle */}
      <div
        onClick={toggleNav}
        className="md:hidden absolute top-4 right-12 border rounded z-50
                   text-white/70 border-white/10 p-2"
      >
        {nav ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
      </div>

      {/* Mobile Navbar Panel */}
      <div
        className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-7 h-full">
          {navlinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                onClick={closeNav}
                className="text-4xl text-white hover:text-purple-500 transition duration-300"
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
