import Image from "next/image";
import React from "react";
import { OurServicesProps } from ".";

const OurServicesMobile: React.FC<OurServicesProps> = (props) => {
  return (
    <div className="lg:hidden w-full  bg-[#EEEEEE] relative overflow-hidden">
      <div className="py-8 relative flex flex-col items-stretch px-5 py-4 font-bold max-w-[90%]">
        <div className="w-full text-6xl tracking-tighter">
          Our <span className="text-rose-800">Services</span>
        </div>
        <div className="mt-9 w-full text-xl leading-7 text-black">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          euismod.
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="152"
          height="152"
          viewBox="0 0 152 152"
          fill="none"
          className="absolute bottom-0 right-0"
        >
          <path
            d="M151 11.0135L140.986 1L15.1625 126.82V50.1959H1V151H101.804V136.837H25.1795L151 11.0135Z"
            stroke="#828282"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
      <div className="flex ml-4 pr-4 py-4 overflow-auto">
        <div className="shrink-0">
          <Image
            src={"/images/services/Bending.png"}
            alt=""
            width={430}
            height={700}
            className="box-shadow-[0_4px_2px_-2px_primary]"
          />
        </div>
        <div className="shrink-0">
          <Image
            src={"/images/services/LaserAndWatercutting.png"}
            alt=""
            width={430}
            height={700}
          />
        </div>
        <div className="shrink-0">
          <Image
            src={"/images/services/TurningAndMilling.png"}
            alt=""
            width={430}
            height={700}
          />
        </div>
        <div className="shrink-0">
          <Image
            src={"/images/services/Welding.png"}
            alt=""
            width={430}
            height={700}
          />
        </div>
      </div>
      <div className="flex px-5 justify-center gap-5 py-14 relative">
        <Image
          alt=""
          src="/images/Services lines (1).svg"
          width="1920"
          height="1108"
          className="absolute bottom-0"
        />
        <div className="text-xl flex justify-center items-center font-bold leading-9 text-black tracking-[2.1px] z-10">
          FIND ALL SERVICES
        </div>
        <Image
          src="/ButtonPrimaryRight.svg"
          width="100"
          height="100"
          alt=""
          className="z-10"
        />
      </div>
    </div>
  );
};

export default OurServicesMobile;
