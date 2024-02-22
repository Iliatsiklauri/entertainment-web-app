import { useContext, useState } from 'react';
import { GlobalStates } from '../data';

const SearchBar = () => {
  const context = useContext(GlobalStates);
  if (!context) {
    return <h1>error</h1>;
  }
  const { setSearch } = context;

  return (
    <div className="flex  mt-[26px] gap-4 ml-3 md:ml-[2.5%] md:gap-6 xl:mt-8 self-start w-[90%] md:w-[70%]">
      <img src="icon-search.svg" alt="" className="md:w-8 md:h-8" />
      <input
        type="text"
        placeholder="Search for movies or TV series"
        className="bg-transparent placeholder:opacity-50 focus:outline-none w-[80%] placeholder:md:text-2xl  text-white font-normal md:text-2xl
        "
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
