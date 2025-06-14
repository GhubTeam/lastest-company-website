import { Link } from "react-scroll";
import "./Hero.css";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Code That Converts. Design That Delivers.</h1>
        <p>
          We architect scalable web platforms, intelligent mobile solutions, and
          cutting-edge software that drives measurable business growth. From
          concept to deployment, we turn your vision into powerful digital
          reality.
        </p>
        <button className="btn">
          <Link to="service" smooth={true} offset={-260} duration={500}>
            Explore more <BsArrowRightCircleFill />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
