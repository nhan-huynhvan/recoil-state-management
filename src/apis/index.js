import axios from "axios";

export default axios.create({
  baseURL: "https://api.weatherbit.io/v2.0/forecast",
  params: {
    key: "821bd031580c4863a16799d7b83a08fa",
  },
});
