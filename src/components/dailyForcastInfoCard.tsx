import React from "react";
import { DailyForcastInfo } from "@/components";
import {
  HumidityIcon,
  CloudIcon,
  SunIcon,
  DropletIcon,
} from "@/components/icons";

interface IProps {
  dailyWeatherInfo: any;
}

const DailyForcastInfoCard: React.FC<IProps> = ({ dailyWeatherInfo }) => {
  return (
    <div className="bg-blue-[#597eb9]">
      <h1 className="my-2 text-paragraph_sm text-gray-50/50 mx-2">
        {!!dailyWeatherInfo.length &&
          dailyWeatherInfo?.flatMap((items: any) => items[0]).length}
        -DAY FORECAST
      </h1>
      {!!dailyWeatherInfo &&
        !!dailyWeatherInfo?.length &&
        dailyWeatherInfo
          .flatMap((items: any) => items[0])
          .map((item: any, index: number) => {
            if (index == 0) {
              return (
                <DailyForcastInfo
                  title="Today"
                  maxtemp={item?.temp_max}
                  minTemp={item?.temp_min}
                >
                  {item?.weatherStatus === "Clouds" ? (
                    <CloudIcon className="w-6 h-6 fill-gray-100" />
                  ) : item?.weatherStatus === "Rain" ? (
                    <HumidityIcon className="w-5 h-5 fill-gray-100" />
                  ) : (
                    <SunIcon className="w-5 h-5 fill-gray-100" />
                  )}
                </DailyForcastInfo>
              );
            }
            return (
              <DailyForcastInfo
                title={item?.utcTimeStamp
                  .split(" ")[0]
                  .replace(/-/g, "/")
                  .substr(2)}
                maxtemp={item?.temp_max}
                minTemp={item?.temp_min}
              >
                {item?.weatherStatus === "Clouds" ? (
                  <CloudIcon className="w-6 h-6 fill-gray-100" />
                ) : item?.weatherStatus === "Rain" ? (
                  <HumidityIcon className="w-5 h-5 fill-gray-100" />
                ) : (
                  <SunIcon className="w-5 h-5 fill-gray-100" />
                )}
              </DailyForcastInfo>
            );
          })}
    </div>
  );
};

export default DailyForcastInfoCard;
