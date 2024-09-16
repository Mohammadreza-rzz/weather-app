import React, { useState, useEffect } from "react";
import { getCurrentTime } from "@/utils";

const useGetTimeEachMinutes = () => {
  const [currentTime, setCurrentTime] = useState<string | null>(
    getCurrentTime()
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = getCurrentTime();
      setCurrentTime(currentTime);
    }, 30000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return currentTime;
};

export default useGetTimeEachMinutes;
