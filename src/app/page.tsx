import React from "react";
import { LoadingUi } from "@/components";

export default function Home() {
  return (
    <div className="px-12 flex flex-col items-center bg-blue-100 h-full w-[896px]">
      {<LoadingUi />}
    </div>
  );
}
