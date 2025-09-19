import React, { useState, useEffect } from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down & past a certain point
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`font-sans fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top Bar */}
      <div className="flex w-full text-sm">
  {/* Social Links */}
  <div className="bg-gradient-to-b from-yellow-50 to-pink-100 flex items-center space-x-2 sm:space-x-4 px-2 sm:px-4 py-1 sm:py-2">
    <span className="font-semibold text-xs sm:text-sm">Follow Us:</span>
    <div className="flex space-x-2 sm:space-x-4">
      <Link
        to="https://www.instagram.com/shubhangigaidhane/"
        className="text-pink-600 hover:text-black"
      >
        <FaInstagram className="h-4 w-4 sm:h-5 sm:w-5" />
      </Link>
      <Link
        to="https://www.youtube.com/@Shubhangi2610"
        className="text-pink-600 hover:text-black"
      >
        <FaYoutube className="h-4 w-4 sm:h-5 sm:w-5" />
      </Link>
      <Link to="#" className="text-pink-600 hover:text-black">
        <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5" />
      </Link>
    </div>
  </div>

  {/* Desktop Top Info */}
  <div className="hidden lg:flex bg-gradient-to-b from-pink-400 to-pink-500 flex-1 justify-end items-center space-x-4 sm:space-x-6 px-2 sm:px-4 py-1 sm:py-2">
    <Link
      to="https://maps.app.goo.gl/u7fjQtMVQMXPmTx69"
      className="flex items-center space-x-1 sm:space-x-2 px-1 sm:px-2 text-yellow-50 hover:text-black text-xs sm:text-sm"
    >
      <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      <span>Abhyyuday art classes, Bhandara</span>
    </Link>
    <Link
      to="mailto:shubhsngigaidhane@gmail.com?subject=Inquiry&body=Hello"
      className="flex items-center space-x-1 sm:space-x-2 text-yellow-50 hover:text-black text-xs sm:text-sm"
    >
      <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      <span>shubhsngigaidhane@gmail.com</span>
    </Link>
    <Link
      to="tel:+919876543210"
      className="flex items-center space-x-1 sm:space-x-2 text-yellow-50 hover:text-black text-xs sm:text-sm"
    >
      <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      <span>+91 98765 43210</span>
    </Link>
  </div>

  {/* Mobile Top Info */}
  <div className="flex lg:hidden bg-gradient-to-b from-pink-400 to-pink-500 text-yellow-50 flex-1 justify-end px-3 sm:px-5 py-1 sm:py-2 space-x-2 sm:space-x-4">
    <Link
      to="https://maps.app.goo.gl/u7fjQtMVQMXPmTx69"
      className="text-xs sm:text-sm underline"
    >
      Location
    </Link>
    <Link
      to="mailto:shubhsngigaidhane@gmail.com?subject=Inquiry&body=Hello"
      className="text-xs sm:text-sm underline"
    >
      Mail
    </Link>
    <a
      href="tel:+919876543210"
      className="flex items-center space-x-1 text-yellow-50 hover:text-black text-xs sm:text-sm"
    >
      <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      <span>Contact</span>
    </a>
  </div>
</div>


      {/* Main Navbar */}
      <nav className="bg-gray-900 text-white px-4 sm:px-9 py-2 sm:py-3 flex items-center relative">
  {/* Logo on the left */}
  <div className="w-16 sm:w-20">
    <img src="/mainlogo.png" alt="Logo" />
  </div>

  {/* Centered Links */}
  <ul className="hidden sm:flex flex-1 justify-center space-x-6 sm:space-x-12 text-xs sm:text-sm">
    <li className="hover:text-pink-600 text-yellow-50">
      <Link to="/">Home</Link>
    </li>
    <li className="hover:text-pink-600 text-yellow-50">
      <Link to="/About">About</Link>
    </li>
    <li className="hover:text-pink-600 text-yellow-50">
      <Link to="/Courses">Courses</Link>
    </li>
    <li className="hover:text-pink-600 text-yellow-50">
      <Link to="/Gallery">Gallery</Link>
    </li>
    <li className="hover:text-pink-600 text-yellow-50">
      <Link to="/Contact">Contact</Link>
    </li>
  </ul>

  {/* Mobile Menu Button on right */}
  <div className="sm:hidden ml-auto">
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="text-yellow-50 focus:outline-none text-lg"
    >
      {isMenuOpen ? "✖" : "☰"}
    </button>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="absolute top-full right-0 w-48 sm:w-64 bg-gray-900 text-yellow-50 flex flex-col items-start px-4 sm:px-6 py-3 sm:py-4 space-y-3 sm:space-y-4 sm:hidden z-50 text-xs sm:text-sm">
      <Link to="/" className="hover:text-pink-600">
        Home
      </Link>
      <Link to="/About" className="hover:text-pink-600">
        About
      </Link>
      <Link to="/Courses" className="hover:text-pink-600">
        Courses
      </Link>
      <Link to="/Gallery" className="hover:text-pink-600">
        Gallery
      </Link>
      <Link to="/Contact" className="hover:text-pink-600">
        Contact
      </Link>
    </div>
  )}
</nav>


    </div>
  );
};

export default Header;
