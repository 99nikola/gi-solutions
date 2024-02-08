import Image from "next/image";
import { AboutUsProps } from ".";

const AboutUsMobile: React.FC<AboutUsProps> = (props) => {
  return (
    <div id="about-us" className="relative flex flex-col">
      <Image
        src="/images/About us bg image.svg"
        alt=""
        width={1060}
        height={920}
        layout={"responsive"}
        className="absolute left-[10%] bottom-0 -z-10"
      />
      <span className="flex flex-1 flex-col text-3xl px-8 py-[4.688vw] font-bold">
        <div className="text-6xl flex gap-2 leading-[normal]">
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
        <div className="mt-11 text-[21px] text-black">{props.content}</div>
      </span>
      <Image
        src={"/AboutUs.png"}
        alt=""
        className="w-full flex-1"
        width={960}
        height={960}
        layout="responsive"
      />
    </div>
  );
};

export default AboutUsMobile;
