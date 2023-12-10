import "../../App.css";
import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Loading() {
  return (
    <div className="spinner-div">
      Loading stock data{" "}
      <FontAwesomeIcon className="spinner" icon={faSpinner} size="xl" spin />
    </div>
  );
}

export default Loading;
