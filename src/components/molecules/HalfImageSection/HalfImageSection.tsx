import Image from "next/image";
import React, { MouseEventHandler, PropsWithChildren, ReactNode } from "react";

type Props = {
  title: ReactNode;
  content: ReactNode;
  button: ReactNode;
  image: {
    url: string;
    dimensions: number;
  };
  containerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  reverse?: boolean;
};

export const HalfImageSection = ({
  containerProps,
  button,
  content,
  image: { dimensions, url },
  title,
  reverse = false,
}: Props) => {
  return (
    <div
      {...containerProps}
      className={`flex ${reverse ? "" : "flex-row-reverse"} ${
        containerProps?.className ?? ""
      }`}
    >
      <span className="flex flex-1 flex-col text-3xl px-[100px] py-[90px] font-bold">
        {title}
        {content}
        {button}
      </span>
      <Image
        src={url}
        alt=""
        className="w-full flex-1"
        width={dimensions}
        height={dimensions}
      />
    </div>
  );
};

export const HalfImageSectionTitle = ({ children }: PropsWithChildren) => (
  <div className="text-8xl flex gap-2">{children}</div>
);

export const HalfImageSectionContent = ({ children }: PropsWithChildren) => {
  return <div className="mt-[80px]">{children}</div>;
};

export const HalfImageSectionButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button className="mt-[70px] flex gap-5 items-center" onClick={onClick}>
      {text}
      <Image alt="" src={"/ButtonPrimaryRight.svg"} height={100} width={100} />
    </button>
  );
};
