import { list } from "postcss";
import React from "react";

const BulletedList = ({ listItems }) => {
  return (
    <div>
      <ul>
        {listItems &&
          listItems.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

export default BulletedList;
