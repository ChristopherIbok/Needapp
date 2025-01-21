import React from "react";
import testimonials from "../data/testimonials.json"; // Import the testimonial data
import Image from "next/image";
import Meta from "./Meta"; // Import the Meta component for SEO management

// Split testimonials into columns for layout
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// Testimonials column component
export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials; // Type definition for props
  duration?: number; // Optional duration for animation
}) => (
  <div
    className={props.className}
    style={{ overflow: "hidden", height: "100%" }}>
    <div className="testimonial-wrapper" id="testimonials">
      {/* Loop through the testimonials and display them */}
      <div className="testimonial-list">
        {props.testimonials.map((testimonial, index) => (
          <div key={index} className="card">
            <div>{testimonial.text}</div>
            <div className="flex items-center gap-2 mt-5">
              <Image
                src={testimonial.imageSrc}
                alt={testimonial.name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
              <div className="flex flex-col">
                <div className="font-medium tracking-tight leading-5">
                  {testimonial.name}
                </div>
                <div className="leading-5 tracking-tight">
                  {testimonial.username}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* This section duplicates the testimonials for scrolling effect */}
      <div className="testimonial-list">
        {props.testimonials.map((testimonial, index) => (
          <div key={`duplicate-${index}`} className="card">
            <div>{testimonial.text}</div>
            <div className="flex items-center gap-2 mt-5">
              <Image
                src={testimonial.imageSrc}
                alt={testimonial.name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
              <div className="flex flex-col">
                <div className="font-medium tracking-tight leading-5">
                  {testimonial.name}
                </div>
                <div className="leading-5 tracking-tight">
                  {testimonial.username}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Main Testimonials component
export const Testimonials = () => {
  return (
    <>
      <Meta
        title="Customer Testimonials" // Title for SEO
        description="Read what our users have to say about our products and services."
        keywords="testimonials, reviews, user feedback, customers"
        author="Your Company"
      />
      <section className="bg-white py-24">
        <div className="container">
          <div className="section-heading">
            <div className="flex justify-center">
              <div className="tag">Testimonials</div>
            </div>
            <h2 className="section-title mt-5">What our users say</h2>
            <p className="section-description mt-5">
              From intuitive design to powerful features, our service has become
              an essential tool for users around the world.
            </p>
          </div>
          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] md:max-w-fit md:max-h-[738px] overflow-hidden">
            {/* Display testimonials in 3 columns with different screen breakpoints */}
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn
              testimonials={secondColumn}
              duration={19}
              className="hidden md:block" // Hide on smaller screens
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block" // Hide on medium and smaller screens
              duration={17}
            />
          </div>
        </div>
      </section>
    </>
  );
};
