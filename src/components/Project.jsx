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
import Week from "../assets/Week.png";
import Watch from "../assets/Watch.png";

const projects = [
  {
    title: "E-commerce",
    description:
      "Built with React.js, this e-commerce web application features a clean and responsive user interface, smooth navigation, and reusable components. It demonstrates modern front-end development practices and delivers a simple, user-friendly online shopping experience.",
    imageUrl: Ecom,
    liveLink: "https://ecommerce-react-xi-sandy.vercel.app/",
    repoLink: "https://github.com/Coderhimanshu07/ecommerce-react",
  },
  {
    title: "Neon Stopwatch",
    description:
      "A clean and interactive stopwatch web application built using HTML, CSS, and JavaScript. It lets users start, stop, and reset time tracking with hours, minutes, and seconds display, focusing on simplicity, responsive design, and smooth real-time interaction.",
    imageUrl: Watch,
    liveLink: "https://coderhimanshu07.github.io/stopwatch/",
    repoLink: "https://github.com/Coderhimanshu07/stopwatch",
  },
  {
    title: "Birthday Page",
    description:
      "A responsive birthday page created using HTML, CSS, and JavaScript. This is a creative and interactive birthday surprise website designed to make special moments memorable. It features an unlocking experience, personalized messages, and engaging visuals.",
    imageUrl: Birthday,
    liveLink: "https://coderhimanshu07.github.io/Birthday-surprise/",
    repoLink: "https://github.com/Coderhimanshu07/Birthday-surprise",
  },
  {
    title: "Portfolio",
    description:
      "A modern, fully responsive personal portfolio website developed using HTML, CSS, JavaScript, and Bootstrap. It highlights skills, projects, and professional details with an elegant layout, smooth navigation, and optimized performance across all devices.",
    imageUrl: portfolio,
    liveLink: "https://coderhimanshu07.github.io/Portfolio/",
    repoLink: "https://github.com/Coderhimanshu07/Portfolio",
  },
  {
    title: "Non-Sci. Calculator",
    description:
      "A fast, responsive web calculator built using HTML, CSS, and JavaScript. It supports basic arithmetic operations with real-time input handling and a clean user interface, ensuring smooth usage across desktop and mobile devices.",
    imageUrl: Calculator,
    liveLink: "https://coderhimanshu07.github.io/Projects-calculator/",
    repoLink: "https://github.com/Coderhimanshu07/Projects-calculator",
  },
  {
    title: "To-Do List",
    description:
      "A simple and responsive task management web application built using HTML, CSS, and JavaScript. It allows users to add, delete, and complete tasks, focusing on minimal design, fast performance, and an intuitive user-friendly experience.",
    imageUrl: todo,
    liveLink: "https://coderhimanshu07.github.io/To-do-list/",
    repoLink: "https://github.com/Coderhimanshu07/To-do-list",
  },
  {
    title: "Resume with Dynamic Buttons",
    description:
      "A responsive resume website built using HTML, CSS, Bootstrap, and JavaScript. It presents professional information, skills, and projects with interactive buttons and includes WhatsApp integration for quick and direct communication.",
    imageUrl: Resume,
    liveLink: "https://coderhimanshu07.github.io/dynamic-resume/",
    repoLink: "https://github.com/Coderhimanshu07/dynamic-resume",
  },
  {
    title: "Weekly Info Page",
    description:
      "A simple and interactive web application that allows users to enter a date and instantly find the corresponding day of the week. Built using HTML, CSS, and JavaScript, it focuses on clean design, accuracy, and smooth user interaction.",
    imageUrl: Week,
    liveLink: "https://coderhimanshu07.github.io/Projects-week_info/",
    repoLink: "https://github.com/Coderhimanshu07/Projects-week_info",
  },
  {
    title: "Employee Search System",
    description:
      "A responsive employee search application developed using HTML, Bootstrap 5, and JavaScript. It allows users to search employees by name or ID with instant results, offering a clean interface and smooth user experience.",
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
