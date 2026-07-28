import React from "react";
import { motion } from "framer-motion";

import { FaWindows, FaAws, FaCloud, FaJava, FaTerminal } from "react-icons/fa";
import manus from "../assets/manus.png";
import python from "../assets/py-logo.png";
import antigravity from "../assets/antigravity.png";

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
  SiNextdotjs,
  SiClaude,
  SiGithubcopilot,
  SiGooglecloud,
  SiRazorpay,
  SiVite,
  SiStripe
} from "react-icons/si";

const AntigravityIcon = ({ size = 38 }) => (
  <img
    src={antigravity}
    alt="Google Antigravity"
    style={{ width: `${size}px`, height: `${size}px`, objectFit: "contain" }}
  />
);

const SupabaseIcon = ({ size = 45 }) => (
  <svg width={size} height={size} viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
    <path d="M52.5 95.1c-2.5 3.2-7.6 1.4-7.7-2.6L43.9 33.4H83.8c7.2 0 11.2 8.3 6.8 14L52.5 95.1z" fill="#3ECF8E" />
    <path d="M52.5 95.1c-2.5 3.2-7.6 1.4-7.7-2.6L43.9 33.4H83.8c7.2 0 11.2 8.3 6.8 14L52.5 95.1z" fill="#1F1F1F" fillOpacity="0.2" />
    <path d="M36.3 0.5c2.5-3.2 7.6-1.4 7.7 2.6L48 59.8H8.6c-7.2 0-11.2-8.3-6.8-14L36.3 0.5z" fill="#3ECF8E" />
  </svg>
);

const GoogleCloudIcon = ({ size = 45 }) => (
  <svg width={size} height={size} viewBox="0 0 256 206" xmlns="http://www.w3.org/2000/svg">
    <path d="M170.25 56.82l22.25-22.25 1.48-9.37C153.44-11.68 88.98-7.5 52.42 33.92c-10.15 11.5-17.69 25.84-21.7 40.65l7.97-1.12 44.51-7.34 3.44-3.51c19.8-21.74 53.27-24.67 76.13-6.17z" fill="#EA4335" />
    <path d="M224.2 73.92c-5.12-18.84-15.62-35.77-30.22-48.73L162.76 56.43c13.19 10.76 20.7 26.99 20.38 44.02v5.54c15.35 0 27.8 12.44 27.8 27.8s-12.45 27.49-27.8 27.49H127.46l-5.47 5.93v33.34h5.47h55.67c39.93.31 72.55-31.49 72.86-71.42.19-24.2-11.74-46.89-31.79-60.45z" fill="#4285F4" />
    <path d="M71.87 205.8h55.59v-44.5H71.87c-3.96-.01-7.8-.86-11.4-2.51l-7.89 2.42-22.41 22.25-1.95 7.57c12.57 9.49 27.9 14.83 43.65 14.76z" fill="#34A853" />
    <path d="M71.87 61.43C31.94 61.66-.24 94.23 0 134.16c.13 22.3 10.55 43.29 28.22 56.88l32.25-32.25c-13.99-6.32-20.21-22.79-13.89-36.78 6.32-13.99 22.79-20.21 36.78-13.89 6.17 2.79 11.1 7.72 13.89 13.89L129.49 89.77c-13.72-17.94-35.04-28.42-57.62-28.34z" fill="#FBBC05" />
  </svg>
);

const TechnicalSkills = () => {
  const skills = [
    // Languages
    { name: "HTML", icon: <SiHtml5 size={38} color="#E34F26" /> },
    { name: "CSS", icon: <SiCss3 size={38} color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript size={38} color="#F7DF1E" /> },
    { name: "PHP", icon: <SiPhp size={38} color="#777BB4" /> },
    {
      name: "Python",
      icon: (
        <img
          src={python}
          alt="Python"
          className="img-fluid"
          style={{ width: "38px", height: "38px", objectFit: "contain" }}
        />
      )
    },
    { name: "C ", icon: <SiC size={38} color="#A8B9CC" /> },
    { name: "C++", icon: <SiCplusplus size={38} color="#00599C" /> },
    { name: "Java", icon: <FaJava size={38} color="#F89820" /> },

    // Frontend Frameworks
    { name: "Bootstrap", icon: <SiBootstrap size={38} color="#7952B3" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={38} color="#06B6D4" /> },
    { name: "jQuery", icon: <SiJquery size={38} color="#0769AD" /> },
    { name: "React.js", icon: <SiReact size={38} color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs size={38} /> },
    { name: "Redux", icon: <SiRedux size={38} color="#764ABC" /> },
    { name: "Vite", icon: <SiVite size={38} color="#646CFF" /> },

    // Backend
    { name: "Node.js", icon: <SiNodedotjs size={38} color="#339933" /> },
    { name: "Apache", icon: <SiApache size={38} color="#D22128" /> },
    { name: "MongoDB", icon: <SiMongodb size={38} color="#47A248" /> },
    { name: "MySQL", icon: <SiMysql size={38} color="#4479A1" /> },
    { name: "Supabase", icon: <SupabaseIcon size={38} /> },

    // Backend Frameworks
    { name: "Express.js", icon: <SiExpress size={38} color="#ffffff" /> },

    // Payment Gateways
    { name: "Razorpay", icon: <SiRazorpay size={38} color="#3395FF" /> },
    { name: "Stripe", icon: <SiStripe size={38} color="#635BFF" /> },

    // Cloud & DevOps
    { name: "AWS", icon: <FaAws size={38} color="#FF9900" /> },
    { name: "SaaS", icon: <FaCloud size={38} color="#0D6EFD" /> },
    { name: "G Cloud", icon: <GoogleCloudIcon size={38} /> },
    { name: "Git", icon: <SiGit size={45} color="#F05032" /> },
    { name: "GitHub", icon: <SiGithub size={38} color="#ffffff" /> },
    { name: "Linux", icon: <SiLinux size={38} color="#FCC624" /> },

    // AI Tools
    { name: "ChatGPT", icon: <SiOpenai size={38} color="#10A37F" /> },
    { name: "Gemini", icon: <SiGooglegemini size={38} color="#4285F4" /> },
    { name: "Perplexity", icon: <SiPerplexity size={38} color="#FFF" /> },
    { name: "Claude", icon: <SiClaude size={38} color="#D97757" /> },
    { name: "Copilot", icon: <SiGithubcopilot size={38} color="#ffffff" /> },
    { name: "OpenCode", icon: <FaTerminal size={38} color="#00C853" /> },
    { name: "Antigravity", icon: <AntigravityIcon size={30} /> },
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
                className="skill-box bg-dark p-1 text-center rounded border border-warning"
                style={{ width: "100px" }}
              >
                <div style={{ fontSize: "35px", lineHeight: "1" }}>{skill.icon}</div>
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
