import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link
import "../styles/NavBar.css";

function Navbar() {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false); // State to track navbar visibility

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <header>
      <h3>PORTFOLIO</h3>
      <nav ref={navRef}>
        <Link to="/" onClick={showNavbar}>About</Link>
        <Link to="/skills" onClick={showNavbar}>Skills</Link>
        <Link to="/tools" onClick={showNavbar}>Tools</Link>
        <Link to="/projects" onClick={showNavbar}>Projects</Link>
        <Link to="/experience" onClick={showNavbar}>Experience</Link>
        <Link to="/contacts" onClick={showNavbar}>Contacts</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar} style={{ display: isOpen ? 'block' : 'none' }}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar} style={{ display: isOpen ? 'none' : 'block' }}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
