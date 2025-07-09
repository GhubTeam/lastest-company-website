import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import VisionAndValues from "./Components/VisionAndValues/VisionAndValues";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import AnimatedSection from "./Components/Animation/AnimationSection";

const MainLayout = ({ setPlayState, playState }) => {
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
          <AnimatedSection key={index}>{Component}</AnimatedSection>
        ))}
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      <Footer />
    </>
  );
};

export default MainLayout;
