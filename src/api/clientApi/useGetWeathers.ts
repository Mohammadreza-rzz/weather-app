import React, { useMemo } from "react";
import { useGetCurrentLocation } from "@/hooks";
import { locationArray } from "@/mock";
import { useQueries } from "@tanstack/react-query";
import { getweather } from "@/api/clientApi/apiFun";
import { locationType } from "@/types";
import { filterWeatherListBasedOnDay } from "@/utils/index";

const useGetWeathers = () => {
  const { error, location: currentLocation } = useGetCurrentLocation();
  if (!error && currentLocation?.lat && currentLocation?.lng) {
    locationArray.unshift({
      lat: String(currentLocation.lat!),
      lng: String(currentLocation.lng!),
    });
  }
  const queriesArray = useMemo(() => {
    return locationArray.map((item: locationType, index: number) => {
      return {
        queryKey: ["item", index],
        queryFn: () => getweather(item),
        cacheTime: 1000 * 60 * 5,
        staleTime: 1000 * 60 * 1,
        gcTime: 1000 * 60 * 5,
        select: (data: any) => {
          return {
            cityInfo: !!data
              ? {
                  ...data?.city,
                }
              : null,
            weatherInfo: [...filterWeatherListBasedOnDay(data?.list)],
          };
        },
      };
    });
  }, []);

  const queries = useQueries<any>({
    queries: queriesArray,
  });

  return queries;
};
export default useGetWeathers;
