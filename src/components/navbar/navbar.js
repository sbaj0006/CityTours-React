import React from "react";
import src from "../../logo.svg";
import "./navbar.scss";

export default function navbar() {
  return (
    <nav className="navbar">
      <img src={src} alt="City tours" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
