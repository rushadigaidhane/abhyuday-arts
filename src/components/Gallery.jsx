import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import Footer from "./Footer";
import './Gallery.css';
import Masonry from "react-masonry-css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  "/group1.jpg",
  "https://cdn.pixabay.com/photo/2020/12/10/20/40/color-5821297_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/05/08/20/06/school-4189534_1280.jpg",
  "/group2.jpg",
  "https://cdn.pixabay.com/photo/2016/09/16/11/04/child-1673773_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/04/19/14/00/paint-7937871_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/29/08/58/hands-1868562_1280.jpg",
];

const artworks = [
  { id: 1, category: "Sketching", img: "/sketch.png" },
  { id: 2, category: "Elementary", img: "/elementary.jpg" },
  { id: 3, category: "Intermediate", img: "/intermediat.jpg" },
  { id: 4, category: "Rangoli", img: "/rangoli.png" },
  { id: 5, category: "Rangoli", img: "/Rangoli1.jpg" },
  { id: 6, category: "Rangoli", img: "/rangoli2.jpg" },
  { id: 7, category: "Rangoli", img: "/rangoli3.jpg" },
  { id: 8, category: "Rangoli", img: "/rangoli5.jpg" },
  { id: 9, category: "Rangoli", img: "/rangoli6.jpg" },
  { id: 10, category: "Craft", img: "/craft1.jpg" },
  { id: 11, category: "Craft", img: "/craft2.jpg" },
  { id: 12, category: "Craft", img: "/craft3.jpg" },
  { id: 13, category: "Craft", img: "/craft.jpg" },
  { id: 14, category: "Sketching", img: "/sketch2.png" },
  { id: 15, category: "Sketching", img: "/sketch1.jpg" },
  { id: 16, category: "Drawing", img: "/drawing.jpg" },
  { id: 17, category: "Drawing", img: "/Drawing2.jpg" },
];



const categories = ["All", "Drawing", "Elementary", "Intermediate", "Sketching", "Rangoli", "Mehendi", "Craft"];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArtworks =
    selectedCategory === "All"
      ? artworks
      : artworks.filter((art) => art.category === selectedCategory);

  return (
    <div className="font-sans">
      <Header />

      {/* Hero Slider */}
      <section className="relative w-full h-[90vh] top-20">
        <Slider {...settings} className="h-full">
          {images.map((src, index) => (
            <div key={index} className="h-[90vh] relative">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Overlay content */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeInUp">
                  Welcome to Our Art Gallery
                </h1>
                <p className="max-w-2xl mb-6 text-lg md:text-xl animate-fadeInUp delay-200">
                  Explore stunning collections and immerse yourself in creativity.
                </p>
                
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Category Filter */}
      <section className="py-10 bg-white mt-20">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map((e) => (
            <button
              key={e}
              onClick={() => setSelectedCategory(e)}
              className={`px-4 py-2 border rounded-md transition ${
                selectedCategory === e
                  ? "bg-gradient-to-b from-pink-400 to-pink-500 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {e}
            </button>
          ))}
        </div>

        {/* Artworks Grid */}
        <Masonry
  breakpointCols={{ default: 4, 1024: 3, 640: 2, 0: 1 }}
  className="flex gap-4 m-5"
  columnClassName="flex flex-col gap-4"
>
  {filteredArtworks.map((art) => (
    <div key={art.id} className="relative overflow-hidden rounded-lg shadow-lg group  animate-fadeInUp " >
      
      <img src={art.img} className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-1" />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white text-center p-4">
        <p className="text-lg">{art.category}</p>
      </div>
    </div>
  ))}
</Masonry>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
