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
      <div className="bg-[#10141E] flex flex-col items-center xl:flex-row xl:items-start">
        <Navbar />
        <div className="flex flex-col h-full w-full">
          <SearchBar />
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </GlobalStates.Provider>
  );
};

export default Root;
