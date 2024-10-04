import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa"; // Import icons
import "../styles/Contacts.css";

function Contacts() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-name">Pradeep M</div>
        <div className="footer-proverb">
          <span style={{ color: "white" }}> In the Journey of</span>
          <span style={{ color: "orange", fontSize: '25px' }}> Building Minds </span>{" "}
          <span style={{ color: "white" }}> Young </span>
        </div>
        <div className="footer-icons">
          <a
            href="https://www.instagram.com/p_r_a_d_e_e_p_mani/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/pradeep-m-41b28025a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Pradeep-848"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/918489681088"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
      {/* <marquee behavior="scroll" direction="up">This text will scroll from bottom to top</marquee> */}
    </footer>
  );
}

export default Contacts;
