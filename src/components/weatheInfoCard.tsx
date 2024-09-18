import React from "react";

interface IProps {
  cardLabel?: string;
}

const WeatherInfoCard: React.FC<IProps> = ({ cardLabel }) => {
  return (
    <div>
      <h4>{cardLabel}</h4>
    </div>
  );
};

export default WeatherInfoCard;
