import React from "react";
import tablets from "../../assets/tablets.png";
import mobile from "../../assets/mobile.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 100,
        y: 0,
      }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="grid grid-cols-[2fr_1fr] gap-4 mb-12"
    >
      <div className=" relative row-span-2 rounded-md overflow-hidden">
        <div className="absolute left-24 top-1/2 -translate-y-1/2 text-white">
          <h2 className="uppercase mb-6 py-1 px-4 bg-yellow-300 text-left text-black font-semibold inline-block text-sm rounded-sm">
            trending items
          </h2>
          <h1 className="mb-2 text-3xl font-semibold capitalize leading-normal">
            mega sale <br />
            brilliant shopping day
          </h1>
          <p className="text-lg mb-10">Discount 50% OFF This Week</p>
          <button className="font-semibold py-4 px-8 rounded-md bg-red-500 ">
            Discover Now
          </button>
        </div>
        <img className="object-cover w-full h-full" src={mobile} alt="" />
      </div>

      <div className="bg-[#F0567A] text-white rounded-md px-8 flex items-center">
        <div>
          <h2 className="uppercase mb-6 py-1 px-4 bg-white text-left text-[#F0567A] font-semibold inline-block text-sm rounded-sm">
            mobile
          </h2>
          <p className="text-2xl">DEALS 20% OFF from $690.99</p>
        </div>
        <div>
          <img width={300} src={tablets} alt="tablets" />
        </div>
      </div>

      <div className="bg-[#965EE3] text-white rounded-md px-8 flex items-center">
        <div>
          <h2 className="uppercase mb-6 py-1 px-4 bg-white text-left text-[#965EE3] font-semibold inline-block text-sm rounded-sm">
            week deals
          </h2>
          <p className="text-2xl">DEALS 20% OFF from $690.99</p>
        </div>
        <div>
          <img width={300} src={tablets} alt="tablets" />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
