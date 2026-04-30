import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import "./Contact.css";
const API_URL = import.meta.env.VITE_API_URL;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (err) {
      setStatus("⚠️ Error connecting to server.");
    }
  };

  const inputStyle = {
    width: '100%', padding: '10px 14px', border: '1px solid #f0d5c8',
    borderRadius: '4px', background: '#fdf6ee', color: '#1a0f0a',
    fontFamily: "'Jost', sans-serif", fontSize: '14px', outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: '#fdf6ee', minHeight: '100vh' }}>
      <Header />

      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '70vh' }}>
        <img src="https://cdn.pixabay.com/photo/2020/10/20/23/27/canvas-5671673_1280.jpg" alt="Contact hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.35)', marginTop: '97px' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,5,5,0.2), rgba(15,5,5,0.6))', marginTop: '97px' }} />
        <div className="relative z-10 text-center px-6" style={{ marginTop: '97px' }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#d4956a' }}>Reach Out</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Let's Create Together 🎨
          </h1>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
            Have questions or want to start your artistic journey? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          {/* Info */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#c4635a' }}>Contact Info</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#1a0f0a' }}>Get in Touch</h2>
            <div className="w-10 h-0.5 mb-6" style={{ background: '#c4635a' }} />
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#6b4c41' }}>
              Whether you're curious about our courses, exhibitions, or just want to share your passion for art,
              our team is always ready to connect. Creativity starts with a conversation! 🌟
            </p>
            <div className="space-y-5">
              {[
                { icon: <MapPinIcon className="h-5 w-5" />, text: "Bhandara, Maharashtra, India" },
                { icon: <EnvelopeIcon className="h-5 w-5" />, text: "shubhsngigaidhane@gmail.com" },
                { icon: <PhoneIcon className="h-5 w-5" />, text: "+91 7507333250" },
              ].map(({ icon, text }, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: '#f5e0d3', color: '#c4635a' }}>
                    {icon}
                  </div>
                  <span className="text-sm" style={{ color: '#5a3428' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Social cards */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { icon: '📱', label: 'WhatsApp / Call', value: '+91-7796572450', bg: '#f0fdf4' },
                { icon: '📧', label: 'Email', value: 'shubhsngigaidhane@gmail.com', bg: '#eff6ff' },
                { icon: '📸', label: 'Instagram', value: '@shubhangigaidhane', bg: '#fefce8' },
                { icon: '▶️', label: 'YouTube', value: '@Shubhangi2610', bg: '#fef2f2' },
              ].map(({ icon, label, value, bg }) => (
                <div key={label} className="p-4 rounded-xl text-sm" style={{ background: bg, border: '1px solid #f0d5c8' }}>
                  <p className="text-lg mb-1">{icon}</p>
                  <p className="font-semibold text-xs" style={{ color: '#1a0f0a' }}>{label}</p>
                  <p className="text-xs mt-0.5 break-all" style={{ color: '#6b4c41' }}>{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl p-8" style={{ background: '#fff', boxShadow: '0 8px 40px rgba(196,99,90,0.12)', border: '1px solid #f0d5c8' }}>
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#1a0f0a' }}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: 'Name', name: 'name', type: 'text', placeholder: 'Your Full Name', required: true },
                { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com', required: true },
                { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
                { label: 'Subject', name: 'subject', type: 'text', placeholder: 'What would you like to talk about?' },
              ].map(({ label, name, type, placeholder, required }) => (
                <div key={name}>
                  <label className="block text-xs font-medium mb-1.5 tracking-wider uppercase" style={{ color: '#6b4c41' }}>{label}</label>
                  <input type={type} name={name} value={formData[name]} onChange={handleChange}
                    style={inputStyle} placeholder={placeholder} required={required}
                    onFocus={e => e.target.style.borderColor = '#c4635a'}
                    onBlur={e => e.target.style.borderColor = '#f0d5c8'} />
                </div>
              ))}
              <div>
                <label className="block text-xs font-medium mb-1.5 tracking-wider uppercase" style={{ color: '#6b4c41' }}>Message</label>
                <textarea rows="4" name="message" value={formData.message} onChange={handleChange}
                  placeholder="Write your message here..." required
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = '#c4635a'}
                  onBlur={e => e.target.style.borderColor = '#f0d5c8'} />
              </div>
              <button type="submit"
                className="w-full py-3 text-sm tracking-widest uppercase font-medium transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #c4635a, #d4956a)', color: '#fff', borderRadius: '4px' }}>
                Send Message ✨
              </button>
            </form>
            {status && <p className="mt-4 text-center text-sm" style={{ color: '#6b4c41' }}>{status}</p>}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-6 text-center" style={{ background: '#f5e0d3' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#c4635a' }}>Find Us</p>
        <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#1a0f0a' }}>
          Visit Us (With Appointment Only)
        </h2>
        <p className="text-sm mb-8" style={{ color: '#6b4c41' }}>
          Abhyuday Home, Bank Colony, Sahakar Nagar, Bhandara, Maharashtra 441904
        </p>
        <div className="flex justify-center mb-6">
          <iframe
            title="Abhyuday Art classes Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.345598117252!2d79.6517116!3d21.1784258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b3f5d21f423e1%3A0xad5c017d178c56f0!2sAbhyuday%20art%20classes!5e0!3m2!1sen!2sin!4v1758282497379!5m2!1sen!2sin"
            width="100%" height="300" style={{ border: "0", borderRadius: "12px", maxWidth: '600px' }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <a href="https://www.google.com/maps/place/Abhyuday+art+classes/" target="_blank" rel="noopener noreferrer"
          className="text-sm font-medium underline transition-colors hover:opacity-70" style={{ color: '#c4635a' }}>
          Open in Google Maps →
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
