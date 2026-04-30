import Footer from "./Footer";
import Header from "./Header";

const About = () => {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: '#fdf6ee' }}>
      <Header />

      {/* Hero Banner */}
      <div className="relative flex items-center justify-center overflow-hidden" style={{ height: '40vh', marginTop: '97px', background: '#0f0505' }}>
        <img src="/about.jpg" alt="About hero" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative z-10 text-center px-4">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#d4956a' }}>Our Story</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>About Us</h1>
        </div>
      </div>

      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img src="/about.jpg" alt="Abhyuday Art classes"
                className="rounded-2xl w-full max-w-md object-cover"
                style={{ boxShadow: '0 24px 64px rgba(196,99,90,0.18)' }} />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center text-center"
                style={{ background: 'linear-gradient(135deg, #c4635a, #d4956a)' }}>
                <div>
                  <p className="text-white font-bold text-lg leading-none">15+</p>
                  <p className="text-white text-xs">Years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#c4635a' }}>Background</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#1a0f0a' }}>
              A little background on Abhyuday Art Classes
            </h2>
            <div className="w-12 h-0.5 mb-6" style={{ background: '#c4635a' }} />

            <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#5a3428' }}>
              <p>
                For the past <strong>15+ years</strong>, Abhyuday Art Classes has been independently run by
                Mrs. Shubhangi, a passionate artist who loves teaching.
              </p>
              <p>
                Unlike other art institutes, we take in a <strong>limited number of students</strong>.
                This allows every student to get enough attention from the teacher.
              </p>
              <p>
                You can learn more than <strong>20 different types</strong> of painting, drawing, craft, rangoli,
                mehendi, and canvas painting classes in both <strong>in-person classes</strong> for kids & adults.
              </p>
              <p>
                At <strong>Abhyuday Art Classes</strong>, we provide <strong>specialized coaching</strong> for students
                preparing for <em>Elementary and Intermediate Art Exams, NATA,</em> and <em>JEE Paper 2 (Art & Architecture)</em>.
                Our structured guidance helps students build strong fundamentals in drawing, sketching, perspective, and design
                concepts, ensuring they gain both confidence and technical skills.
              </p>
              <p>
                The eco-friendly studio at Bank Colony, Bhandara is very spacious and designed like a classroom with
                a creative, inspiring environment that encourages learning and imagination.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
