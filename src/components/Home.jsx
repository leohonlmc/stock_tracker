import "../App.css";
import React, { useRef, useEffect, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./partial/Header";
import Footer from "./partial/Footer";
import News from "./News";
import Table from "./partial/Table";
import Banner from "./partial/Banner";
import Loading from "./partial/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const { REACT_APP_API_KEY } = process.env;

function Home() {
  const [stock, setStock] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ticker, setTicker] = useState([]);
  const ws = useRef(null);

  const sendBookmark = useCallback(() => {
    const bookmarkStocks = ["AAPL", "MSFT", "AMZN", "GOOG"];

    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(
        JSON.stringify({ action: "getStocks", stocks: bookmarkStocks })
      );
    }
  }, []);

  useEffect(() => {
    function connectWebSocket() {
      ws.current = new WebSocket(REACT_APP_API_KEY);

      ws.current.onopen = () => {
        console.log("WebSocket connected");
        sendBookmark();
      };

      //receive message from server
      ws.current.onmessage = (e) => {
        const message = JSON.parse(e.data);
        if (message.action === "stockData") {
          setLoading(false);
          setStock(message);
        }

        if (message.action === "stocksData") {
          setStocks(message.data);
        }
      };

      ws.current.onerror = (error) => {
        console.error("WebSocket error:", error);
        setTimeout(connectWebSocket, 3000);
      };

      ws.current.onclose = () => {
        console.log("WebSocket disconnected");
      };
    }

    setTimeout(() => {
      connectWebSocket();
    }, 1000);

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [sendBookmark]);

  const handleTickerChange = (e) => {
    setTicker(e.target.value.toUpperCase());
  };

  const searchTicker = () => {
    setLoading(true);
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
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
              <Banner />
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
        <News stocks={stocks} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
