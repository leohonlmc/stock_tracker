import "../News.css";
import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Bookmark from "./Bookmark";

function News(props) {
  return (
    <div className="News">
      <div className="row">
        <div className="col-9 d-flex">
          <div className="new-1">
            <a href="https://ca.finance.yahoo.com/news/higher-prices-and-empty-shelves-loblaw-walmart-canada-raise-concerns-grocery-code-of-conduct-174936660.html">
              <img
                src="https://s.yimg.com/uu/api/res/1.2/PiULkNRuAE9YItIrnz6FaA--~B/Zmk9c3RyaW07aD0zMjA7dz01NzA7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/ce92a9a0-9529-11ee-a1ee-0e360db3c371.cf.webp"
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
              <div className="title">
                <h3>
                  Grocery code of conduct: Loblaw, Walmart Canada raise concerns
                </h3>
              </div>
            </a>
          </div>

          <div>
            <ul>
              <a href="https://ca.finance.yahoo.com/news/why-royal-bank-is-still-reticent-about-ramping-up-cleantech-investment-175910270.html">
                <li className="d-flex">
                  <img
                    src="https://s.yimg.com/uu/api/res/1.2/JA3fegWsy2Z.V9KCxbHqlw--~B/Zmk9c3RyaW07aD0xMzA7dz0xMzA7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/73bf3360-92cf-11ee-bf79-3f9f3b6ec2ea.cf.webp"
                    alt=""
                    className="sm-img"
                  />
                  <div className="title-ver">
                    <p>
                      Why RBC is still reluctant to ramp up cleantech investment
                    </p>
                  </div>
                </li>
              </a>

              <br />
              <a href="https://ca.finance.yahoo.com/news/bank-of-canada-holds-benchmark-interest-rate-5-per-cent-economy-weakens-150048141.html">
                <li className="d-flex">
                  <img
                    src="https://s.yimg.com/uu/api/res/1.2/QDRtkT4KzVtb38q28_3yIg--~B/Zmk9c3RyaW07aD0xMzA7dz0xMzA7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/da5c40b0-9444-11ee-bffa-b342649be742.cf.webp"
                    alt=""
                    className="sm-img"
                  />
                  <div className="title-ver">
                    <p>
                      Why RBC is still reluctant to ramp up cleantech investment
                    </p>
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="col-3">
          <Bookmark stocks={props.stocks} />
        </div>
      </div>
    </div>
  );
}

export default News;
