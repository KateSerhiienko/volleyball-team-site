import logo from '../assets/images/logo.svg';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="Freiberger Maulwürfe" />
        <span>Freiberger Maulwürfe</span>
      </div>

      <div>
        <div>Home</div>
        <div>Events</div>
        <div>Team</div>
      </div>

      <div>
        <input type="search" />
      </div>
    </nav>
  );
};

export default Navbar;
