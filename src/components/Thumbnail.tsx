import { thumbType } from '../data';

const Thumbnail = ({
  src,
  title,
  category,
  year,
  rating,
  isBookmarked,
  onBookmarkClick,
}: thumbType) => {
  return (
    <div className="relative text-white">
      <div
        className="absolute cursor-pointer right-3 top-3 h-8 w-8 hover:opacity-100 opacity-65"
        onClick={onBookmarkClick}
      >
        <div className="w-full h-full relative flex items-center justify-center">
          <div className="w-full h-full bg-[#10141E] absolute rounded-full  "></div>
          <img
            src={`${isBookmarked ? 'icon-bookmark-full.svg' : 'icon-bookmark-empty.svg'}`}
            alt=""
            className="z-20 opacity-100"
          />
        </div>
      </div>

      <img
        src={`${src}`}
        alt=""
        className="w-[164px] h-[110px] rounded-lg md:w-[220px] md:h-[140px] xl:w-[280px] xl:h-[174px]"
      />
      <div className="flex w-[80%] justify-between items-center">
        <p className="font-outfit text-xs font-normal md:text-base opacity-75">{year}</p>
        <div className="after"></div>
        <div className="flex justify-between items-center gap-1">
          <img
            src={`${
              category === 'Movie' ? 'icon-category-movie.svg' : 'icon-category-tv.svg'
            } `}
            alt=""
            className="flex-shrink-0"
          />
          <p className="font-outfit text-xs font-normal md:text-base opacity-75">
            {category}
          </p>
        </div>
        <div className="after"></div>
        <p className="font-outfit text-xs font-normal md:text-base opacity-75">
          {rating}
        </p>
      </div>
      <p className="text-base font-normal md:text-xl w-[164px]">{title}</p>
    </div>
  );
};

export default Thumbnail;
