import React from "react";

function Expertise() {
  return (
    <div className="mt-[100px] w-full h-screen bg-white px-[100px]">
      <h3 className="text-blue-400 font-semibold text-[16px] text-center">
        SKILL SET
      </h3>
      <p className=" text-[30px] text-center">Awesome Services For You .. !</p>
      <div className="grid grid-cols-3 w-full gap-6 mt-[50px]">
        <div className="border-2 border-gray-200 rounded-md h-[300px] "></div>
        <div className="border-2 border-gray-200 rounded-md h-[300px] "></div>
        <div className="border-2 border-gray-200 rounded-md h-[300px] "></div>
      </div>
    </div>
  );
}

export default Expertise;
