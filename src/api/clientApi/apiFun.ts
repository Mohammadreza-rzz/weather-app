import axios from "axios";
import { locationType } from "@/types";

export const getweather = async (location: locationType) => {
  const weather_api_key = "bdf38c14b5fd8f41d99d3ae8911eb8ab";
  if (location.lat && location.lng) {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${weather_api_key}&lat=${location?.lat}&lon=${location?.lng}`
    );
    return res.data;
  }
  return;
};
