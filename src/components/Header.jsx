import React, { useState, useEffect } from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
      {/* Top Bar */}
      <div className="flex w-full text-sm" style={{background: '#1c0a0a'}}>
        <div className="flex items-center space-x-3 px-4 py-2">
          <span className="font-semibold text-xs tracking-widest uppercase" style={{color:'#f5c5b8'}}>Follow</span>
          <div className="flex space-x-3 items-center">
            <a href="https://www.instagram.com/shubhangigaidhane/" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:opacity-70" style={{color:'#f5c5b8'}}>
              <FaInstagram className="h-4 w-4" />
            </a>
            <a href="https://www.youtube.com/@Shubhangi2610" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:opacity-70" style={{color:'#f5c5b8'}}>
              <FaYoutube className="h-4 w-4" />
            </a>
            <a href="https://wa.me/7796572450" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:opacity-70" style={{color:'#f5c5b8'}}>
              <FaWhatsapp className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 justify-end items-center space-x-6 px-6 py-2" style={{background:'rgba(60,10,10,0.5)'}}>
          <a href="https://maps.app.goo.gl/u7fjQtMVQMXPmTx69" target="_blank" rel="noreferrer" className="flex items-center space-x-1.5 transition-colors text-xs tracking-wide hover:opacity-70" style={{color:'#f5c5b8'}}>
            <MapPinIcon className="h-3.5 w-3.5" /><span>Abhyuday Art Classes, Bhandara</span>
          </a>
          <a href="mailto:shubhsngigaidhane@gmail.com" className="flex items-center space-x-1.5 transition-colors text-xs tracking-wide hover:opacity-70" style={{color:'#f5c5b8'}}>
            <EnvelopeIcon className="h-3.5 w-3.5" /><span>shubhsngigaidhane@gmail.com</span>
          </a>
          <a href="tel:+917507333250" className="flex items-center space-x-1.5 transition-colors text-xs tracking-wide hover:opacity-70" style={{color:'#f5c5b8'}}>
            <PhoneIcon className="h-3.5 w-3.5" /><span>+91 7507333250</span>
          </a>
        </div>
        <div className="flex lg:hidden flex-1 justify-end items-center px-4 py-2 space-x-4" style={{background:'rgba(60,10,10,0.5)'}}>
          <a href="https://maps.app.goo.gl/u7fjQtMVQMXPmTx69" className="text-xs underline hover:opacity-70" style={{color:'#f5c5b8'}}>Map</a>
          <a href="mailto:shubhsngigaidhane@gmail.com" className="text-xs underline hover:opacity-70" style={{color:'#f5c5b8'}}>Email</a>
          <a href="tel:+917507333250" className="text-xs underline hover:opacity-70" style={{color:'#f5c5b8'}}>Call</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="transition-all duration-300 px-4 sm:px-8 py-3 flex items-center" style={{background: scrolled ? 'rgba(15,5,5,0.97)' : '#0f0505', backdropFilter: scrolled ? 'blur(12px)' : 'none'}}>
        <div className="w-14 sm:w-16 flex-shrink-0">
          <img src="/mainlogo.png" alt="Abhyuday Arts Logo" className="w-full object-contain" />
        </div>
        <ul className="hidden sm:flex flex-1 justify-center space-x-8 lg:space-x-12 text-xs tracking-widest uppercase">
          {["Home", "About", "Courses", "Gallery", "Contact"].map((item) => (
            <li key={item}>
              <Link to={item === "Home" ? "/" : `/${item}`} className="relative py-1 group transition-colors duration-200" style={{color:'#e8d5c4'}}
                onMouseEnter={e=>e.target.style.color='#f0a080'} onMouseLeave={e=>e.target.style.color='#e8d5c4'}>
                {item}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style={{background:'#f0a080'}} />
              </Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden ml-auto">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="transition-colors p-1" style={{color:'#e8d5c4'}}>
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 sm:hidden border-t shadow-xl" style={{background:'rgba(15,5,5,0.98)', borderColor:'#3a1a1a'}}>
            <div className="flex flex-col px-6 py-4 space-y-3">
              {["Home", "About", "Courses", "Gallery", "Contact"].map((item) => (
                <Link key={item} to={item === "Home" ? "/" : `/${item}`} onClick={() => setIsMenuOpen(false)}
                  className="text-sm tracking-widest uppercase py-2 border-b transition-colors" style={{color:'#e8d5c4', borderColor:'#3a1a1a'}}
                  onMouseEnter={e=>e.target.style.color='#f0a080'} onMouseLeave={e=>e.target.style.color='#e8d5c4'}>
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
