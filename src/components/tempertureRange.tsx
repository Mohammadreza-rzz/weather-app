import React from "react";
import { kelvinToCelsius } from "@/utils";

interface IProps {
  minTemp?: string;
  maxTemp?: string;
}

const TempertureRenge: React.FC<IProps> = ({ minTemp, maxTemp }) => {
  return (
    <div>
      <span className="relative inline-flex translate-x-1">
        <p className="text-md text-gray-100/70 ">{kelvinToCelsius(minTemp!)}</p>
        <span className="w-1.5 h-1.5 inline-block bg-transparent border-2 border-gray-100/70 rounded-full"></span>
      </span>
      <div className="bg-gray_alpha-0/70 w-28 h-1 rounded-lg inline-block relative mx-4 overflow-hidden">
        <span className="inline-block w-28 h-1 rounded-lg bg-tempRangGradiant absolute"></span>
      </div>
      <span className="relative inline-flex translate-x-1">
        <p className="text-md text-gray-100">{kelvinToCelsius(maxTemp!)}</p>
        <span className="w-1.5 h-1.5 inline-block bg-transparent border-2 border-gray-100 rounded-full"></span>
      </span>
    </div>
  );
};

export default TempertureRenge;
