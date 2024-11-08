import  { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Team from './Components/Team/Team'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className="container">
        <About setPlayState={setPlayState} />
        <Title subTitle="Our Services" title="What We Offer" />
        <Services />

        <Title subTitle="Our Team" title="The Team Behind the Innovation" />
        <Team />
        <Title subTitle="TESTIMONIALS" title="What Our Clients Say" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App