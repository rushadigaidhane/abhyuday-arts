import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Courses.css";

const courses = [
  {
    title: "Drawing Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/drawing.jpg",
  },
  {
    title: "Sketching Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/sketch.png",
  },
  {
    title: "Elemantary classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/elementary.jpg",
  },
  {
    title: "Intermidiat classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/intermediat.jpg",
  },
  {
    title: "Art for the Soul",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/craft.jpg",
  },
];

const Courses = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-pink-100">
      <Header />

      {/* Hero Section */}
      <section className="pt-[104px]">
        <div id="firstblock" className="relative">
          <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
          <img
            src="https://cdn.pixabay.com/photo/2013/03/23/23/10/brush-96240_1280.jpg"
            alt="hero"
            className="w-full h-[85vh] object-cover"
          />
          <div
            id="head"
            className="inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center pl-0 md:pl-12 md:items-start"
          >
            <h1 className="text-white text-4xl md:text-5xl font-bold animate-fadeUp">
              Our Art Courses
            </h1>
            <p className="text-light-cream mt-3 text-lg">
              Unlock your creative potential with our expertly designed courses
              for all skill levels. Whether you're preparing for elementary or
              intermediate art exams, or just exploring your passion, we have a
              class tailored just for you.
            </p>
          </div>
        </div>
      </section>

     

      {/* Main Sections */}
      {courses.map((course, index) => {
        const isReverse = index % 2 !== 0;
        return (
          <section
            key={index}
            className={isReverse ? "course-section-reverse" : "course-section"}
          >
            <div className={isReverse ? "course-text-r" : "course-text"}>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <button>Contact Us</button>
            </div>
            <div
              className={
                isReverse
                  ? "course-image-wrapper-r"
                  : "course-image-wrapper"
              }
            >
              <img
                src={course.image}
                alt={course.title}
                className={isReverse ? "course-image-r" : "course-image"}
              />
            </div>
      
          </section>

        );
      })}

      
      <Footer />
    </div>
  );
};

export default Courses;
