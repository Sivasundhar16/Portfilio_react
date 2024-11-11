import project1 from "../assets/projects/LinkedIn.webp";
import project2 from "../assets/projects/employee management system dashboard..webp";
import project3 from "../assets/projects/movie.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React and Tailwind CSS, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const EXPERIENCES = [
  {
    year: "2024 Feb ",
    role: "Full stack Developer- Intern",
    company: "TechnoHack",
    description: `Designed and developed user interfaces for web applications using  MERN Stack. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Express", "MongoDB", "React", "postgreSQL"],
  },
  {
    year: "2020 - 2024",
    role: "B.E Computer Science and Engineering",
    company: " SSM Institude of Engineering and Technology ",
    description: `Completed Collage in 2024 with the CGPA of 7.9.`,
    technologies: ["Python", "TOC", "Cloud"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "CONNEXUS ",
    image: project1,
    description:
      "A fully functional website that Companies post job details and user can apply and post their professionl details ",
    technologies: ["MongoDB", "TailwindCSS", "Tanstack", "Node.js"],
  },
  {
    title: "EMPLOYEE MANAGEMENT SYSTEM",
    image: project2,
    description:
      "An application for admin - Easily manage all employee details and update their roles .",
    technologies: ["React", "MongoDB", "Express", "EJS"],
  },
  {
    title: "WatchFlix",
    image: project3,
    description:
      "Website for movie details and their rating.User can find easily good movies and series",
    technologies: ["React", "CSS", "MovieDatabaseAPI"],
  },
];

export const CONTACT = {
  address: "Dindigul ,Tamil Nadu ",
  phoneNo: "+91 9629279196 ",
  email: "vssiva18@gmail.com",
};
