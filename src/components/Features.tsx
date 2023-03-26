import { TbTopologyStar3 } from 'react-icons/tb';
import { TiFeather } from 'react-icons/ti';

function Features() {
  return (
    <div className=" flex flex-col justify-around items-center h-[90vh]">
      <h2 className=" text-3xl font-semibold my-10">What sets us apart</h2>
      <div className="flex flex-col lg:flex-row justify-around w-[80vw]">
        <img
          src="https://img.freepik.com/free-photo/front-view-black-fragrance-bottle-with-yellow-design-isolated-white-wall_140725-11600.jpg?w=996&t=st=1679856436~exp=1679857036~hmac=1f40023f4940827234297815625d5968fdf6c8ab4ececf19ba9f48c584888057"
          alt=""
          className=" h-[80%] lg:h-80 rounded-lg"
        />
        <div className="flex flex-col justify-around items-center h-[95%] py-6 lg:py-4 my-5 w-full lg:w-80">
          <span className=" bg-slate-200 rounded-3xl py-2 px-2">
            <TbTopologyStar3 size={15} />
          </span>
          <p className="text-lg py-7 mb-3">Unique scents</p>
          <span className="hidden lg:block bg-black h-[0.1rem] w-[90%] my-2"></span>
          <span className=" bg-slate-200 rounded-3xl py-2 px-2">
            <TiFeather size={15} />
          </span>
          <p className="text-lg py-7">Natural Ingredients</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
