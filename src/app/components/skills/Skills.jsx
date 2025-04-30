import { LinearProgress } from "@mui/joy";
import React from "react";

function Skills() {
  return (
    <div className="w-full h-[400px] bg-slate-100 grid grid-cols-2 gap-4">
      <div className="flex justify-center items-center h-full w-full">
       <div className="w-[75%]">
            <h3 className="text-blue-400 font-semibold text-[16px] text-left">
              SKILL SET
            </h3>
            <p className=" text-[30px] text-left ">
              Creative & Professional Skills Experience in Few Area
            </p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis atque
              nobis hic expedita, fugit quae sed consectetur reprehenderit tenetur a
              recusandae eius at ducimus voluptates eveniet nisi labore! Excepturi.
            </p>
            <button className="bg-blue-500 h-[40px] w-[150px] rounded-sm text-white mt-4">See Projects</button>
       </div>
      </div>
      <div className="flex justify-center items-center h-full w-full">
        <div className="w-[75%] flex flex-col gap-4">
          <div className="flex flex-col  justify-center">
            <p className="text-gray-500">Frontend Development</p>
            <div className="flex gap-2 items-center">
              <LinearProgress determinate variant="solid" value={70} />{" "}
              <p className="text-blue-800 font-[700]">70 %</p>
            </div>
          </div>
          <div className="flex flex-col  justify-center">
            <p className="text-gray-500">Frontend Development</p>
            <div className="flex gap-2 items-center">
              <LinearProgress determinate variant="solid" value={50} />{" "}
              <p className="text-blue-800 font-[700]">50 %</p>
            </div>
          </div>
          <div className="flex flex-col  justify-center">
            <p className="text-gray-500">Frontend Development</p>
            <div className="flex gap-2 items-center">
              <LinearProgress determinate variant="solid" value={80} />{" "}
              <p className="text-blue-800 font-[700]">80 %</p>
            </div>
          </div>
          <div className="flex flex-col  justify-center">
            <p className="text-gray-500">Frontend Development</p>
            <div className="flex gap-2 items-center">
              <LinearProgress determinate variant="solid" value={60} />{" "}
              <p className="text-blue-800 font-[700]">60 %</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
