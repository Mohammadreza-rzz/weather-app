"use client";
import React from "react";
import { kelvinToCelsius, getCurrentTimeWithOffset } from "@/utils";
import {
  CityLabelInfo,
  HourlyForecastCard,
  DailyForcastCard,
  WeatherInfoCard,
} from "@/components";
import {
  VisibilityIcon,
  WindIcon,
  DropletIcon,
  ThermometerIcon,
} from "@/components/icons";
import Image from "next/image";
import clearSkyDay from "@/public/images/clearDay.jpg";
import nightSky from "@/public/images/nightSky.jpg";
import cloudyImage from "@/public/images/cloudyImage.jpg";
import RainImage from "@/public/images/rainImage.jpg";

interface IProps {
  weatherData?: any;
}

const MainAppView: React.FC<IProps> = ({ weatherData }) => {
  const currentInfo =
    !!weatherData &&
    weatherData.weatherInfo.length &&
    weatherData?.weatherInfo[0][0];
  const cityInfo = !!weatherData && weatherData.cityInfo;

  const timezoneUnixValue =
    +getCurrentTimeWithOffset(cityInfo?.timezone).split(":")[0] * 60 +
    +getCurrentTimeWithOffset(cityInfo?.timezone).split(":")[1];

  return (
    <main className="py-8 px-12 flex flex-col items-center h-full relative">
      <CityLabelInfo
        cityName={!!weatherData?.cityInfo ? weatherData?.cityInfo?.name : ""}
        temp={
          !!weatherData?.weatherInfo ? weatherData?.weatherInfo[0][0]?.temp : ""
        }
        weatherStatus={
          !!weatherData?.weatherInfo
            ? weatherData?.weatherInfo[0][0]?.weatherStatus
            : ""
        }
      />
      <HourlyForecastCard
        hourlyWeatherData={
          !!weatherData?.weatherInfo && weatherData?.weatherInfo[0]
        }
        sunRiseTime={!!weatherData?.cityInfo && weatherData?.cityInfo?.sunrise}
        sunSetTime={!!weatherData?.cityInfo && weatherData?.cityInfo?.sunset}
      />
      <div className="flex space-x-10 w-full mt-4 overflow-auto ">
        <div className="bg-blue-950/60 max-h-[1000px] overflow-auto p-2 flex-1 rounded-sm">
          <DailyForcastCard
            dailyWeatherInfo={
              !!weatherData?.weatherInfo && weatherData?.weatherInfo
            }
          />
        </div>
        <div className="  flex-1 grid grid-cols-2 gap-3 h-full overflow-auto max-h-[1000px]">
          <WeatherInfoCard
            value={!!currentInfo ? currentInfo?.visibility / 1000 : 0}
            scaleType="visibility"
            cardLabel="VISIBILITY"
            cardIcon={<VisibilityIcon className="w-3 h-3 fill-gray-100/70" />}
            info="it`s perfectly clear right now"
          />
          <WeatherInfoCard
            value={
              !!currentInfo ? +(currentInfo?.pressure / 1000).toFixed(2) : 0
            }
            scaleType="pressure"
            cardLabel="PRESSURE"
            cardIcon={<WindIcon className="w-3 h-3 fill-gray-100/70" />}
            info="it`s perfectly clear right now"
          />
          <WeatherInfoCard
            value={!!currentInfo ? currentInfo?.wind.toFixed(1) : 0}
            scaleType="speed"
            cardLabel="WIND"
            cardIcon={<WindIcon className="w-3 h-3 fill-gray-100/70" />}
            info="it`s perfectly clear right now"
          />
          <WeatherInfoCard
            value={!!currentInfo ? currentInfo?.humidity : 0}
            scaleType="humidity"
            cardLabel="HUMIDITY"
            cardIcon={<DropletIcon className="w-3 h-3 fill-gray-100/70" />}
            info="it`s perfectly clear right now"
          />
          <WeatherInfoCard
            value={
              !!currentInfo ? +kelvinToCelsius(currentInfo?.feels_like) : 0
            }
            scaleType="degree"
            cardLabel="FEELS LIKE"
            cardIcon={<ThermometerIcon className="w-3 h-3 fill-gray-100/70" />}
            info="it`s perfectly clear right now"
          />
        </div>
      </div>
      <Image
        className="w-full h-full absolute overflow-hidden top-0 left-0 object-cover -z-10 transition-all"
        src={
          currentInfo?.weatherStatus === "Rain"
            ? RainImage
            : currentInfo?.weatherStatus === "Clouds"
            ? cloudyImage
            : timezoneUnixValue >= 360 || timezoneUnixValue <= 1080
            ? clearSkyDay
            : nightSky
        }
        alt="backgroundImage"
        width={612}
        height={259}
        objectFit="cover"
      />
    </main>
  );
};

export default MainAppView;
