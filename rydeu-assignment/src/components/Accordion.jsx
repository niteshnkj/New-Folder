/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-4 flex flex-col items-center" >
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col bg-white rounded-lg shadow-lg p-4 md:p-6 border border-gray-200 transition-all w-[963px]"
        >
          <div
            onClick={() => handleToggle(index)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-4">
              {item.logo}
              <div>
                <h1 className="text-sm md:text-lg font-bold text-gray-800">
                  {item.title}
                </h1>
                <p className="text-xs md:text-sm text-gray-500">
                  {item.subtitle}
                </p>
              </div>
            </div>
            <div className="text-gray-500">
              {activeIndex === index ? (
                <IoIosArrowUp size={20} />
              ) : (
                <IoIosArrowDown size={20} />
              )}
            </div>
          </div>
          {activeIndex === index && (
            <div className="mt-4 space-y-2">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
