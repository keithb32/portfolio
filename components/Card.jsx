import React from "react";

// https://www.youtube.com/watch?v=vqKie-xmcFs&t=2s
const Card = ({ image, title, description, tags }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md mx-2 h-100">
      {/* Card banner image */}
      <img
        src="https://unsplash.it/250/250"
        className="w-full h-32 sm:h-48 object-cover"
      />

      {/* Card text */}
      <div className="m-4">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
