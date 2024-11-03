import './Footer.css'
import instagram from "../../assets/Instagram Icon.png";
import facebook from "../../assets/Facebook Icon.png";
import twitter from "../../assets/Twitter Icon.png";
import linkedin from "../../assets/linkedin.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <ul>
          <li>
            <a
              href="https://www.instagram.com/ghub1414/?igsh=YzljYTk1ODg3Zg%3D%3D#"
              target="_blank"
            >
              <img src={instagram} alt="" className="social-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61567027430131"
              target="_blank"
            >
              <img src={facebook} alt="" className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://x.com/ghubtechnology" target="_blank">
              <img src={twitter} alt="" className="social-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/ghub-technology"
              target="_blank"
            >
              <img src={linkedin} alt="" className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
      <p>© 2024 G-HUB Technologies. All rights reserved.</p>
    </div>
  );
}

export default Footer