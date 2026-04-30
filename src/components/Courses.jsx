import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Drawing Classes",
    description: (
      <>
        <p>Unlock the <strong>artist within</strong> by starting with the fundamentals of drawing. Our <em>Drawing Classes</em> focus on building solid foundations — <strong>shapes, shading, proportions, and perspective</strong> — so every student learns to translate observation into confident, expressive sketches.</p>
        <p className="mt-2">With <strong>personalized guidance</strong>, learners progress at their own pace. Perfect for <strong>beginners and young artists</strong> who want a steady, inspiring start.</p>
      </>
    ),
    image: "/drawing.jpg",
  },
  {
    title: "Sketching Classes",
    description: (
      <>
        <p>Elevate your sketches with techniques that add <strong>depth, realism, and emotion</strong>. These classes teach refined pencil control, value rendering, and advanced linework so your portraits, figures, and still-lifes come alive with character.</p>
        <p className="mt-2">Ideal for students preparing portfolios or anyone who wants their work to stand out with <strong>precision and style.</strong></p>
      </>
    ),
    image: "/sketch.png",
  },
  {
    title: "Elementary & Intermediate Drawing Grade Exam Preparation",
    description: (
      <>
        <p>Our <strong>Elementary and Intermediate Drawing Grade Exam Preparation Classes</strong> are designed for students from <strong>7th standard and above</strong> who aim to excel in the nationally recognized art grade examinations conducted in states like <strong>Maharashtra, Goa, Madhya Pradesh, and Uttar Pradesh.</strong></p>
        <p className="mt-2">These exams serve as a foundation for students aspiring to pursue higher education in <strong>Commercial or Applied Art, Fine Art, Textile Designing, Interior Designing, Fashion Designing, and Architecture.</strong></p>
        <p className="mt-2"><strong>Elementary Grade Exam</strong> is meant for beginners (7th std+) to develop observation, creativity, and visualization skills. Students who clear it qualify for the <strong>Intermediate Grade Exam</strong>, which focuses on advanced techniques and design principles.</p>
        <div className="mt-3 text-sm">
          <p className="font-semibold mb-1">📘 Examination Pattern:</p>
          <p className="font-medium">Elementary:</p>
          <ul className="list-disc list-inside ml-2 mb-1">
            <li>Paper 1 – Object Drawing (2½ hrs)</li>
            <li>Paper 2 – Memory Drawing (2 hrs)</li>
            <li>Paper 3 – Design (2 hrs)</li>
            <li>Paper 4 – Geometry & Lettering (2 hrs)</li>
          </ul>
          <p className="font-medium">Intermediate:</p>
          <ul className="list-disc list-inside ml-2">
            <li>Paper 1 – Still Life (3 hrs)</li>
            <li>Paper 2 – Memory Drawing (2 hrs)</li>
            <li>Paper 3 – Design (3 hrs)</li>
            <li>Paper 4 – Geometry, Solid Geometry & Lettering (2½ hrs)</li>
          </ul>
        </div>
      </>
    ),
    image: "/intermediat.jpg",
  },
  {
    title: "NATA & JEE Paper 2 (Drawing) Preparation",
    description: (
      <>
        <p>Prepare confidently for <strong>NATA</strong> and <strong>JEE Paper 2 (Drawing Test)</strong> with our specialized art training. These sessions are crafted for students aspiring to join <strong>Architecture and Design colleges</strong>, focusing on skill development, creative visualization, and technical accuracy.</p>
        <p className="mt-2">The course covers <strong>perspective drawing, 2D & 3D composition, memory sketching, light and shadow concepts, color theory,</strong> and <strong>aesthetic sense development</strong>.</p>
        <p className="mt-2">With regular mock tests, portfolio guidance, and expert feedback, students gain the confidence to perform exceptionally.</p>
      </>
    ),
    image: "/sketch4.jpg",
  },
  {
    title: "Rangoli Classes",
    description: (
      <>
        <p>Discover the art of creating stunning <strong>Rangolis</strong> that bring color, culture, and creativity to life! Learn various styles including <strong>Sanskar Bharti Rangoli, Nature-inspired Rangoli, and Portrait Rangoli</strong>, each designed to help you master patterns, symmetry, and color blending.</p>
        <p className="mt-2">Perfect for festive decorations, competitions, and artistic expression — our sessions blend traditional design principles with modern creativity.</p>
      </>
    ),
    image: "/rangoli.png",
  },
  {
    title: "Mehendi Classes",
    description: (
      <>
        <p>Learn the intricate and graceful art of <strong>Mehendi Designing</strong> — from delicate traditional patterns to contemporary styles. Our classes cover popular designs like <strong>Bridal Mehendi, Marwadi Mehendi, and Shading Mehendi</strong>, with detailed instruction on line work, cone handling, and creative motifs.</p>
        <p className="mt-2">Whether you're a beginner or an aspiring professional artist, these sessions will enhance your creativity and confidence.</p>
      </>
    ),
    image: "/mehendi.jpg",
  },
  {
    title: "Canvas Painting Classes",
    description: (
      <>
        <p>Unlock your creativity with <strong>Canvas Painting Classes</strong> designed to teach the beauty of brushwork, color harmony, and composition. Learn how to bring your imagination to life using <strong>acrylic, oil, and mixed media techniques</strong>.</p>
        <p className="mt-2">Our lessons cover everything from <strong>landscapes, abstract art, still life,</strong> to <strong>modern portrait painting</strong>. With hands-on guidance, you'll explore blending, layering, and texture creation.</p>
      </>
    ),
    image: "/canvasp.jpg",
  },
  {
    title: "Craft Classes",
    description: (
      <>
        <p>Art as a practice of wellbeing — these sessions are designed to help you unwind, express, and reconnect. <strong>Craft Classes</strong> focus on intuitive techniques, mindful crafts, and creative exercises that calm the mind and spark joy.</p>
        <p className="mt-2">Perfect for anyone seeking <strong>stress relief, self-expression, or a gentle creative routine</strong> — no prior experience required.</p>
      </>
    ),
    image: "/craft.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Courses = () => {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: 'linear-gradient(180deg, #fdf6ee 0%, #f5e0d3 100%)', minHeight: '100vh' }}>
      <Header />

      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '85vh', paddingTop: '97px' }}>
        <img src="https://cdn.pixabay.com/photo/2013/03/23/23/10/brush-96240_1280.jpg" alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }} />
        <motion.div className="relative z-10 max-w-3xl text-center text-white px-6" initial="hidden" animate="show" variants={fadeUp}>
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#d4956a' }}>What We Teach</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Art Courses</h1>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)', fontFamily: "'Cormorant Garamond', serif" }}>
            Unlock your creative potential with our expertly designed courses for all skill levels.
            Whether you're preparing for exams, or just exploring your passion, we have a class tailored just for you.
          </p>
        </motion.div>
      </section>

      {/* Courses */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto space-y-28">
          {courses.map((course, index) => (
            <motion.div key={index}
              className={`grid md:grid-cols-2 gap-12 items-center`}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}>
              {/* Image — alternates side */}
              <div className={`flex justify-center ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <img src={course.image} alt={course.title}
                  className="rounded-2xl w-full max-w-lg object-cover transition-transform duration-500 hover:scale-[1.02]"
                  style={{ height: '340px', boxShadow: '0 20px 60px rgba(196,99,90,0.18)' }} />
              </div>

              {/* Text */}
              <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#c4635a' }}>
                  Course {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#1a0f0a' }}>
                  {course.title}
                </h2>
                <div className="w-10 h-0.5 mb-5" style={{ background: '#c4635a' }} />
                <div className="text-sm leading-relaxed mb-8" style={{ color: '#5a3428' }}>
                  {course.description}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link to='/Gallery'>
                    <button className="px-6 py-2.5 text-xs tracking-widest uppercase font-medium transition-all hover:scale-105"
                      style={{ background: '#c4635a', color: '#fff', borderRadius: '2px' }}>
                      View Gallery
                    </button>
                  </Link>
                  <Link to='/Contact'>
                    <button className="px-6 py-2.5 text-xs tracking-widest uppercase font-medium transition-all hover:scale-105"
                      style={{ background: 'transparent', border: '1px solid #c4635a', color: '#c4635a', borderRadius: '2px' }}>
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
