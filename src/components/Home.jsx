import React, { useRef, useState, useEffect } from "react";
import { HeartIcon, PaintBrushIcon } from "@heroicons/react/24/outline";
import { GiPaperWindmill, GiStairsGoal, GiTeacher } from "react-icons/gi";
import { IoSparklesOutline } from "react-icons/io5";
import { LiaBrushSolid } from "react-icons/lia";
import { PiShootingStarBold } from "react-icons/pi";
import { FaExpand, FaArrowLeft } from 'react-icons/fa';
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import Footer from './Footer';
import Header from "./Header";
import './Home.css';
import { Link } from "react-router-dom";

const classes = [
  { title: "Drawing Classes", subtitle: "All Ages", description: "Master line, form, composition, and painting.", img: "/drawing.jpg" },
  { title: "Elementary And Intermediate Exam", subtitle: "Above 12 years", description: "Foundation for further art education", img: "/intermediat.jpg" },
  { title: "Sketching", subtitle: "Above 12 years", description: "Refine skills, shading, perspective, and more.", img: "/sketch.png" },
  { title: "Rangoli Classes", subtitle: "All Ages", description: "Create vibrant landscapes, Sanskar Bharti & portrait-style rangolis.", img: "/rangoli.png" },
  { title: "Canvas painting", subtitle: "All Ages", description: "Creating art on a canvas surface (typically cotton or linen stretched over a frame) using paints like oil or acrylic.", img: "/canvasp.jpg" },
  { title: "Craft Workshops", subtitle: "Above 5 years", description: "Enhance creativity with fun techniques & basics.", img: "/craft.jpg" },
  { title: "Mehendi Classes", subtitle: "All Ages", description: "Design elegant bridal, Arabic & floral henna patterns.", img: "/mehendi.jpg" },
];

const steps = [
  { 
    title: "Choose Your Class", 
    description: "Browse our variety of art classes and select the one that matches your style, skill level, and creative goals.", 
    icon: <LiaBrushSolid className="text-pink-500 hover:text-white text-7xl p-4" />, 
    bg: "bg-white" 
  },
  { 
    title: "Join Our Class", 
    description: "Register easily and become part of a friendly, supportive community of art enthusiasts ready to create together.", 
    icon: <PiShootingStarBold className="text-pink-500 hover:text-white text-7xl p-4" />, 
    bg: "bg-white" 
  },
  { 
    title: "Enjoy Your Painting", 
    description: "Unleash your creativity, learn new techniques, and experience the joy of bringing your imagination to life on canvas.", 
    icon: <GiTeacher className="text-pink-500 hover:text-white text-7xl p-4" />, 
    bg: "bg-white" 
  },
];


const images = [
  "/Drawing2.jpg", "/sketch.png", "/image.jpg", "/image2.jpg", "/intermediat.jpg", "/rangoli.png", "/mehendi.jpg", "/sketch2.png"
];

const videos = [
  'https://www.youtube.com/embed/HXQtut2Ek-M?si=fMz5tN94LBh_ySeE',
  'https://www.youtube.com/embed/O5MKP70qa1M?si=S_ntHUOZT2392vvj',
  'https://www.youtube.com/embed/9RllC0v_9jM?si=Ut7zgOQYaBRxnAIg',
  'https://www.youtube.com/embed/fgxRRwM0Gww?si=SJZU13tEpbonAuHH',
  'https://www.youtube.com/embed/kT_VU-_pj3k?si=5RmWc3CfqpeOu-bI',
  'https://www.youtube.com/embed/VIDEO_ID6',
];

