import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="bg-[#212427]/5 h-fit py-6">
      <div
        className="flex flex-col h-full max-w-[1240px] m-auto justify-center items-center"
        id="contact"
      >
        {/* Social Icons */}
        <div className="grid grid-cols-1 gap-2 w-1/4 mb-4 sm:grid-cols-3 sm:gap-0">
          <div className="inline-block mx-auto ">
            <a href="mailto:kab7em@virginia.edu">
              <AiOutlineMail size={40} />
            </a>
          </div>
          <div className="inline-block mx-auto ">
            <a
              href="https://github.com/keithb32"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={40} />
            </a>
          </div>
          <div className="inline-block mx-auto ">
            <a
              href="https://www.linkedin.com/in/keith-butler-72366522a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={40} />
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-lg">© Keith Butler 2023</p>
        <p className="text-sm">Built with NextJS and Tailwind CSS</p>
      </div>
    </div>
  );
};

export default Contact;
