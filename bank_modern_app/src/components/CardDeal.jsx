import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

/*
Displays:CardDeal
-----------------------------------------
Row1 => 
- displays CardDeal heading, description, and "Get Started" button on left side of the screen.
- displays CardDeal image on right side of the screen.
*/
const CardDeal = () => (
  <section className={layout.section}>

      {/*displays CardDeal heading, description, and "Get Started" button on left side of the screen.*/}
      <div className={layout.sectionInfo}>

        {/*displays CardDeal heading on left side of the screen.*/}
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>

        {/*displays CardDeal description on left side of the screen.*/}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        {/*displays "Get Started" button on left side of the screen.*/}
        <Button styles={`mt-10`} />
      </div>

      {/*displays Card image on right side of the screen.*/} 
      <div className={layout.sectionImg}>
        <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      </div>
  </section>
);

export default CardDeal