const Home = () => {
  const scrollRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="relative pt-[97px] hero-section" onMouseMove={handleMouseMove}>
        <img src="/image.jpg" alt="hero" className="w-full h-[88vh] object-cover" />
        <div className="hero-overlay"></div>
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center pl-0 md:pl-12 md:items-start">
          <h1 className="text-white text-4xl md:text-5xl font-bold animate-fadeUp pl-3" >ABHYUDAY ART CLASSES</h1>
          <p className="text-light-cream mt-3 text-lg pl-3">
            Unlock Your Creative Potential at Our Art Classes
          </p>
          <Link to='/Courses'>
            <button className="mt-6 px-6 py-2 hover:bg-light-cream bg-pink-500 text-light-cream hover:text-pink-500 rounded animate-fadeIn">
              Explore Courses
            </button>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-pink-100 text-center py-12 px-4">
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto mb-8">
          The Perfect Place to <span className="text-pink-600 font-semibold">Learn</span>, <span className="text-pink-600 font-semibold">Create</span>, and <span className="text-pink-600 font-semibold">Grow</span> as an Artist. 
          <span className="inline-block align-middle">
            <PaintBrushIcon className="h-6 w-6 text-pink-500 ml-1 mr-1 inline mb-1" />
          </span>
          Whether you're a beginner or looking to enhance your skills, our classes offer guidance, hands-on practice, and inspiration in a fun, supportive environment. Join us to master drawing, painting, and craft techniques. 
          <span className="inline-block align-middle">
            <HeartIcon className="h-6 w-6 text-red-400 ml-1 mb-1 inline" />
          </span>
          <br className="hidden md:inline" /><br />
          <span className="text-indigo-600 font-medium">Explore your imagination — and turn it into art!</span>
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-base sm:text-lg text-gray-700">
  <div className="flex flex-col items-center w-1/2 sm:w-auto mb-4 sm:mb-0">
    <PaintBrushIcon className="h-8 w-8 mb-2 text-purple-500" />
    <span>Color Your World</span>
  </div>
  <div className="flex flex-col items-center w-1/2 sm:w-auto mb-4 sm:mb-0">
    <GiPaperWindmill className="h-8 w-8 mb-2 text-teal-500" />
    <span>Craft Confidence</span>
  </div>
  <div className="flex flex-col items-center w-1/2 sm:w-auto mb-4 sm:mb-0">
    <IoSparklesOutline className="h-8 w-8 mb-2 text-pink-500" />
    <span>Spark Young Imaginations</span>
  </div>
  <div className="flex flex-col items-center w-1/2 sm:w-auto mb-4 sm:mb-0">
    <GiStairsGoal className="h-8 w-8 mb-2 text-emerald-500" />
    <span>Master Artistic Skills</span>
  </div>
</div>

      </section>

      {/* Art Classes Carousel */}
      <section className="relative bg-cover bg-center bg-no-repeat py-10 px-4 text-white" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2013/03/23/23/10/brush-96240_1280.jpg')", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-white drop-shadow-md">Choose Your Art Class</h2>
          <p className="text-center max-w-2xl mx-auto text-base md:text-lg mb-10 text-white/90">Fun, creativity-enhancing sessions designed for all ages. From basics to mastery — pick your journey!</p>

          <button onClick={() => scroll("left")} className="absolute left-0 top-[67%] transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/30 hover:bg-white/60 transition"><ChevronLeft className="w-7 h-7 text-black" /></button>
          <button onClick={() => scroll("right")} className="absolute right-0 top-[67%] transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/30 hover:bg-white/60 transition"><ChevronRight className="w-7 h-7 text-black" /></button>

          <div ref={scrollRef} className="flex gap-12 px-8 overflow-x-auto scroll-smooth scrollbar-hide">
            {classes.map((item, idx) => (
              <div key={idx} className="w-[300px] bg-white/5 border border-white/10 rounded-xl shadow-md backdrop-blur-sm hover:scale-105 transform transition duration-300 flex-shrink-0">
                <div id="parent" className="relative h-[200px] overflow-hidden">
                  <div id="main" className="relative w-full h-full">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover shadow-lg" />
                    <div id="slider" className="absolute inset-0 bg-black/60 backdrop-blur-md opacity-0 translate-y-5 transition duration-500 ease-in-out flex flex-col justify-center rounded-xl px-4 py-2 group-hover:opacity-100 group-hover:translate-y-0">
                      <h3 className="text-lg font-semibold tracking-wide uppercase">{item.title}</h3>
                      <p className="text-sm italic">{item.subtitle}</p>
                      <p className="text-sm mt-1">{item.description}</p>
                      {item.total && <p className="mt-2 text-sm font-medium">{item.total}</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-yellow-50 to-pink-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-pink-500 font-semibold mb-2">Our Process</p>
<h2 className="text-3xl font-bold text-gray-800 mb-4">How We Work</h2>
<p className="text-gray-500 max-w-xl mx-auto mb-12">
  We make learning art simple, fun, and inspiring. From choosing the right class to 
  hands-on guidance and finally enjoying your own masterpiece, our process is designed 
  to help you grow creatively at every step.
</p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className={`${step.bg} rounded-xl shadow-md transition hover:scale-105 hover:bg-pink-500`}>
                  {step.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">{step.title}</h3>
                <p className="text-gray-500 mt-2 max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery-section">
        <div className={`bg-gray-900 py-12 px-4 text-white transition-opacity duration-300 ${selectedImg ? "opacity-30" : ""}`}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 text-left">
              <p className="text-sm text-gray-400">Our Collection</p>
              <h2 className="text-3xl font-bold">Explore the Collection</h2>
              <Link to='/Gallery'>
                <button className="mt-4 px-6 py-2 bg-pink-500 hover:bg-pink-600 rounded-full font-semibold">View All Gallery</button>
              </Link>
            </div>

            <div className="hidden sm:block columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
              {images.map((src, index) => (
                <div key={index} className="relative group overflow-hidden rounded-md cursor-pointer" onClick={() => setSelectedImg(src)}>
                  <img src={src} alt={`Art ${index + 1}`} className="w-full transition-transform duration-300 transform hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-40">
                    <FaExpand size={32} className="text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedImg && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
            <button className="absolute top-6 left-6 text-white hover:text-pink-400 transition" onClick={() => setSelectedImg(null)}>
              <FaArrowLeft size={28} />
            </button>
            <img src={selectedImg} alt="Zoomed" className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg" />
          </div>
        )}
      </section>

      {/* Youtube Testimonials */}
      <section className="flex relative bg-cover bg-center bg-no-repeat py-16 px-4 text-white bg-gradient-to-b from-yellow-50 to-pink-300">
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-6">Student’s Testimonial</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((link, index) => (
              <div key={index} className="w-full aspect-video bg-white rounded overflow-hidden shadow-lg hover:scale-105 transition-transform">
                <iframe
                  width="100%"
                  height="100%"
                  src={link}
                  title={`Testimonial ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
