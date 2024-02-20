import { useLoaderData } from 'react-router-dom';
import { propsType } from '../data';

const TVshows = () => {
  const data = useLoaderData() as propsType[];
  const TVshows = data.filter((el) => el.category === 'TV Series');

  return (
    <div className="w-full flex flex-wrap gap-[15px] ">
      {TVshows.map((el: propsType, index: number) => (
        <div key={index}>
          <img
            src={`${el.thumbnail.regular.small}`}
            alt=""
            className="w-[164px] h-[110px] rounded-lg"
          />
          <p className="text-white font-normall text-14 text-sm leading-normal w-[164px]">
            {el.title}
          </p>
          <p className="text-white">{el.category}</p>
        </div>
      ))}
    </div>
  );
};

export default TVshows;
