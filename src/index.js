import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div style={{ maxHeight: "100vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "30px",
          marginTop: "40px",
        }}
      >
        <App name="Ikram Anwar" color="#FC9918" />
        <App name="Numan Anees" color="#892CDC" />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <App name="Subhan Ansari" color="#FF5677" />
        <App name="Usama Hussain" color="#00ADB5" />
      </div>
      <div
        style={{
          position: "relative",
          top: "-330px",
          width: "fit-content",
          maxWidth: "fit-content",
          left: "532px",
        }}
      >
        <App name="Ahmer Farooq" color="#17B978" />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
