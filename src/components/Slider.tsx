import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay';

const YourComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      autoplay={true}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="ml-4"
    >
      <SwiperSlide>
        <div className="relative">
          <div className="absolute bottom-2 left-3">
            <p className="text-white font-outfit text-24 font-normal ">Bottom Gear</p>
          </div>
          <img
            src="./assets/thumbnails/beyond-earth/trending/large.jpg"
            alt=""
            className="w-[240px] h-[140px] md:w-[470px] md:h-[190px] rounded-lg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <div className="absolute bottom-2 left-3">
            <p className="text-white font-outfit text-24 font-normal ">Bottom Gear</p>
          </div>
          <img
            src="./assets/thumbnails/bottom-gear/trending/large.jpg"
            alt=""
            className="w-[240px] h-[140px] rounded-lg md:w-[470px] md:h-[190px]"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <div className="absolute bottom-2 left-3">
            <p className="text-white font-outfit text-24 font-normal ">
              Undiscovered Cities
            </p>
          </div>
          <img
            src="./assets/thumbnails/undiscovered-cities/trending/large.jpg"
            alt=""
            className="w-[240px] h-[140px] rounded-lg md:w-[470px] md:h-[190px]"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <div className="absolute bottom-2 left-3">
            <p className="text-white font-outfit text-24 font-normal ">1998</p>
          </div>
          <img
            src="./assets/thumbnails/1998/trending/large.jpg"
            alt=""
            className="w-[240px] h-[140px] rounded-lg md:w-[470px] md:h-[190px]"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="relative">
            <div className="absolute bottom-2 left-3">
              <div className="flex">
                <p>tv</p>
                <div className="after"></div>
                <p>2022</p>
                <div className="after"></div>
                <p>3123</p>
              </div>
              <p className="text-white font-outfit text-24 font-normal ">
                Sark Side Of The Moon
              </p>
            </div>
            <img
              src="./assets/thumbnails/dark-side-of-the-moon/trending/large.jpg"
              alt=""
              className="w-[240px] h-[140px] rounded-lg md:w-[470px] md:h-[190px]"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default YourComponent;
