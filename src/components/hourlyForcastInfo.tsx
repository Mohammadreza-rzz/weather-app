import React from "react";

interface IProps {
  children: React.ReactNode;
}

const HourlyForecastInfoLabel: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between items-center bg-blue-300 min-w-10 max-w-10">
      <h3 className="text-white text-paragraph_sm">Now</h3>
      <span className="inline-block w-fit h-fit my-2">{children}</span>
      <span className="relative inline-flex translate-x-1">
        <p className="text-md text-gray-100 bg-blue-400">24</p>
        <span className="w-1.5 h-1.5 inline-block bg-transparent border-2 border-gray-100 rounded-full"></span>
      </span>
    </div>
  );
};

export default HourlyForecastInfoLabel;
