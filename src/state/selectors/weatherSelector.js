import { selector } from "recoil";

import weather from "./../../apis";
import { cityState } from "./../atoms/cityState";

export const fetchWeather = selector({
  key: "weatherSelector",
  get: async ({ get }) => {
    const city = get(cityState);
    try {
      const response = await weather.get(
        `daily?city=${city}`
      );
      return (await response.data.data) ? response.data.data.slice(0, 5) : [];
    } catch (error) {
      throw error;
    }
  },
});
