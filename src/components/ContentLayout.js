import React, { useRef, useState, useEffect } from "react";

import Topbar from "./Topbar";
import "./ContentLayout.css";

const ContentLayout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const toggleVisibility = () => {
    if (ref.current.scrollTop > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    ref.current.addEventListener("scroll", toggleVisibility);

    return () => {
      if (ref.current)
        ref.current.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const changeHandler = () => {
    ref.current.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div ref={ref} className="col  p-4 text-white content">
      <Topbar></Topbar>

      {children}
      {isVisible && (
        <a
          href="#"
          onClick={changeHandler}
          className="position-fixed end-0 bottom-0 me-5 mb-5 scroll"
        >
          <span></span>
        </a>
      )}
    </div>
  );
};

export default ContentLayout;
