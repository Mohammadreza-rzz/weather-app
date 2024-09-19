import React, { useState, useEffect } from "react";

const useGetCurrentLocation = () => {
  const [location, setLocation] = useState<{
    lat: number | null;
    lng: number | null;
  }>({ lat: null, lng: null });
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position, "position");
      }),
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.log(error);
            setError("Error fetching location");
          }
        );
    } else {
      setError("Geolocation is not supported by this browser");
    }
  }, []);

  return { location, error };
};

export default useGetCurrentLocation;
