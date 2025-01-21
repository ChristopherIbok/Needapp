"use client";

import { useRef } from "react";
import Image from "next/image";
import servicesData from "../data/services.json";
import Meta from "./Meta";

// Services Component
// Displays a horizontally scrollable list of services with details and images.
const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll container to the right
  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Scroll container to the left
  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  return (
    <>
      {/* SEO Metadata */}
      <Meta
        title="Our Services"
        description="Explore the high-quality services we offer to boost your business."
        keywords="web development, digital marketing, graphic design, app development"
        author="Your Company Name"
      />

      <section id="services" className="pt-0 pb-20 bg-custom-gradient-light">
        {/* Header Section */}
        <div className="container text-center mb-12 px-4 md:px-6">
          <div className="flex justify-center">
            <div className="tag">Services</div>
          </div>
          <h2 className="section-title mt-4">What we do</h2>
          <p className="section-description text-xl mt-4">
            We offer a variety of creative and technical services that will help
            take your business to the next level.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto space-x-6 scroll-smooth pb-4 snap-x snap-mandatory hide-scrollbar px-6 md:px-12 lg:px-16">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center w-[220px] md:w-[270px] lg:w-[300px] bg-white rounded-2xl shadow-lg group transition-transform duration-500 transform hover:scale-105 hover:shadow-xl flex flex-col justify-between">
                {/* Service Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="object-center group-hover:opacity-80 transition-opacity duration-300 rounded-2xl"
                  />
                </div>
                {/* Service Details */}
                <div className="p-4 flex-1">
                  <h3 className="text-lg font-semibold text-[#001E80] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">
                    {service.description}
                  </p>
                  <p className="text-xs text-gray-600">{service.details}</p>
                </div>
                {/* Learn More Button */}
                <div className="mt-auto mb-4 p-2">
                  <a
                    href="#contact-form"
                    className="btn-learn-more font-semi-bold">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={scrollLeft}
              className="border border-[#000000] text-[#000000] p-3 rounded-2xl hover:border-[#000000] hover:text-[#000000] transition-all duration-300 w-24 h-12 flex justify-center items-center">
              ←
            </button>
            <button
              onClick={scrollRight}
              className="border border-[#000000] text-[#000000] p-3 rounded-2xl hover:border-[#000000] hover:text-[#000000] transition-all duration-300 w-24 h-12 flex justify-center items-center">
              →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
