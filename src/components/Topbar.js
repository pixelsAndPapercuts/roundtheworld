import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AuthActions } from "../store/Store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchBar from "./SearchBar";
import "./Topbar.css";

const Topbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(AuthActions.logoutUser());

    navigate("/");
  };

  return (
    <div className="row p-4 w-100 rounded d-none d-sm-flex  align-items-center">
      <div className="col-6">
        <SearchBar />
      </div>
      <div className="col-6 d-flex justify-content-end align-items-center">
        <div className="me-4  user text-nowrap d-flex flex-column">
          <div className="d-none d-md-block">Welcome, {user}</div>
          <button onClick={logoutHandler} className="text-end logout">
            Logout
          </button>
        </div>
        <AccountCircleIcon className="profile" style={{ fontSize: "40px" }} />
      </div>
    </div>
  );
};

export default Topbar;
