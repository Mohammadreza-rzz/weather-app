"use client";
import React from "react";
import Lottie from "react-lottie";
import * as LoadingLottie from "@/assets/lottie/loading.json";

interface IProps {}

const LoadingUI: React.FC<IProps> = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full h-full relative">
      <span className="inline-block w-fit h-fit absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
        <Lottie options={defaultOptions} height={100} width={100} />
      </span>
    </div>
  );
};

export default LoadingUI;
