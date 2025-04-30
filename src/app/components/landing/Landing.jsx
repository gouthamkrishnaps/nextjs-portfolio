import React from "react";
import Image from "next/image";
import mypic from "@home/assets/goutham.jpg";
import react from "@home/assets/react.png";
import next from "@home/assets/nextjs.png";
import node from "@home/assets/nodejs.png";
import azure from "@home/assets/Azure.png";
import js from "@home/assets/jslogo.webp";
import { MdOutlineFileDownload } from "react-icons/md";
// import react from '

function Landing() {
  return (
    <div className="grid grid-cols-2 h-screen w-full bg-gradient-to-tr from-[#f5f7fa] to-[#c3cfe2]">
      <div className=" flex justify-center items-center flex-col ">
        <div className="max-w-[80%]">
          <p className="text-[40px]">Hello Mate 👋</p>
          <p className="text-[45px] font-[700] font-comfortaa">
            I'm Goutham Krishna P S
          </p>
          <p className="text-[40px]">
            a <span className="text-blue-500 font-[700]">Full Stack</span>{" "}
            Developer
          </p>
          <p className="text-[14px] text-gray-500 mt-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit
            assumenda vitae quibusdam consectetur adipisicing elit. Iure velit
            assumenda vitae quibusdam
          </p>
          <div className="flex justify-start items-center gap-5 pt-[20px]">
            {/* <button className="px-[30px] py-[10px] border border-blue-500 bg-blue-100">
              Contact
            </button> */}
            <button className="cursor-pointer relative bg-blue-500 py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-blue-500 transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]">
              <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
                <div className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"></div>
                <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-blue-100 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black">
                  <div className="size-[0.8rem] text-black group-hover:text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      height="100%"
                      width="100%"
                    >
                      <path
                        fill="currentColor"
                        d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-black text-white">
                Contact
              </div>
            </button>
            {/* <button className="px-[30px] py-[10px] border border-gray-300 bg-white">
              Download CV
            </button> */}
            <button className="cursor-pointer relative bg-blue-500 py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-blue-500 transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]">
              <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
                <div className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"></div>
                <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-blue-100 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black">
                  <div className="size-[1.3rem] text-black group-hover:text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] flex justify-center items-center">
                    <MdOutlineFileDownload fontSize={40} />
                  </div>
                </div>
              </div>
              <div className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-black text-white">
                Download CV
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="relative h-screen w-full flex justify-center items-center">
        {/* Right half with background color */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#9eb8e2] z-0" />

        {/* Content goes above the background */}
        <div className="relative z-10"></div>
        <div className="absolute w-full h-full flex justify-center items-center">
          <Image
            src={mypic}
            className="rounded-[50%] w-[350px] h-[350px] object-cover border-[10px] border-white"
            width={300}
            height={600}
            quality={100}
            alt="mypic"
          />
        </div>
        <div className="absolute top-[20%] left-[30%] shadow-md flex justify-center items-center w-[30px] h-[30px] rounded-md bg-white">
          <Image width={20} height={20} alt="aboslute" src={react} />
        </div>
        <div className="absolute top-[10%] right-[30%] shadow-md flex justify-center items-center w-[40px] h-[40px] rounded-md bg-white">
          <Image width={50} height={40} alt="aboslute" src={next} />
        </div>
        <div className="absolute bottom-[20%] left-[20%] shadow-md flex justify-center items-center w-[40px] h-[40px] rounded-md bg-white">
          <Image width={50} height={50} alt="aboslute" src={node} />
        </div>
        <div className="absolute bottom-[20%] right-[20%] shadow-md flex justify-center items-center w-[30px] h-[30px] rounded-md bg-white">
          <Image width={20} height={20} alt="aboslute" src={azure} />
        </div>
        <div className="absolute top-[50%] right-[10%] shadow-md flex justify-center items-center w-[30px] h-[30px] rounded-md bg-white">
          <Image width={20} height={20} alt="aboslute" src={js} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
