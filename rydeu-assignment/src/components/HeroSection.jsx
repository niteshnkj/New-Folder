import {
  FaqSvg,
  HeroBgSvg,
  LinkGuideSvg,
  TravelGuideSvg,
} from "../assets/svg/Svg";
import FaqTravelCard from "./FaqTravelCard";
import { useState } from "react";
import { ChatIconSvg, QueryIconSvg, SocialIconSvg } from "../assets/svg/Svg";
import Accordion from "./Accordion";
import ChatIcons from "./ChatIcons";
import QueryForm from "./QueryForm";
import SocialIcons from "./SocialIcons";

const HeroSection = () => {
  const [activeIndex, setIsActiveIndex] = useState(null);

  const accordionItems = [
    {
      title: "Chat",
      subtitle: "Lorem ipsum doolor sit amet",
      logo: <ChatIconSvg />,
      content: <ChatIcons />,
    },
    {
      title: "Social",
      subtitle: "Lorem ipsum doolor sit amet",
      logo: <SocialIconSvg />,
      content: <SocialIcons />,
    },
    {
      title: "Send Query",
      subtitle: "Lorem ipsum doolor sit amet",
      logo: <QueryIconSvg />,
      content: <QueryForm />,
    },
  ];
  const faqtravelItems = [
    {
      title: "FAQ",
      subtitle: "Lorem ipsum doolor sit amet",
      logo: <FaqSvg />,
      button: <LinkGuideSvg />,
    },
    {
      title: "Travel Guide",
      subtitle: "Lorem ipsum doolor sit amet",
      logo: <TravelGuideSvg />,
      button: <LinkGuideSvg />,
    },
  ];
  return (
    <div className="relative h-[50vh] w-full">
      <HeroBgSvg />
      <div className="relative flex flex-col items-center  md:top-[54px] top-[30px] z-10 font-montserrat">
        <h1 className="text-[20px] md:text-[34px] md:leading-[42px] leading-6 font-bold  text-gray-800 pt-6">
          Hello, how can we help you?
        </h1>
        <p className="text-[#484848] font-medium md:text-[20px] text-sm leading-4 md:leading-[24px] mt-2">
          Find Travel guide, FAQ, chat
        </p>
        <div className="relative md:top-[98px] top-[42px] flex flex-col md:flex-row gap-6">
          {faqtravelItems.map((item, index) => {
            return <FaqTravelCard key={index} item={item} />;
          })}
        </div>
        <div className="flex flex-col gap-6 md:gap-10 items-center justify-center  relative top-[70px] md:top-[140px]">
          {accordionItems.map((item, index) => {
            return (
              <Accordion
                key={index}
                item={item}
                active={index === activeIndex}
                setActive={() => {
                  index === activeIndex
                    ? setIsActiveIndex(null)
                    : setIsActiveIndex(index);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
