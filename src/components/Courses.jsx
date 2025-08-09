import React from "react";
import Footer from './Footer';
import Header from "./Header";
import './courses.css';

const classes = [
  {
    title: "Elementary Art Exam Class",
    description: "This class focuses on building foundational skills for young artists, helping them prepare for elementary-level art exams.",
    image: "/elementary.jpg", 
  },
  {
    title: "Intermediate Art Exam Class",
    description: "Designed for students progressing in their art journey, this class covers techniques and mediums needed for intermediate art exams.",
    image: "/intermediat.jpg",
  },
 
];

const Courses =() =>{
    return(
        <div className="bg-gradient-to-r from-yellow-50 to-pink-100">
            <Header />

            <section className="pt-[104px]">
                {/* Hero Section */}
            <div id="firstblock" className="relative  ">
                <div  className="absolute inset-0 bg-black opacity-20 z-0"></div>
                <img
                src="https://cdn.pixabay.com/photo/2013/03/23/23/10/brush-96240_1280.jpg"
                alt="hero"
                className="w-full h-[85vh] object-cover "
                />
                <div id="head" className="  inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center pl-0 md:pl-12 md:items-start ">
                <h1 className="text-white text-4xl md:text-5xl font-bold animate-fadeUp">
                    Our Art Courses
                </h1>
                <p className="text-light-cream mt-3 text-lg ">
                    Unlock your creative potential with our expertly designed courses for all skill levels. 
    Whether you're preparing for elementary or intermediate art exams, or just exploring your passion, 
    we have a class tailored just for you.
                </p>
                
                </div>
            </div>
         </section>
            {/*Main section */} 
        <br /><br />
    <section className="course-section">
      
      <div className="course-text">
        <h2>Let Us Take You To The Land Of Paints & Brushes</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="course-image-wrapper">
        <img
          src="/craft.jpg" // Update this with your image path
          alt="Art Class"
          className="course-image"
        />
      </div>
    </section>
           <br />
           <br />
    <section className="course-section-reverse">
      
      <div className="course-text-r">
        <h2>Let Us Take You To The Land Of Paints & Brushes</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="course-image-wrapper-r">
        <img
          src="/craft.jpg" // Update this with your image path
          alt="Art Class"
          className="course-image-r"
        />
      </div>
    </section>
        <br />
        <br />
    <section className="course-section">
      
      <div className="course-text">
        <h2>Let Us Take You To The Land Of Paints & Brushes</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="course-image-wrapper">
        <img
          src="/craft.jpg" // Update this with your image path
          alt="Art Class"
          className="course-image"
        />
      </div>
    </section>
           <br />
           <br />
    <section className="course-section-reverse">
      
      <div className="course-text-r">
        <h2>Let Us Take You To The Land Of Paints & Brushes</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="course-image-wrapper-r">
        <img
          src="/craft.jpg" // Update this with your image path
          alt="Art Class"
          className="course-image-r"
        />
      </div>
    </section>
        <br />
        <br />
    <section className="course-section">
      
      <div className="course-text">
        <h2>Let Us Take You To The Land Of Paints & Brushes</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="course-image-wrapper">
        <img
          src="/craft.jpg" // Update this with your image path
          alt="Art Class"
          className="course-image"
        />
      </div>
    </section>
           <br />
           <br />
    <section className="course-section-reverse">
      
      <div className="course-text-r">
        <h2>Let Us Take You To The Land Of Paints & Brushes</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="course-image-wrapper-r">
        <img
          src="/craft.jpg" // Update this with your image path
          alt="Art Class"
          className="course-image-r"
        />
      </div>
    </section>
        <br />
        <br />
        <Footer/>
        </div>
    )
}
export default Courses;