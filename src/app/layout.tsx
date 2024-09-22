"use client";
import React from "react";
import "@/assets/styles/globals.scss";
import { SideBar } from "@/view";
import { useGetCurrentLocation } from "@/hooks";
import { locationArray } from "@/mock";
import { getweather } from "@/api/clientApi/apiFun";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="relative grid h-screen w-screen place-items-center">
        <QueryClientProvider client={queryClient}>
          <div className="max-w-[1140px] min-w-[750px] h-[650px] flex rounded-lg overflow-hidden">
            <SideBar />
            <div className="flex-1">{children}</div>
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
