import React from "react";
import DividerWithText from "./DividerWithText";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="bg-[#212427]/5 h-fit py-6">
        <div className="flex flex-col h-full max-w-[1240px] m-auto justify-center items-center" id="contact">

            {/* Social Icons */}
            <div className="grid grid-cols-1 gap-2 w-1/4 mb-6 sm:grid-cols-3 sm:gap-0">
                <div className="inline-block mx-auto w-1/3">
                    <AiOutlineMail size={40} />
                </div>
                <div className="inline-block mx-auto  w-1/3">
                    <AiFillGithub size={40}/>
                </div>
                <div className="inline-block mx-auto w-1/3">
                    <AiFillLinkedin size={40} />
                </div>
            </div>

            <p className="text-lg">Keith Butler</p>
        </div>
    </div>
  );
};

export default Contact;
