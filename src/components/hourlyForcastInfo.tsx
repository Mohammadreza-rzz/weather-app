import React from "react";
import { cn } from "@/utils";

interface IProps {
  children: React.ReactNode;
  TimeLabel?: string;
  tempLabel?: string;
  hasDegreeIcon?: boolean;
}

const HourlyForecastInfoLabel: React.FC<IProps> = ({
  children,
  TimeLabel,
  tempLabel = "",
  hasDegreeIcon = true,
}) => {
  return (
    <div className="flex flex-col justify-between items-center  min-w-16 max-w-10">
      <h3 className="text-white text-paragraph_md">{TimeLabel}</h3>
      <span className="inline-block w-fit h-fit my-2">{children}</span>
      <span className={cn("relative inline-flex")}>
        <p className="text-md text-gray-100 ">{tempLabel}</p>
        {!!hasDegreeIcon && (
          <span className="w-1.5 h-1.5 inline-block bg-transparent border-2 border-gray-100 rounded-full"></span>
        )}
      </span>
    </div>
  );
};

export default HourlyForecastInfoLabel;
