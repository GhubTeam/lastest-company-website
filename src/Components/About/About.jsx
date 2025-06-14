
import './About.css'
import play_icon from '../../assets/play-icon.png'
import aboutImg from "../../assets/office wall.jpg"

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={aboutImg} alt="" className = "about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h2>ABOUT <span className = "orange-text">GHUB</span> </h2>
        <h3>Empowering Innovation, Building Tomorrow.</h3>
        <p>
          To be a global leader in delivering innovative and transformative tech
          solutions that empower businesses and communities. We aim to
          revolutionize the digital landscape through creative and efficient
          technology, driving growth and ensuring the success of every business
          we work with.
        </p>
        <p>
          Our goal is to create a world where businesses thrive through
          seamless, advanced technology and groundbreaking design, fostering
          global digital transformation and becoming the go-to tech
          partner for all.
        </p>
      </div>
    </div>
  );
}

export default About
