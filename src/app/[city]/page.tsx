"use client";
import React from "react";
import { MainView } from "@/view";
import { LoadingUi } from "@/components";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { filterWeatherListBasedOnDay } from "@/utils";

interface IProps {}

const City_Weather: React.FC<IProps> = () => {
  const { city } = useParams();
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueriesData({ queryKey: ["item"] });

  const cityInfo: any =
    !!cachedData &&
    cachedData?.length &&
    cachedData.filter((item: any) => item[1]?.city?.id === +city).flat()[1];

  const filterData = {
    cityInfo: !!city ? { ...cityInfo?.city } : null,
    weatherInfo: [...filterWeatherListBasedOnDay(cityInfo?.list)],
  };

  return (
    <>{!!cityInfo ? <MainView weatherData={filterData} /> : <LoadingUi />}</>
  );
};

export default City_Weather;
