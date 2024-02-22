import { useLoaderData } from 'react-router-dom';
import { propsType } from '../data';
import { GlobalStates } from '../data';
import { useContext, useState } from 'react';
import Thumbnail from '../components/Thumbnail';

const Bookmarked = () => {
  const context = useContext(GlobalStates);
  if (!context) {
    return <h1>no context</h1>;
  }
  const { search } = context;

  const data = useLoaderData() as propsType[];
  const [thumbnails, setThumbnails] = useState(
    data.filter((el) => el.isBookmarked === true)
  );

  const handleBookmarkClick = (index: number) => {
    const updatedThumbnails = [...thumbnails];
    updatedThumbnails[index].isBookmarked = !updatedThumbnails[index].isBookmarked;
    setThumbnails(updatedThumbnails);
  };

  const filteredThumbnails = search
    ? thumbnails.filter((el) =>
        el.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    : thumbnails;

  return (
    <div className="gap-[15px] justify-center min-h-screen ilia">
      {filteredThumbnails.map((el: propsType, index: number) => (
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
  );
};

export default Bookmarked;
