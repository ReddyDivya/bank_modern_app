import React from 'react';
import styles from "../style";
import {discount, robot} from "../assets";
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    /*
    rounded-10 => rounded corners.
    bg-discount-gradient =>customized class to show text with a gradient, check index.css
    */

    /*
    displays "The Next Generation" on left and "Get + arrow-up + Started" on right side of the screen.
    */
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            {/* 1. displays discount information*/}
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                {/*1a. displays discount image*/}
                <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
                
                {/*1b. displays discount info*/}
                <p className={`${styles.paragraph} ml-2`}>
                  <span className="text-white">20%</span> Discount For{" "}
                  <span className="text-white">1 Month</span> Account
                </p>
            </div>

            {/*2. displays "The Next Generation" on left side and "Get + arrow-up" in a circle on the right side of the screen.*/}
            <div className="flex flex-row justify-between items-center w-full">
                {/*2a. displays "The Next Generation on left side of the screen*/}
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                    The Next <br className="sm:block hidden"/>{" "}
                    <span className="text-gradient">Generation</span>{" "}
                </h1>

                {/*2b. displays "Get + arrow-up" in a circle on right side of the screen*/}
                <div className="ss:flex hidden md:mr-4 mr-0">
                    <GetStarted/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero