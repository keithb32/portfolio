import React, { useState, useEffect } from "react";
import Image from "next/image";
import LinkWithIcon from "./LinkWithIcon";

/***************************************************************************************
*  REFERENCES
*  
*  Title: Tailwind CSS Tutorial #9 - Cards
*  Author: The Net Ninja
*  Date: 7/13/2020
*  URL: https://www.youtube.com/watch?v=vqKie-xmcFs&t=2s
*
*  Title: Tailwind CSS Tutorial #10 - Badges
*  Author: The Net Ninja
*  Date: 7/15/2020
*  URL: https://www.youtube.com/watch?v=cY0XJY98d3w
*
***************************************************************************************/

const Card = ({ image, url, title, description, tags, objectFit }) => {
  const [tagsHidden, setTagsHidden] = useState(false);

  useEffect(() => {}, [tagsHidden]);

  return (
    <div className="flex w-[90%] flex-col justify-start align-stretch bg-white rounded-lg overflow-hidden shadow-md mx-2 mb-4 relative">
      {/* Card banner image */}
      <Image
        src={image && image}
        width={250}
        height={250}
        alt=""
        className={`w-full h-32 sm:h-48 ${objectFit}`}
        onMouseOver={() => setTagsHidden(true)}
        onMouseOut={() => setTagsHidden(false)}
      />

      {/* Card text */}
      <div className="mx-4 mt-4 mb-2">
        <LinkWithIcon text={title} url={url && url} />
        <p className="text-md mt-1">{description}</p>
      </div>

      {/* Card tags */}
      <div
        className={`absolute top-0 ml-2 mt-2 hidden md:block ${
          tagsHidden ? "visible" : "invisible"
        }`}
      >
        {tags &&
          tags.map((tag, index) => (
            <div
              className="bg-[#212427] text-white p-1 ml-1 text-xs font-bold rounded-full shadow-lg inline-block"
              key={index}
            >
              <span>{tag}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
