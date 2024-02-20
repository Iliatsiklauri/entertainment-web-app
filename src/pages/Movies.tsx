import { useLoaderData } from 'react-router-dom';
import { propsType } from '../data';

const Movies = () => {
  const data = useLoaderData() as propsType[];
  const movies = data.filter((el) => el.category === 'Movie');

  return (
    <div className="w-full flex flex-wrap gap-[15px]">
      {movies.map((el: propsType, index: number) => (
        <div key={index}>
          <img
            src={`${el?.thumbnail?.regular?.small}`}
            alt=""
            className="w-[164px] h-[110px] rounded-lg"
          />
          <p className="text-white font-normall text-14 text-sm leading-normal w-[164px]">
            {el?.title}
          </p>
          <p className="text-white">{el?.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;
