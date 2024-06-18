import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  return (
    <>
      <div className="flex items-center">
        <NavLink
          className="mr-10 transition cursor-pointer hover:text-white active:text-red-600"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="mr-10 transition cursor-pointer hover:text-white active:text-red-600"
          to="/events"
        >
          Events
        </NavLink>
        <NavLink
          className="transition cursor-pointer hover:text-white active:text-red-600"
          to="/team"
        >
          Team
        </NavLink>
      </div>
    </>
  );
};

export default NavMenu;
