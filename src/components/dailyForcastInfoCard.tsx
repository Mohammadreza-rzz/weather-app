import React from "react";
import { DailyForcastInfo } from "@/components";
import { MoonRiseIcon } from "@/components/icons";

interface IProps {}

const DailyForcastInfoCard: React.FC<IProps> = () => {
  return (
    <div>
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
