"use client";
import "@/assets/styles/globals.scss";
import { SideBar } from "@/view";
import { useGetCurrentLocation } from "@/hooks";
import { locationArray } from "@/mock";
import { getweather } from "@/api/clientApi/apiFun";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const location = useGetCurrentLocation();
  console.log(location, "location");
  console.log(locationArray, "location Array");
  getweather();
  return (
    <html lang="en">
      <body className="relative grid h-screen w-screen place-items-center">
        <QueryClientProvider client={queryClient}>
          <div className="max-w-[1140px] min-w-[750px] h-[650px] flex rounded-lg overflow-hidden">
            <SideBar />
            <div className="flex-1">{children}</div>
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
