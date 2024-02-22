import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';

const YourComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="ml-4"
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img
          src="./assets/thumbnails/beyond-earth/trending/large.jpg"
          alt=""
          className="w-[240px] h-[140px] md:w-[470px] md:h-[190px] rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./assets/thumbnails/bottom-gear/trending/large.jpg"
          alt=""
          className="w-[240px] h-[140px] rounded-lg md:w-[470px] md:h-[190px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./assets/thumbnails/undiscovered-cities/trending/large.jpg"
          alt=""
          className="w-[240px] h-[140px] rounded-lg md:w-[470px] md:h-[190px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./assets/thumbnails/1998/trending/large.jpg"
          alt=""
          className="w-[240px] h-[140px] rounded-lg md:w-[470px] md:h-[190px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./assets/thumbnails/dark-side-of-the-moon/trending/large.jpg"
          alt=""
          className="w-[240px] h-[140px] rounded-lg md:w-[470px] md:h-[190px]"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default YourComponent;
