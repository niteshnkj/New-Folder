import {
  FaqSvg,
  HeroBgSvg,
  LinkGuideSvg,
  TravelGuideSvg,
} from "../assets/svg/Svg";
import FaqTravelCard from "./FaqTravelCard";

const HeroSection = () => {
  const faqtravelItems = [
    {
      title: "FAQ",
      subtitle: "Lorem ipsum doolor sit amet",
      logo: <FaqSvg />,
      button: <LinkGuideSvg />,
    },
    {
      title: "Social",
      subtitle: "Lorem ipsum doolor sit amet",
      logo: <TravelGuideSvg />,
      button: <LinkGuideSvg />,
    },
  ];
  return (
    <div className="relative md:h-[391px] h-[236px] w-full">
      <HeroBgSvg />
      <div className="relative flex flex-col items-center text-center md:top-[54px] top-[30px] z-10 font-montserrat">
        <h1 className="text-[20px] md:text-[34px] md:leading-[42px] leading-6 font-bold  text-gray-800 pt-6">
          Hello, how can we help you?
        </h1>
        <p className="text-[#484848] font-medium md:text-[20px] text-sm leading-4 md:leading-[24px] mt-2">
          Find Travel guide, FAQ, chat
        </p>
        <div className="relative md:top-[90px] top-[35px] flex flex-col md:flex-row gap-6">
          <FaqTravelCard items={faqtravelItems} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
