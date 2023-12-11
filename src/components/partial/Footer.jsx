import "../../Footer.css";
import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div className="Footer">
      <footer className="bg-body-tertiary text-center text-lg-start">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:{" "}
          <a className="text-body" href="https://mdbootstrap.com/">
            Stock Tracker
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
