import 'bootstrap/dist/css/bootstrap.min.css';
import Me from "../assets/Me.jpg";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

import Services from './Services';
import Contact from './Contact';
import TechnicalSkills from './Technical_skills';
import Projects from './Project';
import Experience from './Experience';

function Body() {
  return (
    <>
      <section id="Home">
        <div id="bodydiv" className="container-fluid py-4">
          <div className="container">
            <div className="row align-items-center">

              {/* IMAGE SECTION */}
              <motion.div
                className="col-12 col-md-5 d-flex justify-content-center order-1 order-md-2 mb-4 mb-md-0"
                initial={{ opacity: 0, x: 100, scale: 0.85 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="circle-wrapper border neon-glow">
                  <img src={Me} alt="profile" className="img-fluid rounded-circle" />
                </div>
              </motion.div>

              {/* TEXT SECTION */}
              <motion.div
                className="col-12 col-md-7 order-2 order-md-1"
                id="bd_txt"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <strong className="body_text">Developer Himanshu</strong>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <i>
                    Full-stack Developer / MERN-Stack Developer passionate about crafting elegant
                    and efficient solutions to complex problems. Proficient in Backend
                    (MySQL, PhP, MongoDB, MariaDB, etc). Eager to contribute to innovative
                    projects and continuously expand my skill set.
                  </i>
                </motion.p>

                {/* SOCIAL ICONS */}
                <div className="pt-4">
                  <motion.a
                    href="https://www.linkedin.com/in/himanshu-sharma-b418bb34b/"
                    target="blank"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="me-3 d-inline-block"
                  >
                    <FaLinkedin size={50} color="black" />
                  </motion.a>

                  <motion.a
                    href="https://www.instagram.com/coderhimanshu/"
                    target="blank"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="me-3 d-inline-block"
                  >
                    <FaInstagram size={50} color="black" />
                  </motion.a>

                  <motion.a
                    href="https://github.com/Coderhimanshu07"
                    target="blank"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="me-3 d-inline-block"
                  >
                    <FaGithub size={50} color="black" />
                  </motion.a>
                </div>

                {/* WHATSAPP BUTTON */}
                <div className="mt-4">
                  <motion.a
                    href="https://wa.me/917291933500"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn chat-btn d-flex align-items-center gap-2 px-4 py-2 fw-semibold rounded-pill"
                    style={{ width: "fit-content" }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaWhatsapp size={30} color="black" />
                    <span style={{ color: "black" }}>Chat Now</span>
                  </motion.a>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS — ONLY SCROLL ANIMATION */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Services />
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <TechnicalSkills />
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Experience />
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
    </>
  );
}

export default Body;
