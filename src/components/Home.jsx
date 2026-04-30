import React, { useRef, useState } from "react";
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
  { title: "Elementary & Intermediate Exam", subtitle: "Above 12 years", description: "Foundation for further art education.", img: "/intermediat.jpg" },
  { title: "Sketching", subtitle: "Above 12 years", description: "Refine skills, shading, perspective, and more.", img: "/sketch.png" },
  { title: "Rangoli Classes", subtitle: "All Ages", description: "Create vibrant Sanskar Bharti & portrait-style rangolis.", img: "/rangoli.png" },
  { title: "Canvas Painting", subtitle: "All Ages", description: "Creating art on canvas using oil or acrylic paints.", img: "/canvasp.jpg" },
  { title: "Craft Workshops", subtitle: "Above 5 years", description: "Enhance creativity with fun techniques & basics.", img: "/craft.jpg" },
  { title: "Mehendi Classes", subtitle: "All Ages", description: "Design elegant bridal, Arabic & floral henna patterns.", img: "/mehendi.jpg" },
];

const steps = [
  { title: "Choose Your Class", description: "Browse our variety of art classes and select the one that matches your style, skill level, and creative goals.", icon: <LiaBrushSolid style={{color:'#c4635a', fontSize:'3rem'}} /> },
  { title: "Join Our Class", description: "Register easily and become part of a friendly, supportive community of art enthusiasts ready to create together.", icon: <PiShootingStarBold style={{color:'#c4635a', fontSize:'3rem'}} /> },
  { title: "Enjoy Your Painting", description: "Unleash your creativity, learn new techniques, and experience the joy of bringing your imagination to life.", icon: <GiTeacher style={{color:'#c4635a', fontSize:'3rem'}} /> },
];

