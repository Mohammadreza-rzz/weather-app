import React from "react";
import { DailyForcastInfo } from "@/components";
import { MoonRiseIcon } from "@/components/icons";

interface IProps {}

const DailyForcastInfoCard: React.FC<IProps> = () => {
  return (
    <div className="bg-blue-[#597eb9]">
      <h1 className="my-2 text-paragraph_sm text-gray-50/50 mx-2">
        10-DAY FORECAST
      </h1>
      <DailyForcastInfo>
        <MoonRiseIcon className="w-7 h-7" />
      </DailyForcastInfo>
      <DailyForcastInfo>
        <MoonRiseIcon className="w-7 h-7" />
      </DailyForcastInfo>
      <DailyForcastInfo>
        <MoonRiseIcon className="w-7 h-7" />
      </DailyForcastInfo>
      <DailyForcastInfo>
        <MoonRiseIcon className="w-7 h-7" />
      </DailyForcastInfo>
      <DailyForcastInfo>
        <MoonRiseIcon className="w-7 h-7" />
      </DailyForcastInfo>
      <DailyForcastInfo>
        <MoonRiseIcon className="w-7 h-7" />
      </DailyForcastInfo>
      <DailyForcastInfo>
        <MoonRiseIcon className="w-7 h-7" />
      </DailyForcastInfo>
      <DailyForcastInfo>
        <MoonRiseIcon className="w-7 h-7" />
      </DailyForcastInfo>
      <DailyForcastInfo>
        <MoonRiseIcon className="w-7 h-7" />
      </DailyForcastInfo>
    </div>
  );
};

export default DailyForcastInfoCard;
