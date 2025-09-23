import Footer from "./Footer";
import Header from "./Header";

const About = () => {
    return(
        <div>
            <Header/>

                <section className="bg-[#fdfdf5] py-20 px-6 md:px-16 pt-40 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left - Image */}
        <div className="flex justify-center">
          <img
            src="/about.jpg" // replace with your image
            alt="Abhyuday Art classes"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Right - Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 relative inline-block">
            A little background on Abhyuday Art classes
            <span className="block w-20 h-1 bg-pink-400 mt-1"></span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            For the past 15+ years, Abhyuday Art classes is being independently run by 
            Mrs. Shubhangi, a passionate artist who loves teaching.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Unlike other art institutes, we take in a{" "}
            <span className="font-semibold">limited number of students</span>. 
            This allows every student to get enough attention from the teacher. 
            
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            You can learn more than 20 different types of painting, drawing,
            craft, rangoli, mehendi, canvas painting classes in both{" "}
            <span className="font-semibold">in-person classes</span> 
            for kids & adults.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 ">
            At <span className="font-semibold">Abhyuday Art classes</span>, we provide 
            <span className="font-semibold"> specialized coaching</span> for students preparing for 
            <span className="italic"> Elementary and Intermediate Art Exams, NATA,</span> and 
            <span className="italic"> JEE Paper 2 (Art & Architecture)</span>. Our structured guidance 
            helps students build strong fundamentals in drawing, sketching, perspective, and design 
            concepts, ensuring they gain both confidence and technical skills. With focused practice 
            sessions, personalized feedback, and exam-oriented training, we prepare students to excel 
            in competitive art and architecture entrance exams.
            </p>

          <p className="text-gray-700 leading-relaxed">
            The eco-friendly studio at Bank Colony, Bhandara is very spacious 
            and and designed like a classroom with a creative, inspiring environment that encourages learning and imagination.
          </p>
        </div>
      </div>
    </section>
            <Footer/>
        </div>
    )
}
export default About;