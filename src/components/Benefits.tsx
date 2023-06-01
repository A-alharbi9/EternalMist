import {
  GiAxeSwing,
  GiDividedSpiral,
  GiFireDash,
  GiMazeSaw,
} from 'react-icons/gi';

function Benefits() {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center pb-8 lg:pb-0 bg-gradient-to-b from-orange-200 via-orange-100 to-slate-100/70 py-8">
      <div className="flex flex-col lg:flex-row justify-around items-center lg:w-[70rem] xl:w-[65rem] xl:my-6">
        <div className="flex flex-col items-center justify-center h-full md:w-[30rem] lg:w-[15rem] py-7 md:my-7 md:rounded-xl bg-gradient-to-b from-orange-300 via-orange-50 to-slate-50 shadow-lg">
          <span className="bg-slate-200 rounded-full py-2 px-[0.5rem] w-10 mb-4">
            <GiDividedSpiral size={25} />
          </span>
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-lg">Enchanting scent</p>
            <p className="px-2 text-center text-sm sm:w-[90%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              sunt, debitis est qui dolorem facere.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full md:w-[30rem] lg:w-[15rem] py-7 md:my-7 md:rounded-xl bg-gradient-to-b from-orange-300 via-orange-50 to-slate-50 shadow-lg">
          <span className="bg-slate-200 rounded-full py-2 px-[0.5rem] w-10 mb-4">
            <GiFireDash size={25} />
          </span>
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-lg">Lasting fragrance</p>
            <p className="px-2 text-center text-sm md:w-[90%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              sunt, debitis est qui dolorem facere.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full md:w-[30rem] lg:w-[15rem] py-7 md:my-7 md:rounded-xl bg-gradient-to-b from-orange-300 via-orange-50 to-slate-50 shadow-lg">
          <span className="bg-slate-200 rounded-full py-2 px-[0.5rem] w-10 mb-4">
            <GiAxeSwing size={25} />
          </span>
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-lg">Exquisite craftsmanship</p>
            <p className="px-2 text-center text-sm md:w-[90%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              sunt, debitis est qui dolorem facere.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full md:w-[30rem] lg:w-[15rem] py-7 md:my-7 md:rounded-xl bg-gradient-to-b from-orange-300 via-orange-50 to-slate-50 shadow-lg">
          <span className="bg-slate-200 rounded-full py-2 px-[0.5rem] w-10 mb-4">
            <GiMazeSaw className="text-slate-800" size={25} />
          </span>
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-lg">Layered scent</p>
            <p className="px-2 text-center text-sm md:w-[90%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              sunt, debitis est qui dolorem facere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
