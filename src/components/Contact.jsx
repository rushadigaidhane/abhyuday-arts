import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Error connecting to server.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-pink-100 min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img
          src="https://cdn.pixabay.com/photo/2020/10/20/23/27/canvas-5671673_1280.jpg"
          alt="Contact Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg animate-fadeUp">
            Let’s Create Together 🎨
          </h1>
          <p className="mt-4 text-lg text-yellow-50 max-w-2xl animate-fadeIn">
            Have questions, ideas, or just want to say hello?  
            We’d love to hear from you! Fill out the form below and let’s start your artistic journey.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex-1 py-16 px-6 md:px-20 bg-gradient-to-b from-yellow-50 to-pink-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you’re curious about our courses, exhibitions, or just want to share your passion for art,
              our team is always ready to connect. Don’t hesitate — creativity starts with a conversation! 🌟
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPinIcon className="h-6 w-6 text-pink-600" />
                <span>Bhandara, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-4">
                <EnvelopeIcon className="h-6 w-6 text-pink-600" />
                <span>shubhsngigaidhane@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-6 w-6 text-pink-600" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                  placeholder="Your Full Name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                  placeholder="What would you like to talk about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-b from-pink-400 to-pink-500 text-yellow-50 font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-50 hover:text-pink-500 transition"
              >
                Send Message ✨
              </button>
            </form>

            {status && <p className="mt-4 text-center">{status}</p>}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
