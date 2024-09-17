import React from "react";

interface IProps {
  className?: string;
}

const MoonSetIcon: React.FC<IProps> = ({ className }) => {
  return (
    <svg
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path d="M21.307 15.331c-0.597 2.392-2.76 4.163-5.337 4.163-3.038 0-5.5-2.462-5.5-5.5 0-2.577 1.772-4.739 4.163-5.337 0.351-0.088 0.716-0.142 1.091-0.158-0.165 0.468-0.254 0.971-0.254 1.495 0 2.485 2.015 4.5 4.5 4.5 0.524 0 1.027-0.090 1.495-0.254-0.016 0.374-0.070 0.739-0.158 1.091v0zM7.508 22c-0.281 0-0.508-0.232-0.508-0.5 0-0.276 0.227-0.5 0.508-0.5h6.075l2.917 2.5 2.917-2.5h6.075c0.281 0 0.508 0.232 0.508 0.5 0 0.276-0.227 0.5-0.508 0.5h-5.492l-3.5 3-3.5-3h-5.492z"></path>
    </svg>
  );
};

export default MoonSetIcon;
