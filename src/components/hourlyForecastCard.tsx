import React, { useEffect } from "react";
import { HourlyForecastInfoLabel } from "@/components";
import {
  MoonRiseIcon,
  MoonSetIcon,
  SunRiseIcon,
  SunSetIcon,
  CloudIcon,
  HumidityIcon,
  SunIcon,
} from "@/components/icons";
import { getTimeFromTimestamp, kelvinToCelsius } from "@/utils";
import { dataTagSymbol } from "@tanstack/react-query";

interface IProps {
  children?: React.ReactElement;
  hourlyWeatherData?: any;
  sunRiseTime?: string;
  sunSetTime?: string;
}

const HourlyForecastCard: React.FC<IProps> = ({
  hourlyWeatherData,
  sunRiseTime,
  sunSetTime,
}) => {
  return (
    <div className="bg-blue-950/60 w-full max-w-[800px] rounded-sm px-3 py-4 flex space-x-5 overflow-auto min-h-[150px]">
      {!!hourlyWeatherData &&
        hourlyWeatherData?.length &&
        [
          ...hourlyWeatherData,
          {
            unixTimeStamp: sunRiseTime!,
            weatherStatus: "sunRise",
          },
          {
            unixTimeStamp: sunSetTime!,
            weatherStatus: "sunSet",
          },
        ]
          ?.sort((a: any, b: any) => a?.unixTimeStamp - b?.unixTimeStamp)
          .map((item: any, index: number) => {
            if (item?.weatherStatus === "sunRise") {
              return (
                <HourlyForecastInfoLabel
                  TimeLabel={getTimeFromTimestamp(item.unixTimeStamp)}
                  key={item.unixTimeStamp}
                  tempLabel="Sunrise"
                  hasDegreeIcon={false}
                >
                  <SunRiseIcon className="w-6 h-6 fill-white" />
                </HourlyForecastInfoLabel>
              );
            } else if (item?.weatherStatus === "sunSet") {
              return (
                <HourlyForecastInfoLabel
                  TimeLabel={getTimeFromTimestamp(item.unixTimeStamp)}
                  key={item.unixTimeStamp}
                  tempLabel="Sunset"
                  hasDegreeIcon={false}
                >
                  <SunSetIcon className="w-6 h-6 fill-white" />
                </HourlyForecastInfoLabel>
              );
            } else {
              return (
                <HourlyForecastInfoLabel
                  TimeLabel={getTimeFromTimestamp(item.unixTimeStamp)}
                  key={item.unixTimeStamp}
                  hasDegreeIcon={true}
                  tempLabel={kelvinToCelsius(item.temp!)}
                >
                  {item?.weatherStatus === "Clouds" ? (
                    <CloudIcon className="w-6 h-6 fill-gray-100" />
                  ) : item?.weatherStatus === "Rain" ? (
                    <HumidityIcon className="w-5 h-5 fill-gray-100" />
                  ) : (
                    <SunIcon className="w-5 h-5 fill-gray-100" />
                  )}
                </HourlyForecastInfoLabel>
              );
            }
          })}
    </div>
  );
};

export default HourlyForecastCard;
