import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={3}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      speed={800}
      effect="fade"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="ml-6"
    >
      <SwiperSlide>
        <div className="relative">
          <div className="absolute bottom-2 left-3">
            <div className="text-xs md:text-sm flex items-center justify-between text-white opacity-75 w-[90%]">
              <p>2018</p>
              <div className="after"></div>
              <img src="icon-category-movie.svg" alt="" />
              <p>TV Series</p>
              <div className="after"></div>
              <p>PG</p>
            </div>
            <p className="text-white font-outfit text-24 font-normal md:text-xl">
              Dark Side Of The Moon
            </p>
          </div>
          <img
            src="./assets/thumbnails/dark-side-of-the-moon/trending/large.jpg"
            alt=""
            className="w-[240px] h-[140px] md:w-[470px] md:h-[190px] rounded-lg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <div className="absolute bottom-2 left-3 w-[150px] md:w-[200px]">
            <div className="text-xs md:text-sm flex items-center justify-between text-white opacity-75 w-[90%]">
              <p>2021</p>
              <div className="after"></div>
              <img src="icon-category-movie.svg" alt="" />
              <p>Movie</p>
              <div className="after"></div>
              <p>PG</p>
            </div>
            <p className="text-white font-outfit text-24 font-normal md:text-xl">
              Bottom Gear
            </p>
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
            <div className="text-xs md:text-sm flex items-center justify-between text-white opacity-75 w-[90%]">
              <p>2019</p>
              <div className="after"></div>
              <img src="icon-category-movie.svg" alt="" />
              <p>TV Series</p>
              <div className="after"></div>
              <p>E</p>
            </div>
            <p className="text-white font-outfit text-24 font-normal md:text-xl">
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
          <div className="absolute bottom-2 left-3 w-[150px] md:w-[200px]">
            <div className="text-xs md:text-sm flex items-center justify-between text-white opacity-75 w-[90%]">
              <p>2021</p>
              <div className="after"></div>
              <img src="icon-category-movie.svg" alt="" />
              <p>Movie</p>
              <div className="after"></div>
              <p>18+</p>
            </div>
            <p className="text-white font-outfit text-24 md:text-xl font-normal ">1998</p>
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
            <div className="absolute bottom-2 left-3 w-[150px] md:w-[200px]">
              <div className="text-xs md:text-sm flex items-center justify-between text-white opacity-75 w-[90%]">
                <p>2019</p>
                <div className="after"></div>
                <img src="icon-category-movie.svg" alt="" />
                <p>Movie</p>
                <div className="after"></div>
                <p>PG</p>
              </div>
              <p className="text-white font-outfit text-24 md:text-xl font-normal ">
                Beyond Earth
              </p>
            </div>
            <img
              src="./assets/thumbnails/beyond-earth/trending/large.jpg"
              alt=""
              className="w-[240px] h-[140px] rounded-lg md:w-[470px] md:h-[190px]"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
