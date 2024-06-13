import { useState } from 'react';
import PropTypes from 'prop-types';
import heroBg from '../assets/images/hero-bg.webp';
import player from '../assets/images/hero-player.png';
import ball from '../assets/images/hero-ball.png';

const Hero = ({ children }) => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseMove = (e) => {
    const element = e.currentTarget;

    const { width, height } = element.getBoundingClientRect();

    const centerX = width / 2;
    const centerY = height / 2;

    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;

    setOffsetX(centerX - mouseX);
    setOffsetY(centerY - mouseY);
  };

  const handleMouseLeave = () => {
    setOffsetX(0);
    setOffsetY(0);
  };

  return (
    <section
      className="flex flex-col justify-end relative w-full h-screen min-h-600 overflow-hidden bg-hero-bg bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-2500 ease-out bg-contain bg-center bg-no-repeat w-96 h-screen min-h-600 border-transparent"
          style={{
            borderTopWidth: '160px',
            borderBottomWidth: '50px',
            backgroundImage: `url(${player})`,
            transform: `translate(calc(-50% + ${offsetX / 10}px), calc(-50% + ${
              offsetY / 10
            }px))`,
          }}
        ></div>
        <div
          className="absolute w-full h-screen min-h-600"
          style={{
            background:
              'radial-gradient(circle, rgba(17,17,21,0) 0%, rgba(17,17,21,0.6) 40%, rgba(17,17,21,1) 100%)',
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-2500 ease-out bg-contain bg-center bg-no-repeat w-96 h-screen min-h-600 border-transparent"
          style={{
            borderTopWidth: '100px',
            borderBottomWidth: '50px',
            backgroundImage: `url(${ball})`,
            transform: `translate(calc(-50% + ${offsetX / 10}px), calc(-50% + ${
              offsetY / 10
            }px))`,
            scale: `calc(1 + ${(offsetX + offsetY) / 6000})`,
          }}
        ></div>
      </>

      <div className="z-10 flex flex-col justify-around w-full h-full pt-20 pb-4 external-container">
        <div className="self-end max-w-sm">{children}</div>

        <div className="max-w-sm">
          <h1 className="mb-4 font-accent tracking-widest font-bold">
            <p className="text-lg text-red-600">WELCOME TO </p>
            <p className="text-6xl text-white">FREIBERGER MAULWÜRFE TEAM</p>
          </h1>
          <p className="hidden md:block mb-4 text-sm text-white brightness-75">
            Step into the world of the Freiberger Maulwürfe Team! Get ready to
            dive into the team spirit and meet our amazing players.
          </p>
          <button className="btn-primary">Meet the Team</button>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
};

export default Hero;
