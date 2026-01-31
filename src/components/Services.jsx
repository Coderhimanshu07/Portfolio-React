import { motion } from "framer-motion";

// importing icons (replace these with your images)
import SEO3 from "../assets/SEO3.png";
import UX from "../assets/UX.png";
import Bussiness from "../assets/Bussiness.png";
import web_app from "../assets/web_app.png";
import website from "../assets/website.png";
import Wordpress from "../assets/Wordpress.png";

function Services() {
    return (
        <section id="Services" className="services-section">
            <div className="container">

                {/* SECTION HEADING */}
                <motion.h2
                    className="Headings text-warning"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    SERVICES
                </motion.h2>

                <div className="row justify-content-center">

                    {/* CARD 1 */}
                    <motion.div
                        className="col-12 col-sm-6 col-md-3 d-flex justify-content-center card_update"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="service-item">
                            <img src={SEO3} className="img-fluid" alt="SEO Service" />
                            <div className="service-content">
                                <h3>SEO Optimisation</h3>
                                <p>Your website visibility matters. We help you reach the top of search results.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 2 */}
                    <motion.div
                        className="col-12 col-sm-6 col-md-3 d-flex justify-content-center card_update"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="service-item">
                            <img src={UX} className="img-fluid" alt="UI/UX Design" />
                            <div className="service-content">
                                <h3>UI/UX Design</h3>
                                <p>We create clean, functional and beautiful user experiences for your website.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 3 */}
                    <motion.div
                        className="col-12 col-sm-6 col-md-3 d-flex justify-content-center card_update"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="service-item">
                            <img src={Bussiness} className="img-fluid" alt="Business Strategy" />
                            <div className="service-content">
                                <h3>Business Strategy</h3>
                                <p>We build smart strategies to help your business grow and succeed long-term.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 4 */}
                    <motion.div
                        className="col-12 col-sm-6 col-md-3 d-flex justify-content-center card_update"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="service-item">
                            <img src={website} className="img-fluid" alt="Website Development" />
                            <div className="service-content">
                                <h3>Website Development</h3>
                                <p>Your Vision, Our Code — Let’s Build Something Great.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 5 */}
                    <motion.div
                        className="col-12 col-sm-6 col-md-3 d-flex justify-content-center card_update"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="service-item">
                            <img src={web_app} className="img-fluid" alt="Web App Development" />
                            <div className="service-content">
                                <h3>Web App Development</h3>
                                <p>Transforming Ideas into High-Performance Web Applications.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 6 */}
                    <motion.div
                        className="col-12 col-sm-6 col-md-3 d-flex justify-content-center card_update"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="service-item">
                            <img src={Wordpress} className="img-fluid" alt="Wordpress Design" />
                            <div className="service-content">
                                <h3>Wordpress Design</h3>
                                <p>Powerful, Flexible & Easy-to-Manage WordPress Solutions.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default Services;
