import { Link } from 'react-scroll';
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Transforming Ideas into Digital Solutions</h1>
        <p>
          We excel in crafting visually stunning websites, innovative mobile
          applications, and custom-tailored technology solutions that empower
          businesses of all sizes to thrive in the digital age.
        </p>
        <button className="btn">
          <Link to="service" smooth={true} offset={-260} duration={500}>
            Explore more <img src={dark_arrow} alt="" />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Hero
