"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const LogoTicker = ({
  logos,
}: {
  logos: { src: string; alt: string }[];
}) => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="relative">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}>
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={40}
                className="logo-ticker-image"
              />
            ))}

            {/* Repeat logos for seamless scrolling */}
            {logos.map((logo, index) => (
              <Image
                key={`repeat-${index}`}
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={40}
                className="logo-ticker-image"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
