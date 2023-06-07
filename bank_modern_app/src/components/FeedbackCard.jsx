import { quotes } from "../assets";

/*
Displays:FeedbackCard
-----------------------------------------
Row1 => displays quote(") image.
Row2 => displays content.
Row3 => displays feedbacker image, name, and designation.
*/
const FeedbackCard = ({ content, name, title, img }) => (
    /*Row1. displays quote(") image*/
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">  
    {/*displays quote(") image*/}
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    
    {/*Row2. displays content*/}
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    {/*Row3. displays feedbacker image, name, and designation*/}
    <div className="flex flex-row">
      {/*displays feedbacker's image*/}
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      
      {/*displays feedbacker's name and designation*/}
      <div className="flex flex-col ml-4">
        
        {/*displays feedbacker's name*/}
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>

        {/*displays feedbacker's designation*/}
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
  </div>
</div>
);


export default FeedbackCard;