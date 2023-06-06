import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

/*
Displays:FeatureCard
--------------------------------

*/
const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);//FeatureCard

/*
Displays:Business
--------------------------------
Row1 => "You do the business,
         we’ll handle the money." on left side of the screen.
Row2 => "With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market." on left side of the screen.
Row3 => "Get Started" Button
*/
const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        /*
        ...feature: This spread operator (...) spreads all the properties of the feature object as individual props to the FeatureCard component. 
        feature object => id, icon, title, content
        It means that the feature object has several properties, and each property will be passed as a separate prop to the FeatureCard component.
        index={index}: It passes the index variable as a prop named index to the FeatureCard component.
        */
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);//Business

export default Business;