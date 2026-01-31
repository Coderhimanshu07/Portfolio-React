import React from "react";
import { motion } from "framer-motion";

import { FaWindows, FaAws, FaCloud } from "react-icons/fa";
import manus from "../assets/manus.png";
import python from "../assets/py-logo.png";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiC,
  SiCplusplus,
  SiExpress,
  SiJquery,
  SiPhp,
  SiRedux,
  SiLinux,
  SiVirtualbox,
  SiApache,
  SiCanva,
  SiMysql,
  SiOpenai,
  SiGooglegemini,
  SiPerplexity,
  SiFlutter,
} from "react-icons/si";

const TechnicalSkills = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 size={45} color="#E34F26" /> },
    { name: "CSS", icon: <SiCss3 size={45} color="#1572B6" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={45} color="#7952B3" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={45} color="#06B6D4" /> },
    { name: "JavaScript", icon: <SiJavascript size={45} color="#F7DF1E" /> },
    { name: "jQuery", icon: <SiJquery size={45} color="#0769AD" /> },
    { name: "PHP", icon: <SiPhp size={45} color="#777BB4" /> },
    { name: "Apache", icon: <SiApache size={45} color="#D22128" /> },
    { name: "MongoDB", icon: <SiMongodb size={45} color="#47A248" /> },
    { name: "Express.js", icon: <SiExpress size={45} color="#ffffff" /> },
    { name: "React.js", icon: <SiReact size={45} color="#61DAFB" /> },
    { name: "Node.js", icon: <SiNodedotjs size={45} color="#339933" /> },
    { name: "Redux", icon: <SiRedux size={45} color="#764ABC" /> },

    {
      name: "Python",
      icon: (
        <img
          src={python}
          alt="Python"
          className="img-fluid"
          style={{ width: "45px", height: "45px", objectFit: "contain" }}
        />
      )
    },

    { name: "C Language", icon: <SiC size={45} color="#A8B9CC" /> },
    { name: "C++", icon: <SiCplusplus size={45} color="#00599C" /> },
    { name: "Git", icon: <SiGit size={45} color="#F05032" /> },
    { name: "GitHub", icon: <SiGithub size={45} color="#ffffff" /> },
    { name: "VirtualBox", icon: <SiVirtualbox size={45} color="#183A61" /> },
    { name: "WSL", icon: <FaWindows size={45} color="#0078D6" /> },
    { name: "Linux", icon: <SiLinux size={45} color="#FCC624" /> },
    { name: "Canva", icon: <SiCanva size={45} color="#00C4CC" /> },
    { name: "MySQL", icon: <SiMysql size={55} color="#4479A1" /> },
    { name: "AWS", icon: <FaAws size={45} color="#FF9900" /> },
    { name: "SaaS", icon: <FaCloud size={45} color="#0D6EFD" /> },
    { name: "ChatGPT", icon: <SiOpenai size={45} color="#10A37F" /> },
    { name: "Gemini", icon: <SiGooglegemini size={45} color="#4285F4" /> },
    { name: "Perplexity", icon: <SiPerplexity size={45} color="#FFF" /> },
    { name: "Flutter", icon: <SiFlutter size={45} color="#02569B" /> },

    {
      name: "Manus",
      icon: (
        <img
          src={manus}
          alt="Manus AI"
          className="img-fluid"
          style={{ width: "45px", height: "45px", objectFit: "contain" }}
        />
      )
    },
  ];

  return (
    <section id="skills" className="text-white">
      <div className="container pb-4">

        {/* SECTION HEADING */}
        <motion.h2
          className="text-black py-4 text-center Headings"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        {/* SKILLS GRID */}
        <motion.div
          className="skills-grid container_icons mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="d-flex justify-content-center"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.08 }}
            >
              <div
                className="skill-box bg-dark p-2 text-center rounded border border-warning"
                style={{ width: "130px" }}
              >
                <div style={{ fontSize: "35px" }}>{skill.icon}</div>
                <p className="mt-2 mb-0">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
