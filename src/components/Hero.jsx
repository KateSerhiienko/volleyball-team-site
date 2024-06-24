import PropTypes from 'prop-types';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '../assets/images/hero-bg.webp';
import player from '../assets/images/hero-player.png';
import ball from '../assets/images/hero-ball.png';
import Upcoming from './Upcoming';

const Hero = ({
  isFullHero = true,
  title = 'FREIBERGER MAULWÜRFE TEAM',
  subtitle = 'WELCOME TO',
  upcomingEvents,
}) => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const translateX = useTransform(
    offsetX,
    (value) => `calc(-50% + ${value / 10}px)`
  );
  const translateY = useTransform(
    offsetY,
    (value) => `calc(-50% + ${value / 10}px)`
  );
  const scale = useTransform(
    [offsetX, offsetY],
    ([x, y]) => `calc(1 + ${(x + y) / 6000})`
  );

  const handleMouseMove = (e) => {
    const element = e.currentTarget;

    const { width, height } = element.getBoundingClientRect();
    const centerX = width / 2;
    const centerY = height / 2;
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;

    offsetX.set(centerX - mouseX);
    offsetY.set(centerY - mouseY);
  };

  const handleMouseLeave = () => {
    offsetX.set(0);
    offsetY.set(0);
  };

  return isFullHero ? (
    <section
      className="flex flex-col justify-end relative w-full h-screen min-h-600 overflow-hidden bg-hero-bg bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-2500 ease-out bg-contain bg-center bg-no-repeat w-96 h-screen min-h-600 border-transparent"
          style={{
            borderTopWidth: '160px',
            borderBottomWidth: '50px',
            backgroundImage: `url(${player})`,
            x: translateX,
            y: translateY,
          }}
        ></motion.div>
        <div
          className="absolute w-full h-screen min-h-600"
          style={{
            background:
              'radial-gradient(circle, rgba(17,17,21,0) 0%, rgba(17,17,21,0.6) 40%, rgba(17,17,21,1) 100%)',
          }}
        ></div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-2500 ease-out bg-contain bg-center bg-no-repeat w-96 h-screen min-h-600 border-transparent"
          style={{
            borderTopWidth: '100px',
            borderBottomWidth: '50px',
            backgroundImage: `url(${ball})`,
            x: translateX,
            y: translateY,
            scale: scale,
          }}
        ></motion.div>
      </>

      <div className="z-10 flex flex-col justify-around w-full h-full pt-20 pb-4 external-container">
        <motion.div
          className="self-end max-w-sm"
          initial={{ x: '15vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        >
          <Upcoming upcomingEvents={upcomingEvents} />
        </motion.div>

        <motion.div
          className="max-w-sm"
          initial={{ x: '-15vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        >
          <h1 className="mb-4 font-accent tracking-widest font-bold">
            <p className="text-lg text-red-600">WELCOME TO </p>
            <p className="text-6xl text-white">FREIBERGER MAULWÜRFE TEAM</p>
          </h1>
          <p className="hidden md:block mb-4 text-sm text-white brightness-75">
            Step into the world of the Freiberger Maulwürfe Team! Get ready to
            dive into the team spirit and meet our amazing players.
          </p>
          <Link to="/team">
            <button className="btn-primary">Meet the Team</button>
          </Link>
        </motion.div>
      </div>
    </section>
  ) : (
    <section
      className="w-full h-fit overflow-hidden bg-hero-bg bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div
        className="w-full h-full"
        style={{
          background:
            'radial-gradient(circle, rgba(17,17,21,0) 0%, rgba(17,17,21,0.6) 20%, rgba(17,17,21,1) 100%)',
        }}
      >
        <div className="flex flex-col-reverse justify-between items-center md:flex-row w-full h-full pt-32 pb-10 external-container">
          <div className="max-w-sm self-start">
            <h1 className="mt-10 md:mt-0 mb-4 font-accent tracking-widest font-bold">
              <p className="text-lg text-red-600">{subtitle}</p>
              <p className="text-6xl text-white">{title}</p>
            </h1>
          </div>

          <div className="max-w-sm self-end">
            <Upcoming upcomingEvents={upcomingEvents} />
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  isFullHero: PropTypes.bool,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  upcomingEvents: PropTypes.array,
};

export default Hero;
