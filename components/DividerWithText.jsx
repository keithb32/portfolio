import React from "react";

const DividerWithText = ({ text }) => {
  return (
    <div className="text-divider mb-3">
      <h1 className="text-3xl font-semibold">{text}</h1>
    </div>
  );
};

export default DividerWithText;
