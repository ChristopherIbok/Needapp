import React from "react";
import ContactForm from "./ContactForm";

// Contact details such as title, description, contact information, and department emails
const contactDetails = {
  title: "Get in Touch", // Section title
  description:
    "We're here to assist you! Reach out to us through any of the methods below, or send us your query using the contact form.", // Section description
  contactInfo: [
    { label: "Phone", value: "+1 (123) 456-7890" },
    {
      label: "Email",
      value: "support@example.com",
      link: "mailto:support@example.com", // Link to open email client
    },
    { label: "Business Hours", value: "Mon-Fri, 9:00 AM - 6:00 PM" },
  ],
  departments: [
    { label: "Customer Support", email: "support@example.com" },
    { label: "Sales", email: "sales@example.com" },
    {
      label: "Careers",
      email: "careers@example.com",
      note: "(Send your CV with the subject: Job Application)", // Optional note for careers
    },
  ],
};

// ContactSection component
const ContactSection: React.FC = () => {
  return (
    <section className="w-full bg-custom-gradient-light py-16" id="contact">
      {" "}
      {/* Background gradient and padding for the section */}
      <div className="px-12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {" "}
        {/* Responsive grid for layout */}
        {/* Column 1: Information Section */}
        <div className="space-y-8">
          <h2 className="section-title text-start">{contactDetails.title}</h2>{" "}
          {/* Section title */}
          <p className="section-description text-left">
            {contactDetails.description} {/* Section description */}
          </p>
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-[#010D3E] mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3 text-[#010D3E]">
              {/* Loop through and display the contact information */}
              {contactDetails.contactInfo.map((info, index) => (
                <li key={index} className="text-lg leading-relaxed">
                  <strong className="font-medium">{info.label}:</strong>{" "}
                  {/* Conditional rendering for links */}
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-blue-600 underline hover:text-blue-800">
                      {info.value} {/* Display the link */}
                    </a>
                  ) : (
                    info.value // Display the text value if no link
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Departments Section */}
          <div>
            <h3 className="text-2xl font-semibold text-[#010D3E] mb-4">
              Departments
            </h3>
            <ul className="space-y-3 text-[#010D3E]">
              {/* Loop through and display departments with their respective emails */}
              {contactDetails.departments.map((dept, index) => (
                <li key={index} className="text-lg leading-relaxed">
                  <strong className="font-medium">{dept.label}:</strong>{" "}
                  <a
                    href={`mailto:${dept.email}`} // Link to send email to the department
                    className="text-blue-600 underline hover:text-blue-800">
                    {dept.email} {/* Display the department email */}
                  </a>{" "}
                  {/* Optional note for careers department */}
                  {dept.note && (
                    <span className="text-[#010D3E] text-md block mt-1">
                      {dept.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Column 2: Contact Form */}
        <div className="rounded-lg">
          <ContactForm /> {/* Include the ContactForm component here */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
