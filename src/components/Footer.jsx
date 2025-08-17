import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav>
        <ul className="grid grid-flow-col gap-4">
          <li><NavLink to="/" className="link link-hover">Home</NavLink></li>
          <li><NavLink to="/projects" className="link link-hover">Projects</NavLink></li>
          <li><NavLink to="/skills" className="link link-hover">Skills</NavLink></li>
          <li><NavLink to="/contact" className="link link-hover">Socials</NavLink></li>
          <li><NavLink to="/about" className="link link-hover">About</NavLink></li>
        </ul>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/shuvodipdashimuu">
            <FaFacebook size={32} />
          </a>
          <a href="https://wa.me/8801614043396">
            <FaWhatsapp size={32} />
          </a>
          <a href="https://www.instagram.com/shuvodipdashimuu">
            <FaInstagram size={32} />
          </a>
        </div>
      </nav>

      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by Shuvodip Das Himu
        </p>
      </aside>
    </footer>
  );
};

export default Footer;