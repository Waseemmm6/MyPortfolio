import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `


I am a passionate MERN stack developer with a 
strong focus on building robust and scalable web applications. 
I have honed my skills in front-end technologies such as HTML, CSS,Tailwind-CSS 
JavaScript, and React, as well as back-end technologies like Express.js and 
MongoDB. My goal is to leverage my expertise to create innovative solutions that 
drive business growth and deliver exceptional user experiences.
Skilled in problem-solving using C++, leveraging its powerful 
features to develop efficient algorithms and solutions for complex challenges.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Mern stack developer with a passion for
 creating efficient and user-friendly web applications.I have worked with a variety of technologies 
 HTML, CSS, Tailwind-CSS, JavaScript, and React, as well as back-end technologies like Express.js and 
MongoDB.My journey in web development began with a deep curiosity for how things work, and 
 it has evolved into a career where I continuously strive to learn and adapt to new challenges.
  I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality
   solutions. 
`;



export const PROJECTS = [
  {
    title: "EDutech Website",
    image: project1,
    description:
      `Developed a comprehensive full-stack application leveraging the MERN stack (MongoDB, Express.js,
    React.js, Node.js).
    Designed and implemented a responsive and dynamic user interface using React.js and Tailwind CSS.
    Built and integrated backend services with Express.js and MongoDB to enable seamless data
    management and user authentication.`,
    technologies: ["Tailwind", "React", "Node.js/Express js", "MongoDB"],
  },
  {
    title: "Air Quality Index Predictor",
    image: project2,
    description:
      `Engineered a predictive model for air quality assessment using machine learning techniques, including
      regression algorithms. Developed a user-centric web interface with Flask to enhance usability and data visualization.
      Conducted data preprocessing and analysis to train machine learning models for accurate predictions.`,
    technologies: ["ML", "FLASK"],
  },

  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Tailwind", "React"],
  },
  {
    title: "Password Generator",
    image: project4,
    description:
      "Designed and developed a web-based password generation tool to create strong, randomized passwords. Implemented the application using HTML, CSS, and JavaScript, focusing on user security and experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },

];

export const CONTACT = {
  address: "Kashmir,India",
  
};
