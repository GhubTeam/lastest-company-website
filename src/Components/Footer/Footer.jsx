import './Footer.css'
import instagram from "../../assets/Instagram Icon.png";
import facebook from "../../assets/Facebook Icon.png";
import twitter from "../../assets/Twitter Icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2024 G-HUB Technologies. All rights reserved.</p>
      <div className="social-icon">
        <ul>
          <li>
            <a href="" target="_blank">
              <img src={instagram} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61567027430131"
              target="_blank"
            >
              <img src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <img src={twitter} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer