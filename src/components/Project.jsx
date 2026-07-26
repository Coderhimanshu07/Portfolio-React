import React from "react";
import { motion } from "framer-motion";

import Calculator from "../assets/cal.png";
import todo from "../assets/Todo.png";
import portfolio from "../assets/Portfolio2.png";
import form from "../assets/form.png";
import Employee from "../assets/EMPS.png";
import Resume from "../assets/Dy_resume.png";
import Birthday from "../assets/Bday.png";
import Ecom from "../assets/Ecom2.png";
import CAi from "../assets/CAi-new.webp";
import Watch from "../assets/Watch.png";
import sangeet from "../assets/Sangeet_web.webp";
import dog from "../assets/dog.png";
import weather from "../assets/Whether.png";

const projects = [
  {
    title: "संGeet",
    description:
      "संGeet is a modern, responsive web-based music player delivering smooth streaming experience. Features include clean interface, secure authentication, intuitive playback controls, and user-friendly design optimized for all devices. Built with React.js for seamless music listening across all platforms.",
    imageUrl: sangeet,
    liveLink: "https://sangeet-dtwj.vercel.app/",
    repoLink: "https://github.com/Coderhimanshu07/Sangeet",
  },
  {
    title: "Chitragupta Ai",
    description:
      "Chitragupta AI is an AI-powered web app offering simple chatbot-like interface for user interactions. Users can enter prompts and receive AI-generated responses for assistance or tasks. Built on modern stack with fast performance, serving as centralized user-friendly AI dashboard.",
    imageUrl: CAi,
    liveLink: "https://chitragupta-ai-three.vercel.app/",
    repoLink: "https://github.com/Coderhimanshu07/Chitragupta-Ai",
  }
  ,
  {
    title: "E-commerce",
    description:
      "E-commerce web application built with React.js featuring clean, responsive user interface with smooth navigation. Showcases modern front-end development practices using reusable components. Delivers simple, user-friendly online shopping experience optimized for performance.",
    imageUrl: Ecom,
    liveLink: "https://ecommerce-react-xi-sandy.vercel.app/",
    repoLink: "https://github.com/Coderhimanshu07/ecommerce-react",
  },
  {
    title: "Neon Stopwatch",
    description:
      "Interactive stopwatch web application built with HTML, CSS, and JavaScript. Allows users to start, stop, and reset time tracking with hours, minutes, seconds display. Focuses on simplicity, responsive design, and smooth real-time interaction across devices.",
    imageUrl: Watch,
    liveLink: "https://coderhimanshu07.github.io/stopwatch/",
    repoLink: "https://github.com/Coderhimanshu07/stopwatch",
  },
  {
    title: "Dog Breed Explorer",
    description:
      "Dog Breed Explorer is a web application that allows users to search and discover different dog breeds. It provides detailed information about each breed, including characteristics, temperaments, and care requirements. Built with React.js for a modern, responsive user experience.",
    imageUrl: dog,
    liveLink: "https://coderhimanshu07.github.io/Dog-Breed-Explorer/",
    repoLink: "https://github.com/Coderhimanshu07/Dog-Breed-Explorer",
  },
  {
    title: "Weather App",
    description:
      "Weather App is a web application that provides real-time weather information for any location. Users can search for cities and view current weather conditions, temperature, humidity, and forecasts. it offers a clean, responsive interface for an optimal user experience.",
    imageUrl: weather,
    liveLink: "https://coderhimanshu07.github.io/Weather-App/",
    repoLink: "https://github.com/Coderhimanshu07/Weather-App",
  },
  {
    title: "Portfolio",
    description:
      "Modern, fully responsive personal portfolio website developed using HTML, CSS, JavaScript, and Bootstrap. Highlights skills, projects, and professional details with elegant layout, smooth navigation, and optimized performance across all devices.",
    imageUrl: portfolio,
    liveLink: "https://coderhimanshu07.github.io/Portfolio/",
    repoLink: "https://github.com/Coderhimanshu07/Portfolio",
  },

  {
    title: "Birthday Page",
    description:
      "Responsive birthday page created using HTML, CSS, and JavaScript. Features interactive and creative surprise website designed for memorable special moments. Includes unlocking experience, personalized messages, and engaging visuals for celebrations.",
    imageUrl: Birthday,
    liveLink: "https://coderhimanshu07.github.io/Birthday-surprise/",
    repoLink: "https://github.com/Coderhimanshu07/Birthday-surprise",
  },

  {
    title: "Employee Search System",
    description:
      "Responsive employee search application developed using HTML, Bootstrap 5, and JavaScript. Allows users to search employees by name or ID with instant results. Offers clean interface and smooth user experience for easy navigation.",
    imageUrl: Employee,
    liveLink: "https://coderhimanshu07.github.io/Projects-emp-search-system/",
    repoLink: "https://github.com/Coderhimanshu07/Projects-emp-search-system",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pb-4">
      <div className="container w-75">

        {/* SECTION HEADING */}
        <motion.h2
          className="text-center Headings"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* PROJECT GRID */}
        <motion.div
          className="row g-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="col-md-6 col-lg-4 d-flex"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="card flex-fill project-card">
                {proj.imageUrl && (
                  <a href={proj.liveLink} target="_blank" rel="noreferrer">
                    <img
                      src={proj.imageUrl}
                      className="project-image"
                      alt={proj.title}
                    />
                  </a>
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="card-text justify-txt">{proj.description}</p>
                  <div className="mt-auto">
                    {proj.liveLink && (
                      <a
                        href={proj.liveLink}
                        className="btn btn-warning me-2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                    {proj.repoLink && (
                      <a
                        href={proj.repoLink}
                        className="btn btn-dark"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
