import React from "react";

import userData from "../constant/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div id="main-hero" className="justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="text-zone w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20 mt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
          Hi,
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
        I&apos;m Aniket,
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
          Web Developer,
        </h1>
        <p className="gray-text">Front End Developer </p>
      </div>
      {/* Image container */}
      <div className=" lg:block relative w-full md:w-1/2 -mr-40 ">
        <div className="w-3/4 ">
          <img src={userData.avatarUrl} alt="avatar" className=" shadow" />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That&apos;s me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
