import { TbTopologyStar3 } from 'react-icons/tb';
import { TiFeather } from 'react-icons/ti';

function Features() {
  return (
    <div className=" flex flex-col justify-around items-center min-h-[90vh] bg-gradient-to-t from-orange-200 via-orange-50 to-white">
      <h2 className="text-3xl font-semibold my-10">What sets us apart</h2>
      <div className="flex flex-col lg:flex-row justify-around items-center w-full md:w-[80%] py-8 lg:py-0">
        <img
          src={'../assets/features_image.webp'}
          alt="Features_image"
          className="w-[27rem] lg:w-[45%] xl:w-[35%] lg:h-[23rem] xl:h-[25rem] rounded-lg"
          loading="lazy"
        />
        <div className="flex flex-col justify-around items-center h-[95%] py-6 lg:py-4 my-5 w-full lg:w-80">
          <span className=" bg-slate-200 rounded-3xl py-2 px-2">
            <TbTopologyStar3 size={15} />
          </span>
          <p className="text-lg py-7 mb-3">Unique Scents</p>
          <span className="hidden lg:block bg-black h-[0.1rem] w-[90%] my-2"></span>
          <span className=" bg-slate-200 rounded-3xl py-2 px-2 mt-4">
            <TiFeather size={15} />
          </span>
          <p className="text-lg py-7">Natural Ingredients</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
