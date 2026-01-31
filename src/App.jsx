import React from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './components/Services';
import TechnicalSkills from './components/Technical_skills';
import Projects from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';



// DEfininf the routing there
import { Routes, Route } from "react-router-dom";
import Home_p from "./pages/Home_p";
import Services_p from "./pages/Services_p";
import Technical_p from './pages/Technical_p';
import Project_p from './pages/Project_p';
import Experience_p from './pages/Experience_p';
import Contact_p from './pages/Contact_p';




function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home_p />} />
                <Route path="/services" element={<Services_p />} />
                <Route path="/technical_skills" element={<Technical_p />} />
                <Route path="/project" element={<Project_p />} />
                <Route path="/experience" element={<Experience_p />} />
                <Route path="/contact" element={<Contact_p />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;