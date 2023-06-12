function Stats() {
  return (
    <div className="flex flex-col justify-center items-center w-full lg:h-full py-5 bg-slate-100/70">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-around h-[80%] lg:w-[90%] 2xl:w-[80%] py-8">
        <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-[60%] xl:w-2/5 py-8">
          <p className="font-extrabold text-3xl md:text-4xl">
            Step into the mist
          </p>
          <p className="font-light text-center lg:text-left text-sm md:text-base w-[80%] md:w-2/3 lg:w-[70%] xl:w-[85%] 2xl:w-4/5 my-7">
            Treat yourself to our enchanting aroma that will transport you to a
            world of pure indulgence and glamour. Made with the finest
            ingredients, it's the ultimate accessory to elevate your style. With
            preorders flooding in, Eternal Mist has captured the hearts of
            fragrance enthusiasts around the world.
          </p>
          <div className="flex justify-around w-full lg:w-2/3 mb-4 text-center lg:text-left">
            <div className="flex flex-col justify-around w-full lg:w-2/3 my-4">
              <p className="text-lg md:text-2xl lg:text-xl font-bold">15K+</p>
              <p className="text-sm font-thin text-slate-700">
                5 stars reviews
              </p>
            </div>
            <div className="flex flex-col justify-around w-full lg:w-2/3 my-4">
              <p className="text-lg md:text-2xl lg:text-xl font-bold">115K+</p>
              <p className="text-sm font-thin text-slate-700">preorders</p>
            </div>
          </div>
          <div className="flex justify-around w-full lg:w-2/3 text-center lg:text-left">
            <div className="flex flex-col justify-around w-full lg:w-2/3 my-4">
              <p className="text-lg md:text-2xl lg:text-xl font-bold">95K+</p>
              <p className="text-sm font-thin text-slate-700">deals</p>
            </div>
            <div className="flex flex-col justify-around w-full lg:w-2/3 my-4">
              <p className="text-lg md:text-2xl lg:text-xl font-bold">215K+</p>
              <p className="text-sm font-thin text-slate-700">
                transactions made
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-center">
          <img
            src={'../assets/stats_front_image.webp'}
            alt="stats_front_image"
            className="absolute bottom-[25%] lg:-bottom-0 xl:bottom-0 lg:right-48 xl:right-60 h-[50%] md:h-[55%] lg:h-[65%] xl:h-[65%] w-[12rem] sm:w-[18rem] md:w-[35%] lg:w-[14rem] xl:w-[85%] rounded-lg border-solid border-8 border-white"
            loading="lazy"
          />
          <div className="flex justify-center w-full lg:w-[17rem] xl:w-[18rem]">
            <img
              src={'../assets/stats_back_image.webp'}
              alt="stats_back_image"
              className="h-[30rem] sm:h-[45rem] md:h-[35rem] lg:h-[90%] w-[20rem] sm:w-[30rem] md:w-[30rem] lg:w-full rounded-lg mb-10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
