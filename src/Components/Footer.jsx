import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import L from "leaflet";
import map from "./map.svg";
const customIcon = new L.Icon({
  iconUrl: map,
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
});

function Footer({ isDarkMode }) {
  const position = [25.9429449, -80.1472264];

  return (
    <>
      <div className="map">
        {" "}
        <MapContainer
          center={position}
          zoom={100}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url={
              isDarkMode
                ? "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                : "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            }
          />
          <Marker position={position} icon={customIcon}></Marker>
        </MapContainer>
      </div>

      <div className="" style={{ color: "white" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span> contact us</span>
            <span>+1 208 202 8305</span>
          </div>

          <div
            className="footer_info_r"
            style={{
              width: "100%",
              height: "20vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span> Time work</span>
            <span>9:00am to 10:00pm</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
