# Abhyuday Arts – Website

A responsive and modern website for **Abhyuday Art Classes**, built using React and Tailwind CSS.  
The site highlights art courses, image gallery, testimonials and provides a visually engaging user experience.

---

## 🔍 Key Features

- **Hero banner** with full-width image, overlay text and CTA button.  
- **Courses carousel**: Horizontally scrollable list of classes featuring images and descriptions.  
- **Image gallery**: Grid layout with hover zoom effect and full-screen modal preview.  
- **Testimonials section**: Embedded YouTube videos presented in a responsive grid.  
- **Process section**: “How we work” steps with icons to explain the learning workflow.  
- Responsive and mobile-first design powered by Tailwind CSS.

---

## 🛠 Tech Stack

- React  
- Tailwind CSS  
- React Icons / HeroIcons  
- React Router (for navigating to Courses/Gallery)  
- Vite or CRA (depending on setup)  
- Git & GitHub for version control

---

## 📁 Project Structure (abridged)
src/
├─ components/
│ ├─ Header.jsx
│ ├─ Footer.jsx
│ ├─ Gallery.jsx
│ └─ ...
├─ pages/
│ ├─ Home.jsx
│ ├─ Courses.jsx
│ └─ ...
├─ App.jsx
├─ main.jsx
└─ Home.css

## 🚀 Getting Started

1. Clone the repository:  
   ```sh
   git clone https://github.com/rushadigaidhane/abhyuday-arts.git
   cd abhyuday-arts

2. Install dependencies:

    npm install


3. Run the app (development mode):

    npm run dev
    or if using CRA:
    npm start


4. Build for production:

    npm run build

📝 Usage Notes

Place course images in the /public folder (e.g., /public/drawing.jpg, /public/intermediat.jpg).

In Home.jsx, the classes and images arrays control the content shown in sections; update them to add new courses or gallery items.

Ensure Header.jsx is fixed at the top and all content sections have adequate top padding to avoid overlapping.

🌟 Contributions & Roadmap

Add backend integration for contact forms and registrations.

Add admin panel for uploading gallery images or new courses.

Enhance animations with Framer Motion or GSAP.

Add multi-language support or dark mode.
