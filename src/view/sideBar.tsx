import React, { use, useState } from "react";
import { CitiesCard } from "@/components";

interface IProps {}

const SideBar: React.FC<IProps> = () => {
  const [activeCity, SrtActiveCity] = useState<string>("mashhad");

  return (
    <div className="!bg-blue-950 py-[60px] w-[250px] grid grid-cols-1 overflow-auto gap-y-2">
      <CitiesCard />
      <CitiesCard />
      <CitiesCard />
      <CitiesCard />
      <CitiesCard />
      <CitiesCard />
      <CitiesCard />
    </div>
  );
};

export default SideBar;
