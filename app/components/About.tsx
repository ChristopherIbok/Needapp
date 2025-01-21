"use client";

import React, { useEffect, useState } from "react";
import Meta from "../components/Meta"; // SEO metadata component
import Image from "next/image"; // Next.js image optimization component
import { MdArrowDownward } from "react-icons/md"; // Downward arrow icon

// Static content for the About section
const aboutContent = {
  title: "Who We Are",
  description:
    "We are a team of passionate professionals dedicated to delivering top-notch services and solutions. Our mission is to bring innovation and creativity to every project we undertake.",
  journey:
    "Our journey began with a small but passionate team aiming to revolutionize the [industry]. Today, we are proud to serve clients all over the world, helping them scale their businesses through innovation and cutting-edge technology.",
  sections: [
    {
      heading: "Our Mission",
      content:
        "Empowering businesses with cutting-edge technology and unparalleled expertise to drive growth and success.",
    },
    {
      heading: "Our Vision",
      content:
        "Becoming a global leader by providing innovative solutions that inspire businesses to thrive in a competitive world.",
    },
    {
      heading: "Our Values",
      content: [
        "Innovation: Creating new solutions that drive progress.",
        "Integrity: Maintaining transparency and honesty in all actions.",
        "Customer-Centricity: Focusing on the success of our clients.",
      ],
    },
  ],
  team: [
    {
      name: "John Doe",
      role: "CEO & Co-Founder",
      image: "/images/john.png",
    },
    { name: "Jane Smith", role: "CTO", image: "/images/john.png" },
    { name: "Alice Brown", role: "COO", image: "/images/john.png" },
    { name: "Bob White", role: "CMO", image: "/images/john.png" },
    { name: "Charlie Gray", role: "Lead Designer", image: "/images/john.png" },
    { name: "Emily Green", role: "Lead Developer", image: "/images/john.png" },
  ],
};

export default function About() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showTeam, setShowTeam] = useState(false);

  // Update scroll position to dynamically change background gradient
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle visibility of the team section for smaller screens
  const handleToggleTeam = () => {
    setShowTeam((prev) => !prev);
  };

  return (
    <>
      {/* Meta component for SEO optimization */}
      <Meta
        title="About Us - Business Agency"
        description="Learn more about our business agency and how we deliver exceptional results."
        keywords="business agency, about us, team, mission, vision"
        author="Business Agency Team"
      />

      {/* About Section */}
      <section
        id="about"
        className="py-32"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(255, 255, 255, 1),
            rgba(224, 238, 255, ${Math.min(0.5 + scrollPosition / 1200, 1)}),
            rgba(191, 210, 255, ${Math.min(0.4 + scrollPosition / 1500, 1)}),
            rgba(186, 190, 255, ${Math.min(0.3 + scrollPosition / 1800, 1)}),
            rgba(220, 220, 255, ${Math.min(0.3 + scrollPosition / 2200, 1)}),
            rgba(240, 246, 255, ${Math.min(0.2 + scrollPosition / 2500, 1)}),
            rgba(255, 255, 255, 1)
          )`,
          transition: "background 0.5s ease-out",
        }}>
        <div className="container mx-auto text-center mb-12">
          <div className="flex justify-center">
            <div className="tag">About us</div>
          </div>
          <h1 className="section-title mt-4">{aboutContent.title}</h1>
          <p className="section-description text-lg sm:text-[22px] sm:leading-[30px] mt-8 max-w-2xl mx-auto">
            {aboutContent.description}
          </p>
        </div>

        {/* Sections: Mission, Vision, and Values */}
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {aboutContent.sections.map((section, index) => (
            <div
              key={index}
              className="card p-6 shadow-xl bg-white rounded-2xl transition-all transform"
              style={{ animation: `fadeIn 0.8s forwards ${index * 0.3}s` }}>
              <h2 className="text-[#010D3E] font-semibold text-3xl py-2">
                {section.heading}
              </h2>
              {Array.isArray(section.content) ? (
                <div className="space-y-4">
                  {section.content.map((item, i) => (
                    <p key={i} className="text-lg leading-relaxed mt-2">
                      {item}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-lg text-[#010D3E] leading-relaxed">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" className="pb-32 pt-4 bg-white text-gray-800">
        <div className="container mx-auto text-center mb-12">
          <div className="flex justify-center">
            <div className="tag">Team</div>
          </div>
          <h2 className="mb-8 section-title mt-4">Meet Our Team</h2>

          {/* Team section for small screens */}
          <div className="md:hidden">
            <p
              onClick={handleToggleTeam}
              className="text-blue-500 cursor-pointer font-medium flex items-center justify-center space-x-2">
              <MdArrowDownward className="text-blue-800 text-xl" />
              {showTeam ? "Hide Team" : "Show Team"}
            </p>

            <div
              className={`mt-8 grid grid-cols-2 gap-8 transition-all duration-500 ease-in-out ${
                showTeam ? "max-h-full opacity-100" : "max-h-0 opacity-0"
              }`}>
              {aboutContent.team.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="object-cover shadow-lg rounded-lg"
                  />
                  <h3 className="font-semibold text-lg mt-4">{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team grid layout for larger screens */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutContent.team.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center group transform transition-all duration-300 ease-in-out">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="object-cover shadow-lg rounded-lg group-hover:scale-110 transition-all duration-300 ease-in-out"
                />
                <h3 className="font-semibold text-lg mt-4 group-hover:text-blue-500 transition-all duration-300 ease-in-out">
                  {member.name}
                </h3>
                <p className="group-hover:text-gray-500 transition-all duration-300 ease-in-out">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keyframe animation for fade-in effect */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
