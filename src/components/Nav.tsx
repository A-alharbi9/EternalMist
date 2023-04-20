import { AiOutlineCloseCircle } from 'react-icons/ai';
import { HiBars3 } from 'react-icons/hi2';
import MobileNav from './MobileNav';
import { useState } from 'react';

export default function Nav() {
  const [navToggle, setNavToggle] = useState<boolean>(false);
  return (
    <div className="fixed lg:relative inset-0 flex justify-end lg:justify-between lg:items-center py-2 px-1 bg-slate-100 h-12 z-50">
      <div className="hidden lg:flex justify-center w-1/3 lg:w-1/6 text-base">
        <p>Paradoxen</p>
      </div>
      <div className="block lg:hidden mr-4 px-2 cursor-pointer">
        {navToggle ? (
          <AiOutlineCloseCircle
            size={34}
            className=" hover:text-red-500 duration-150 cursor-pointer"
            onClick={() => setNavToggle((prev) => !prev)}
          />
        ) : (
          <HiBars3
            size={35}
            className=" hover:text-slate-400 duration-150 cursor-pointer"
            onClick={() => setNavToggle((prev) => !prev)}
          />
        )}
      </div>
      <MobileNav toggle={navToggle} />
      <div className="hidden lg:flex justify-center w-[30%]">
        <ul className="flex h-full list-none">
          <li className="flex flex-col justify-center items-center px-2 mx-5 hover:text-slate-400 cursor-pointer">
            Home
          </li>
          <li className="flex flex-col justify-center items-center px-2 mx-5 hover:text-slate-400 cursor-pointer">
            Contact
          </li>
          <li className="flex flex-col justify-center items-center px-2 mx-5 hover:text-slate-400 cursor-pointer">
            About
          </li>
        </ul>
      </div>
    </div>
  );
}
