import { NavLink } from 'react-router-dom';

import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.svg';
import { FaSearch } from 'react-icons/fa';
import NavMenu from './NavMenu';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showSearchInput, setShowSearchInput] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bgClass = scrollPosition > 4 ? 'bg-main-dark' : 'bg-transparent';

  return (
    <nav
      className={`z-20 fixed top-0 left-0 right-0 w-full text-white/40 ${bgClass}`}
    >
      <div className="flex items-center justify-between h-20 external-container">
        <div className="flex p-1 rounded-full bg-gradient-to-r from-white/15 to-40% ">
          <NavLink
            className="flex flex-shrink-0 items-center mr-4 md:mr-24"
            to="/"
          >
            <img className="h-10 mr-8" src={logo} alt="Freiberger Maulwürfe" />
            <span className="hidden md:block text-white font-accent tracking-widest">
              Freiberger Maulwürfe
            </span>
          </NavLink>

          <NavMenu />
        </div>

        <div className="hidden sm:flex items-center h-12 py-1 px-4 rounded-full bg-white/10">
          <input
            className={`input-search-reset  placeholder:text-white/40 text-white  transition-all duration-1000
          ${showSearchInput ? 'w-48 opacity-100' : 'w-0 opacity-0'}`}
            type="search"
            placeholder="search..."
          />
          <FaSearch
            className="fill-white/70 cursor-pointer transition hover:fill-white/50"
            onClick={() => setShowSearchInput((prevState) => !prevState)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
