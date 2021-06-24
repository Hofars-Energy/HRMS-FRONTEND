import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Inspiring Transformation with Technology
        </p>
        <p className="footer-subscription-text">
          Here are some useful links below:
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about">x</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Hofars <i class="fas fa-lightbulb ic"> </i>
            </Link>
          </div>
          <small className="website-rights">Hofars © 2021</small>
          <div className="social-icons">
            <a href="" className="social-icon-link facebook" target="_blank">
              {" "}
              <i className="fab fa-facebook-f" />
            </a>

            <a href="" className="social-icon-link instagram" target="_blank">
              {" "}
              <i className="fab fa-instagram" />
            </a>

            <a href="" className="social-icon-link youtube" target="_blank">
              {" "}
              <i className="fab fa-youtube" />
            </a>

            <a href="" className="social-icon-link github" target="_blank">
              {" "}
              <i className="fab fa-github" />
            </a>

            <a href="" className="social-icon-link linkedin" target="_blank">
              {" "}
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
