/* eslint-disable react/prop-types */

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({ item, active, setActive }) => {
  const { logo, title, subtitle, content } = item;

  return (
    <div className="flex font-montserrat  md:w-[963px] w-[351px] bg-[#FFFFFF] rounded-md md:rounded-xl items-center  py-6 px-4 md:px-8  shadow-sm border-2 border-[#EFEFEF] drop-shadow-xl">
      <div className="w-full ">
        <span
          className="flex justify-between cursor-pointer"
          onClick={() => {
            setActive((active) => !active);
          }}
        >
          <span className="flex gap-4 md:gap-12 items-center">
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
          <span className="flex items-center">
            {active ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
          </span>
        </span>
        <div>{active && <div className="mt-4 space-y-2">{content}</div>}</div>
      </div>
    </div>
  );
};

export default Accordion;
