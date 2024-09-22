"use client";
import React, { useEffect } from "react";
import { LoadingUi } from "@/components";
import { useGetWeathers } from "@/api";
import { MainView } from "@/view";

export default function Home() {
  const querydata = useGetWeathers();
  
  const isLoding = querydata[0]?.isLoading;

  

  return (
    <div className="px-12 flex flex-col items-center bg-blue-100 h-full w-[896px]">
      {isLoding ? <LoadingUi /> : <MainView />}
    </div>
  );
}
