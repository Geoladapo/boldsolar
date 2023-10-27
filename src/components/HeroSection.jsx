import { motion } from 'framer-motion';

import NavBar from './NavBar';

const HeroSection = () => {
  return (
    <main
      id="Hero"
      className="relative overflow-clip md:h-full h-screen bg-[#0A2640]"
    >
      <img
        className="absolute w-[777px] h-[523px] z-0 top-[-0rem] right-[-10rem]"
        src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692999087/boldo/Ellipse_9_1_vvhdas.png"
      />
      <NavBar />
      <div className="flex flex-col md:gap-20  gap-12 ">
        <div className="flex flex-col md:flex-row mt-10 md:ml-4">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 z-10 flex flex-col justify-center items-center gap-16 md:gap-8"
          >
            <div className="text-white w-full px-10 md:px-16">
              <h2 className="font-manrope text-4xl leading-[59px] md:text-5xl md:leading-[72px] mb-8 md:mb-5">
                Save time by building fast with Boldo Template{' '}
              </h2>
              <p className="text-base font-normal font-openSans  leading-8 md:leading-7">
                Funding handshake buyer business-to-business metrics iPad
                partnership.
                <br />
                First mover advantage innovator success deployment
                non-disclosure.
              </p>
            </div>
            <div className="flex justify-start items-start md:items-center ml-12 md:ml-32 gap-5 w-full font-openSans">
              <button className="bg-[#69E6A6] text-[#0A2640] py-3 md:py-4  px-8 md:px-14 font-bold text-md md:text-xl rounded-full">
                Buy template
              </button>
              <button
                className="bg-[#0A2640] text-white md:border-2 border-[1px] border-white py-3 md:py-4  px-8 md:px-14 font-bold text-md md:text-xl rounded-full
                            hover:text-[#0A2640] hover:bg-white duration-300 ease-linear"
              >
                Explore
              </button>
            </div>
          </motion.div>
          <motion.div className="flex-1 z-10 hidden md:flex items-center justify-center">
            <img
              className="md:w-[493.86px]"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692886443/boldo/hero_graphics_dfka9j.png"
              alt="hero images"
            />
          </motion.div>
        </div>
        <div className="relative w-full">
          <div className=" bg-gradient-to-r  from-[#0A2640]  z-20 h-16  w-[12rem] absolute top-16 left-[10%] " />
          <div className=" bg-gradient-to-l  from-[#0A2640]  z-20 h-16  w-[12rem] absolute top-16 right-[10%] " />
          <div className="relative cursor-pointer flex gap-5 md:gap-10 w-[80%]  justify-center overflow-x-scroll scrollbar-hide items-center mx-auto py-20">
            <img
              className="w-28 md:w-[146.51px]"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_2_acefyt.png"
              alt="boldo"
            />
            <img
              className="w-28 md:w-[146.51px]"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_3_lcy6ta.png"
              alt="presto"
            />
            <img
              className="w-28 md:w-[146.51px]"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_2_acefyt.png"
              alt="boldo"
            />
            <img
              className="w-28 md:w-[146.51px]"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_3_lcy6ta.png"
              alt="presto"
            />
            <img
              className="w-28 md:w-[146.51px]"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_2_acefyt.png"
              alt="boldo"
            />
            <img
              className="w-28 md:w-[146.51px]"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_3_lcy6ta.png"
              alt="presto"
            />
            <img
              className="w-28 md:w-[146.51px]"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_2_acefyt.png"
              alt="boldo"
            />
            <img
              className="w-28 md:w-[146.51px]"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_3_lcy6ta.png"
              alt="presto"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
