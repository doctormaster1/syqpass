import { useState, useEffect, useCallback } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrievePassword } from "../slices/PasswordSlice";

const CardOne = () => {
  const passwords = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(retrievePassword());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

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
              d="M80 160 l0 -120 80 0 80 0 0 120 0 120 -80 0 -80 0 0 -120z m140 0
l0 -100 -60 0 -60 0 0 100 0 100 60 0 60 0 0 -100z"
            />
            <path
              d="M120 230 c0 -5 18 -10 40 -10 22 0 40 5 40 10 0 6 -18 10 -40 10 -22
0 -40 -4 -40 -10z"
            />
            <path
              d="M120 190 c0 -5 18 -10 40 -10 22 0 40 5 40 10 0 6 -18 10 -40 10 -22
0 -40 -4 -40 -10z"
            />
            <path
              d="M150 110 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
            />
          </g>
        </svg>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {passwords.length}
          </h4>
          <span className="text-sm font-medium">Total Server</span>
        </div>

        {/* <span className='flex items-center gap-1 text-sm font-medium text-meta-3'>
          0.43%
          <svg
            className='fill-meta-3'
            width='10'
            height='11'
            viewBox='0 0 10 11'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z'
              fill=''
            />
          </svg>
        </span> */}
      </div>
    </div>
  );
};

export default CardOne;
