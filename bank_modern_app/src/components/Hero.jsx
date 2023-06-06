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
    Displays:
    Row1 => "20% Discount For 1 Month Account"
    Row2 => "The Next Generation" on left and "Get + arrow-up + Started" on right side of the screen.
    */
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            {/* Row1 => displays discount information*/}
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                {/*1a. displays discount image*/}
                <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
                
                {/*1b. displays "20% Discount For 1 Month Account" text*/}
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

            {/*displays "Payment Method" on left side of the screen.*/}
            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                Payment Method
            </h1>

            {/*displays some text on left side of the screen.*/}
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Our team of experts uses a methodology to identify the credit cards
                most likely to fit your needs. We examine annual percentage rates,
                annual fees.
            </p>
        </div>

        {/*3. displays robot image on right side of the screen.*/}
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            {/*3a. displays robot image on right side of the screen.*/}
            <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        </div>
    </section>
  )
}

export default Hero