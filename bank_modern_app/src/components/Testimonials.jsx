import React from 'react';
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

/*
Displays:Testimonials
-----------------------------------------
Row1 => displays "What People are saying about us" on left side, and Testimonial's description of the screen.
Row2 => displays feedback cards.
*/

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    {/*displays background gradient*/}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    {/*Row1. displays "What People are saying about us" on left side, and testimonial's description on the right side of the screen.*/}
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      
      {/*displays "What People are saying about us" on left side of the screen.*/}
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      
      {/*displays description on the right side of the screen.*/}
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    
    {/*Row2. displays feedback cards.*/}
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials