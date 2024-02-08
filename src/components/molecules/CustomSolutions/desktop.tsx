import { ROUTES } from "@/constants";
import { Link } from "@/utils/navigation";
import Image from "next/image";
import React from "react";
import { CustomSolutionsProps } from ".";

const CustomSolutionsDesktop: React.FC<CustomSolutionsProps> = (props) => {
  return (
    <div className="flex flex-row-reverse">
      <span className="flex flex-1 flex-col pr-[5.208vw] pt-[7.812vw] font-bold">
        <div className="text-[5.208vw] flex flex-col justify-end text-end leading-[normal]">
          {props.title.split(" ").map((e, i) =>
            i ? (
              <span key={e} className="text-primary">
                {e}
              </span>
            ) : (
              e
            )
          )}
        </div>
        <span className="mt-[4.948vw] text-[1.458vw] self-end text-end max-w-[32.031vw]">
          {props.content}
        </span>
        <Link
          className="mt-[6.51vw] mb-[6.093vw] text-[1.458vw] flex gap-[1.041vw] items-center self-center"
          href={ROUTES.CONTACT_US}
        >
          {props.more}
          <Image
            alt=""
            src={"/ButtonPrimaryRight.svg"}
            height={100}
            width={100}
          />
        </Link>
      </span>
      <Image
        src={"/images/custom-solutions/Custom Solutions.png"}
        alt=""
        className="max-w-[50vw]"
        width={960}
        height={960}
        layout="responsive"
      />
    </div>
  );
};

export default CustomSolutionsDesktop;
