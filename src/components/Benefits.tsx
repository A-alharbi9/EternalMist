import { TbTopologyStar3 } from 'react-icons/tb';

function Benefits() {
  return (
    <div className=" flex flex-col lg:flex-row justify-center items-center pb-8 lg:pb-0">
      <div className=" flex flex-col lg:flex-row justify-around items-center h-auto lg:min-h-[90vh] w-auto lg:w-[85%] xl:w-[80%]">
        <div className="flex flex-col justify-between items-center h-64 lg:w-[25%] mb-10 lg:mb-0">
          <div className="flex flex-col items-center justify-center">
            <span className=" bg-slate-200 rounded-3xl py-2 px-2 w-8 mb-4">
              <TbTopologyStar3 size={15} />
            </span>
            <p className="font-semibold text-lg">Enchanting scent</p>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <span className=" bg-slate-200 rounded-3xl py-2 px-2 w-8 mb-4">
              <TbTopologyStar3 size={15} />
            </span>
            <p className="font-semibold text-lg">Lasting fragrance</p>
          </div>
        </div>
        <div className="rounded-[10%] lg:rounded-[50%] w-96 lg:w-80 h-80 my-20 lg:my-0 overflow-hidden">
          <img
            src="../assets/benefits_image.jpg"
            alt="benefit_image"
            className="h-[27rem] w-full"
          />
        </div>
        <div className="flex flex-col justify-between items-center h-64 lg:w-[25%] my-4 lg:my-0">
          <div className="flex flex-col items-center justify-center">
            <span className=" bg-slate-200 rounded-3xl py-2 px-2 w-8 mb-4">
              <TbTopologyStar3 size={15} />
            </span>
            <p className="font-semibold text-lg">Exquisite craftsmanship</p>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <span className=" bg-slate-200 rounded-3xl py-2 px-2 w-8 mb-4">
              <TbTopologyStar3 size={15} />
            </span>
            <p className="font-semibold text-lg">Layered scent</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
