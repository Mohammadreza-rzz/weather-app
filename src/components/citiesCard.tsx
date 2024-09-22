"use client";
import React from "react";
import { useLocationTime } from "@/hooks";
import { kelvinToCelsius, cn } from "@/utils";
import { LoadingUi } from "@/components";
import useGetTimeEachMinutes from "@/hooks/usegetTimeEachMinutes";
import { useParams } from "next/navigation";
import Link from "next/link";

interface IProps {
  cityId?: number;
  timeZone?: number;
  cityName?: string;
  weatherStatus?: string;
  temp?: string;
  seeLevel?: number;
  isLoading?: boolean;
}

const CitiesCard: React.FC<IProps> = ({
  cityId,
  timeZone,
  cityName,
  weatherStatus,
  temp,
  seeLevel,
  isLoading,
}) => {
  const currentTime = useLocationTime(timeZone!);
  const { city } = useParams();

  return (
    <>
      {isLoading ? (
        <LoadingUi />
      ) : (
        <Link
          prefetch={false}
          href={`/${cityId}`}
          className={cn(
            "p-2 bg-transparent mx-5 rounded-sm hover:bg-blue-300 cursor-pointer min-h-[96px] h-fit",
            +city === +cityId! && "bg-blue-300"
          )}
        >
          <div className="flex justify-between">
            <span className="inline-flex flex-col">
              <h1 className="text-white text-paragraph_md font-semibold">
                {cityName}
              </h1>
              <p className="text-gray-100 text-sm">{currentTime}</p>
            </span>
            <span className="relative inline-flex">
              <p className="text-heading_sm text-gray-100  ">
                {kelvinToCelsius(temp!)}
              </p>
              <span className="w-2 h-2 inline-block bg-transparent border-2 border-gray-100 rounded-full"></span>
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-paragraph_sm text-gray-100">{weatherStatus!}</p>
            <div className=" flex space-x-1">
              <span className="relative inline-flex">
                <p className="text-paragraph_xs text-gray-100  ">
                  See-Level: {seeLevel}m
                </p>
              </span>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default CitiesCard;
