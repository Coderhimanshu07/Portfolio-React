import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from "../assets/logo.png";
import { FaReact } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

  useEffect(() => {
    const footer = document.querySelector(".footer-area");
    const glow = document.querySelector(".footer-cursor-glow");

    if (!footer || !glow) return;

    let lastX = 0;

    const moveGlow = (e) => {
      const rect = footer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const deltaX = x - lastX;

      // Stretch based on direction
      const stretch = Math.min(Math.abs(deltaX) * 2, 80);

      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.width = `${160 + stretch}px`;
      glow.style.opacity = "1";

      // Directional trail
      glow.style.transform = `
        translate(-50%, -50%)
        skewX(${deltaX > 0 ? -10 : 10}deg)
      `;

      lastX = x;
    };

    const hideGlow = () => {
      glow.style.opacity = "0";
      glow.style.width = "160px";
    };

    footer.addEventListener("mousemove", moveGlow);
    footer.addEventListener("mouseleave", hideGlow);

    return () => {
      footer.removeEventListener("mousemove", moveGlow);
      footer.removeEventListener("mouseleave", hideGlow);
    };
  }, []);

  return (
    <div className="container-fluid bg-dark text-white p-4 footer-area">

      {/* Neon trail glow */}
      <div className="footer-cursor-glow"></div>

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
            Copyright © 2025 All Rights Reserved
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
