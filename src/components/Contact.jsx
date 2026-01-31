import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {

  // WhatsApp submit handler (UNCHANGED)
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const whatsappMessage = `Hello, I am ${name}. My email is ${email}. Message: ${message}`;
    const phoneNumber = "917291933500";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="Contact">
      <div className="container-fluid bg-black text-white py-5 position-relative">

        {/* BACKGROUND TEXT */}
        <motion.h1
          className="position-absolute"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            top: "20px",
            left: "20px",
            fontSize: "15vw",
            fontWeight: "900",
            color: "rgba(255,255,255,0.06)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          CONTACT
        </motion.h1>

        {/* CONTENT */}
        <div className="container position-relative" style={{ zIndex: 2 }}>

          {/* TITLE */}
          <motion.h2
            className="text-warning fw-bold mb-5"
            style={{ fontSize: "3rem" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            GET IN TOUCH
          </motion.h2>

          <div className="row g-5">

            {/* LEFT SIDE */}
            <motion.div
              className="col-12 col-md-5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="fw-bold">DON'T BE SHY</h3>
              <p className="mb-4">
                Feel free to get in touch with me. I am always open to discussing
                new projects, creative ideas or opportunities to be part of your visions.
              </p>

              <div className="d-flex align-items-center mb-4">
                <FaEnvelope size={40} className="text-warning me-3" />
                <div>
                  <p className="fw-bold m-0">Mail me</p>
                  <a
                    href="mailto:coderhimanshu07@gmail.com"
                    className="m-0 text-light text-decoration-none"
                  >
                    coderhimanshu07@gmail.com
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <FaPhone size={40} className="text-warning me-3" />
                <div>
                  <p className="fw-bold m-0">Call me</p>
                  <a
                    href="tel:+917291933500"
                    className="m-0 text-light text-decoration-none"
                  >
                    +91 72919 33500
                  </a>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE FORM */}
            <motion.div
              className="col-12 col-md-7"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleWhatsAppSubmit}>

                <label>Name <span className="text-danger">*</span></label>
                <input
                  type="text"
                  name="name"
                  className="form-control bg-transparent text-white border-white mb-3"
                  placeholder="Enter your Name"
                  required
                />

                <label>Email <span className="text-danger">*</span></label>
                <input
                  type="email"
                  name="email"
                  className="form-control bg-transparent text-white border-white mb-3"
                  placeholder="Enter a valid email address"
                  required
                />

                <label>Message <span className="text-danger">*</span></label>
                <textarea
                  name="message"
                  className="form-control bg-transparent text-white border-white mb-3"
                  placeholder="Enter your message"
                  rows="5"
                  required
                ></textarea>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="termsCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="termsCheck">
                    I accept the Terms of Service
                  </label>
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-warning fw-bold px-4 py-2 rounded-pill"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SUBMIT
                </motion.button>

              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
