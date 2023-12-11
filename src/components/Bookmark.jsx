import "../App.css";
import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Bookmark(props) {
  console.log(props.stocks);

  return (
    <div className="Bookmark">
      <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Last Price</th>
            <th>Change</th>
            <th>% Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="ticker">No data</td>
            <td className="latest">No data</td>
            <td className="change">No data</td>
            <td className="percent">No data</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Bookmark;