const images = [
  "/Drawing2.jpg", "/sketch.png", "/image.jpg", "/image2.jpg",
  "/intermediat.jpg", "/rangoli.png", "/mehendi.jpg", "/sketch2.png"
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
      scrollRef.current.scrollBy({ left: direction === "left" ? -320 : 320, behavior: "smooth" });
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
    <div style={{background:'#fdf6ee', fontFamily:"'Jost', sans-serif"}}>
      <Header />

      {/* ── Hero ── */}
      <div className="relative pt-[97px] hero-section" onMouseMove={handleMouseMove}>
        <img src="/image.jpg" alt="hero" className="w-full object-cover" style={{height:'88vh'}} />
        <div className="hero-overlay" />
        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start px-6 md:px-16"
          style={{background:'linear-gradient(to right, rgba(15,5,5,0.65) 0%, rgba(15,5,5,0.1) 70%)'}}>
          <p className="animate-fadeUp text-xs tracking-[0.3em] uppercase mb-3" style={{color:'#d4956a'}}>Welcome to</p>
          <h1 className="animate-fadeUp text-4xl md:text-6xl font-bold leading-tight text-white" style={{fontFamily:"'Playfair Display', serif"}}>
            Abhyuday<br />Art Classes
          </h1>
          <p className="animate-fadeIn mt-4 text-base md:text-lg max-w-md" style={{color:'rgba(255,255,255,0.8)', fontFamily:"'Cormorant Garamond', serif", fontStyle:'italic'}}>
            Unlock Your Creative Potential
          </p>
          <Link to='/Courses'>
            <button className="mt-8 animate-fadeIn px-8 py-3 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
              style={{background:'#c4635a', color:'#fff', borderRadius:'2px', letterSpacing:'0.15em'}}>
              Explore Courses
            </button>
          </Link>
        </div>
      </div>

      {/* ── About Tagline ── */}
      <section style={{background:'linear-gradient(180deg, #fdf6ee 0%, #f5e0d3 100%)'}} className="py-16 px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{color:'#c4635a'}}>Our Philosophy</p>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10" style={{color:'#3a1a12', fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(1.1rem,2.5vw,1.35rem)'}}>
          The Perfect Place to <span style={{color:'#c4635a', fontWeight:600}}>Learn</span>,{' '}
          <span style={{color:'#c4635a', fontWeight:600}}>Create</span>, and{' '}
          <span style={{color:'#c4635a', fontWeight:600}}>Grow</span> as an Artist.
          <span className="inline-block align-middle mx-1"><PaintBrushIcon className="h-5 w-5 inline mb-1" style={{color:'#d4956a'}} /></span>
          Whether you're a beginner or looking to enhance your skills, our classes offer guidance, hands-on practice,
          and inspiration in a fun, supportive environment.
          <span className="inline-block align-middle mx-1"><HeartIcon className="h-5 w-5 inline mb-1" style={{color:'#c4635a'}} /></span>
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {[
            { icon: <PaintBrushIcon className="h-7 w-7 mx-auto mb-2" style={{color:'#9b59b6'}} />, label: "Color Your World" },
            { icon: <GiPaperWindmill className="h-7 w-7 mx-auto mb-2" style={{color:'#2ecc71'}} />, label: "Craft Confidence" },
            { icon: <IoSparklesOutline className="h-7 w-7 mx-auto mb-2" style={{color:'#c4635a'}} />, label: "Spark Imaginations" },
            { icon: <GiStairsGoal className="h-7 w-7 mx-auto mb-2" style={{color:'#27ae60'}} />, label: "Master Artistic Skills" },
          ].map(({ icon, label }) => (
            <div key={label} className="text-center" style={{color:'#5a3428'}}>
              {icon}
              <span className="text-sm tracking-wider uppercase block" style={{fontFamily:"'Jost', sans-serif", fontWeight:500}}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Art Classes Carousel ── */}
      <section className="relative py-16 px-4 text-white" style={{background:'linear-gradient(rgba(15,5,5,0.88),rgba(15,5,5,0.88)), url(https://cdn.pixabay.com/photo/2013/03/23/23/10/brush-96240_1280.jpg) center/cover fixed'}}>
        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="text-center text-xs tracking-[0.3em] uppercase mb-2" style={{color:'#d4956a'}}>What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-white" style={{fontFamily:"'Playfair Display', serif"}}>Choose Your Art Class</h2>
          <p className="text-center max-w-xl mx-auto text-sm mb-10" style={{color:'rgba(255,255,255,0.65)'}}>Fun, creativity-enhancing sessions designed for all ages. From basics to mastery — pick your journey!</p>

          <div className="relative">
            <button onClick={() => scroll("left")}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full transition-all hover:scale-110"
              style={{background:'rgba(196,99,90,0.85)'}}>
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button onClick={() => scroll("right")}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full transition-all hover:scale-110"
              style={{background:'rgba(196,99,90,0.85)'}}>
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div ref={scrollRef} className="flex gap-5 px-2 overflow-x-auto scrollbar-hide pb-4">
              {classes.map((item, idx) => (
                <div key={idx} className="flex-shrink-0 w-[260px] sm:w-[280px] group"
                  style={{borderRadius:'12px', overflow:'hidden', border:'1px solid rgba(255,255,255,0.08)'}}>
                  <div id="parent">
                    <div id="main">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                      <div id="slider">
                        <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{color:'#d4956a'}}>{item.subtitle}</p>
                        <h3 className="text-base font-semibold mb-1 text-white" style={{fontFamily:"'Playfair Display', serif"}}>{item.title}</h3>
                        <p className="text-xs" style={{color:'rgba(255,255,255,0.75)'}}>{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3" style={{background:'rgba(255,255,255,0.04)'}}>
                    <p className="text-xs font-medium" style={{color:'#e8d0c0'}}>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="py-20 px-6" style={{background:'#fdf6ee'}}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{color:'#c4635a'}}>Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily:"'Playfair Display', serif", color:'#1a0f0a'}}>How We Work</h2>
          <p className="max-w-xl mx-auto mb-14 text-sm leading-relaxed" style={{color:'#6b4c41'}}>
            We make learning art simple, fun, and inspiring. From choosing the right class to hands-on guidance
            and finally enjoying your own masterpiece, our process is designed to help you grow creatively at every step.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2"
                style={{background:'#fff', border:'1px solid #f0d5c8', boxShadow:'0 4px 24px rgba(196,99,90,0.08)'}}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{background:'linear-gradient(135deg, #fdf6ee, #f5e0d3)'}}>
                  {step.icon}
                </div>
                <div className="w-8 h-px mb-4 mx-auto" style={{background:'#c4635a'}} />
                <h3 className="text-lg font-semibold mb-3" style={{color:'#1a0f0a', fontFamily:"'Playfair Display', serif"}}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{color:'#6b4c41'}}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Preview ── */}
      <section style={{background:'#0f0505'}} className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{color:'#d4956a'}}>Our Collection</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{fontFamily:"'Playfair Display', serif"}}>Explore the Gallery</h2>
            </div>
            <Link to='/Gallery'>
              <button className="px-6 py-2.5 text-xs tracking-widest uppercase font-medium transition-all hover:scale-105 flex-shrink-0"
                style={{background:'transparent', border:'1px solid #c4635a', color:'#c4635a', borderRadius:'2px'}}>
                View All →
              </button>
            </Link>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {images.map((src, index) => (
              <div key={index} className="relative group overflow-hidden cursor-pointer break-inside-avoid rounded-lg"
                onClick={() => setSelectedImg(src)}>
                <img src={src} alt={`Art ${index + 1}`} className="w-full transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{background:'rgba(15,5,5,0.5)'}}>
                  <FaExpand size={22} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{background:'rgba(0,0,0,0.92)'}}>
          <button className="absolute top-6 left-6 transition-colors hover:opacity-70" onClick={() => setSelectedImg(null)} style={{color:'#f5c5b8'}}>
            <FaArrowLeft size={24} />
          </button>
          <img src={selectedImg} alt="Zoomed" className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-2xl object-contain" />
        </div>
      )}

      {/* ── Student Testimonials ── */}
      <section className="py-16 px-6" style={{background:'linear-gradient(180deg, #f5e0d3 0%, #fdf6ee 100%)'}}>
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs tracking-[0.3em] uppercase mb-3" style={{color:'#c4635a'}}>From Our Students</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{fontFamily:"'Playfair Display', serif", color:'#1a0f0a'}}>Student's Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {videos.map((link, index) => (
              <div key={index} className="w-full aspect-video rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                style={{boxShadow:'0 8px 32px rgba(196,99,90,0.15)', border:'1px solid #f0d5c8'}}>
                <iframe width="100%" height="100%" src={link} title={`Testimonial ${index + 1}`}
                  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
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
