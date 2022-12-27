import React from "react";
import Image from "next/image";
import BulletedList from "./BulletedList";

const ChronoDetail = ({image, workplace, jobTitle, listItems}) => {
  return (
    <div className="flex flex-col sm:flex-row self-start">
      <Image
        src={image && image}
        width={75}
        height={75}
        alt=""
        className="object-cover h-[75px] my-1.5"
      />
      <div className="mt-1 sm:mt-0 sm:ml-8">
        <h1 className="font-bold text-lg">
          {workplace && workplace}
        </h1>
        <h2 className="italic text-md">{jobTitle && jobTitle}</h2>
        <BulletedList listItems={listItems && listItems} />
      </div>
    </div>
  );
};

export default ChronoDetail;
