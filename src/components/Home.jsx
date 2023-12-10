import "../App.css";
import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./partial/Header";
import Footer from "./partial/Footer";
import News from "./News";
import Table from "./partial/Table";
import Loading from "./partial/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const { REACT_APP_API_KEY } = process.env;

function Home() {
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ticker, setTicker] = useState([]);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(REACT_APP_API_KEY);

    ws.current.onopen = () => {
      console.log("WebSocket connected");
    };

    //receive message from server
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
      //send message to server
      ws.current.send(JSON.stringify({ action: "getStock", ticker: ticker }));
    }
  };

  return (
    <div className="Home">
      <Header />

      <br />

      <div className="inner-home-div">
        <div className="d-flex justify-content-center">
          <div className="input-group w-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Search ticker symbol"
              aria-label="Example input"
              aria-describedby="button-addon1"
              onChange={handleTickerChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchTicker();
                }
              }}
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
          <Loading />
        ) : (
          <div>
            {stock.length === 0 ? (
              <div className="banner">
                <h2 className="banner-text">
                  Stock Tracker offers you real-time stock data update.
                </h2>
              </div>
            ) : (
              <Table
                ticker={stock.ticker}
                latestPrice={stock.latestPrice}
                highestPrice={stock.highestPrice}
                lowestPrice={stock.lowestPrice}
                disable="false"
              />
            )}
          </div>
        )}

        <br />
        <News />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
