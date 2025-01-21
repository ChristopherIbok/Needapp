"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  // Social media links configuration
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      icon: <FaFacebook className="text-2xl" />,
      hoverColor: "hover:text-blue-600", // Facebook hover color
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com",
      icon: <FaTwitter className="text-2xl" />,
      hoverColor: "hover:text-blue-400", // Twitter hover color
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      icon: <FaInstagram className="text-2xl" />,
      hoverColor: "hover:text-pink-500", // Instagram hover color
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      icon: <FaLinkedin className="text-2xl" />,
      hoverColor: "hover:text-blue-700", // LinkedIn hover color
    },
  ];

  // Scrolls to the top of the page
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-l from-[#1a2a3f] via-[#3e1e59] to-[#2e3d68] text-white py-16 px-6">
      <div className="container mx-auto grid gap-16 lg:grid-cols-12">
        {/* Branding Section */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6">
          <Link href="/" passHref>
            <Image
              src="/icons/logo-light.png"
              alt="Business Agency Logo"
              height={64}
              width={180}
              priority
            />
          </Link>
          <p className="text-xl text-white text-center lg:text-left">
            Transforming your ideas into impactful solutions for the digital
            age.
          </p>
        </div>

        {/* Navigation and Social Links Section */}
        <div className="lg:col-span-6 flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-16">
          {/* Quick Links */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 text-center lg:text-left">
              {[
                "About",
                "Testimonials",
                "Services",
                "Portfolio",
                "Pricing",
                "Contact",
              ].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="text-lg text-white hover:text-[#6A0DAD] transition duration-300">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <div className="flex gap-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl ${link.hoverColor} transition duration-300`}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll to Top Section */}
        <div className="lg:col-span-2 flex flex-col items-center space-y-6">
          <button
            onClick={handleScrollToTop}
            className="p-4 rounded-2xl bg-[#ffffff] text-black shadow-lg hover:scale-110 transition-transform">
            <AiOutlineArrowUp className="text-3xl" />
          </button>
          <p className="text-sm text-[#D1D1D1]">Back to Top</p>
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="mt-12 h-[2px] bg-gradient-to-r from-[#6a88b4] via-[#001E80] to-[#6A0DAD]" />

      {/* Bottom Copyright Section */}
      <div className="mt-6 text-center text-sm text-[#D1D1D1]">
        &copy; {new Date().getFullYear()} Business Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
