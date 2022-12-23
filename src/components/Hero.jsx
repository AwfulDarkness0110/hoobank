import React from "react";
import styles from "../style";
import { discount, robot } from "../assets/static";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%&nbsp;</span>
            Discount For<span className="text-white">&nbsp;1 Month</span>
            &nbsp;Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="ha-1 flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[1.25em] leading-[75px] mt-4">
            The Next
            <br />
            <span className="ha-2 text-gradient">Generation</span>
            <br />
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0 ">
            <GetStarted />
          </div>
        </div>

        <h2 className="ha-3 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[1.25em] leading-[75px] w-full">
          Payment Method.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 leading-8`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="Robotic arm managing bills and credit cards. "
          className="hero-image w-[100%] relative z-[50]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[10] w-[80%] h-[80%] rounded-full bottom-40 white__gradient pink__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
