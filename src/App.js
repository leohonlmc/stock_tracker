import React, { useRef } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />{" "}
      </Routes>
    </Router>
  );
}
