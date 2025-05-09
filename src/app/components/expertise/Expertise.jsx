import React from "react";
import { SiAppstore } from "react-icons/si";

function Expertise() {
  return (
    <div className="mt-[100px] w-full h-auto bg-white px-[100px]">
      <h3 className="text-blue-400 font-semibold text-[16px] text-center">
        SKILL SET
      </h3>
      <p className=" text-[30px] text-center">Awesome Services For You .. !</p>
      <div className="grid grid-cols-3 w-full gap-6 mt-[50px]">
        <div className="border-2 border-gray-200 rounded-md h-[300px] flex bg-slate-200 p-1">
          <div className="w-28 bg-slate-200 px-5 flex justify-center ">
            <div className="bg-blue-500 rounded-md w-[50px] h-[50px] flex justify-center items-center mt-5">
              <SiAppstore size={30} color="white" />
            </div>
          </div>
          <div className="flex flex-grow flex-col p-10 bg-white rounded-md">
            <p className="text-[20px] font-[600]">Web Development</p>
            <p className="mt-5 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              nisi reprehenderit esse ullam animi ab asperiores fugiat tempore?
              reprehenderit esse ullam animi ab asperiores fugiat tempore?
            </p>
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-md h-[300px] flex bg-slate-200 p-1">
          <div className="w-28 bg-slate-200 px-5 flex justify-center ">
            <div className="bg-blue-500 rounded-md w-[50px] h-[50px] flex justify-center items-center mt-5">
              <SiAppstore size={30} color="white" />
            </div>
          </div>
          <div className="flex flex-grow flex-col p-10 bg-white rounded-md">
            <p className="text-[20px] font-[600]">Web Development</p>
            <p className="mt-5 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              nisi reprehenderit esse ullam animi ab asperiores fugiat tempore?
              reprehenderit esse ullam animi ab asperiores fugiat tempore?
            </p>
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-md h-[300px] flex bg-slate-200 p-1">
          <div className="w-28 bg-slate-200 px-5 flex justify-center ">
            <div className="bg-blue-500 rounded-md w-[50px] h-[50px] flex justify-center items-center mt-5">
              <SiAppstore size={30} color="white" />
            </div>
          </div>
          <div className="flex flex-grow flex-col p-10 bg-white rounded-md">
            <p className="text-[20px] font-[600]">Web Development</p>
            <p className="mt-5 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              nisi reprehenderit esse ullam animi ab asperiores fugiat tempore?
              reprehenderit esse ullam animi ab asperiores fugiat tempore?
            </p>
          </div>
        </div>
      </div>
      <div className="h-[200px] mt-20  mb-5 grid grid-cols-4 py-5 border-t border-b border-b-gray-300 border-t-gray-300">
        <div className="border-r border-r-gray-300 flex justify-center items-center flex-col">
          <p className="text-[30px]">68</p>
          <p className="text-[18px]">Happy Clients</p>
        </div>
        <div className="border-r border-r-gray-300 flex justify-center items-center flex-col">
          <p className="text-[30px]">68</p>
          <p className="text-[18px]">Happy Clients</p>
        </div>
        <div className="border-r border-r-gray-300 flex justify-center items-center flex-col">
          <p className="text-[30px]">68</p>
          <p className="text-[18px]">Happy Clients</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="text-[30px]">68</p>
          <p className="text-[18px]">Happy Clients</p>
        </div>
      </div>

    </div>
  );
}

export default Expertise;
