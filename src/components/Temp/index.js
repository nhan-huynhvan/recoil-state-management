import React from "react";
import "./index.css";

const Temp = (props) => {
  return (
    <div className="temp">
      <span className="min">{props.minTemp}&#176;</span>
      <span className="max">{props.maxTemp}&#176;</span>
    </div>
  );
};

export default Temp;
