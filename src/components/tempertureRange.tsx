import React from "react";

interface IProps {
  minTemp?: number;
  maxTemp?: number;
}

const TempertureRenge: React.FC<IProps> = () => {
  return (
    <div>
      <span className="relative inline-flex translate-x-1">
        <p className="text-md text-gray-100/70 bg-blue-400">24</p>
        <span className="w-1.5 h-1.5 inline-block bg-transparent border-2 border-gray-100/70 rounded-full"></span>
      </span>
      <div className="bg-gray_alpha-0/70 w-28 h-1 rounded-lg inline-block relative mx-4 overflow-hidden">
        <span className="inline-block w-28 h-1 rounded-lg bg-tempRangGradiant absolute"></span>
      </div>
      <span className="relative inline-flex translate-x-1">
        <p className="text-md text-gray-100 bg-blue-400">24</p>
        <span className="w-1.5 h-1.5 inline-block bg-transparent border-2 border-gray-100 rounded-full"></span>
      </span>
    </div>
  );
};

export default TempertureRenge;
