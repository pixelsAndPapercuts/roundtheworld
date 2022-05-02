import React from "react";

import PublicIcon from "@mui/icons-material/Public";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="load_animation">
      <PublicIcon style={{ fontSize: "35px" }} className="animation" />
    </div>
  );
};

export default LoadingSpinner;
