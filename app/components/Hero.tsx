"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ArrowIcon from "../../public/icons/arrow-right.svg";
import Blob from "../../public/images/Big-blob.png";
import { useRef } from "react";
import Image from "next/image";
import Meta from "./Meta"; // Meta component for SEO and page meta tags

export default function Hero() {
  const heroRef = useRef(null);

  // Function to handle smooth scrolling to different sections of the page
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Meta tags for SEO */}
      <Meta
        title="Empowering Your Business"
        description="Transform your business with our expert solutions, strategic insights, and cutting-edge technology."
        keywords="business solutions, innovation, growth, expert strategies, technology"
        author="Your Company"
      />

      <section
        ref={heroRef}
        className="mt-20 pt-28 pb-20 lg:mt-0 md:pt-5 md:pb-10 bg-custom-gradient overflow-x-clip">
        <div className="container">
          <div className="md:flex items-center">
            {/* Left side of the Hero Section with text */}
            <div className="md:text-center mt-2 lg:text-left lg:w-[478px]">
              <div className="tag">Empowering Your Business</div>

              {/* Animated Heading: Type animation for dynamic text */}
              <div
                className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-text mt-8"
                style={{ minHeight: "160px" }}>
                <TypeAnimation
                  sequence={[
                    "Driving Innovation & Growth", // Text 1
                    2000, // 2 seconds delay
                    "Tailored Solutions for Your Success", // Text 2
                    2000, // 2 seconds delay
                    "Expert Strategies for Every Industry", // Text 3
                    2000, // 2 seconds delay
                    " ", // Clear text momentarily
                    500, // 0.5 second delay
                  ]}
                  speed={50} // Typing speed
                  repeat={Infinity} // Keep animating indefinitely
                />
              </div>

              <p className="text-xl md:text-2xl text-left md:text-center lg:text-left text-[#061a69] tracking-tight mt-6">
                Transform your business with our expert solutions. Whether
                you&apos;re looking to innovate, scale, or secure your
                operations, we bring strategic insights and cutting-edge
                technology to make it happen.
              </p>

              {/* Buttons for smooth scroll navigation */}
              <div className="flex gap-1 items-center mt-[30px] md:justify-center lg:justify-start">
                <button
                  className="btn btn-primary"
                  onClick={() => handleScrollToSection("services")}>
                  Get Started
                </button>
                <button
                  className="btn btn-text gap-1"
                  onClick={() => handleScrollToSection("about")}>
                  <span>Learn More</span>
                  <Image
                    src={ArrowIcon}
                    alt="Arrow Icon"
                    height={20}
                    width={20}
                  />
                </button>
              </div>
            </div>

            {/* Right side of the Hero Section with animated Blob */}
            <div className="mt-16 md:hidden lg:block md:h-[648px] md:flex-1 relative">
              <motion.img
                src={Blob.src}
                alt="Animated Blob"
                className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-19"
                animate={{
                  translateY: [-30, 30], // Moves the blob up and down
                }}
                transition={{
                  repeat: Infinity, // Repeat animation
                  repeatType: "mirror", // Bounce effect
                  duration: 3, // Duration of one cycle
                  ease: "easeInOut", // Smooth ease-in-out timing
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
