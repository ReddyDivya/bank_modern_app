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

  */
  <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>


      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <CTA />
      <Footer />
  </div>
)

export default App