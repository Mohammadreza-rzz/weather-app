"use client";
import React, { useState } from "react";
import { CitiesCard } from "@/components";
import { useGetWeathers } from "@/api/clientApi";
import { LoadingUi } from "@/components";

interface IProps {}

const SideBar: React.FC<IProps> = () => {
  const cityWeathersData: any = useGetWeathers();

  return (
    <div className="!bg-blue-950 py-[60px] w-[250px] grid grid-cols-1 overflow-auto gap-y-2">
      {!!cityWeathersData.length &&
        cityWeathersData.map((items: any, index: number) => (
          <CitiesCard
            key={
              !!items?.data?.cityInfo?.id ? items?.data?.cityInfo?.id : index
            }
            isLoading={items?.isLoading}
            temp={items?.data?.weatherInfo[0][0]?.temp}
            seeLevel={items?.data?.weatherInfo[0][0]?.sea_level}
            weatherStatus={items?.data?.weatherInfo[0][0]?.weatherStatus}
            timeZone={items?.data?.cityInfo?.timezone}
            cityId={items?.data?.cityInfo?.id}
            cityName={items?.data?.cityInfo?.name}
          />
        ))}
    </div>
  );
};

export default SideBar;
