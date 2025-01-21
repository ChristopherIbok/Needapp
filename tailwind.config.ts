import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Includes pages folder and relevant file extensions
    "./components/**/*.{js,ts,jsx,tsx}", // Includes components folder
    "./app/**/*.{js,ts,jsx,tsx}", // Includes app folder
  ],
  theme: {
    screens: {
      sm: "640px", // Small screens (adjust if needed)
      md: "768px", // Medium screens
      lg: "1200px", // Large screens
    },
    extend: {
      container: {
        center: true, // Centers the container by default
        padding: {
          DEFAULT: "20px", // Default padding for the container
          lg: "80px", // Padding for large screens
        },
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ["responsive"], // Enables backdrop blur on responsive screens
      backgroundColor: ["before", "active", "hover", "focus"], // Adds background color support for pseudo-classes
    },
  },
  plugins: [], // Placeholder for future plugins if needed
} satisfies Config;
