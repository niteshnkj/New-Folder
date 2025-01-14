import FaqTravelCard from "./FaqTravelCard";

const HeroSection = () => {
  return (
    <div className="relative md:h-[391px] h-[236px] w-full">
      <svg
        className="absolute hidden md:block top-0 left-0 w-full h-auto"
        viewBox="0 0 1365 470"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1365 0C1365 0 1035.4 0.00285854 638.142 0.000549345C240.889 -0.00175986 354.116 0.00407537 -0.916748 0.00222483L-1 445.79C192.194 489.468 290.667 409.187 507.5 409.187C770.502 409.187 1128.99 556.052 1365 389.662L1365 0Z"
          fill="url(#paint0_linear_1_23)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_23"
            x1="752.5"
            y1="434.364"
            x2="749.178"
            y2="13.0758"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DCF5F5" />
            <stop offset="1" stopColor="#DCF5F5" stopOpacity="0.46" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="375"
        height="230"
        className="absolute md:hidden top-0 left-0 w-full h-auto"
        viewBox="0 0 375 230"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M376 7.16677e-09C376 7.16677e-09 285.274 0.00347648 175.928 0.000668098C66.5817 -0.00214029 97.748 0.00495635 0.0230408 0.00270578L0.000152588 209.853C53.178 262.972 164.315 190.837 224 190.837C296.393 190.837 313.5 228.274 376 209.853L376 7.16677e-09Z"
          fill="url(#paint0_linear_1_398)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_398"
            x1="207.406"
            y1="-107.241"
            x2="189.575"
            y2="-619.01"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DCF5F5" />
            <stop offset="1" stopColor="#DCF5F5" stopOpacity="0.46" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className="absolute hidden md:block top-0 left-0 w-full h-auto"
        viewBox="0 0 1366 471"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.94813e-06 0C5.94813e-06 0 329.605 0.00285854 726.858 0.000549345C1124.11 -0.00175986 1010.88 0.00407537 1365.92 0.00222483L1366 445.79C1229.5 511.221 974.333 428.612 757.5 428.612C494.498 428.612 336.5 506.953 0 415.807L5.94813e-06 0Z"
          fill="url(#paint0_linear_1_22)"
          fillOpacity="0.52"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_22"
            x1="612.5"
            y1="434.364"
            x2="615.822"
            y2="13.0758"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DCF5F5" />
            <stop offset="1" stopColor="#DCF5F5" stopOpacity="0.46" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="375"
        height="235"
        className="absolute md:hidden top-0 left-0 w-full h-auto"
        viewBox="0 0 375 235"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0.00317383C0 0.00317383 90.7257 0.00664779 200.072 0.00384144C309.418 0.00103509 278.252 0.00812659 375.977 0.00587764L376 227.508C311 253.712 283.685 198.048 224 198.048C151.607 198.048 110 263.564 0.000110626 191.07L0 0.00317383Z"
          fill="url(#paint0_linear_1_397)"
          fillOpacity="0.52"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_397"
            x1="168.594"
            y1="-87.9555"
            x2="186.399"
            y2="-599.355"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DCF5F5" />
            <stop offset="1" stopColor="#DCF5F5" stopOpacity="0.46" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative flex flex-col items-center text-center md:top-[74px] top-[30px] z-10 font-montserrat">
        <h1 className="text-[20px] md:text-[34px] md:leading-[42px] leading-6 font-bold  text-gray-800 pt-6">
          Hello, how can we help you?
        </h1>
        <p className="text-[#484848] font-medium md:text-[20px] text-sm leading-4 md:leading-[24px] mt-2">
          Find Travel guide, FAQ, chat
        </p>
        <div className="relative md:top-[210px] top-[35px] flex flex-col md:flex-row gap-6">
          <FaqTravelCard />
          <FaqTravelCard />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
