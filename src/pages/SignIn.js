import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import TextField from "../components/TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { AuthActions } from "../store/Store";

import "./SignUp.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = Yup.object({
    username: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6  characters")
      .required("Password is required"),
  });

  const submitHandler = (values) => {
    dispatch(
      AuthActions.loginUser({
        username: values.username,
      })
    );
    navigate("/");
  };

  return (
    <div className="container-fluid background d-flex align-items-center justify-content-center">
      <div className="row d-flex w-75 h-75">
        <div className="h-auto col p-5 d-none d-lg-flex flex-column align-items-center justify-content-between signUpLeft">
          <img src={require("../assets/logoHome.png")} className="  logo" />
          <div className="text-center dummyText">
            This is a representation of how the actual authentication page would
            look like. The app currently uses local storage for authentication
            and is not connected to a user database.
          </div>
          <div>
            <a href="#">
              <FacebookRoundedIcon className="me-4" />
            </a>
            <a href="#">
              <TwitterIcon className="me-4" />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
          </div>
          <div className="d-flex policy">
            <a href="#" className="me-5">
              Privacy Policy
            </a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="col py-5 signUpRight">
          <Formik
            initialValues={{
              username: "Phileas",
              password: "phileasfogg",
            }}
            validationSchema={validate}
            onSubmit={(values) => submitHandler(values)}
          >
            {(formik) => (
              <div className="h-100 p-5 text-start text-white text-nowrap d-flex flex-column justify-content-between">
                <div>
                  <h3 className="mb-5">Sign In</h3>
                  Enter details to sign in
                </div>
                <Form>
                  <TextField label="Username" name="username" type="text" />
                  <TextField label="Password" name="password" type="password" />
                  <div className="d-flex">
                    <button className="btn btn-light mt-3 " type="submit">
                      Sign In
                    </button>
                    <button
                      className="btn d-flex btn-dark mt-3 ms-3 "
                      type="reset"
                    >
                      <RestartAltIcon />
                      <div>Reset</div>
                    </button>
                  </div>
                </Form>
                <div className="mt-5 pt-5 ">
                  New here?
                  <Link to="/signup" className=" mx-1 text-white">
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
