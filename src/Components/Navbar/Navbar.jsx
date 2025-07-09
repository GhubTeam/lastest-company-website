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

  return (
    <nav className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="navbar__content container">
        <Link
          to="hero"
          smooth={true}
          offset={0}
          duration={500}
          className="navbar__logo"
        >
          <img src={logo} alt="Company Logo" />
        </Link>

        <ul className={`navbar__links ${mobileMenu ? "open" : ""}`}>
          {[
            { to: "hero", label: "Home" },
            { to: "about", label: "About us", offset: -150 },
            { to: "vision-values", label: "Core Values", offset: -260 },
            { to: "service", label: "Services", offset: -260 },
            { to: "Testimonials", label: "Testimonials", offset: -260 },
            {
              to: "contact",
              label: "Contact us",
              offset: -260,
              contactBtn: true,
            },
          ].map(({ to, label, offset = 0, contactBtn }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                offset={offset}
                duration={500}
                className={contactBtn ? "btn-contact" : ""}
                onClick={() => setMobileMenu(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__toggle ${mobileMenu ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {mobileMenu ? (
            <span className="close-icon">✕</span>
          ) : (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          )}
        </button>
      </div>

      {mobileMenu && (
        <div className="navbar__backdrop" onClick={toggleMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;
