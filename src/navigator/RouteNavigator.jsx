import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import App from "../App";

const RouteNavigator = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<App />}
      />
      <Route
        path="/about"
        element={<About />}
      />
    </Routes>
  );
};

export default RouteNavigator;
