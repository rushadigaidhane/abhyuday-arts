import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import Contact from "./Contact";

// place this in your Courses.jsx (or import from a data file)
const courses = [
  {
    title: "Drawing Classes",
    description: (
      <>
        <p>
          Unlock the <strong className="font-bold">artist within</strong> by starting with the
          fundamentals of drawing. Our <em>Drawing Classes</em> focus on building
          solid foundations — <strong className="font-bold">shapes, shading,
          proportions, and perspective</strong> — so every student learns to
          translate observation into confident, expressive sketches.
        </p>
        <p className="mt-2">
          With <strong className="font-bold">personalized guidance</strong>, learners
          progress at their own pace. Perfect for <strong className="font-bold">beginners
          and young artists</strong> who want a steady, inspiring start.
        </p>
        
      </>
    ),
    image: "/drawing.jpg",
  },

  {
    title: "Sketching Classes",
    description: (
      <>
        <p>
          Elevate your sketches with techniques that add <strong className="font-bold">depth,
          realism, and emotion</strong>. These classes teach refined pencil control,
          value rendering, and advanced linework so your portraits, figures, and
          still-lifes come alive with character.
        </p>
        <p className="mt-2">
          Ideal for students preparing portfolios or anyone who wants their
          work to stand out with <strong className="font-bold">precision and style.</strong>
        </p>
      </>
    ),
    image: "/sketch.png",
  },

 {
  title: "Elementary & Intermediate Drawing Grade Exam Preparation",
  description: (
    <>
      <p>
        Our <strong className="font-bold">Elementary and Intermediate Drawing Grade Exam Preparation Classes </strong>
         are designed for students from <strong>7th standard and above</strong> who aim to excel in the
        nationally recognized art grade examinations conducted in states like 
        <strong> Maharashtra, Goa, Madhya Pradesh, and Uttar Pradesh.</strong>
      </p>

      <p className="mt-2">
        These exams serve as a foundation for students aspiring to pursue higher education in 
        <strong> Commercial or Applied Art, Fine Art, Textile Designing, Interior Designing, Fashion Designing, and Architecture. </strong> 
        Passing these exams — especially the Intermediate Grade — gives students preference when seeking admission to 
        <strong> Government Art Colleges</strong> and other professional institutes.
      </p>

      <p className="mt-2">
        <strong className="font-bold">Elementary Grade Exam</strong> is meant for beginners (7th standard and above)
        to develop observation, creativity, and visualization skills. Students who clear the Elementary Exam qualify
        for the <strong>Intermediate Grade Exam</strong>, which focuses on mastering advanced drawing techniques and design principles.
      </p>

      <p className="mt-3 font-semibold text-lg">📘 Examination Pattern:</p>
      <ul className="list-disc list-inside mt-1">
        <li><strong>Elementary Grade Exam</strong></li>
        <ul className="list-disc list-inside ml-4">
          <li>Paper 1 – Object Drawing – 2½ hours</li>
          <li>Paper 2 – Memory Drawing – 2 hours</li>
          <li>Paper 3 – Design – 2 hours</li>
          <li>Paper 4 – Plain Practical Geometry & Lettering – 2 hours</li>
        </ul>
        <li className="mt-2"><strong>Intermediate Grade Exam</strong></li>
        <ul className="list-disc list-inside ml-4">
          <li>Paper 1 – Still Life – 3 hours</li>
          <li>Paper 2 – Memory Drawing – 2 hours</li>
          <li>Paper 3 – Design – 3 hours</li>
          <li>Paper 4 – Plain Practical Geometry, Solid Geometry & Lettering – 2½ hours</li>
        </ul>
      </ul>

    </>
  ),
  image: "/intermediat.jpg",
},

  {
  title: "NATA & JEE Paper 2 (Drawing) Preparation Classes",
  description: (
    <>
      <p>
        Prepare confidently for <strong className="font-bold">NATA</strong> and 
        <strong className="font-bold"> JEE Paper 2 (Drawing Test)</strong> with our specialized art training. 
        These sessions are crafted for students aspiring to join <strong className="font-bold">Architecture and Design colleges</strong>, 
        focusing on skill development, creative visualization, and technical accuracy.
      </p>
      <p className="mt-2">
        The course covers key topics such as <strong className="font-bold">perspective drawing, 2D & 3D composition, 
        memory sketching, light and shadow concepts, color theory,</strong> and <strong className="font-bold">aesthetic sense development</strong>. 
        Each session helps students improve observation, imagination, and presentation skills — essential for scoring high in the exams.
      </p>
      <p className="mt-2">
        With regular mock tests, portfolio guidance, and expert feedback, 
        students gain the confidence to perform exceptionally in the entrance exams.
      </p>
    </>
  ),
  image: "/sketch4.jpg",
},

  {
  title: "Rangoli Classes",
  description: (
    <>
      <p>
        Discover the art of creating stunning <strong className="font-bold">Rangolis</strong> that bring color, culture, and creativity to life! 
        Learn various styles including <strong className="font-bold">Sanskar Bharti Rangoli, Nature-inspired Rangoli, and Portrait Rangoli</strong>, 
        each designed to help you master patterns, symmetry, and color blending.
      </p>
      <p className="mt-2">
        Perfect for festive decorations, competitions, and artistic expression — our sessions blend traditional 
        design principles with modern creativity, guiding you to make Rangolis that tell stories through color and form.
      </p>
    </>
  ),
  image: "/rangoli.png",
},
{
  title: "Mehendi Classes",
  description: (
    <>
      <p>
        Learn the intricate and graceful art of <strong className="font-bold">Mehendi Designing</strong> — from delicate traditional patterns 
        to contemporary styles. Our classes cover popular designs like <strong className="font-bold">Bridal Mehendi, Marwadi Mehendi, 
        and Shading Mehendi</strong>, with detailed instruction on line work, cone handling, and creative motifs.
      </p>
      <p className="mt-2">
        Whether you’re a beginner or an aspiring professional artist, these sessions will enhance your creativity and confidence, 
        preparing you for events, client work, or personal artistry with elegance and precision.
      </p>
    </>
  ),
  image: "/mehendi.jpg",
},
{
  title: "Canvas Painting Classes",
  description: (
    <>
      <p>
        Unlock your creativity with <strong className="font-bold">Canvas Painting Classes</strong> designed to teach 
        the beauty of brushwork, color harmony, and composition. Learn how to bring your imagination to life using 
        <strong className="font-bold"> acrylic, oil, and mixed media techniques</strong> — perfect for both beginners and experienced artists.
      </p>
      <p className="mt-2">
        Our lessons cover everything from <strong className="font-bold">landscapes, abstract art, still life,</strong> 
        to <strong className="font-bold">modern portrait painting</strong>. With hands-on guidance, you'll explore blending, layering, 
        and texture creation — turning every canvas into a meaningful masterpiece.
      </p>
      <p className="mt-2">
        Ideal for art enthusiasts who wish to <strong className="font-bold">express emotions through color</strong> and 
        develop a personal artistic style in a calm, inspiring environment.
      </p>
    </>
  ),
  image: "/canvasp.jpg",
},


  {
    title: "Craft Classes",
    description: (
      <>
        <p>
          Art as a practice of wellbeing — these sessions are designed to help
          you unwind, express, and reconnect. <strong className="font-bold">Art for the Soul </strong>
          focuses on intuitive painting, mindful crafts, and creative exercises
          that calm the mind and spark joy.
        </p>
        <p className="mt-2">
          Perfect for anyone seeking <strong className="font-bold">stress relief,
          self-expression, or a gentle creative routine</strong> — no prior experience required.
        </p>
      </>
    ),
    image: "/craft.jpg",
  },
];

// or export { courses } if you prefer named export


const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Courses = () => {
  return (
    <div className="relative pt-[97px] bg-gradient-to-r from-yellow-50 to-pink-100 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://cdn.pixabay.com/photo/2013/03/23/23/10/brush-96240_1280.jpg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <motion.div
          className="relative z-10 max-w-3xl text-center text-white px-6"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Art Courses
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Unlock your creative potential with our expertly designed courses
            for all skill levels. Whether you're preparing for elementary or
            intermediate art exams, or just exploring your passion, we have a
            class tailored just for you.
          </p>
        </motion.div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-6 md:px-16">
        <div className="space-y-24">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              {/* Course Image */}
              <div className="flex justify-center">
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-2xl shadow-lg w-full max-w-lg h-[350px] object-cover transform transition duration-500 hover:scale-105"
                />
              </div>

              {/* Course Text */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {course.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>
               <Link to='/Gallery'>
                <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition">
                  View Galley
                </button>
                </Link>
                <Link to='/Contact'>
                <button className="px-6 py-3 m-8 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition">
                  Contact Us
                </button>
                </Link>
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
