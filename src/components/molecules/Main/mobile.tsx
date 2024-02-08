import HomePageMainImageMobile from "@/components/atoms/home-main-image/mobile";
import Image from "next/image";
import React, { useMemo } from "react";
import { MainProps } from ".";

export function MainMobile(props: MainProps) {
  const TitleMemoized = useMemo(
    () =>
      props.title.split(" ").map((e) => {
        const [first, ...rest] = e;
        return (
          <span key={e} className="text-7xl font-bold leading-[normal]">
            <span className="text-primary">{first}</span>
            {rest.join("")}
          </span>
        );
      }),
    [props.title]
  );

  return (
    <div className="relative">
      <HomePageMainImageMobile />
      <div className="absolute left-7 top-1/2 -translate-y-1/2 text-white flex flex-col">
        {TitleMemoized}
        <span className="text-[21px] font-bold">{props.subtitle}</span>
        <a href="#about-us">
          <Image
            src={"/ButtonPrimaryDown.svg"}
            className="mt-[2.34vw] max-w-[80px]"
            width={80}
            height={80}
            layout={"responsive"}
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
