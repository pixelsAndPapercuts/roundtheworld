import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import SearchBar from "./SearchBar";
import Continents from "./Continents";

import { AuthActions } from "../store/Store";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(AuthActions.logoutUser());
    navigate("/");
  };

  return (
    <div
      className={`col col-sm-4 col-lg-2 pe-2 pe-sm-0 text-white d-flex flex-sm-column align-items-center justify-content-between  sidebar`}
    >
      <img
        src={require("../assets/logo.png")}
        alt=""
        className=" d-inline-block align-text-top logo"
      />
      <Continents />
      <div className="ms-2">
        <SearchBar display="d-sm-none" />
      </div>
      <button onClick={logoutHandler} className="d-sm-none text-end logoutSm">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
