import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthActions } from "./store/Store";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser) {
      dispatch(
        AuthActions.loginUser({
          username: localUser,
        })
      );
    }
  }, []);

  return (
    <div className="App d-flex">
      <Routes>
        <Route path="/" element={user ? <Home /> : <SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
