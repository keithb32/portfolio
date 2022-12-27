import React from "react";
import Image from "next/image";

// https://www.youtube.com/watch?v=vqKie-xmcFs&t=2s
// https://www.youtube.com/watch?v=cY0XJY98d3w
const Card = ({ image, title, description, tags }) => {
  return (
    <div className="flex flex-col justify-start align-stretch bg-white rounded-lg overflow-hidden shadow-md mx-2 mb-4 relative">
      {/* Card banner image */}
      <Image
        src="https://unsplash.it/250/250"
        width={250}
        height={250}
        alt=""
        className="w-full h-32 sm:h-48 object-cover"
      />

      {/* Card text */}
      <div className="mx-4 mt-4 mb-2">
        <h2 className="font-bold text-md">{title}</h2>
        <p className="text-md">{description}</p>
      </div>

      {/* Card tags */}
      <div className="absolute top-0 ml-2 mt-2">
        {tags &&
          tags.map((tag, index) => (
            <div class="bg-[#212427] text-white p-1 text-xs font-bold rounded-full shadow-lg inline-block" key={index}>
              <span>{tag}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
