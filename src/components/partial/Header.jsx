import "../../Header.css";
import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Stock Tracker
        </a>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
