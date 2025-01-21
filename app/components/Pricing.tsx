"use client";

import pricingData from "../data/pricing.json";
import CheckIcon from "../../public/icons/check.svg";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Meta from "./Meta";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <>
      {/* Meta Information for SEO */}
      <Meta
        title="Pricing Plans"
        description="Explore our pricing plans for businesses of all sizes."
        keywords="pricing, website design, development, hosting"
        author="Your Company"
      />

      <section id="pricing" className="pt-16 bg-custom-gradient-light pb-40">
        <div className="container mx-auto text-center mb-12">
          {/* Section Tag */}
          <div className="flex justify-center">
            <div className="tag">Pricing</div>
          </div>
          
          {/* Section Title and Description */}
          <h2 className="section-title mb-4 mt-4">
            Explore Our Pricing Options
          </h2>
          <p className="section-description">
            Choose the perfect package for your business needs.
          </p>
        </div>

        {/* Pricing Plans Grid */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {pricingData.map((plan, index) => {
              const { plan: title, description, price, features, inverse, popular } = plan;

              return (
                <div
                  key={index}
                  className={twMerge(
                    "relative w-full mx-auto shadow-2xl flex flex-col p-6 my-4 rounded-3xl h-full transition-transform duration-300 transform hover:scale-105",
                    inverse ? "bg-black text-white border-black" : "bg-white"
                  )}
                >
                  <div className="flex justify-between mb-4">
                    {/* Plan Title */}
                    <h3 className={twMerge("text-2xl font-bold", inverse ? "text-white/80" : "text-black/70")}>
                      {title}
                    </h3>

                    {/* Conditionally render "Popular" label */}
                    {popular && (
                      <div className="inline-flex text-sm px-2 py-1 rounded-xl border border-white/20">
                        <motion.span
                          className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] bg-[length:200%_100%] bg-left text-transparent bg-clip-text font-medium"
                          animate={{
                            backgroundPosition: ["0% 0%", "100% 50%", "0% 0%"],
                          }}
                          transition={{
                            duration: 3,
                            ease: "linear",
                            repeat: Infinity,
                          }}
                        >
                          Popular
                        </motion.span>
                      </div>
                    )}
                  </div>

                  {/* Plan Description */}
                  <p className="mt-2 text-gray-600">{description}</p>

                  <div className="flex items-baseline gap-1">
                    {/* Plan Price */}
                    <span className={twMerge("text-3xl font-medium leading-none tracking-tight", inverse && "text-white font-light")}>
                      {price}
                    </span>
                    <span className={twMerge("tracking-tight font-medium text-black/50", inverse && "text-white/60")}>
                      /month
                    </span>
                  </div>

                  {/* Plan Features */}
                  <ul className="flex flex-col gap-2 mt-6">
                    {features.map((feature, index) => (
                      <li key={index} className="text-sm flex items-center gap-3">
                        <Image src={CheckIcon} alt="check icon" height={20} width={20} />
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Call-to-Action Button */}
                  <div className="flex justify-center mt-auto">
                    <a href="#contact-form">
                      <button
                        className={twMerge(
                          "border border-black/50 relative inline-flex items-center justify-center px-8 py-2 rounded-lg overflow-hidden transition-all duration-300 ease-in-out",
                          inverse && "border-white/40"
                        )}
                      >
                        <span
                          className={twMerge(
                            "relative z-10 font-medium",
                            inverse && "text-transparent bg-clip-text bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)]"
                          )}
                        >
                          Learn More
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
