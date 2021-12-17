import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="row footer">
      <div className="col">
        <span className="text-muted">PEEKaMEET@2020</span>
      </div>
      <div className="col d-flex align-items-center icons">
        <span className="text-muted">Follow Us:</span>
        <i className="fab fa-instagram fa-2x"></i>
        <i className="fab fa-youtube fa-2x"></i>
        <i className="fab fa-facebook-square fa-2x"></i>
        <i className="fab fa-twitter fa-2x"></i>
      </div>
      <div className="col-6">
        <ul className="footer-list text-muted">
          <li>FAQs</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>About Us</li>
          <li>Press</li>
          <li>Contact Us</li>
          <li>Perks</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
