import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import * as bootstrap from 'bootstrap';

import logo from "../assets/logo.png";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { Link } from 'react-router-dom';

function Navbar() {

    useEffect(() => {
        const navLinks = document.querySelectorAll(".offcanvas a.nav-link");
        const offcanvasEl = document.getElementById("mobileMenu");

        navLinks.forEach(link => {
            link.addEventListener("click", function () {
                const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
                bsOffcanvas?.hide();
            });
        });
    }, []);

    return (
        <>
            {/* NAVBAR */}
            <motion.nav
                className="navbar navbar-expand-lg bg-dark navbar-dark py-1 sticky-top"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container-fluid">

                    {/* LOGO */}
                    <motion.a
                        className="navbar-brand"
                        href="#"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <img src={logo} alt="logo" width={70} />
                    </motion.a>

                    {/* HAMBURGER */}
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#mobileMenu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* DESKTOP NAV LINKS */}
                    <ul className="navbar-nav gap-4 d-none d-lg-flex mx-auto">
                        {[
                            { name: "About", to: "/" },
                            { name: "Services", to: "/services" },
                            { name: "Technical Skills", to: "/technical_skills" },
                            { name: "Projects", to: "/project" },
                            { name: "Experience", to: "/experience" },
                            { name: "Contact", to: "/contact" },
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                className="nav-item"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + i * 0.08 }}
                            >
                                <Link className="nav-link nav-anim" to={item.to}>
                                    {item.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>

                    {/* CALL BUTTON */}
                    <motion.a
                        href="tel:+91 72919 33500"
                        className="btn btn-outline-light px-4 py-2 fw-semibold rounded-pill call-btn d-none d-lg-inline-block"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        📞 Call Me
                    </motion.a>

                    {/* OFFCANVAS (NO ANIMATION TOUCH) */}
                    <div
                        className="offcanvas offcanvas-end custom-offcanvas d-lg-none"
                        id="mobileMenu"
                        data-bs-backdrop="false"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-white">Menu</h5>
                            <button className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav gap-4">
                                <li className="nav-item"><Link className="nav-link" to="/">About</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/Services">Services</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/Technical_skills">Technical Skills</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/project">Projects</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/Experience">Experience</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </motion.nav>
        </>
    );
}

export default Navbar;
