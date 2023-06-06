import React from 'react'
import Button from "./Button";
import styles, {layout} from "../style";

const FeatureCard = () => (
  <section>
    
  </section>
);//FeatureCard

const Business = () => (
  <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
              You do the business, <br className="sm:block hidden" /> we’ll handle
            the money.
          </h2>
      </div>
  </section>
);//Business

export default Business;