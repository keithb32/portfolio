import React from "react";

// https://www.youtube.com/watch?v=vqKie-xmcFs&t=2s
const Card = ({image, title, description, tags}) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md mx-2">
      <img src="https://unsplash.it/250/250" className="w-full h-32 sm:h-48 object-cover"/>
      <div className="m-4">
        <p>{title}</p>
        <p>Description</p>
      </div>
    </div>
  );
};

export default Card;
