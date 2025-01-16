/* eslint-disable react/prop-types */
const FaqTravelCard = ({ item }) => {
  const { logo, title, subtitle, button } = item;
  return (
    <div className="flex font-montserrat  md:w-[472px] w-[351px]  bg-[#FFFFFF] rounded-md md:rounded-xl items-center py-6 px-4 md:px-10  shadow-sm drop-shadow-xl">
      <div className="w-full ">
        <span className="flex justify-between cursor-pointer">
          <span className="flex gap-4 md:gap-12 justify-center ">
            <span className="flex items-center">{logo}</span>
            <span className="flex flex-col gap-1">
              <span className="font-bold text-[#484848] text-xs md:text-lg">
                {title}
              </span>
              <span className="font-medium text-[#A8A8A8] text-[10px] leading-3 md:text-sm">
                {subtitle}
              </span>
            </span>
          </span>
          <span className="flex items-center md:hidden">{button}</span>
        </span>
      </div>
    </div>
  );
};

export default FaqTravelCard;
