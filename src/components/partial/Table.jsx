import "../../App.css";
import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Loading(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Current</th>
            <th>High</th>
            <th>Low</th>
            <th>Bookmark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="ticker">{props.ticker}</td>
            <td className="latest">{props.latestPrice}</td>
            <td className="high">{props.highestPrice}</td>
            <td className="low">{props.lowestPrice}</td>
            <td className="bookmark">
              {props.disable == "true" ? (
                <button className="btn btn-light" disabled="true">
                  Add
                </button>
              ) : (
                <button className="btn btn-success">Add</button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Loading;
