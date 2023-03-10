import React from "react";
import BulletedList from "./BulletedList";

const ChronoDetail = ({ image, workplace, jobTitle, time, listItems }) => {
  return (
    <div className="flex flex-col sm:flex-row self-start">
      {image}
      <div className="mt-1 sm:mt-0 sm:ml-8">
        <h1 className="font-bold text-lg">{workplace && workplace}</h1>
        <h2 className="italic text-md">{jobTitle && jobTitle}</h2>
        <h2 className="font-normal text-base text-gray-600">{time}</h2>
        <BulletedList listItems={listItems && listItems} />
      </div>
    </div>
  );
};

export default ChronoDetail;
