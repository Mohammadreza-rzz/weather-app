import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const getCurrentTime = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  if (minutes < 10 && hours < 10) {
    return `0${hours}:0${minutes}`;
  } else if (minutes < 10) {
    return `${hours}:0${minutes}`;
  } else {
    return `${hours}:${minutes}`;
  }
};

export const getCurrentTimeWithOffset = (timezoneOffset: number) => {
  const now = new Date();

  const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;

  const localTime = new Date(utcTime + timezoneOffset * 60000);

  return localTime.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

export function kelvinToCelsius(kelvin: string) {
  const celsius = +kelvin - 273.15;
  return celsius.toFixed(1);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//filter data functions

const selectUsableDataFromWeatherObj = (weatherObj: any) => {
  const formatedObj = {
    unixTimeStamp: weatherObj?.dt,
    utcTimeStamp: weatherObj?.dt_txt,
    visibility: weatherObj?.visibility,
    feels_like: weatherObj?.main?.feels_like,
    grnd_level: weatherObj?.main?.grnd_level,
    humidity: weatherObj?.main?.humidity,
    pressure: weatherObj?.main?.pressure,
    sea_level: weatherObj?.main?.sea_level,
    temp: weatherObj?.main?.temp,
    temp_max: weatherObj?.main?.temp_max,
    temp_min: weatherObj?.main?.temp_min,
    weatherStatus: !!weatherObj?.weather.length && weatherObj?.weather[0]?.main,
    wind: weatherObj?.wind?.speed,
  };
  return formatedObj;
};

export const filterWeatherListBasedOnDay = (mockList: any) => {
  const weatherDayList: any = [];
  mockList?.forEach((element: any) => {
    if (!weatherDayList?.length) {
      weatherDayList.push([{ ...selectUsableDataFromWeatherObj(element) }]);
    } else {
      let itemFound = false;
      weatherDayList.forEach((item: any, index: number) => {
        if (
          item[0]?.utcTimeStamp?.split(" ")[0]?.trim() ===
          element?.dt_txt?.split(" ")[0]?.trim()
        ) {
          weatherDayList[index].push({
            ...selectUsableDataFromWeatherObj(element),
          });
          itemFound = true;
        }
      });
      if (!itemFound) {
        weatherDayList.push([{ ...selectUsableDataFromWeatherObj(element) }]);
      }
    }
  });
  return weatherDayList;
};
