import React from "react";

const CardThree = () => {
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
              d="M110 278 c-35 -48 -38 -80 -10 -108 41 -41 120 -12 120 43 0 26 -54
107 -70 107 -5 0 -23 -19 -40 -42z m70 -20 c11 -18 20 -41 20 -50 0 -28 -19
-31 -32 -4 -6 14 -14 26 -18 26 -4 0 -12 -12 -18 -26 -13 -27 -32 -24 -32 4 0
22 37 82 50 82 6 0 19 -15 30 -32z m-20 -78 c0 -5 -4 -10 -10 -10 -5 0 -10 5
-10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z"
            />
            <path
              d="M24 227 c-3 -8 -4 -52 -2 -98 l3 -84 125 0 125 0 3 93 c2 77 0 93
-13 98 -9 4 -19 3 -23 -1 -4 -4 -1 -10 6 -12 19 -7 14 -40 -8 -46 -13 -3 -20
-14 -20 -30 0 -25 -2 -25 -70 -25 -68 0 -70 0 -70 25 0 16 -7 27 -20 30 -20 5
-29 43 -10 43 6 0 10 5 10 10 0 15 -30 12 -36 -3z m36 -87 c0 -11 -4 -20 -10
-20 -5 0 -10 9 -10 20 0 11 5 20 10 20 6 0 10 -9 10 -20z m200 0 c0 -11 -4
-20 -10 -20 -5 0 -10 9 -10 20 0 11 5 20 10 20 6 0 10 -9 10 -20z m-160 -60
c0 -16 -7 -20 -30 -20 -23 0 -30 4 -30 20 0 16 7 20 30 20 23 0 30 -4 30 -20z
m80 0 c0 -16 -7 -20 -30 -20 -23 0 -30 4 -30 20 0 16 7 20 30 20 23 0 30 -4
30 -20z m80 0 c0 -16 -7 -20 -30 -20 -23 0 -30 4 -30 20 0 16 7 20 30 20 23 0
30 -4 30 -20z"
            />
          </g>
        </svg>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            1
          </h4>
          <span className="text-sm font-medium">Total Firewall</span>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
