const Buy = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[60vh] md:h-[40vh] rounded-xl my-5 lg:my-10">
      <div className="flex flex-col justify-around items-center w-full md:w-4/5 h-5/6 bg-neutral-50 py-7">
        <p className="text-2xl font-bold text-center w-[80%] lg:w-[40%]">
          Elevate your senses, captivate your soul with Eternal Mist
        </p>
        <div className="flex flex-col md:flex-row justify-between md:w-72 mt-6">
          <button className=" bg-orange-300 hover:bg-orange-400 border border-black hover:text-white py-1.5 px-5 mb-5 md:mb-0 lg:mb-0 rounded-xl duration-200">
            Order Now
          </button>
          <button className="bg-slate-100 hover:bg-slate-500 border border-orange-400 hover:text-white py-1.5 px-5  rounded-xl duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buy;
