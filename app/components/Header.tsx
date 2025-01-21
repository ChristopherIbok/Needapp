"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/icons/logo.png";

const Header = () => {
  // State to handle the mobile navigation menu visibility
  const [nav, setNav] = useState(false);
  // State to determine if the device is mobile (screen size < 768px)
  const [isMobile, setIsMobile] = useState(false);

  // Toggle the mobile menu when the hamburger icon is clicked
  const handleNavToggle = () => {
    setNav(!nav);
  };

  // Scroll smoothly to a section based on its ID
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setNav(false); // Close the mobile menu after clicking a section
  };

  // Handle window resizing to adjust for mobile/desktop views
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false); // Close mobile menu on desktop view
        setIsMobile(false);
      } else {
        setIsMobile(true); // Set mobile view
      }
    };

    // Initial resize check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-filter backdrop-blur-lg bg-transparent text-blue-950 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-24">
        {/* Logo and home link */}
        <div
          className="cursor-pointer"
          onClick={() => handleScrollToSection("hero")}>
          <Link href="/" passHref>
            <Image
              src={logo}
              alt="Business Agency Logo"
              height={64}
              width={180}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation (visible on medium and larger screens) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {/* Navigation items with smooth scroll */}
            {["about", "testimonials", "services", "portfolio", "pricing"].map(
              (section) => (
                <li
                  key={section}
                  className="lg:text-lg cursor-pointer relative group hover:font-bold hover:text-purple-800 transition-all duration-200"
                  onClick={() => handleScrollToSection(section)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-purple-900 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </li>
              )
            )}
            {/* Contact Us button */}
            <li
              className="lg:text-lg cursor-pointer relative group hover:font-bold hover:text-purple-800 transition-all duration-200"
              onClick={() => handleScrollToSection("contact-form")}>
              <span className="relative z-10 px-4 py-2 border-2 bg-black border-black rounded-full group-hover:scale-105 transition-transform duration-200 ease-in-out text-white">
                Contact us
              </span>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={24} onClick={handleNavToggle} />
          ) : (
            <AiOutlineMenu size={24} onClick={handleNavToggle} />
          )}
        </div>
      </div>

      {/* Mobile Navigation (visible when nav state is true) */}
      {nav && isMobile && (
        <div className="fixed top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-11/12 max-w-sm bg-white backdrop-filter backdrop-blur-lg rounded-3xl shadow-lg p-6">
          <ul className="flex flex-col space-y-4 text-center">
            {["about", "testimonials", "services", "portfolio", "pricing"].map(
              (section) => (
                <li
                  key={section}
                  className="text-lg cursor-pointer relative group hover:font-bold hover:text-purple-800 transition-all duration-200"
                  onClick={() => handleScrollToSection(section)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-purple-300 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </li>
              )
            )}
            {/* Contact mobile menu item */}
            <li
              className="text-lg cursor-pointer relative group hover:font-bold hover:text-purple-800 transition-all duration-200"
              onClick={() => handleScrollToSection("contact-form")}>
              Contact
              <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-purple-300 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
