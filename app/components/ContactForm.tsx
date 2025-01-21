"use client";

import React, { useState, useRef } from "react";
import "../styles/contactPage.css";
import emailjs from "@emailjs/browser";
import { validateForm } from "../utils/validation";

type FormData = {
  userType: "individual" | "company";
  name: string;
  email: string;
  phone: string;
  country: string;
  companyName: string;
  message: string;
  queryType: "sales" | "customer-service" | "general";
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    userType: "individual",
    name: "",
    email: "",
    phone: "",
    country: "",
    companyName: "",
    message: "",
    queryType: "general",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      // Send data using EmailJS
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

      const response = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!
      );

      if (response.status === 200) {
        setSuccess(true);
        setFormData({
          userType: "individual",
          name: "",
          email: "",
          phone: "",
          country: "",
          companyName: "",
          message: "",
          queryType: "general",
        });
      }
    } catch (err) {
      console.error("Error sending email:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container" id="contact-form">
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        {/* User Type Selection */}
        <div className="form-group">
          <label htmlFor="userType">Are you contacting as:</label>
          <select
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleChange}>
            <option value="individual">An Individual</option>
            <option value="company">From a Company</option>
          </select>
        </div>

        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Company Name Field */}
        <div className="form-group">
          <label htmlFor="companyName">Company Name *</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
          {errors.companyName && <p className="error">{errors.companyName}</p>}
        </div>

        {/* Phone Field */}
        <div className="form-group">
          <label htmlFor="phone">Phone *</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        {/* Country Field */}
        <div className="form-group">
          <label htmlFor="country">Country *</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
          {errors.country && <p className="error">{errors.country}</p>}
        </div>

        {/* Query Type */}
        <div className="form-group">
          <label htmlFor="queryType">Query Type:</label>
          <select
            id="queryType"
            name="queryType"
            value={formData.queryType}
            onChange={handleChange}>
            <option value="general">General Query</option>
            <option value="sales">Sales</option>
            <option value="customer-service">Customer Service</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Send Message"}
        </button>

        {/* Success Message */}
        {success && <p>Message sent successfully!</p>}
      </form>
    </div>
  );
};

export default ContactForm;
