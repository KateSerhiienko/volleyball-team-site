import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between h-20 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-slate-700">
      <div className="flex p-1 rounded-full bg-gradient-to-r from-white/15 to-40% ">
        <div className="flex flex-shrink-0 items-center md:mr-20">
          <img className="h-10 mr-4" src={logo} alt="Freiberger Maulwürfe" />
          <span className="hidden md:block text-white">
            Freiberger Maulwürfe
          </span>
        </div>

        <div className="flex items-center text-white/40">
          <div className="mr-4 transition cursor-pointer hover:text-white active:text-red-500">
            Home
          </div>
          <div className="mr-4 transition cursor-pointer hover:text-white active:text-red-500">
            Events
          </div>
          <div className="transition cursor-pointer hover:text-white active:text-red-500">
            Team
          </div>
        </div>
      </div>

      <div className="h-12 flex items-center py-1 px-4 rounded-full bg-white/10">
        <input
          className={`input-search-reset  placeholder:text-slate-500 text-white  transition-all duration-1000
          ${showSearchInput ? 'w-48 opacity-100' : 'w-0 opacity-0'}`}
          type="search"
          placeholder="search..."
        />
        <FaSearch
          className="fill-white/70 cursor-pointer transition hover:fill-white/50"
          onClick={() => setShowSearchInput((prevState) => !prevState)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
