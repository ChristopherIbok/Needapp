export default function CTASection() {
  return (
    <section className="relative w-full min-h-[70vh] bg-black text-white overflow-hidden py-12 md:py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#010D3E] to-[#001E80] opacity-30 z-0" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Title with Animated Gradient */}
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-gradient-to-r from-[#00B0FF] via-[#e100ff] to-[#00B0FF] bg-clip-text animate-title">
          Your Future, Our Innovation
        </h2>

        {/* Description */}
        <p className="mt-4 md:mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-90 tracking-wide transform-gpu animate-description">
          We craft experiences that connect people with the extraordinary. Let’s
          innovate together and create something that defies expectations.
        </p>

        {/* Call-to-Action Button */}
        <a
          href="#contact-form"
          className="mt-6 md:mt-8 inline-block px-8 py-4 bg-gradient-to-r from-[#c37ad1] to-[#00B0FF] text-[#010D3E] text-lg font-medium rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#00B0FF] animate-button">
          Connect With Us
        </a>
      </div>

      {/* Decorative Circles */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 z-0 animate-particles">
        {/* Circle Decorations with Animation */}
        <div className="w-24 h-24 bg-[#00B0FF] rounded-full animate-pulse animation-delay-200"></div>
        <div className="w-36 h-36 bg-[#d051db] rounded-full animate-pulse animation-delay-400"></div>
        <div className="w-48 h-48 bg-[#010D3E] rounded-full animate-pulse animation-delay-600"></div>
        <div className="w-16 h-16 bg-[#00B0FF] rounded-full animate-pulse animation-delay-800"></div>
        <div className="w-20 h-20 bg-[#d884db] rounded-full animate-pulse animation-delay-1000"></div>
        <div className="w-32 h-32 bg-[#010D3E] rounded-full animate-pulse animation-delay-1200"></div>
      </div>
    </section>
  );
}
