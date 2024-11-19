import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import VisionAndValues from "./Components/VisionAndValues/VisionAndValues";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const MainLayout = ({ setPlayState, playState }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <About setPlayState={setPlayState} />
        <Title
          subTitle="Our Vision and Values"
          title="Guided by Principles, Driven by Innovation"
        />
        <VisionAndValues />
        <Title subTitle="Our Services" title="What We Offer" />
        <Services />
        <Title subTitle="TESTIMONIALS" title="What Our Clients Say" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Want to Start Project ?" />
        <Contact />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      <Footer />
    </>
  );
};

export default MainLayout;
