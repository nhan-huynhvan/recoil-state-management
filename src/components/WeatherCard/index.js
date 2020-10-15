import React from "react";

import Days from "./../Days";
import Icon from "./../Icon/";
import Temp from "./../Temp/";
import "./index.css";

const WeatherCard = (props) => {
  return (
    <div className="weather-body card">
      <Days day={props.day} />
      <Icon icon={props.icon} />
      <Temp minTemp={props.minTemp} maxTemp={props.maxTemp} />
    </div>
  );
};

export default WeatherCard;
