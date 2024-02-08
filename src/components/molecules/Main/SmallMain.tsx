import Image from "next/image";
import React from "react";

type Props = {
  image: {
    src: string;
    className?: string;
  };
  text: {
    red: string;
    white: string;
  };
};

export const SmallMain = ({
  image: { src, className = "" },
  text: { red, white },
}: Props) => {
  return (
    <div>
      <Image
        src={src}
        alt=""
        width={1920}
        height={1080}
        priority
        className={`w-full ${className}`}
      />
      <div className="absolute top-[300px] left-[200px] text-white text-8xl font-bold leading-[75px] tracking-tighter max-w-[366px]">
        <span className="text-rose-800">
          {red}
          <br />
        </span>
        <span className="text-white">{white}</span>
      </div>
    </div>
  );
};
