import { Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Service from "./pages/Service";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ServiceDetails from "./components/ServiceDetails";
import CaseStudy from "./pages/CaseStudy";
import CaseStudyDetails from "./components/CaseStudyDetails";
import Blogs from "./pages/Blogs";
import BlogDetails from "./components/BlogDetails";
import Portfolio from "./pages/Portfolio";
import TermCondition from "./pages/TermCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import useGA4 from "./utils/useGA4";
import MedicalProfession from "./components/MedicalProfession";

function App() {
    useGA4

    // Smooth scrolling with Lenis
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="career" element={<Career />} />
                <Route path="contact" element={<Contact />} />
                <Route path="services" element={<Service />} />
                <Route path="services/:slug" element={<ServiceDetails />} /> 
                <Route path="case-study" element={<CaseStudy />} />
                <Route path="case-study/:slug" element={<CaseStudyDetails />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="blogs/:slug" element={<BlogDetails />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="term-&-conditions" element={<TermCondition />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="medicalprofession" element={<MedicalProfession />} />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Route>
        </Routes>
    );
}

export default App