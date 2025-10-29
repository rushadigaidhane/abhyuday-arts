import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>

<div class="grid grid-cols-5 gap-1 ">
  
  <div class="relative group bg-gradient-to-b from-yellow-50 to-pink-100 flex flex-col items-center justify-center h-40 text-black overflow-hidden">
    <img src="logo1.png" alt="Art Craft" class="w-16 mb-2 z-10" />
    <p class="z-10"></p>
    <span class="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2016/09/05/19/08/background-1647414_1280.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-60 transition-opacity duration-300"></span>
  </div>

  
  <div class="relative group bg-gradient-to-b from-yellow-50 to-pink-100 flex flex-col items-center justify-center h-40 text-black overflow-hidden">
    <img src="logo2.png" alt="Calligraphy" class="w-16 mb-2 z-10" />
    <p class="z-10"></p>
    <span class="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2016/09/05/19/08/background-1647414_1280.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-60 transition-opacity duration-300"></span>
  </div>


  <div class="relative group bg-gradient-to-b from-yellow-50 to-pink-100 flex flex-col items-center justify-center h-40 text-black overflow-hidden">
    <img src="logo3.png" alt="Art Craft" class="w-16 mb-2 z-10" />
    <p class="z-10"></p>
    <span class="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2016/09/05/19/08/background-1647414_1280.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-60 transition-opacity duration-300"></span>
  </div>

  <div class="relative group bg-gradient-to-b from-yellow-50 to-pink-100 flex flex-col items-center justify-center h-40 text-black overflow-hidden">
    <img src="logo4.png" alt="Art Craft" class="w-16 mb-2 z-10" />
    <p class="z-10"></p>
    <span class="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2016/09/05/19/08/background-1647414_1280.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-60 transition-opacity duration-300"></span>
  </div>
  

  <div class="relative group bg-gradient-to-b from-yellow-50 to-pink-100 flex flex-col items-center justify-center h-40 text-black overflow-hidden">
    <img src="logo5.png" alt="Art Craft" class="w-16 mb-2 z-10" />
    <p class="z-10"></p>
    <span class="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2016/09/05/19/08/background-1647414_1280.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-60 transition-opacity duration-300"></span>
  </div>
</div>


    <footer className="bg-gray-900 text-gray-400 py-8 text-center">
      <div className="flex flex-col items-center space-y-4">
        {/* Logo */}
        <div className="text-white text-xl font-bold">ABHYUDAY ART</div>
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 text-lg">
          <Link to="https://wa.me/7796572450" className="hover:text-pink-100">
            <i className="fab fa-whatsapp"></i>
          </Link>
          <Link to="https://www.youtube.com/@Shubhangi2610" className="hover:text-pink-100">
            <i className="fab fa-youtube"></i>
          </Link>
        
          <Link to="https://art-site-five.vercel.app/" className="hover:text-pink-100">
            <i className="fab fa-google-plus"></i>
          </Link>
          <Link to="https://www.instagram.com/shubhangigaidhane/" className="hover:text-pink-100">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs mt-4">Abhyuday art classes Page © 2025</p>
      </div>
    </footer>

    </div>
  );
}
