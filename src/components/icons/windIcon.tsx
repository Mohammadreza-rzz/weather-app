import React from "react";

interface IProps {
  className?: string;
}

const WindIcon: React.FC<IProps> = ({ className }) => {
  return (
    <svg
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path d="M30 14c0-2.209-1.795-4-4-4-2.209 0-4 1.789-4 4h1c0-1.657 1.347-3 3-3 1.657 0 3 1.347 3 3 0 1.657-1.343 3-3.008 3h-22.992v1h23.002c2.208 0 3.998-1.795 3.998-4v0zM21 13c0-1.657-1.347-3-3-3-1.657 0-3 1.342-3 2.991v0.009h1c0-1.105 0.888-2 2-2 1.105 0 2 0.888 2 2 0 1.105-0.897 2-2.006 2h-11.994v1h12.001c1.657 0 2.999-1.347 2.999-3v0zM25 21c0 1.105-0.888 2-2 2v0c-1.105 0-2-0.895-2-1.994v-0.006h1c0 0.552 0.444 1 1 1v0c0.552 0 1-0.444 1-1v0c0-0.552-0.449-1-1.007-1h-13.993v-1h14.006c1.101 0 1.994 0.888 1.994 2v0 0z"></path>
    </svg>
  );
};

export default WindIcon;
