import { useState } from 'react';
import heroBg from '../assets/images/hero-bg.webp';
import player from '../assets/images/hero-player.png';
import ball from '../assets/images/hero-ball.png';

const Hero = () => {
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
      className="flex flex-col justify-end relative w-full h-screen overflow-hidden bg-hero-bg bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-2500 ease-out bg-player bg-contain bg-center bg-no-repeat w-96 h-screen border-transparent"
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
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-2500 ease-out bg-player bg-contain bg-center bg-no-repeat w-96 h-screen border-transparent"
        style={{
          borderTopWidth: '160px',
          borderBottomWidth: '50px',
          backgroundImage: `url(${player})`,
          transform: `translate(calc(-50% + ${offsetX / 10}px), calc(-50% + ${
            offsetY / 10
          }px))`,
        }}
      ></div>

      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="max-w-sm drop-shadow-black">
          <h1 className="mb-4 font-accent text-5xl text-white font-bold drop-shadow-black">
            <span className="text-xl text-red-600">WELCOME TO </span>
            FREIBERGER MAULWÜRFE TEAM
          </h1>
          <p className="mb-4 text-white brightness-90 drop-shadow-black">
            Step into the world of the Freiberger Maulwürfe Team! Get ready to
            dive into the team spirit and meet our amazing players.
          </p>
          <button className="mb-20 btn-primary">Meet the Team</button>
        </div>

        <div className="absolute">Upcoming</div>
      </div>
    </section>
  );
};

export default Hero;
