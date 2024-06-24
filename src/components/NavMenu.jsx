import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', label: 'Home' },
  { path: '/events', label: 'Events' },
  { path: '/team', label: 'Team' },
];

const NavMenu = () => {
  return (
    <div className="flex items-center">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? 'mr-10 transition cursor-pointer text-white'
              : 'mr-10 transition cursor-pointer hover:text-white'
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default NavMenu;
