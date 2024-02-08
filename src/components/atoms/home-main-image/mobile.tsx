import Image from "next/image";
import React from "react";

const HomePageMainImageMobile = () => {
  return (
    <Image
      src="/Main-mobile.png"
      alt="home-page-main-image"
      width={450}
      height={600}
      layout="responsive"
      priority
    />
  );
};

export default HomePageMainImageMobile;
