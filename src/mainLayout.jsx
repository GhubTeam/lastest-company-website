import { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import VisionAndValues from "./Components/VisionAndValues/VisionAndValues";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const MainLayout = ({ setPlayState, playState }) => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("zoom-out");
          } else {
            entry.target.classList.remove("zoom-out");
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionsRef.current = sectionsRef.current.filter(Boolean);
    sectionsRef.current.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const components = [
    <About setPlayState={setPlayState} />,
    <VisionAndValues />,
    <Services />,
    <Testimonials />,
    <Contact />,
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        {components.map((Component, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="zoom-section"
          >
            {Component}
          </div>
        ))}
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      <Footer />
    </>
  );
};

export default MainLayout;
