import { useLoaderData } from 'react-router-dom';
import { GlobalStates, propsType } from '../data';
import { useContext, useState } from 'react';
import Thumbnail from '../components/Thumbnail';

const Movies = () => {
  const data = useLoaderData() as propsType[];
  const movies = data.filter((el) => el.category === 'Movie');
  const context = useContext(GlobalStates);
  const [thumbnails, setThumbnails] = useState(movies);
  const handleBookmarkClick = (index: number) => {
    const updatedThumbnails = [...thumbnails];
    updatedThumbnails[index].isBookmarked = !updatedThumbnails[index].isBookmarked;
    setThumbnails(updatedThumbnails);
  };
  if (!context) {
    return <h1>Error</h1>;
  }
  const { search } = context;
  const lastData = search
    ? movies.filter((el) =>
        el.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    : movies;

  return (
    <div className="">
      {search ? null : (
        <h1
          className="text-white font-outfit text-20 font-normal leading-normal tracking-tighter text-2xl mb-4 md:text-3xl  xl:text-4xl  xl:block
"
        >
          Movies
        </h1>
      )}
      <div className="gap-[15px] justify-center min-h-screen ilia">
        {lastData.map((el: propsType, index: number) => (
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

export default Movies;
