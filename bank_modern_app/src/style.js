const styles = {
    /*
    xl:max-w-[1280px] w-full => suggests that the box width should be set to the maximum width of 1280px for extra-large screens.
    xs:text-[48px] => text size should be 48px for screens at the extra-small(xs).
    xs:leading-[76.8px] => applies a line height of 76.8px specifically for the extra small (xs). 
    
    flex-direction:row, the main axis runs horizontally, and the cross axis runs vertically.
    flex-direction:column, the main axis runs vertically, and the cross axis runs horizontally.
    justify-center => horizontally centering its child elements along the main axis.
    items-center => vertically centering its child elements along the cross axis.
    */
    boxWidth: "xl:max-w-[1280px] w-full",
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph:"font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
    flexCenter:"flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
};