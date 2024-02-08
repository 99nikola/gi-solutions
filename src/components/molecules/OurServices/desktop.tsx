import Image from "next/image";
import React from "react";
import { OurServicesProps } from ".";
import { Link } from "@/utils/navigation";
import { ROUTES } from "@/constants";

const OurServicesDesktop: React.FC<OurServicesProps> = (props) => {
  return (
    <div className="w-full px-[5.208vw] pt-[7.396vw] pb-[4.421vw] bg-[#EEEEEE] relative z-0 overflow-hidden">
      <Image
        alt=""
        src="/images/Services lines.svg"
        width="1920"
        height="1108"
        className="absolute bottom-0 -z-10"
      />
      <div className="flex items-center justify-between max-md:flex-wrap">
        <div className={`flex w-1/2 flex-col gap-[2.239vw]`}>
          <div
            className={`text-rose-800 text-[5.208vw] leading-[normal] font-bold tracking-tighter max-md:max-w-full`}
          >
            {props.title.split(" ").map((e, i) => (
              <span key={e} className={`text-${i ? "primary" : "black"}`}>
                {" "}
                {e}
              </span>
            ))}
          </div>
          <span
            className={`text-black text-[1.458vw] font-bold leading-[normal] max-md:max-w-full max-md:mt-10`}
          >
            {props.content}
          </span>
        </div>
        <Image
          src="/images/arrow/ArrowBottomLeft.svg"
          width={402}
          height={402}
          alt=""
          layout="responsive"
          className="max-w-[20.833vw] stroke[1px] strokeZinc-500 overflow-hidden absolute top-[3.802vw] right-[5.208vw]"
        />
      </div>
      <div className={`flex w-full border mt-[7.395vw] mb-[3.906vw]`}>
        <div className="flex-1">
          <Image
            src={"/images/services/Bending.png"}
            alt=""
            width={430}
            height={700}
            layout="responsive"
            className={"max-h-[36.458vw]"}
          />
        </div>
        <div className="flex-1">
          <Image
            src={"/images/services/LaserAndWatercutting.png"}
            alt=""
            width={430}
            height={700}
            className={"max-h-[36.458vw]"}
            layout="responsive"
          />
        </div>
        <div className="flex-1">
          <Image
            src={"/images/services/TurningAndMilling.png"}
            alt=""
            width={430}
            height={700}
            className={"max-h-[36.458vw]"}
            layout="responsive"
          />
        </div>
        <div className="flex-1">
          <Image
            src={"/images/services/Welding.png"}
            alt=""
            width={430}
            height={700}
            className={"max-h-[36.458vw]"}
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-[1.406vw] w-full justify-center">
          <div className="text-black text-[1.458vw] font-bold leading-[normal] tracking-[2px]">
            {props.more}
          </div>
          <Link href={ROUTES.SERVICES}>
            <Image
              src="/ButtonPrimaryRight.svg"
              width={100}
              height={100}
              layout="responsive"
              className="max-w-[5.208vw]"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurServicesDesktop;
