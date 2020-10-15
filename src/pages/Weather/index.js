import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import moment from "moment";

import { cityState } from "../../state/atoms/cityState";
import { fetchWeather } from "../../state/selectors/weatherSelector";
import { WEEKDAY } from "../../helper";
import WeatherCard from "../../components/WeatherCard";
import "./index.css";

const Weather = () => {
  const city = useRecoilState(cityState)[0];
  const weather = useRecoilValue(fetchWeather);
  return (
    <>
      <h5 className="city">{city}</h5>
      {!weather.length && <h1>None</h1>}
      {weather.map((it, index) => (
        <WeatherCard
          key={index}
          day={WEEKDAY[moment(it.datetime).day()]}
          icon={it.weather.icon}
          minTemp={it.min_temp}
          maxTemp={it.max_temp}
          description={it.weather.description}
        />
      ))}
    </>
  );
};

export default Weather;
