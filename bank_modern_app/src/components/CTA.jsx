import React from 'react';
import styles from "../style";
import Button from "./Button";

/*
Displays:CTA
-----------------------------------------
Row1 => 
- displays CTA heading, and description on left side of the screen.
- displays "Get Started" button on right side of the screen.
*/
const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    {/*displays CTA heading, and description on left side of the screen*/}
    <div className="flex-1 flex flex-col">
      
      {/*displays CTA heading on left side of the screen*/}
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      
      {/*displays CTA description on left side of the screen*/}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    {/*displays "Get Started" button on right side of the screen*/}
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;