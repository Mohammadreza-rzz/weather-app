import React from "react";
import { cn } from "@/utils";
import { TempertureRenge } from "@/components";

interface IProps {
  children?: React.ReactElement;
  hasBorder?: boolean;
  title?: string;
  minTemp?: string;
  maxtemp?: string;
}

const DailyForcastInfoCard: React.FC<IProps> = ({
  children,
  title,
  minTemp,
  maxtemp,
}) => {
  return (
    <div className="bg-transparent flex items-center justify-between py-2 px-1 mx-2 border-t border-gray-200">
      <h3 className="text-paragraph_lg text-white w-[67px] flex justify-center">
        {title}
      </h3>
      <span>{children}</span>
      <TempertureRenge minTemp={minTemp!} maxTemp={maxtemp!} />
    </div>
  );
};

export default DailyForcastInfoCard;
