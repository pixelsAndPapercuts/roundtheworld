import React from "react";

import Card from "@mui/material/Card";
import ErrorIcon from "@mui/icons-material/Error";

import "./Error.css";

const Error = ({ error }) => {
  let displayMessage;
  if (error == "404") {
    displayMessage = (
      <>
        <div className="mt-3">No results found</div>
        <div>Refine your search and try again</div>
      </>
    );
  } else {
    displayMessage = (
      <>
        <div className="mt-3">Something went wrong</div>
        <div>Please try again</div>
      </>
    );
  }
  return (
    <div className="errorModal w-100  d-flex justify-content-center align-items-center">
      <Card
        sx={{ width: 500 }}
        className=" error p-0 h-50 d-flex flex-column justify-content-between"
      >
        <div className=" h-100 d-flex flex-column align-items-center justify-content-center errorMessage">
          <ErrorIcon style={{ fontSize: "60px", color: "#e8175d" }} />
          {displayMessage}
        </div>
        <div className=" text-white d-flex align-items-center justify-content-center errorText">
          <div>Error!</div>
        </div>
      </Card>
    </div>
  );
};

export default Error;
