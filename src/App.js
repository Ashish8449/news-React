import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={<News key="general" pageSize={50} news={"General"} />}
            />
            <Route
              path="/about"
              element={<News pageSize={5} key="about" news={"About"} />}
            />
            <Route
              path="/General"
              element={<News pageSize={5} key="general" news={"General"} />}
            />
            <Route
              path="/Health"
              element={<News pageSize={5} key="health" news={"Health"} />}
            />
            <Route
              path="/Science"
              element={<News pageSize={5} key="Scince" news={"Science"} />}
            />
            <Route
              path="/Sports"
              element={<News pageSize={5} key="Sports" news={"Sports"} />}
            />
            <Route
              path="/Technology"
              element={
                <News pageSize={5} key="Technology" news={"Technology"} />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
