import "../../App.css";
import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Banner() {
  return (
    <div className="banner">
      <h2 className="banner-text">
        Stock Tracker offers you real-time stock data update.
      </h2>
    </div>
  );
}

export default Banner;
