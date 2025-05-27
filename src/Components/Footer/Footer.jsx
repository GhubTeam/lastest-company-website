import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} className="logo" alt="G-HUB Technologies Logo"/>
          <p>Your partner in innovation</p>
          <ul>
            <li>
              <img src={mail_icon} alt="Mail Icon" />
              ghub1414@gmail.com
            </li>
            <li>
              <img src={phone_icon} alt="Phone Icon" />
              07494893933
            </li>
            <li>
              <img src={location_icon} alt="Location Icon" />
              71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
              <br /> MA 02139, UNITED KINGDOM
            </li>
          </ul>
        </div>
        <div className="footer-middle">
          <div className="footer-links">
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
                <NavLink to="/faq">FAQ</NavLink>
              </li>
              <li>
                <NavLink to="/career">Careers</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61567027430131"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/ghubtechnology"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/ghub-technology"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ghub1414/?igsh=YzljYTk1ODg3Zg%3D%3D#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} G-HUB Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
