import { useLoaderData } from 'react-router-dom';
import { propsType } from '../data';
import { GlobalStates } from '../data';
import { useContext, useState } from 'react';
import Thumbnail from '../components/Thumbnail';
import Slider from '../components/Slider';

const Home = () => {
  const context = useContext(GlobalStates);
  if (!context) {
    return <h1>no context</h1>;
  }
  const { search } = context;

  const data = useLoaderData() as propsType[];
  const [thumbnails, setThumbnails] = useState(data);
  const handleBookmarkClick = (index: number) => {
    const updatedThumbnails = [...thumbnails];
    updatedThumbnails[index].isBookmarked = !updatedThumbnails[index].isBookmarked;
    setThumbnails(updatedThumbnails);
  };

  const newData = search
    ? thumbnails.filter((el) => el.title.toLowerCase().includes(search.toLowerCase()))
    : thumbnails;

  return (
    <div className="min-h-screen relative">
      {search ? null : (
        <h1
          className="text-white font-Outfit text-2xl font-normal tracking-normal leading-normal ml-[375px] md:text-3xl xl:text-4xl md:ml-[475px] xl:ml-3 xl:mb-4 xl:block
"
        >
          Trending
        </h1>
      )}
      {search ? null : (
        <div>
          <div className="ml-[350px] w-[750px] md:ml-[455px] xl:ml-0 md:w-[1200px] h-[190px] md:h-[240px]">
            <Slider />
          </div>
        </div>
      )}
      {search ? null : (
        <h1
          className="text-white font-outfit text-20 font-normal leading-normal tracking-tighter text-2xl md:text-3xl ml-[375px] xl:text-4xl md:ml-[475px] xl:ml-3 xl:mb-4 xl:block
"
        >
          Recomended for you
        </h1>
      )}
      <div className={`ilia gap-[15px] justify-center`}>
        {newData.map((el: propsType, index: number) => (
          <Thumbnail
            category={el.category}
            key={index}
            src={el?.thumbnail?.regular?.large}
            title={el.title}
            year={el.year}
            rating={el.rating}
            isBookmarked={el.isBookmarked}
            onBookmarkClick={() => handleBookmarkClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
