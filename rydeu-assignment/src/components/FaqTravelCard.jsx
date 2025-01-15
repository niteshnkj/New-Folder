/* eslint-disable react/prop-types */
const FaqTravelCard = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex md:w-[472px] w-[351px] h-[67px] md:h-[117px] bg-[#FFFFFF] rounded-md md:rounded-xl items-center p-8 gap-12 shadow-sm bottom-0 border-[1.4px] md:border-none drop-shadow-xl"
        >
          {item.logo}

          <div className="flex flex-col gap-1">
            <h1 className="font-montserrat font-bold text-[#484848] text-xs md:text-lg mb-1 self-start">
              {item.title}
            </h1>
            <p className="font-medium text-[#A8A8A8] text-[10px] leading-3 md:text-sm ">
              {item.subtitle}
            </p>
          </div>

          <div className="md:hidden">{item.button}</div>
        </div>
      ))}
    </>
  );
};

export default FaqTravelCard;
