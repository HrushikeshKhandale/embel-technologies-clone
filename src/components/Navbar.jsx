import React from "react";
import "../App.css";
import logo from "./images/logo-embel.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white" >
      <div className="container-fluid">
        <Link className="navbar-brand mx-5" to="/">
          <img src={logo} style={{ height: "3.1rem" }} alt="embel technology logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/career">
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/partner-with-us">
                Partner with Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">
                FAQ
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="navContact">
            <li className="nav-item d-flex align-items-center">
              <a
                href="tel:+918668757349"
                className="position-relative animated tada infinite"
                aria-label="Call us"
                style={{ marginRight: "1rem" }}
              >
                <i className="fas fa-phone fa-rotate-30 text-blue fa-2x"></i>
                <div className="position-absolute" style={{ top: "-7px", left: "20px" }}>
                  <span>
                    <i className="fas fa-comment-dots text-orange"></i>
                  </span>
                </div>
              </a>
            </li>
            <div className="border-end"></div>
            <li className="nav-item d-flex align-items-center">
              <a
                href="https://wa.me/8888741044?text="
                className="position-relative animated tada infinite"
                aria-label="WhatsApp us"
              >
                <i className="fab fa-whatsapp text-success fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
