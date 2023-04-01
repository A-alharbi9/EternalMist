import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

function Testimonials() {
  return (
    <div className="flex flex-col justify-around lg:justify-between items-center h-[80vh] lg:h-[65vh] my-5 lg:my-5 xl:my-0">
      <p className="text-3xl lg:text-3xl font-bold pb-5">Testimonials</p>
      <Swiper
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="fade"
        modules={[Autoplay, Navigation, Pagination, Keyboard]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        className="mySwiper w-[80%] lg:w-[80%] xl:w-[65%]"
      >
        <SwiperSlide className="flex justify-center items-center h-[23rem]">
          <div className=" flex flex-col justify-around items-center text-center font-light w-[70%] h-[90%]">
            <div className=" rounded-[50%]  w-16 h-16  overflow-hidden">
              <img
                src="src/assets/testimonials_image_one.jpg"
                alt="testimonials_image_one"
                className=" w-full"
              />
            </div>
            <p className=" text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              dignissimos iusto quod deleniti officiis fuga nostrum dolor. Hic
              provident pariatur, nesciunt quidem voluptatem accusantium aliquid
              placeat alias, nisi sint vero!
            </p>
            <div className=" text-sm">
              <p className=" font-bold">Alex</p>
              <p className="font-light">some executive</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center h-[23rem]">
          <div className=" flex flex-col justify-around items-center text-center font-light w-[70%] h-[90%]">
            <div className=" rounded-[50%]  w-16 h-16  overflow-hidden">
              <img
                src="src/assets/testimonials_image_two.jpg"
                alt="testimonials_image_two"
                className="w-full"
              />
            </div>
            <p className=" text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              dignissimos iusto quod deleniti officiis fuga nostrum dolor. Hic
              provident pariatur, nesciunt quidem voluptatem accusantium aliquid
              placeat alias, nisi sint vero!
            </p>
            <div className=" text-sm">
              <p className=" font-bold">Alex</p>
              <p className="font-light">some executive</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center h-[23rem]">
          <div className=" flex flex-col justify-around items-center text-center font-light w-[70%] h-[90%]">
            <div className=" rounded-[50%]  w-16 h-16  overflow-hidden">
              <img
                src="src/assets/testimonials_image_three.jpg"
                alt="testimonials_image_three"
                className=" w-full"
              />
            </div>
            <p className=" text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              dignissimos iusto quod deleniti officiis fuga nostrum dolor. Hic
              provident pariatur, nesciunt quidem voluptatem accusantium aliquid
              placeat alias, nisi sint vero!
            </p>
            <div className=" text-sm">
              <p className=" font-bold">Alex</p>
              <p className="font-light">some executive</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center h-[23rem]">
          <div className=" flex flex-col justify-around items-center text-center font-light w-[70%] h-[90%]">
            <div className=" rounded-[50%] w-16 h-16 overflow-hidden">
              <img
                src="src/assets/testimonials_image_four.jpg"
                alt="testimonials_image_four"
                className=" w-full"
              />
            </div>
            <p className=" text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              dignissimos iusto quod deleniti officiis fuga nostrum dolor. Hic
              provident pariatur, nesciunt quidem voluptatem accusantium aliquid
              placeat alias, nisi sint vero!
            </p>
            <div className=" text-sm">
              <p className=" font-bold">Alex</p>
              <p className="font-light">some executive</p>
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide className="flex justify-center items-center h-80 ">
        <img
          src="src/assets/benefits_image.jpg"
          alt=""
          className="object-fill w-full "
        />
        B
      </SwiperSlide> */}
        {/* <SwiperSlide className="flex justify-center items-center h-80 ">
        <img src="src/assets/test.jpg" alt="" className="object-fill w-full " />
        C
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center h-80 ">
        <img src="src/assets/test.jpg" alt="" className="object-fill w-full " />
        D
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center h-80 ">
        <img src="src/assets/test.jpg" alt="" className="object-fill w-full " />
        A
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center h-80 ">
        <img src="src/assets/test.jpg" alt="" className="object-fill w-full " />
        B
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center h-80 ">
        <img src="src/assets/test.jpg" alt="" className="object-fill w-full " />
        C
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center h-80 ">
        <img src="src/assets/test.jpg" alt="" className="object-fill w-full " />
        D */}
        {/* </SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default Testimonials;
