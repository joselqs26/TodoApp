import React from "react";

import "../styles/index.css";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img
        className="Navbar-logo"
        alt="Logo de Todo App"
      />
      <ul className='Navbar-links-container' >
        <li className="Navbar-link text"><a href='#'>Creador</a></li>
        <li className="Navbar-link text"><a href='#Hero'>Sobre la App</a></li>
        <li className="Navbar-link text"><a href='#root'>Todo App</a></li>
      </ul>
    </div>
  );
};

export { Navbar };
