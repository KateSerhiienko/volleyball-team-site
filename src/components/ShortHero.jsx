import heroBg from '../assets/images/hero-bg.webp';
import { motion } from 'framer-motion';

const ShortHero = ({ children }) => {
  return (
    <section
      className="flex flex-col justify-end relative w-full h-fit overflow-hidden bg-hero-bg bg-cover bg-center"
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
        <div className="z-10 flex justify-between items-center w-full h-full pt-20 pb-4 external-container">
          <motion.div
            className="max-w-sm"
            initial={{ x: '-15vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 60, damping: 20 }}
          >
            <h1 className="hidden md:block mb-4 font-accent tracking-widest font-bold">
              <p className="text-6xl text-red-600">FREIBERGER MAULWÜRFE TEAM</p>
            </h1>
          </motion.div>

          <motion.div
            className="max-w-sm"
            initial={{ x: '15vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 60, damping: 20 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShortHero;
