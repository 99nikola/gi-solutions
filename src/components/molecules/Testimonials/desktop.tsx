import { Box } from "@mui/material";
import { TestimonialsProps } from ".";
import Image from "next/image";

export const TestimonialsDesktop: React.FC<TestimonialsProps> = (props) => {
  return (
    <Box className="flex pt-[8.33vw] px-[5.208vw] pb-[7.292vw] relative">
      <div className="text-rose-800 text-[5.208vw] font-bold leading-[4.75vw] tracking-tighter flex-1">
        <span className="text-black">
          Some words
          <br />
          about{" "}
        </span>
        <span className="text-zinc-500">
          Our Work
          <br />
        </span>
        <span className="text-black">
          written down by
          <br />
        </span>
        <span className="text-rose-800">Our Friends</span>
      </div>
      <Box className="w-[32.552vw]">
        <div className="text-black text-right text-[1.458vw] leading-[normal]">
          <span className="text-rose-800">”</span>
          <span className="text-black">{props.content}</span>
          <span className="text-rose-800">
            ”
            <br />
          </span>
        </div>
        <div className="flex items-center justify-end gap-3 mt-[4.01vw]">
          <div className="h-[2px] bg-rose-800 w-28"></div>
          <span className="shrink-0 font-bold leading-[normal] text-[1.458vw]">
            {props.name}
          </span>
        </div>
        <div className="mt-[5.208vw] flex justify-end gap-[1.25vw]">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="102"
              viewBox="0 0 102 102"
              fill="none"
            >
              <path
                d="M51 101C78.6142 101 101 78.6142 101 51C101 23.3858 78.6142 1 51 1C23.3858 1 1 23.3858 1 51C1 78.6142 23.3858 101 51 101Z"
                stroke="black"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M43.07 67.8099L26.27 50.9999L43.07 34.1899"
                stroke="black"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M75.73 51H26.27"
                stroke="black"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="102"
              viewBox="0 0 102 102"
              fill="none"
            >
              <path
                d="M51 0.999996C23.3858 0.999993 1.00001 23.3858 1 51C1 78.6142 23.3858 101 51 101C78.6142 101 101 78.6142 101 51C101 23.3858 78.6142 0.999998 51 0.999996Z"
                stroke="#A5002F"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M58.93 34.1901L75.73 51.0001L58.93 67.8101"
                stroke="#A5002F"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M26.27 51L75.73 51"
                stroke="#A5002F"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          </button>
        </div>
      </Box>
      <Image
        src="/images/arrow/ArrowTopRight-dark.svg"
        width={400}
        height={400}
        alt=""
        layout="responsive"
        className="absolute left-1/2 -translate-x-1/2 bottom-[4.271vw] max-w-[20.833vw]"
      />
    </Box>
  );
};
