"use client";
import React from "react";
import useGetTimeEachMinutes from "@/hooks/usegetTimeEachMinutes";

interface IProps {}

const CitiesCard: React.FC<IProps> = () => {
  const currentTime = useGetTimeEachMinutes();
  return (
    <div className="p-1 bg-transparent mx-5 rounded-sm">
      <div className="flex justify-between">
        <span className="inline-flex flex-col">
          <h1 className="text-white text-paragraph_md font-semibold">
            My Location
          </h1>
          <p className="text-gray-100 text-sm">{currentTime}</p>
        </span>
        <span className="relative inline-flex">
          <p className="text-heading_sm text-gray-100  bg-blue-400">24</p>
          <span className="w-2 h-2 inline-block bg-transparent border-2 border-gray-100 rounded-full"></span>
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-paragraph_sm text-gray-100">Sunny</p>
        <div className=" flex space-x-1">
          <span className="relative inline-flex">
            <p className="text-paragraph_xs text-gray-100  bg-blue-400">L:13</p>
            <span className="w-1 h-1 inline-block bg-transparent border border-gray-100 rounded-full"></span>
          </span>
          <span className="relative inline-flex">
            <p className="text-paragraph_xs text-gray-100  bg-blue-400">H:16</p>
            <span className="w-1 h-1 inline-block bg-transparent border border-gray-100 rounded-full"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CitiesCard;
