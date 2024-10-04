import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'; // Import icons
import '../styles/Contacts.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-name">𝐏𝐫𝐚𝐝𝐞𝐞𝐩 𝐌</div>
        <div className="footer-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      {/* <marquee behavior="scroll" direction="up">This text will scroll from bottom to top</marquee> */}
    </footer>
  );
}

export default Footer;
