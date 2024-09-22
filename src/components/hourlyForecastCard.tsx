import React from "react";
import { HourlyForecastInfoLabel } from "@/components";
import {
  MoonRiseIcon,
  MoonSetIcon,
  SunRiseIcon,
  SunSetIcon,
} from "@/components/icons";
import { getTimeFromTimestamp } from "@/utils";

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
  console.log(sunRiseTime, sunSetTime, hourlyWeatherData, "aaaaaaaa");
  console.log(
    getTimeFromTimestamp(!!sunRiseTime ? +sunRiseTime : null),
    getTimeFromTimestamp(!!sunSetTime ? +sunSetTime : null)
  );

  return (
    <div className="bg-red-500 w-full max-w-[800px] rounded-sm px-3 py-4 flex space-x-5 overflow-auto min-h-[150px]">
      {!!hourlyWeatherData &&
        hourlyWeatherData?.length &&
        hourlyWeatherData.map((item: any, index: number) => {
          item?.unixTimeStamp > +sunRiseTime! ? (
            <HourlyForecastInfoLabel>
              <MoonRiseIcon className="w-10 h-10 fill-white" />
            </HourlyForecastInfoLabel>
          ) : (
            ""
          );
        })}
      {/* <HourlyForecastInfoLabel>
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
      </HourlyForecastInfoLabel> */}
    </div>
  );
};

export default HourlyForecastCard;
