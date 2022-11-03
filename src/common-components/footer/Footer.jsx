import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer-content">
          <h3>evoFrontend</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo iste
            corrupti doloribus odio sed!
          </p>
        </div>
        <div class="footer-bottom">
          <p>Copyright &copy; {new Date().getFullYear()} evoFrontend team.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
