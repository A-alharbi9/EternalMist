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

// import { TbTopologyStar3 } from 'react-icons/tb';

// function Benefits() {
//   return (
//     <div className=" flex flex-col lg:flex-row justify-center items-center pb-8 lg:pb-0 bg-gradient-to-b from-orange-200 via-orange-50 to-slate-100">
//       <div className=" flex flex-col lg:flex-row justify-around items-center h-auto lg:min-h-[90vh] w-auto lg:w-[85%] xl:w-[80%]">
//         <div className="flex flex-col justify-between items-center h-64 lg:w-[25%] mb-10 lg:mb-0">
//           <div className="flex flex-col items-center justify-center">
//             <span className=" bg-slate-200 rounded-3xl py-2 px-2 w-8 mb-4">
//               <TbTopologyStar3 size={15} />
//             </span>
//             <p className="font-semibold text-lg">Enchanting scent</p>
//           </div>
//           <div className="flex flex-col items-center justify-center mt-4">
//             <span className=" bg-slate-200 rounded-3xl py-2 px-2 w-8 mb-4">
//               <TbTopologyStar3 size={15} />
//             </span>
//             <p className="font-semibold text-lg">Lasting fragrance</p>
//           </div>
//         </div>
//         <div className="rounded-[10%] lg:rounded-[50%] w-96 lg:w-80 h-80 my-20 lg:my-0 overflow-hidden">
//           <img
//             src="../assets/benefits_image.jpg"
//             alt="benefit_image"
//             className="h-[27rem] w-full"
//           />
//         </div>
//         <div className="flex flex-col justify-between items-center h-64 lg:w-[25%] my-4 lg:my-0">
//           <div className="flex flex-col items-center justify-center">
//             <span className=" bg-slate-200 rounded-3xl py-2 px-2 w-8 mb-4">
//               <TbTopologyStar3 size={15} />
//             </span>
//             <p className="font-semibold text-lg">Exquisite craftsmanship</p>
//           </div>
//           <div className="flex flex-col items-center justify-center mt-4">
//             <span className=" bg-slate-200 rounded-3xl py-2 px-2 w-8 mb-4">
//               <TbTopologyStar3 size={15} />
//             </span>
//             <p className="font-semibold text-lg">Layered scent</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Benefits;
