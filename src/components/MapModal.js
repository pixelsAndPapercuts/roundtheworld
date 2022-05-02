import mapboxgl from "mapbox-gl";
import React, { useRef, useEffect, useState } from "react";

import "./MapModal.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmlzaGVzaGFuayIsImEiOiJja3hxaXp2cnAxaDR2Mm9wN2U5dXJxbGkzIn0.LpjtdfyxMAn1OFSZFUia-Q";

const MapModal = ({ latlng }) => {
  const map = useRef(null);
  const mapContainer = useRef(null);
  const [long, setLng] = useState(latlng[1]);
  const [lat, setLat] = useState(latlng[0]);
  const [zoom, setZoom] = useState(4);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [long, lat],
      zoom: zoom,
    });
    new mapboxgl.Marker().setLngLat([long, lat]).addTo(map.current);
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <>
      <div className="h-100 map-container">
        <div className="mapbox h-25 pt-4 pt-md-0 d-md-flex flex-column justify-content-center">
          Longitude:{long} | Latitude:{lat}
        </div>
        <div className="h-100" style={{ minHeight: "240px" }}>
          <div ref={mapContainer} className="  h-75 "></div>
        </div>
      </div>
    </>
  );
};

export default MapModal;
