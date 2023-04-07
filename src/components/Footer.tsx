import { AiFillSlackCircle, AiFillTwitterCircle } from 'react-icons/ai';
import { SiFacebook } from 'react-icons/si';

function Footer() {
  return (
    <footer className="flex flex-col justify-around items-center min-h-[50vh] lg:min-h-[30vh] border-t">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-11/12 my-5">
        <div className="hidden lg:flex flex-col justify-center items-center w-1/3 cursor-default">
          <p className="text-2xl">Paradoxen</p>
        </div>
        <div className="flex justify-around w-full lg:w-full mb-8 lg:mb-0">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold cursor-default">Support</p>
            <div className="flex flex-col justify-center items-center mt-3">
              <a href="#" className="hover:text-slate-400 duration-150">
                FAQ
              </a>
              <a href="#" className="hover:text-slate-400 duration-150">
                Orders & Payments
              </a>
              <a href="#" className="hover:text-slate-400 duration-150">
                Shipping & Returns
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold cursor-default">About us</p>
            <div className="flex flex-col justify-center items-center mt-3">
              <a href="#" className="hover:text-slate-400 duration-150">
                Our Story
              </a>
              <a href="#" className="hover:text-slate-400 duration-150">
                Meet Our Team
              </a>
              <a href="#" className="hover:text-slate-400 duration-150">
                Mission and Vision
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-around w-full lg:w-full">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold cursor-default">Programs</p>
            <div className="flex flex-col justify-center items-center mt-6">
              <a href="#" className="hover:text-slate-400 duration-150">
                Affiliate Program
              </a>
              <a href="#" className="hover:text-slate-400 duration-150">
                Loyalty Program
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-bold cursor-default">Privacy Policy</p>
            <div className="flex flex-col justify-center items-center mt-3">
              <a href="#" className="hover:text-slate-400 duration-150">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-slate-400 duration-150">
                Data Collection
              </a>
              <a href="#" className="hover:text-slate-400 duration-150">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around w-2/3 lg:w-1/4 mb-2">
        <span className=" hover:text-slate-400 duration-75 cursor-pointer">
          <AiFillTwitterCircle size={35} />
        </span>
        <span className=" hover:text-slate-400 duration-75 cursor-pointer">
          <AiFillSlackCircle size={35} />
        </span>
        <span className=" hover:text-slate-400 duration-75 cursor-pointer">
          <SiFacebook size={30} />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
