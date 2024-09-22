import { useState, useEffect } from "react";

function useLocationTime(timezoneOffset: number) {
  const [currentTime, setCurrentTime] = useState<Date>(() => {
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utcTime + timezoneOffset * 60000);
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      setCurrentTime(new Date(utcTime + timezoneOffset * 60000));
    };

    const intervalId = setInterval(updateTime, 60000);

    return () => clearInterval(intervalId);
  }, [timezoneOffset]);

  const formattedTime = currentTime.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return String(formattedTime);
}

export default useLocationTime;
