import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { CustomNavbar } from "@/components/ui/Navbar";
import React from "react";

const HomePage = () => {
    return (
        <div className=" overflow-x-clip">
            <CustomNavbar /> 
            <Hero />
            <About />
            <Skills />
            <Projects />
            {/* feedback or achievements */}
            <Testimonials /> 
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
};

export default HomePage;
