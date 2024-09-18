import React from "react";
import { cn } from "@/utils";
import { TempertureRenge } from "@/components";

interface IProps {
  children?: React.ReactElement;
  hasBorder?: boolean;
}

const DailyForcastInfoCard: React.FC<IProps> = ({ children }) => {
  return (
    <div className="bg-transparent flex items-center justify-between py-2 px-1 mx-2 border-t border-gray-200">
      <h3 className="text-paragraph_lg text-white">Today</h3>
      <span>{children}</span>
      <TempertureRenge />
    </div>
  );
};

export default DailyForcastInfoCard;
