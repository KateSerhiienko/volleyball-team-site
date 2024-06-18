const NavMenu = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="mr-10 transition cursor-pointer hover:text-white active:text-red-600">
          Home
        </div>
        <div className="mr-10 transition cursor-pointer hover:text-white active:text-red-600">
          Events
        </div>
        <div className="transition cursor-pointer hover:text-white active:text-red-600">
          Team
        </div>
      </div>
    </>
  );
};

export default NavMenu;
