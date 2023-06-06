import React from 'react';
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

/*
Displays:Billing
-----------------------------------------
Row1 => 
- displays bill image & gradient on left side of the screen.
- displays billing heading and description on right side of the screen.
*/
const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
      
      {/*1. displays bill image & gradient on left side of the screen*/}
      <div className={layout.sectionImgReverse}>    
          {/*displays bill image*/}
          <img src={bill} alt="billing"  className="w-[100%] h-[100%] relative z-[5]"/>

          {/*displays gradient behind the bill image*/}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
          <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
      </div>

      {/*2. displays billing heading and description on right side of the screen*/}
      <div className={layout.sectionInfo}>
          {/*displays billing heading on right side of the screen*/}
          <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
          </h2>

          {/*displays billing description on right side of the screen*/}
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
      </div>


  </section>  
)

export default Billing