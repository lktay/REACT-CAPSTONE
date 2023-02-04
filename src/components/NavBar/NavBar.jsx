import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();

  const goTo = (id) => {
    if (id === "search") {
      navigate("/");
    } else {
      navigate("/about");
    }
  };

  return (
    <div className="NavBar">
      <div
        id="search"
        onClick={(e) => goTo(e.target.id)}
      >
        Search
      </div>
      <div
        id="about"
        onClick={(e) => goTo(e.target.id)}
      >
        About
      </div>
    </div>
  );
};
export default NavBar;
