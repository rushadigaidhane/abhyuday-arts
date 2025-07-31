
import React, { useState } from 'react';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  return (
    <div className="font-sans">
      {/* Top Bar */}
      <div className="flex w-full h-10 text-sm">
      {/* Left Section */}
      <div className="bg-gradient-to-b from-yellow-50 to-pink-100 flex items-center space-x-4 px-4 py-2">
          <span className="font-semibold">Follow Us:</span>
      <div className="flex space-x-4">
    <a href="https://www.instagram.com/shubhangigaidhane/" className="text-pink-600  hover:text-black">
    <FaInstagram className="h-5 w-5" />
    </a>
    <a href="https://www.youtube.com/@Shubhangi2610" className="text-pink-600  hover:text-black">
    <FaYoutube className="h-5 w-5" />
    </a>
    <a href="#" className="text-pink-600  hover:text-black">
    <FaWhatsapp className="h-5 w-5" />
    </a>
    </div>
  </div>
  
   {/* Desktop Menu */}
  {/* Right Section */}
  <div className="hidden lg:flex bg-gradient-to-b from-pink-400 to-pink-500 flex-1 justify-end items-center space-x-6 px-4 py-2">
  <div className="flex items-center space-x-2 px-2"></div>
  <a href="https://maps.app.goo.gl/u7fjQtMVQMXPmTx69" className="flex items-center space-x-2 px-2 text-yellow-50 hover:text-black">
    <MapPinIcon className="h-5 w-5 " />
    <span>Abhyyuday art classes, Bhandara</span>
  </a>
  <a href="mailto:shubhsngigaidhane@gmail.com?subject=Inquiry&body=Hello" className="flex items-center space-x-2  text-yellow-50 hover:text-black">
    <EnvelopeIcon className="h-5 w-5 " />
    <span>shubhsngigaidhane@gmail.com</span>
  </a>
  <a href="#" className="flex items-center space-x-2  text-yellow-50 hover:text-black">
    <PhoneIcon className="h-5 w-5 " />
    <span>+91 98765 43210</span>
  </a>
</div>



{/* Mobile Menu */}
{/* Right Section */}
<div className="flex lg:hidden bg-pink-600  text-yellow-50 flex-1 justify-end px-4 py-2">
  <a href="/contact" className="text-sm underline hover:text-yellow-50 px-2">Location</a>
  <a href="/contact" className="text-sm underline hover:text-yellow-50 px-2">mail</a>
  <a href="/contact" className="text-sm underline hover:text-yellow-50 px-2">Contact</a>
</div>
</div>

      {/* Main Navbar */}
      <nav className="bg-gray-900 text-white  px-7 py-3 flex justify-between items-center relative">
  <div className="w-20">
    <img src="/logo-wbg.png" alt="Logo" />
  </div>

  {/* Hamburger Icon for Mobile */}
  <div className="sm:hidden">
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="text-yellow-50 focus:outline-none"
    >
      {isMenuOpen ? '✖' : '☰'}
    </button>
  </div>

  {/* Desktop Menu */}
  <ul className="hidden sm:flex space-x-6 text-sm">
    <li className="hover:text-pink-600  text-yellow-50"><a href="#">Home</a></li>
    <li className="hover:text-pink-600  text-yellow-50"><a href="#">Courses</a></li>
    <li className="hover:text-pink-600  text-yellow-50"><a href="#">Admissions</a></li>
    <li className="hover:text-pink-600  text-yellow-50"><a href="#">Gallery</a></li>
    <li className="hover:text-pink-600  text-yellow-50"><a href="#">Contact</a></li>
  </ul>

  <button className="hidden sm:block hover:bg-yellow-50 bg-pink-500 hover:text-pink-500  text-yellow-50   px-4 py-1 rounded text-sm">
    Log In
  </button>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="absolute top-full right-0 w-90 bg-gray-900 text-yellow-50 flex flex-col items-start px-6 py-4 space-y-4 sm:hidden z-50">
      <a href="#" className="hover:text-pink-600 ">Home</a>
      <a href="#" className="hover:text-pink-600 ">Courses</a>
      <a href="#" className="hover:text-pink-600 ">Admissions</a>
      <a href="#" className="hover:text-pink-600 ">Gallery</a>
      <a href="#" className="hover:text-pink-600 ">Contact</a>
      <button className="hover:bg-yellow-50 bg-pink-500  text-yellow-50 hover:text-pink-500  px-4 py-1 rounded text-sm">
        Log In
      </button>
    </div>
  )}
</nav>

     
    </div>
  );
};

export default Header;
