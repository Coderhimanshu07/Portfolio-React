import React from "react";
import { motion } from "framer-motion";

import ACC from "../assets/pdf/Accenture.pdf";
import AWS from "../assets/pdf/Amazon.pdf";
import DELOITTE from "../assets/pdf/Deloitte intern.pdf";
import JD from "../assets/pdf/JD.pdf";

const Experience = () => {
  const experiences = [
    {
      role: "Customer Support Executive",
      company: "Justdial",
      duration: "April 2025",
      description:
        "Understanding the role of transforming processes hosting architecture",
      pdf: JD,
    },
    {
      role: "Cyber Job Simulation 2025",
      company: "Deloitte",
      duration: "July 2025",
      description:
        "Cyber Security, understanding ethics, social etiquette, unusual traffic patterns, and ethical hacking fundamentals",
      pdf: DELOITTE,
    },
    {
      role: "Solutions Architecture Job Simulation",
      company: "AWS",
      duration: "July 2025",
      description:
        "Designing simple and scalable hosting architecture, learning about VPCs, load balancers, and cloud infrastructure",
      pdf: AWS,
    },
    {
      role: "Technology Apprenticeship Job Simulation",
      company: "Accenture",
      duration: "July 2025",
      description:
        "Understanding the role of transforming processes and hosting architecture",
      pdf: ACC,
    },
  ];

  return (
    <section id="experience" className="bg-dark text-white pb-4">
      <div className="container px-3">

        {/* SECTION HEADING */}
        <motion.h2
          className="text-warning text-center Headings mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        {/* CENTERED WRAPPER */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">

            {/* EXPERIENCE GRID */}
            <motion.div
              className="row g-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="col-12 col-md-6 d-flex justify-content-center"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className="card bg-dark border border-warning shadow-lg p-4 experience-card"
                    style={{ width: "100%", borderRadius: "15px" }}
                  >
                    <h4 className="text-warning fw-bold">{exp.role}</h4>
                    <h6 className="text-light">{exp.company}</h6>
                    <p className="text-secondary mb-2">{exp.duration}</p>
                    <p className="text-light">{exp.description}</p>

                    <div className="mt-3">
                      <a
                        href={exp.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-warning"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
