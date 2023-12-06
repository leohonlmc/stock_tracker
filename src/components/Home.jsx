import "../App.css";
import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./partial/Header";
import Footer from "./partial/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowTrendUp,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const { REACT_APP_API_ENDPOINT } = process.env;

function Home() {
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ticker, setTicker] = useState([]);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8080/ws");

    ws.current.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.current.onmessage = (e) => {
      const message = JSON.parse(e.data);
      if (message.action === "stockData") {
        setLoading(false);
        setStock(message);
      }
    };

    ws.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.current.onclose = () => {
      console.log("WebSocket disconnected");
    };
  }, []);

  const handleTickerChange = (e) => {
    setTicker(e.target.value.toUpperCase());
    console.log(ticker);
  };

  const searchTicker = () => {
    setLoading(true);
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify({ action: "getStock", ticker: ticker }));
    }
  };

  return (
    <div className="Home">
      <h2 className="name">
        Stock Tracker <FontAwesomeIcon icon={faArrowTrendUp} />
      </h2>

      <div className="d-flex justify-content-center">
        <div className="input-group w-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search ticker symbol"
            aria-label="Example input"
            aria-describedby="button-addon1"
            onChange={handleTickerChange}
          />
          <button
            className="btn btn-primary"
            type="button"
            id="button-addon1"
            data-mdb-ripple-color="dark"
            onClick={() => searchTicker()}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
          </button>
        </div>
      </div>
      {loading ? (
        <div className="spinner-div">
          Loading stock data{" "}
          <FontAwesomeIcon
            className="spinner"
            icon={faSpinner}
            size="xl"
            spin
          />
        </div>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Current</th>
                <th>High</th>
                <th>Low</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ticker">{stock.ticker}</td>
                <td className="latest">{stock.latestPrice}</td>
                <td className="high">{stock.highestPrice}</td>
                <td className="low">{stock.lowestPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <br />
      <p>* 25 API requests per day</p>
    </div>
  );
}

export default Home;
