import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

function Testimonials() {
  return (
    <div className="flex flex-col justify-around lg:justify-between items-center h-[48rem] lg:h-[30rem] xl:h-[30rem] lg:my-0 xl:my-0 lg:py-4">
      <p className="text-3xl lg:text-3xl font-bold h-5 mt-4 lg:mt-8 xl:mt-10 mb-8 lg:mb-0 xl:mb-8">
        What they say
      </p>
      <Swiper
        keyboard={{
          enabled: true,
        }}
        speed={2500}
        modules={[Keyboard, Navigation]}
        navigation
        className="mySwiper w-[95%] md:w-[80%] xl:w-[60%] h-[35rem] lg:h-[33rem] mt-5"
      >
        <SwiperSlide className="flex justify-center items-center h-auto lg:h-[23rem] ">
          <div className="flex flex-col lg:flex-row justify-around items-center text-center font-light w-[70%] lg:h-[80%]">
            <div className="flex flex-col justify-center items-center w-48 lg:w-2/3 overflow-hidden">
              <img
                src={'../assets/testimonials_image_one.webp'}
                alt="testimonials_image_one"
                className="lg:w-40 lg:h-52 rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col lg:justify-around lg:text-left lg:h-60 w-52 lg:w-2/3">
              <p className="text-sm lg:text-base font-semibold mt-6 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                dignissimos iusto quod deleniti officiis fuga nostrum dolor. Hic
                provident pariatur, nesciunt quidem voluptatem accusantium
                aliquid placeat alias, nisi sint vero!
              </p>
              <div className=" text-sm">
                <p className=" font-semibold">Alex Watson</p>
                <p className="font-light">some executive</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center h-auto lg:h-[23rem] ">
          <div className="flex flex-col lg:flex-row justify-around items-center text-center font-light w-[70%] lg:h-[90%]">
            <div className="flex flex-col justify-center items-center w-48 lg:w-2/3 overflow-hidden">
              <img
                src={'../assets/testimonials_image_two.webp'}
                alt="testimonials_image_two"
                className="lg:w-40 lg:h-52 rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col lg:justify-around lg:text-left lg:h-60 w-52 lg:w-2/3">
              <p className="text-sm lg:text-base font-semibold mt-6 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                dignissimos iusto quod deleniti officiis fuga nostrum dolor. Hic
                provident pariatur, nesciunt quidem voluptatem accusantium
                aliquid placeat alias, nisi sint vero!
              </p>
              <div className=" text-sm">
                <p className=" font-semibold">Alex Watson</p>
                <p className="font-light">some executive</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center h-auto lg:h-[23rem] ">
          <div className="flex flex-col lg:flex-row justify-around items-center text-center font-light w-[70%] lg:h-[90%]">
            <div className="flex flex-col justify-center items-center w-48 lg:w-2/3 overflow-hidden">
              <img
                src={'../assets/testimonials_image_one.webp'}
                alt="testimonials_image_three"
                className="lg:w-40 lg:h-52 rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col lg:justify-around lg:text-left lg:h-60 w-52 lg:w-2/3">
              <p className="text-sm lg:text-base font-semibold mt-6 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                dignissimos iusto quod deleniti officiis fuga nostrum dolor. Hic
                provident pariatur, nesciunt quidem voluptatem accusantium
                aliquid placeat alias, nisi sint vero!
              </p>
              <div className=" text-sm">
                <p className=" font-semibold">Alex Watson</p>
                <p className="font-light">some executive</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center h-auto lg:h-[23rem] ">
          <div className="flex flex-col lg:flex-row justify-around items-center text-center font-light w-[70%] lg:h-[90%]">
            <div className="flex flex-col justify-center items-center w-48 lg:w-2/3 overflow-hidden">
              <img
                src={'../assets/testimonials_image_two.webp'}
                alt="testimonials_image_four"
                className="lg:w-40 lg:h-52 rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col lg:justify-around lg:text-left lg:h-60 w-52 lg:w-2/3">
              <p className="text-sm lg:text-base font-semibold mt-6 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                dignissimos iusto quod deleniti officiis fuga nostrum dolor. Hic
                provident pariatur, nesciunt quidem voluptatem accusantium
                aliquid placeat alias, nisi sint vero!
              </p>
              <div className=" text-sm">
                <p className=" font-semibold">Alex Watson</p>
                <p className="font-light">some executive</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonials;
