import { useState } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          KSP
        </a>

        {/* Desktop Navigation */}
        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#certificates" onClick={closeMenu}>
            Certificates
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>


        </div>


        {/* Mobile Menu Button */}

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;