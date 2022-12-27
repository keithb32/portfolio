import React from "react";
import { FiExternalLink } from "react-icons/fi";

const LinkWithIcon = ({text, url}) => {
  return (
    <a
      className="inline text-md whitespace-nowrap text-blue-600 hover:text-blue-800 hover:underline visited:text-purple-600"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      <FiExternalLink className="inline-block text-md ml-1 align-middle mb-1" />
    </a>
  );
};

export default LinkWithIcon;
