import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer';
import Header from "./Header";

const images = [
    "https://cdn.pixabay.com/photo/2015/08/28/11/37/painting-911804_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/12/10/20/40/color-5821297_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/05/08/20/06/school-4189534_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/09/16/11/04/painting-1673774_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/09/16/11/04/child-1673773_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/04/19/14/00/paint-7937871_1280.jpg",
  
    "https://cdn.pixabay.com/photo/2016/11/29/08/58/hands-1868562_1280.jpg",
];

const artworks = [
  {
    id: 1,
    title: "Smart Basketball Art",
    category: "Sketching",
    type: "Photorealism", 
    img: "/sketch.png",
  },
  {
    id: 2,
    title: "Vibrant Artwork",
    category: "Elementary",
    type: "Abstraction",
    img: "/elementary.jpg",
  
    
  },
  {
    id: 3,
    title: "Wild Flower Art",
    category: "Intermediate",
    type: "Painterly",
    
    img: "/intermediat.jpg",
  
  },
  {
    id: 4,
    title: "Minimal Creative Art",
    category: "Rangoli",
    type: "Painterly",
    
    img: "/rangoli.png",
   
  },
  {
    id: 5,
    title: "rangoli",
    category: "Rangoli",
    type: "Painterly",
    img: "/Rangoli1.jpg",
   
  },
  {
    id: 6,
    title: "rangoli",
    category: "Rangoli",
    type: "Painterly",
    img: "/rangoli2.jpg",
   
  },{
    id: 7,
    title: "rangoli",
    category: "Rangoli",
    type: "Painterly",
    img: "/rangoli3.jpg",
   
  },{
    id: 8,
    title: "rangoli",
    category: "Rangoli",
    type: "Painterly",
    img: "/rangoli5.jpg",
   
  },{
    id: 9,
    title: "rangoli",
    category: "Rangoli",
    type: "Painterly",
    img: "/rangoli6.jpg",
   
  },{
    id: 10,
    title: "Craft",
    category: "Craft",
    type: "Painterly",
    img: "/craft1.jpg",
  },{
    id: 11,
    title: "Craft",
    category: "Craft",
    type: "Painterly",
    img: "/craft2.jpg",
  },{
    id: 12,
    title: "Craft",
    category: "Craft",
    type: "Painterly",
    img: "/craft3.jpg",
  },{
    id: 13,
    title: "Craft",
    category: "Craft",
    type: "Painterly",
    img: "/craft.jpg",
  },{
    id: 14,
    title: "Smart Basketball Art",
    category: "Sketching",
    type: "Photorealism",
    img: "/sketch2.png",
  },{
    id: 15,
    title: "Smart Basketball Art",
    category: "Sketching",
    type: "Photorealism",
    img: "/sketch1.jpg",
  },{
    id: 16,
    title: "Smart Basketball Art",
    category: "Drawing",
    type: "Photorealism",
    img: "/drawing.jpg",
  },{
    id: 17,
    title: "Smart Basketball Art",
    category: "Drawing",
    type: "Photorealism",
    img: "/Drawing2.jpg",
  },
];

const categories = ["All", "Drawing","Elementary", "Intermediate", "Sketching", "Rangoli", "Mehendi", "Craft"];

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
    <div>
        <Header />

    <section className="relative w-full h-[90vh] top-20">
      
      <Slider {...settings} className="h-full">
        {images.map((src, index) => (
          <div key={index} className="h-[90vh] relative">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to Our Art Gallery
              </h1>
              <p className="max-w-2xl mb-6 text-lg md:text-xl">
                Explore stunning collections and immerse yourself in creativity.
              </p>
              <button className="px-6 py-3 bg-gradient-to-b from-pink-400 to-pink-500 hover:bg-pink-600 rounded-full font-semibold transition-all duration-300">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
    <br /><br /><br />
        {/*grid*/}
        <section className="py-10 bg-white">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 justify-center mb-8 ">
        {categories.map((e) => (
          <button
            key={e}
            onClick={() => setSelectedCategory(e)}
            className={`px-4 py-2 border rounded-md transition ${
              selectedCategory === e ? "bg-gradient-to-b from-pink-400 to-pink-500 text-white" : "bg-white hover:bg-gray-100"
            }`}
          >
            {e}
          </button>
        ))}
      </div>

      {/* Art Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {filteredArtworks.map((art) => (
          
          <div
            key={art.id}
            style={{border:'5px solid white '}}
            className="bg-white shadow-lg  overflow-hidden relative group "
          >
            
            {/* Image */}
            <img src={art.img} alt={art.title} className="w-full h-60 object-cover" />

        

            {/* Info 
            <div className="p-4 text-center">
              <p className="text-gray-500 text-sm">{art.type}</p>
              <h3 className="font-semibold text-lg">{art.title}</h3>
              <p className="text-pink-600 font-bold">
               
                
              </p>
            </div>*/}
          </div>
        ))}
      </div>
    </section>
        <Footer/>
    </div>
  );
};

export default Gallery;
