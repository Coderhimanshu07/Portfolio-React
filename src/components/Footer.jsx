import React, { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from "../assets/logo.png";
import { FaReact } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const areaRef = useRef(null);

  useEffect(() => {
    const area = areaRef.current;
    if (!area) return;

    const createSparkle = (x, y) => {
      for (let i = 0; i < 3; i++) {
        const sparkle = document.createElement("span");
        sparkle.className = "cursor-sparkle footer-sparkle";
        const size = Math.random() * 6 + 3;
        const offsetX = (Math.random() - 0.5) * 40;
        const offsetY = (Math.random() - 0.5) * 40;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${x + offsetX}px`;
        sparkle.style.top = `${y + offsetY}px`;
        area.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1200);
      }
    };

    const onMove = (e) => {
      const rect = area.getBoundingClientRect();
      createSparkle(e.clientX - rect.left, e.clientY - rect.top);
    };

    area.addEventListener("mousemove", onMove);
    return () => area.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={areaRef} className="container-fluid bg-dark text-white p-4 footer-area sparkle-area">

      <div className="row text-center text-md-start align-items-center">

        {/* LEFT */}
        <div className="col-12 col-md-4 mb-4 mb-md-0 d-none d-md-flex">
          <img
            src={Logo}
            alt="Footer Logo"
            className="img-fluid"
            style={{ maxWidth: "100px", borderRadius: "8px" }}
          />
        </div>

        {/* MIDDLE */}
        <div className="col-12 col-md-4 text-center">
          <h5 className="mb-3">Stay Tuned</h5>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a className="footer-float delay-1" href="https://www.instagram.com/coderhimanshu/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={35} color="#E1306C" />
            </a>
            <a className="footer-float delay-2" href="https://www.linkedin.com/in/coderhimanshu07/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={35} color="#0A66C2" />
            </a>
            <a className="footer-float delay-3" href="https://x.com/coder_himanshu_" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={35} color="white" />
            </a>
            <a className="footer-float delay-4" href="https://youtube.com/@coderavan07" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={35} color="red" />
            </a>
            <a className="footer-float delay-5" href="https://github.com/Coderhimanshu07" target="_blank" rel="noopener noreferrer">
              <FaGithub size={35} color="white" />
            </a>
          </div>
          <p className="mt-3 mb-0 small">
            Copyright &copy; 2025 All Rights Reserved
          </p>
        </div>

        {/* RIGHT */}
        <div className="col-12 col-md-4 text-center text-md-end">
          <span className="fs-5 d-inline-flex align-items-center">
            Made With
            <FaReact size={35} color="#61DBFB" className="mx-2 react-spin" />
          </span>
          <br />
          <span className="small">- Coder Himanshu</span>
        </div>

      </div>
    </div>
  );
};

export default Footer;
