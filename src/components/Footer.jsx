import React from "react";
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      {/* Logo Strip */}
      <div className="grid grid-cols-5 gap-px" style={{ background: '#e8d0c0' }}>
        {['logo1.png','logo2.png','logo3.png','logo4.png','logo5.png'].map((logo, i) => (
          <div key={i} className="relative group flex flex-col items-center justify-center h-28 sm:h-36 overflow-hidden"
            style={{ background: '#fdf6ee' }}>
            <img src={logo} alt="Partner logo" className="w-12 sm:w-16 object-contain z-10 transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300"
              style={{ background: `url('https://cdn.pixabay.com/photo/2016/09/05/19/08/background-1647414_1280.jpg') center/cover` }} />
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="py-10 px-6 text-center" style={{ background: '#0f0505' }}>
        <div className="flex flex-col items-center space-y-5">
          <p className="text-xs tracking-[0.4em] uppercase" style={{ color: '#d4956a' }}>Abhyuday Art</p>
          <div className="w-8 h-px" style={{ background: '#c4635a' }} />
          <p className="text-xs max-w-xs leading-relaxed" style={{ color: 'rgba(245,197,184,0.6)' }}>
            Bank Colony, Sahakar Nagar, Bhandara, Maharashtra 441904
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://wa.me/7796572450" target="_blank" rel="noreferrer"
              className="transition-colors duration-200 hover:opacity-60" style={{ color: '#f5c5b8' }}>
              <FaWhatsapp className="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/@Shubhangi2610" target="_blank" rel="noreferrer"
              className="transition-colors duration-200 hover:opacity-60" style={{ color: '#f5c5b8' }}>
              <FaYoutube className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/shubhangigaidhane/" target="_blank" rel="noreferrer"
              className="transition-colors duration-200 hover:opacity-60" style={{ color: '#f5c5b8' }}>
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs tracking-widest uppercase" style={{ color: 'rgba(245,197,184,0.5)' }}>
            {["Home","About","Courses","Gallery","Contact"].map(item => (
              <Link key={item} to={item==="Home"?"/":`/${item}`}
                className="hover:opacity-90 transition-opacity" style={{ color: 'rgba(245,197,184,0.5)' }}>
                {item}
              </Link>
            ))}
          </div>
          <p className="text-xs mt-2" style={{ color: 'rgba(245,197,184,0.3)' }}>
            © 2025 Abhyuday Art Classes — All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
