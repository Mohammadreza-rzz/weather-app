import React from "react";
import { cn } from "@/utils";
import { MoonRiseIcon } from "./icons";

interface IProps {
  children?: React.ReactElement;
  hasBorder?: boolean;
}

const DailyForcastInfoCard: React.FC<IProps> = ({ children }) => {
  return (
    <div className="bg-red-300">
      <h3>Today</h3>
      <span>{children}</span>
    </div>
  );
};

export default DailyForcastInfoCard;
