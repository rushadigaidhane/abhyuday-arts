import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import './Gallery.css';

const sliderImages = [
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
  { id: 2, category: "Elementary", img: "/elementry3.jpg" },
  { id: 3, category: "Intermediate", img: "/intermediat.jpg" },
  { id: 4, category: "Rangoli", img: "/rangoli.png" },
  { id: 5, category: "Rangoli", img: "/Rangoli1.jpg" },
  { id: 6, category: "Rangoli", img: "/rangoli2.jpg" },
  { id: 7, category: "Rangoli", img: "/rangoli9.jpg" },
  { id: 8, category: "Rangoli", img: "/rangoli10.jpg" },
  { id: 9, category: "Sketching", img: "/sketch5.jpg" },
  { id: 10, category: "Sketching", img: "/sketch6.jpg" },
  { id: 11, category: "Craft", img: "/craft2.jpg" },
  { id: 12, category: "Craft", img: "/craft3.jpg" },
  { id: 13, category: "Craft", img: "/craft.jpg" },
  { id: 14, category: "Sketching", img: "/sketch2.png" },
  { id: 15, category: "Sketching", img: "/sketch1.jpg" },
  { id: 16, category: "Drawing", img: "/drawing.jpg" },
  { id: 17, category: "Drawing", img: "/Drawing2.jpg" },
  { id: 18, category: "Elementary", img: "/elementry2.jpg" },
  { id: 19, category: "Intermediate", img: "/intermidiate1.jpg" },
  { id: 20, category: "Sketching", img: "/sketch3.jpg" },
  { id: 21, category: "Intermediate", img: "/intermidiate4.jpg" },
  { id: 22, category: "Sketching", img: "/sketch4.jpg" },
  { id: 23, category: "Sketching", img: "/sketch9.jpg" },
  { id: 24, category: "Intermediate", img: "/intermidiate3.jpg" },
  { id: 25, category: "Intermediate", img: "/intermidiate2.jpg" },
  { id: 26, category: "Rangoli", img: "/rangoli7.jpg" },
  { id: 27, category: "Rangoli", img: "/rangoli8.jpg" },
  { id: 28, category: "Drawing", img: "/drawing3.jpg" },
  { id: 29, category: "Drawing", img: "/drawing4.jpg" },
  { id: 30, category: "Rangoli", img: "/rangoli3.jpg" },
  { id: 31, category: "Rangoli", img: "/rangoli5.jpg" },
  { id: 32, category: "Sketching", img: "/sketch7.jpg" },
  { id: 33, category: "Craft", img: "/craft1.jpg" },
  { id: 34, category: "Mehendi", img: "/mehendi.jpg" },
];

const categories = ["All", "Drawing", "Elementary", "Intermediate", "Sketching", "Rangoli", "Mehendi", "Craft"];

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  // Auto-advance slider
  useEffect(() => {
    timerRef.current = setInterval(() => {
      goToSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  const goToSlide = (indexOrFn) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(indexOrFn);
      setIsTransitioning(false);
    }, 400);
  };

  const handlePrev = () => {
    clearInterval(timerRef.current);
    goToSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const handleNext = () => {
    clearInterval(timerRef.current);
    goToSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const filteredArtworks = selectedCategory === "All"
    ? artworks
    : artworks.filter((art) => art.category === selectedCategory);

  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: '#fdf6ee' }}>
      <Header />

      {/* ── Hero Slider (custom, no react-slick) ── */}
      <section className="relative w-full overflow-hidden" style={{ height: '90vh', marginTop: '97px' }}>
        <div
          className="w-full h-full transition-opacity duration-700"
          style={{ opacity: isTransitioning ? 0 : 1 }}
        >
          <img
            src={sliderImages[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
          style={{ background: 'linear-gradient(to bottom, rgba(15,5,5,0.3), rgba(15,5,5,0.65))' }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-3 animate-fadeInUp" style={{ color: '#d4956a' }}>Our Work</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white animate-fadeInUp"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Art Gallery
          </h1>
          <p className="max-w-xl text-base md:text-lg animate-fadeInUp delay-200"
            style={{ color: 'rgba(255,255,255,0.8)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
            Explore stunning collections and immerse yourself in creativity.
          </p>
        </div>

        {/* Arrows */}
        <button onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all hover:scale-110"
          style={{ background: 'rgba(196,99,90,0.8)' }}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all hover:scale-110"
          style={{ background: 'rgba(196,99,90,0.8)' }}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {sliderImages.map((_, i) => (
            <button key={i} onClick={() => { clearInterval(timerRef.current); goToSlide(i); }}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === currentSlide ? '24px' : '8px',
                height: '8px',
                background: i === currentSlide ? '#c4635a' : 'rgba(255,255,255,0.5)'
              }} />
          ))}
        </div>
      </section>

      {/* ── Category Filter + Grid ── */}
      <section className="py-14 px-4 md:px-8" style={{ background: '#fdf6ee' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#c4635a' }}>Browse By Type</p>
          <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: "'Playfair Display', serif", color: '#1a0f0a' }}>
            All Artworks
          </h2>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setSelectedCategory(cat)}
                className="px-4 py-2 text-xs sm:text-sm tracking-wider uppercase font-medium transition-all duration-200 rounded-sm"
                style={selectedCategory === cat
                  ? { background: 'linear-gradient(135deg, #c4635a, #d4956a)', color: '#fff', boxShadow: '0 4px 16px rgba(196,99,90,0.35)' }
                  : { background: '#fff', color: '#6b4c41', border: '1px solid #f0d5c8' }
                }>
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {filteredArtworks.map((art) => (
              <div key={art.id}
                className="break-inside-avoid relative overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setLightboxImg(art.img)}
                style={{ border: '1px solid #f0d5c8' }}>
                <img src={art.img} alt={art.category}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(15,5,5,0.75) 0%, transparent 60%)' }}>
                  <span className="text-xs tracking-widest uppercase font-medium" style={{ color: '#d4956a' }}>
                    {art.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredArtworks.length === 0 && (
            <p className="text-center py-16 text-sm" style={{ color: '#6b4c41' }}>No artworks found in this category.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={() => setLightboxImg(null)}>
          <button className="absolute top-6 right-6 text-2xl transition hover:opacity-60" style={{ color: '#f5c5b8' }}>✕</button>
          <img src={lightboxImg} alt="Zoomed" className="max-w-[92vw] max-h-[88vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
