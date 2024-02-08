import HomePageMainImage from "@/components/atoms/home-main-image/home-page-image";
import { getDeviceType } from "@/utils/server";
import Image from "next/image";
import React, { useMemo } from "react";
import { MainProps } from ".";
import HomePageMainImageDesktop from "@/components/atoms/home-main-image/desktop";

export function MainDesktop(props: MainProps) {
  const TitleMemoized = useMemo(
    () =>
      props.title.split(" ").map((e) => {
        const [first, ...rest] = e;
        return (
          <span
            key={e}
            className="text-[4.167vw] lg:text-[7.812vw] font-bold leading-[normal]"
          >
            <span className="text-primary">{first}</span>
            {rest.join("")}
          </span>
        );
      }),
    [props.title]
  );

  return (
    <div className="relative">
      <HomePageMainImageDesktop />
      <div className="absolute left-[10.365vw] bottom-[9.219vw] text-white flex flex-col">
        {TitleMemoized}
        <span className="text-[1.09vw] lg:text-[1.458vw] font-bold">
          {props.subtitle}
        </span>
        <a href="#about-us">
          <Image
            src={"/ButtonPrimaryDown.svg"}
            className="mt-[2.34vw] max-w-[5.208vw]"
            width={100}
            height={100}
            layout={"responsive"}
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
