import React from 'react'
import styles from "../style";
import {arrowUp} from "../assets";

const GetStarted = () => (
  /*
  bg-blue-gradient => customized class, check index.css
  text-gradient => customized class to show text with a gradient, check index.css 
  */

  /*1. displays "Get + arrow-up + Started"  in a circle*/
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      {/*displays circle with only border*/}
      <div className={`${styles.flexCenter} flex-col bg-primary w-[95%] h-[95%] rounded-full`}>
          {/*display "Get + arrow-up + Started" text*/}
          <div className={`${styles.flexStart} flex-row`}>
              {/*1a. display "Get" text*/}
              <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                  <span className="text-gradient">Get</span>
              </p>

              {/*1b. display arrow icon*/}
              <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain"/>

              {/*1c. display "Started" text*/}
              <p className="font-poppins font-medium text-[18px] leading[23.4px]">
                  <span className="text-gradient">Started</span>
              </p>
          </div>
      </div>
  </div>
);
export default GetStarted