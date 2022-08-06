import React from "react";
import { Link } from "react-router-dom";
import instagramIcon from "../../assets/Instagram.svg";
import facebookIcon from "../../assets/Facebook.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copy">Copyright Coders Lab</div>
      <div className="footer__socials">
        <a href="https://www.facebook.com/">
          <img src={facebookIcon} />
        </a>
        <a href="https://www.instagram.com/">
          <img src={instagramIcon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
