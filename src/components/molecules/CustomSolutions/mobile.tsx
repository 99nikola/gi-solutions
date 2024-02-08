import { ROUTES } from "@/constants";
import { Link } from "@/utils/navigation";
import Image from "next/image";
import { CustomSolutionsProps } from ".";

export const CustomSolutionsMobile: React.FC<CustomSolutionsProps> = (
  props
) => {
  return (
    <div id="about-us">
      <div className="flex flex-col items-stretch p-8 font-bold max-w-[386px]">
        <div className="w-full text-6xl tracking-tighter leading-[50px]">
          Custom
          <br />
          <span className="text-rose-800">Solution</span>
        </div>
        <div className="mt-14 w-full text-xl leading-7 text-black">
          We recognize at GIS that each project is unique and necessitates an
          individualized approach to accomplish optimal outcomes. That is the
          reason we provide a diverse range of engineering and design services
          to assist you in bringing your ideas to life.
          <br />
        </div>
        <div className="flex justify-center items-center">
          <Link
            className="mt-[70px] flex gap-5 items-center"
            href={ROUTES.CONTACT_US}
          >
            {props.more}
            <Image
              alt=""
              src={"/ButtonPrimaryRight.svg"}
              height={80}
              width={80}
            />
          </Link>
        </div>
      </div>
      <Image
        src={"/images/custom-solutions/Custom Solutions 1.png"}
        alt=""
        className="w-full flex-1"
        width={960}
        height={960}
      />
    </div>
  );
};

export default CustomSolutionsMobile;
