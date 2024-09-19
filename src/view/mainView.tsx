import React from "react";
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

interface IProps {}

const MainAppView: React.FC<IProps> = () => {
  return (
    <main className="py-8 px-12 flex flex-col items-center bg-blue-800 h-full">
      <CityLabelInfo />
      <HourlyForecastCard />
      <div className="flex space-x-10 w-full mt-4 max-h-[1000px] overflow-y-auto">
        <div className="bg-blue-400 p-2 flex-1">
          <DailyForcastCard />
        </div>
        <div className="bg-red-400 flex-1 grid grid-cols-2 gap-3 h-full overflow-auto max-h-[1000px]">
          <WeatherInfoCard
            value={20}
            scaleType="visibility"
            cardLabel="VISIBILITY"
            cardIcon={<VisibilityIcon className="w-3 h-3 fill-gray-100/70" />}
            info="it`s perfectly clear right now"
          />
          <WeatherInfoCard
            value={20}
            scaleType="pressure"
            cardLabel="PRESSURE"
            cardIcon={<WindIcon className="w-3 h-3 fill-gray-100/70" />}
            info="it`s perfectly clear right now"
          />
          <WeatherInfoCard
            value={20}
            scaleType="speed"
            cardLabel="WIND"
            cardIcon={<WindIcon className="w-3 h-3 fill-gray-100/70" />}
            info="it`s perfectly clear right now"
          />
          <WeatherInfoCard
            value={20}
            scaleType="humidity"
            cardLabel="HUMIDITY"
            cardIcon={<DropletIcon className="w-3 h-3 fill-gray-100/70" />}
            info="it`s perfectly clear right now"
          />
          <WeatherInfoCard
            value={20}
            scaleType="degree"
            cardLabel="FEELS LIKE"
            cardIcon={<ThermometerIcon className="w-3 h-3 fill-gray-100/70" />}
            info="it`s perfectly clear right now"
          />
        </div>
      </div>
    </main>
  );
};

export default MainAppView;
