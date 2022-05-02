import * as React from "react";

import CountryModal from "../components/CountryModal";
import MapModal from "../components/MapModal";

import "./Modal.css";

export default function Modal({ country }) {
  return (
    <div className="container-fluid h-auto p-0 d-flex align-items-center justify-content-center ">
      <div className="row  w-75 ">
        <div className="h-auto  col-md" style={{ maxHeight: "80vh" }}>
          <CountryModal country={country} />
        </div>
        {/* <div className="col h-auto">
          <MapModal latlng={country.latlng} />
        </div> */}
      </div>
    </div>
  );
}
