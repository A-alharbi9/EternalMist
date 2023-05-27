import { FaAmazon, FaApplePay, FaFedex, FaStripe } from 'react-icons/fa';
import { SiWoocommerce } from 'react-icons/si';

function Sponsors() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-48 bg-slate-50 opacity-30">
      <div className="flex justify-around items-center w-[95%] lg:w-[75%]">
        <FaFedex className="w-[10rem] h-10 lg:w-20 lg:h-14" />
        <SiWoocommerce className="w-[10rem] h-10 lg:w-28 lg:h-24" />
        <FaAmazon className="w-[10rem] h-10 lg:w-20 lg:h-10" />
        <FaApplePay className="w-[10rem] h-10 lg:w-20 lg:h-14" />
        <FaStripe className="w-[10rem] h-10 lg:w-20 lg:h-14" />
      </div>
    </div>
  );
}

export default Sponsors;
