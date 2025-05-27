import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const HamburgerIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke="#FFD700"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <nav
      className={`navbar-container ${sticky ? "navbar--sticky" : ""}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <img src={logo} alt="Company Logo" className="navbar__logo" />
      <ul
        className={`navbar__menu ${
          mobileMenu ? "navbar__menu--mobile" : "navbar__menu--hidden"
        }`}
        onClick={(e) => {
          if (
            e.target.classList?.contains?.("navbar__menu") ||
            e.target.textContent === "×"
          ) {
            setMobileMenu(false);
          }
        }}
      >
        <li>
          <Link
            to="hero"
            smooth
            offset={0}
            duration={500}
            onClick={() => setMobileMenu(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth
            offset={-150}
            duration={500}
            onClick={() => setMobileMenu(false)}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="vision-values"
            smooth
            offset={-260}
            duration={500}
            onClick={() => setMobileMenu(false)}
          >
            Core Values
          </Link>
        </li>
        <li>
          <Link
            to="service"
            smooth
            offset={-260}
            duration={500}
            onClick={() => setMobileMenu(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="Testimonials"
            smooth
            offset={-260}
            duration={500}
            onClick={() => setMobileMenu(false)}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth
            offset={-260}
            duration={500}
            className={`navbar__contact-btn ${
              sticky ? "navbar__contact-btn--sticky" : ""
            }`}
            onClick={() => setMobileMenu(false)}
          >
            Contact us
          </Link>
        </li>
      </ul>

      <button
        className="navbar__menu-icon"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <HamburgerIcon />
      </button>
      <div
        className={`navbar__overlay ${
          mobileMenu ? "navbar__overlay--visible" : ""
        }`}
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
