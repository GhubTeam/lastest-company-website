
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Transforming Ideas into Digital Solutions</h1>
        <p>
          We specialize in creating stunning websites, mobile Applications, and
          tailored tech solutions for businesses of all sizes.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Hero
