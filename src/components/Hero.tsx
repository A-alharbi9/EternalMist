function Hero() {
  return (
    <div className="flex justify-center items-center gap-28 bg-gradient-to-bl from-orange-400 to-white h-screen lg:h-[45vw]">
      <div className="flex justify-center lg:justify-between lg:w-[65%]">
        <div className="flex flex-col justify-center items-center lg:items-start w-[80%] lg:w-[45%]">
          <label>Paradoxen</label>
          <h1 className=" text-4xl lg:text-6xl font-bold">Eternal Mist</h1>
          <p className="my-5 py-3 text-center lg:text-left">
            Our new perfume collection. An invigorating mix of oriental oud and
            french aroma.
          </p>
          <div className="flex flex-col lg:flex-row justify-between lg:w-64">
            <button className=" bg-orange-300 hover:bg-orange-400 border border-black hover:text-white py-1.5 px-5 mb-5 lg:mb-0 rounded-xl duration-200">
              Order Now
            </button>
            <button className="bg-slate-100 hover:bg-slate-500 border border-orange-400 hover:text-white py-1.5 px-5 rounded-xl duration-200">
              learn More
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="../assets/hero_image.jpg"
            alt="hero_image"
            className="w-64 h-80 mx-5 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
