const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full">
      <svg
        className="absolute top-0 left-0 w-full h-auto"
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
        className="absolute top-0 left-0 w-full h-auto"
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
      <div className="relative flex flex-col items-center text-center pt-24 z-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Hello, how can we help you?
        </h1>
        <p className="text-gray-600 mt-2">Find Travel guide, FAQ, chat</p>
      </div>
    </div>
  );
};

export default HeroSection;
