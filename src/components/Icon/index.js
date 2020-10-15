import React from "react";
import "./index.css";

const Icon = (props) => {
  return (
    <img
      className="icon"
      src={`https://www.weatherbit.io/static/img/icons/${props.icon}.png`}
      alt={props.icon}
    />
  );
};

export default Icon;
