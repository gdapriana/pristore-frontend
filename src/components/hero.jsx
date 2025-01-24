import {assets} from "../assets/assets.js";
import { motion as m } from "motion/react"

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <m.div animate={{ opacity: [0, 1] }} transition={{ duration: 1, ease: "anticipate" }} className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrivals</h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </m.div>
      <div className="w-full relative sm:w-1/2">
        <m.div animate={{ width: ["100%", 0] }} transition={{ duration: 1, delay: 0.5, ease: "anticipate" }} className="absolute right-0 top-0 h-full bg-white w-full" />
        <img src={assets.hero_img || ""} alt="hero" className="object-cover"/>
      </div>
    </div>
  );
};

export default Hero;