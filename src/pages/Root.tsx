import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { GlobalStates } from '../data';
import { useState } from 'react';

const Root = () => {
  const [search, setSearch] = useState('');
  return (
    <GlobalStates.Provider
      value={{
        search: search,
        setSearch: setSearch,
      }}
    >
      <div className="bg-[#10141E] flex flex-col items-center xl:flex-row xl:items-start overflow-hidden">
        <Navbar />
        <div className="flex flex-col h-full w-full items-center gap-4">
          <SearchBar />
          {search ? (
            <p
              className="text-white  self-start ml-8  xl:ml-10 md:text-xl text-base font-normal tracking-tight leading-normal
"
            >
              Search results for '{search}'
            </p>
          ) : null}

          <div className="xl:mr-32">
            <Outlet />
          </div>
        </div>
      </div>
    </GlobalStates.Provider>
  );
};

export default Root;
