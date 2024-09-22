import React from "react";
import { kelvinToCelsius } from "@/utils";

interface IProps {
  cityName?: string;
  temp?: string;
  weatherStatus?: string;
}

const CityLabelInfo: React.FC<IProps> = ({ cityName, temp, weatherStatus }) => {
  return (
    <div className=" flex flex-col items-center mb-12">
      <h1 className="text-gray-50 text-heading_xs">{cityName}</h1>
      <span className="relative inline-flex translate-x-1.5">
        <p className="text-heading_md text-gray-100">
          {kelvinToCelsius(temp!)}
        </p>
        <span className="w-3 h-3 inline-block bg-transparent border-2 border-gray-100 rounded-full"></span>
      </span>
      <p className="text-gray-50 text-lg">{weatherStatus}</p>
      <div className="flex space-x-3">
        <span className="relative inline-flex">
          <p className="text-paragraph_md text-gray-100 ">
            {!!cityName && "L:13"}
          </p>
          <span className="w-1 h-1 inline-block bg-transparent border border-gray-100 rounded-full"></span>
        </span>
        <span className="relative inline-flex">
          <p className="text-paragraph_md text-gray-100  ">
            {!!cityName && "H:16"}
          </p>
          <span className="w-1 h-1 inline-block bg-transparent border border-gray-100 rounded-full"></span>
        </span>
      </div>
    </div>
  );
};

export default CityLabelInfo;
