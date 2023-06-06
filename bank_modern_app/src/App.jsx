import React from 'react';
import {Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import styles from "./style";

const App = () => (
  /*
  overflow-hidden - hides any content that exceeds the boundaries of the <div>.
  */

  /*
  Displays:
  ----------------------
  1. Navbar Component
  ---------------
  Row1 => "HooBank" logo on left and NavLinks on right side of the screen.
  
  2. Hero Component
  ---------------
  Row2 => "20% Discount For 1 Month Account"
  Row3 => "The Next Generation" on left and "Get + arrow-up + Started" in middle and Robot image on right side of the screen.

  3. Stats Component
  ------------------
  Row4 =>  "3800+ USER ACTIVE     230+ TRUSTED BY COMPANY     $230M+ TRANSACTION"
  */
  <div className="bg-primary w-full overflow-hidden">
      
      {/*Row1 => "HooBank" logo on left and NavLinks on right side of the screen.*/}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {
        /*
        Row2 => "20% Discount For 1 Month Account"
        Row3 => "The Next Generation" on left and "Get + arrow-up + Started" in middle and Robot image on right side of the screen.
        */
      }    
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            {/*Row4 =>  3800+ USER ACTIVE     230+ TRUSTED BY COMPANY     $230M+ TRANSACTION*/}
            <Stats />
            
            { /*Row5 => Business on left side | Features on right side of the screen*/ }
            <Business />
            
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
      </div>
  </div>
)

export default App