import React, { PropsWithChildren } from "react";
import Marquee from "react-fast-marquee";

export const CustomMarquee = ({ children }: PropsWithChildren) => {
  return (
    <Marquee
      speed={250}
      autoFill={true}
      pauseOnHover
      className="font-[AkiraExpandedDemo] text-white text-center text-5xl font-extrabold leading-[52px] max-md:text-4xl max-md:leading-10 bg-blend-darken bg-[url('/MovingStrip.png')] py-[115px] bg-[rgba(0,0,0,0.8)] h-[15.625vw]"
    >
      {children}
    </Marquee>
  );
};
