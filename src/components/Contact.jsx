import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import "./Contact.css";
const API_URL = import.meta.env.VITE_API_URL;

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
      const res = await fetch(`${API_URL}/api/contact`, {
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
      {/* Social Contact Section */}
<section className="py-16 px-6 md:px-20 bg-gradient-to-b from-yellow-50 to-pink-100">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-gray-700 mb-10 text-lg">
      For any queries, enrollment, and commissions, please reach out to us using any of the following
      mediums. Before visiting, <span className="font-semibold">kindly call us</span> to take appointment.
    </p>

    <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl p-8">
      {/* Whatsapp */}
      <div className="flex items-center space-x-4">
        <div className="bg-green-100 p-3 rounded-full">
          <i className="fa-brands fa-whatsapp text-green-600 text-xl"></i>
        </div>
        <div className="text-left">
          <h4 className="font-semibold">Whatsapp / Call</h4>
          <p className="text-gray-600 text-sm">+91-7796572450</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <i className="fa-solid fa-envelope text-blue-600 text-xl"></i>
        </div>
        <div className="text-left">
          <h4 className="font-semibold">Email</h4>
          <p className="text-gray-600 text-sm">shubhsngigaidhane@gmail.com</p>
        </div>
      </div>

      {/* Instagram */}
      <div className="flex items-center space-x-4">
        <div className="bg-yellow-100 p-3 rounded-full">
          <i className="fa-brands fa-instagram text-yellow-600 text-xl"></i>
        </div>
        <div className="text-left">
          <h4 className="font-semibold">Instagram</h4>
          <p className="text-gray-600 text-sm">@shubhangigaidhane</p>
        </div>
      </div>

      {/* Youtube */}
      <div className="flex items-center space-x-4">
        <div className="bg-red-100 p-3 rounded-full">
          <i className="fa-brands fa-youtube text-red-600 text-xl"></i>
        </div>
        <div className="text-left">
          <h4 className="font-semibold">Youtube Channel</h4>
          <p className="text-gray-600 text-sm">Abhyuday arts(@Shubhangi2610)</p>
        </div>
      </div>

      
      
    </div>
  </div>
</section>
<section className="bg-gradient-to-b from-yellow-50 to-pink-100 py-12 px-6 text-center">
  {/* Title */}
  <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-gray-800 mb-6">
    VISIT US (WITH APPOINTMENT ONLY)
  </h2>

  {/* Google Map Embed */}
  <div className="flex justify-center mb-6 ">
    <iframe
      title="Abhyuday Art classes Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.345598117252!2d79.6517116!3d21.1784258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b3f5d21f423e1%3A0xad5c017d178c56f0!2sAbhyuday%20art%20classes!5e0!3m2!1sen!2sin!4v1758282497379!5m2!1sen!2sin"
      width="400"
      height="250"
      style={{ border: "0", borderRadius: "0.5rem" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* Address */}
  <p className="text-gray-700 max-w-xl mx-auto mb-4 text-sm md:text-base leading-relaxed">
    <span className="font-semibold">Address:</span> <br />
    Abhyuday home, bank colony, Sahakar Nagar, Bhandara, Maharashtra 441904
  </p>

  {/* Google Map Link */}
  <a
    href="https://www.google.com/maps/place/Abhyuday+art+classes/@21.1784258,79.6517116,17z/data=!3m1!4b1!4m6!3m5!1s0x3a2b3f5d21f423e1:0xad5c017d178c56f0!8m2!3d21.1784258!4d79.6517116!16s%2Fg%2F11mw7hd2bw?entry=tts&g_ep=EgoyMDI1MDcyNy4wIPu8ASoASAFQAw%3D%3D&skid=087bf2d4-277a-46ed-9c6f-02d611fd0855"
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-600 hover:text-black underline font-medium"
  >
    Link to Map: Abhyuday Art Classes – Google Maps
  </a>
</section>

      <Footer />
    </div>
  );
};

export default Contact;
