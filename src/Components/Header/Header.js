import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <div className="main-header">
        <div id="topbar" className="d-flex align-items-center fixed-top">
          <div className="container d-flex justify-content-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
              <i className="bi bi-phone" /> +91 9988776655
            </div>
            <div className="d-none d-lg-flex social-links align-items-center">
              <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
              <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
              <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
            </div>
          </div>
        </div>
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <div className="logo">
              <a href="index.html">
                <h1 className="logo me-auto">City</h1><br />
                <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
              </a>
            </div>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <NavLink className="nav-link scrollto active" to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink className="nav-link scrollto" to={"/department"}>Department</NavLink>
                </li>
                <li>
                  <NavLink className="nav-link scrollto" to={"/doctor"}>Doctor</NavLink>
                </li>
                <li>
                  <NavLink className="nav-link scrollto " to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink className="nav-link scrollto" to={"/contact"}>Contact</NavLink>
                </li>
                <li>
                  <NavLink className="nav-link scrollto" to={"/medicines"}>Medicines</NavLink>
                </li>
                <li>
                  <NavLink className="nav-link scrollto" to={"/refexample"}>RefExample</NavLink>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
            <NavLink className="appointment-btn scrollto" to={"/bookappointment"}>Appointent</NavLink>
            <a href="#" className="appointment-btn scrollto">
              <NavLink className="d-none d-md-inline" to={"/Login"}>Login/ Signup</NavLink>
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;