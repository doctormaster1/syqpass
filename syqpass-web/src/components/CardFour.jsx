import React from "react";

const CardFour = () => {
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
              d="M83 277 c-31 -14 -47 -56 -33 -92 9 -24 7 -31 -11 -51 -13 -14 -23
-41 -26 -68 l-6 -46 153 0 153 0 -6 46 c-3 27 -13 54 -26 68 -18 20 -20 27
-11 51 13 33 -2 79 -28 91 -27 11 -135 12 -159 1z m65 -23 c45 -31 11 -103
-43 -90 -46 12 -53 79 -11 96 29 12 29 12 54 -6z m78 8 c19 -12 34 -50 28 -67
-7 -17 -35 -35 -56 -35 -9 0 -13 15 -11 53 0 28 2 53 2 55 2 5 27 1 37 -6z
m-46 -142 c11 -11 20 -33 20 -50 l0 -30 -85 0 c-83 0 -85 1 -85 24 0 13 9 35
21 50 27 34 98 37 129 6z m89 -6 c12 -15 21 -38 21 -51 0 -21 -4 -24 -32 -21
-28 3 -33 7 -36 33 -2 17 -8 34 -13 40 -16 16 -10 25 15 25 15 0 33 -11 45
-26z"
            />
          </g>
        </svg>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            1
          </h4>
          <span className="text-sm font-medium">Total Users</span>
        </div>
      </div>
    </div>
  );
};

export default CardFour;
