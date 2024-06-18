import ContactUsForm from './ContactUsForm';
import NavMenu from './NavMenu';
import logo from '../assets/images/logo-full.png';

const Footer = () => {
  return (
    <div className="bg-main-dark text-white/40">
      <div className="external-container pb-8 pt-10 sm:pt-16 lg:pt-20">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-28">
          <ContactUsForm />
          <img
            className="h-96 mr-4 invert opacity-70"
            src={logo}
            alt="Freiberger Maulwürfe"
          />
        </div>
        <div className="flex flex-col items-center justify-between gap-2 mt-8 pt-8 border-t-2 border-white/10 md:flex-row">
          <NavMenu />
          <p>© 2024 Freiberger Maulwürfe. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
