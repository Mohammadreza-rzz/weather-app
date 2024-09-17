import React from "react";
import { HourlyForecastInfoLabel } from "@/components";
import {
  MoonRiseIcon,
  MoonSetIcon,
  SunRiseIcon,
  SunSetIcon,
} from "@/components/icons";

interface IProps {
  children?: React.ReactElement;
}

const HourlyForecastCard: React.FC<IProps> = () => {
  return (
    <div className="bg-red-500 max-w-[800px] rounded-sm px-3 py-4 flex space-x-5 overflow-auto">
      <HourlyForecastInfoLabel>
        <MoonRiseIcon className="w-10 h-10 fill-white" />
      </HourlyForecastInfoLabel>
      <HourlyForecastInfoLabel>
        <MoonSetIcon className="w-10 h-10 fill-white" />
      </HourlyForecastInfoLabel>
      <HourlyForecastInfoLabel>
        <SunRiseIcon className="w-6 h-6 fill-white" />
      </HourlyForecastInfoLabel>
      <HourlyForecastInfoLabel>
        <SunSetIcon className="w-6 h-6 fill-white" />
      </HourlyForecastInfoLabel>
      <HourlyForecastInfoLabel>
        <SunSetIcon className="w-6 h-6 fill-white" />
      </HourlyForecastInfoLabel>
      <HourlyForecastInfoLabel>
        <SunSetIcon className="w-6 h-6 fill-white" />
      </HourlyForecastInfoLabel>
      <HourlyForecastInfoLabel>
        <SunSetIcon className="w-6 h-6 fill-white" />
      </HourlyForecastInfoLabel>
      <HourlyForecastInfoLabel>
        <SunSetIcon className="w-6 h-6 fill-white" />
      </HourlyForecastInfoLabel>
      <HourlyForecastInfoLabel>
        <SunSetIcon className="w-6 h-6 fill-white" />
      </HourlyForecastInfoLabel>
      <HourlyForecastInfoLabel>
        <SunSetIcon className="w-6 h-6 fill-white" />
      </HourlyForecastInfoLabel>
      <HourlyForecastInfoLabel>
        <SunSetIcon className="w-6 h-6 fill-white" />
      </HourlyForecastInfoLabel>
      <HourlyForecastInfoLabel>
        <SunSetIcon className="w-6 h-6 fill-white" />
      </HourlyForecastInfoLabel>
      <HourlyForecastInfoLabel>
        <SunSetIcon className="w-6 h-6 fill-white" />
      </HourlyForecastInfoLabel>
      <HourlyForecastInfoLabel>
        <SunSetIcon className="w-6 h-6 fill-white" />
      </HourlyForecastInfoLabel>
      <HourlyForecastInfoLabel>
        <SunSetIcon className="w-6 h-6 fill-white" />
      </HourlyForecastInfoLabel>
    </div>
  );
};

export default HourlyForecastCard;
