import { Link } from "react-scroll";
import "./Footer.css";
import instagram from "../../assets/Instagram Icon.png";
import facebook from "../../assets/Facebook Icon.png";
import twitter from "../../assets/Twitter Icon.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section quick-links">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to="about" smooth={true} offset={-150} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="service" smooth={true} offset={-260} duration={500}>
              Services
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="faq" smooth={true} offset={-260} duration={500}>
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-section social-icons">
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/ghub1414/?igsh=YzljYTk1ODg3Zg%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61567027430131"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/ghubtechnology"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/ghub-technology"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} G-HUB Technologies. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
