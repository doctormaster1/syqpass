import React from "react";

const CardTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <svg
          className="fill-primary dark:fill-white"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="32.000000pt"
          height="32.000000pt"
          viewBox="0 0 32.000000 32.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M44 267 c-2 -7 -3 -60 -2 -118 l3 -104 115 0 115 0 0 115 0 115 -113
3 c-87 2 -114 0 -118 -11z m206 -107 l0 -90 -90 0 -90 0 0 90 0 90 90 0 90 0
0 -90z"
            />
            <path
              d="M97 222 c-16 -18 -16 -21 -2 -35 19 -19 19 -26 0 -47 -14 -15 -13
-19 5 -40 16 -18 20 -20 20 -7 0 10 7 17 15 17 8 0 15 5 15 10 0 6 -7 10 -15
10 -10 0 -15 10 -15 30 0 20 5 30 15 30 8 0 15 5 15 10 0 6 -6 10 -14 10 -8 0
-16 7 -18 16 -3 14 -5 13 -21 -4z"
            />
            <path
              d="M200 227 c0 -10 -7 -17 -15 -17 -8 0 -15 -4 -15 -10 0 -5 7 -10 15
-10 10 0 15 -10 15 -30 0 -20 -5 -30 -15 -30 -8 0 -15 -4 -15 -10 0 -5 7 -10
15 -10 8 0 15 -7 15 -17 0 -13 4 -11 20 7 18 21 19 25 5 40 -17 18 -20 40 -6
40 19 0 19 29 0 46 -17 16 -19 16 -19 1z"
            />
          </g>
        </svg>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            1
          </h4>
          <span className="text-sm font-medium">Total Switch</span>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
