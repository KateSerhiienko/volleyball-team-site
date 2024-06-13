import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.svg';
import { FaSearch } from 'react-icons/fa';

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
    <nav className={`z-20 fixed top-0 left-0 right-0  w-full ${bgClass}`}>
      <div className="flex items-center justify-between h-20 external-container">
        <div className="flex p-1 rounded-full bg-gradient-to-r from-white/15 to-40% ">
          <div className="flex flex-shrink-0 items-center md:mr-16">
            <img className="h-10 mr-4" src={logo} alt="Freiberger Maulwürfe" />
            <span className="hidden md:block text-white font-accent tracking-widest">
              Freiberger Maulwürfe
            </span>
          </div>

          <div className="flex items-center text-white/40">
            <div className="mr-4 transition cursor-pointer hover:text-white active:text-red-600">
              Home
            </div>
            <div className="mr-4 transition cursor-pointer hover:text-white active:text-red-600">
              Events
            </div>
            <div className="transition cursor-pointer hover:text-white active:text-red-600">
              Team
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center h-12  py-1 px-4 rounded-full bg-white/10">
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
