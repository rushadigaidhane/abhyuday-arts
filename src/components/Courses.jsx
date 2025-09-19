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
    title: "Elementary Classes",
    description: (
      <>
        <p>
          A playful, structured introduction to art designed for children and
          first-time learners. Our <strong className="font-bold">Elementary Classes </strong>
          encourage creativity through friendly projects that teach color theory,
          basic shapes, and composition in a fun way.
        </p>
        <p className="mt-2">
          Sessions are crafted to build <strong className="font-bold">confidence and imagination</strong>,
          making them perfect for kids preparing for elementary grade exams or
          parents who want a nurturing creative environment for their child.
        </p>
      </>
    ),
    image: "/elementary.jpg",
  },

  {
    title: "Intermediate Classes",
    description: (
      <>
        <p>
          Move beyond basics and discover advanced methods in composition,
          anatomy, and mixed media. Our <strong className="font-bold">Intermediate Classes </strong>
          refine your technique while helping you explore your personal artistic voice.
        </p>
        <p className="mt-2">
          Through focused projects and expert feedback, students work toward
          complex, gallery-ready pieces — ideal for those preparing for
          intermediate exams or serious artistic growth.
        </p>
      </>
    ),
    image: "/intermediat.jpg",
  },

  {
    title: "Art for the Soul",
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
    <div className="relative pt-[130px] bg-gradient-to-r from-yellow-50 to-pink-100 min-h-screen">
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
