import React from "react";
import Image from "next/image";

function Landing() {
  return (
    <div className="grid grid-cols-2 h-screen w-full bg-gradient-to-tr from-[#f5f7fa] to-[#c3cfe2]">
      <div className=" flex justify-center items-center flex-col ">
        <div className="max-w-[80%]">
          <p className="text-[40px]">Hello Mate 👋</p>
          <p className="text-[50px] font-[700]">I'm Goutham Krishna P S</p>
          <p className="text-[40px]">
            a{" "}
            <span className="text-blue-500 font-[700]">
              Full Stack Developer
            </span>
          </p>
          <p className="text-[14px] text-gray-500 mt-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit
            assumenda vitae quibusdam consectetur adipisicing elit. Iure velit
            assumenda vitae quibusdam
          </p>
          <div className="flex justify-start items-center gap-5 pt-[20px]">
            <button className="px-[30px] py-[10px] border border-blue-500 bg-blue-100">
              Contact
            </button>
            <button className="px-[30px] py-[10px] border border-gray-300 bg-white">
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div className=" h-screen w-full">
      </div>
    </div>
  );
}

export default Landing;
