import Image from "next/image";
import { AboutUsProps } from ".";

const AboutUseDesktop: React.FC<AboutUsProps> = (props) => {
  return (
    <div id="about-us" className="flex">
      <div className="px-[5.208vw] py-[4.688vw] flex relative flex-col items-stretch font-bold max-w-[382px] min-w-[50%]">
        <div className="w-full text-[5.208vw] tracking-tighter text-rose-800">
          {props.title.split(" ").map((e, i) =>
            i ? (
              <span key={e} className="text-rose-800">
                {e}
              </span>
            ) : (
              e
            )
          )}
        </div>
        <div className="mt-11 w-[32.03vw] text-[1.456vw] leading-[normal] text-black">
          {props.content}
        </div>
        <Image
          src="/images/About us bg image (1).svg"
          alt=""
          width={960}
          height={960}
          layout="responsive"
          className="absolute bottom-0 -z-10 max-w-[50vw]"
        />
      </div>
      <Image
        src={"/AboutUs.png"}
        alt=""
        className="w-full flex-1 max-w-[50vw]"
        width={960}
        height={960}
        layout="responsive"
      />
    </div>
  );
};

export default AboutUseDesktop;
