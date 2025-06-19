import { FaFlag, FaBinoculars, FaGem } from "react-icons/fa";
import "./VisionAndValues.css";

const VisionAndValues = () => {
  return (
    <section className="vision-values">
      <h2 className="vision-description">
        At <span className="orange-text bigger-text">Ghub Technology</span>, we
        are driven by our vision to transform businesses through technology,
        guided by core values that define who we are.
      </h2>

      <div className="values-container">
        <div className="value-card mission">
          <div className="icon-wrapper">
            <FaFlag className="icon" />
          </div>
          <h3 className="value-title">Mission</h3>
          <p className="value-description">
            Our mission is to empower businesses with cutting-edge technology,
            fostering growth and delivering measurable results through
            innovative solutions.
          </p>
        </div>

        <div className="value-card vision">
          <div className="icon-wrapper">
            <FaBinoculars className="icon" />
          </div>
          <h3 className="value-title">Vision</h3>
          <p className="value-description">
            To be the leading force in digital transformation, making technology
            accessible and impactful for every business we serve.
          </p>
        </div>

        <div className="value-card values">
          <div className="icon-wrapper">
            <FaGem className="icon" />
          </div>
          <h3 className="value-title">Values</h3>
          <ul className="value-list">
            <li>Innovation – Staying ahead of the curve</li>
            <li>Integrity – Acting with honesty</li>
            <li>Excellence – Delivering top-tier results</li>
            <li>Collaboration – Partnering for success</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionAndValues;
