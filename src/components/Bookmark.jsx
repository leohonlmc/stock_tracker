import "../App.css";
import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Bookmark(props) {
  // console.log(props.stocks);

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
          {props.stocks.map((dataItem, index) => {
            const timeSeries = dataItem["Time Series (5min)"];
            const sortedTimestamps = Object.keys(timeSeries).sort();
            const earliestTimestamp = sortedTimestamps[0];
            const latestTimestamp =
              sortedTimestamps[sortedTimestamps.length - 1];

            const earliestData = timeSeries[earliestTimestamp];
            const latestData = timeSeries[latestTimestamp];

            const openPrice = parseFloat(earliestData["1. open"]);
            const closePrice = parseFloat(latestData["4. close"]);

            const change = closePrice - openPrice;
            const percentChange = (change / openPrice) * 100;

            return (
              <tr key={index}>
                <td className="ticker">{dataItem["Meta Data"]["2. Symbol"]}</td>
                <td className="latest">{closePrice.toFixed(2)}</td>
                <td className="change">{change.toFixed(2)}</td>
                <td className="percent">{percentChange.toFixed(2)}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Bookmark;
