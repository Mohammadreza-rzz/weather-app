import React from "react";
import {
  CityLabelInfo,
  HourlyForecastCard,
  DailyForcastCard,
  WeatherInfoCard,
} from "@/components";

interface IProps {}

const MainAppView: React.FC<IProps> = () => {
  return (
    <main className="pt-8 px-12 flex flex-col items-center bg-blue-800 h-full">
      <CityLabelInfo />
      <HourlyForecastCard />
      <div className="flex w-full mt-4 max-h-[1000px] overflow-y-auto">
        <div className="bg-blue-400 p-2 flex-1">
          <DailyForcastCard />
        </div>
        <div className="bg-red-400 flex-1">
          <WeatherInfoCard />
          <WeatherInfoCard />
          <WeatherInfoCard />
          <WeatherInfoCard />
        </div>
      </div>
    </main>
  );
};

export default MainAppView;
