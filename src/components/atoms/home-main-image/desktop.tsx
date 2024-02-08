import Image from "next/image";
import React from "react";

const HomePageMainImageDesktop = () => {
  return (
    <Image
      src="/Main.png"
      alt="home-page-main-image"
      width={1920}
      height={1080}
      priority
      layout="responsive"
    />
  );
};

export default HomePageMainImageDesktop;
