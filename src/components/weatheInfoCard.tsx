import { cn } from "@/utils";
import React from "react";

interface IProps {
  cardLabel?: string;
  cardIcon?: React.ReactNode;
  scaleType?: "visibility" | "degree" | "humidity" | "pressure" | "speed";
  value?: number;
  info?: string;
}

const WeatherInfoCard: React.FC<IProps> = ({
  cardIcon,
  cardLabel,
  value,
  scaleType,
  info,
}) => {
  return (
    <div className="bg-blue-950/60 p-3 rounded-sm">
      <span className="flex items-center space-x-1 mt-1">
        {cardIcon}
        <h4 className="text-paragraph_sm text-gray-100/70">{cardLabel}</h4>
      </span>
      <span
        className={cn(
          "inline-flex mt-5",
          scaleType !== "degree" && " items-center"
        )}
      >
        <p className="text-heading_md text-gray-100">{value}</p>
        {scaleType === "degree" ? (
          <span className="w-2 h-2 inline-block bg-transparent border-2 border-gray-100 rounded-full"></span>
        ) : (
          <p className="text-heading_sm text-gray-100 ml-2">
            {scaleType === "pressure"
              ? "hPa"
              : scaleType === "visibility"
              ? "km"
              : scaleType === "speed"
              ? "km/h"
              : "%"}
          </p>
        )}
      </span>
      <p className="text-gray-100 text-paragraph_md">{info}</p>
    </div>
  );
};

export default WeatherInfoCard;
