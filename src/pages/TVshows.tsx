import { useLoaderData } from 'react-router-dom';
import { propsType } from '../data';
import { useContext, useState } from 'react';
import { GlobalStates } from '../data';
import Thumbnail from '../components/Thumbnail';
const TVshows = () => {
  const data = useLoaderData() as propsType[];

  const context = useContext(GlobalStates);
  if (!context) {
    return <h1>Error</h1>;
  }
  const { search } = context;
  const TVshows = data.filter((el) => el.category === 'TV Series');
  const lastData = search
    ? TVshows.filter((el) =>
        el.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    : TVshows;
  const [thumbnails, setThumbnails] = useState(lastData);
  const handleBookmarkClick = (index: number) => {
    const updatedThumbnails = [...thumbnails];
    updatedThumbnails[index].isBookmarked = !updatedThumbnails[index].isBookmarked;
    setThumbnails(updatedThumbnails);
  };
  return (
    <div className="">
      {search ? null : (
        <h1
          className="text-white font-outfit text-20 font-normal leading-normal tracking-tighter text-2xl mb-4 md:text-3xl  xl:text-4xl  xl:block
"
        >
          TV Series
        </h1>
      )}
      <div className="gap-[15px] justify-center min-h-screen ilia">
        {lastData.map((el: propsType, index: number) => (
          <Thumbnail
            rating={el.rating}
            category={el.category}
            key={index}
            src={el?.thumbnail?.regular?.large}
            title={el.title}
            year={el.year}
            isBookmarked={el.isBookmarked}
            onBookmarkClick={() => handleBookmarkClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TVshows;
