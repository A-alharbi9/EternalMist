import React, { Dispatch, SetStateAction, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

type props = {
  toggle: boolean;
};

function MobileNav({ toggle }: props) {
  return (
    <div
      className={`fixed lg:hidden top-12 right-0 left-0 h-full bg-slate-100 z-50 ${
        toggle ? 'translate-x-[0%]' : 'translate-x-[110%]'
      } duration-500`}
    >
      <div className="flex flex-col justify-center items-center h-4/5">
        <div className="text-3xl cursor-default">
          <p>Paradoxen</p>
        </div>
        <div className="flex flex-col justify-around items-center h-2/3">
          <ul className="list-none">
            <li className="flex flex-col justify-center items-center px-2 mx-5 my-5 h-1/2 text-lg hover:text-slate-400 cursor-pointer">
              Home
            </li>
            <li className="flex flex-col justify-center items-center px-2 mx-5 my-5 h-2/3 text-lg hover:text-slate-400 cursor-pointer">
              Contact
            </li>
            <li className="flex flex-col justify-center items-center px-2 mx-5 my-5 h-1/2 text-lg hover:text-slate-400 cursor-pointer">
              About
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
