import { Box } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Box>
      <div className="bg-zinc-300 py-[4.322vw] pl-[5.2084vw] pr-[13.021vw]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="flex items-stretch gap-5 my-auto max-md:mt-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5.885vw"
                height="6.979vw"
                viewBox="0 0 113 134"
                fill="none"
              >
                <path
                  d="M44.11 2.35986L0 78.7599H34.01L61.12 31.8099L44.11 2.35986Z"
                  fill="black"
                />
                <path
                  d="M112.37 99.9602V116.3L82.92 133.3V82.9502L112.37 99.9502V99.9602Z"
                  fill="black"
                />
                <path
                  d="M112.37 53.29L103.87 68.01H86.87L47.6 0H81.61L112.37 53.29Z"
                  fill="black"
                />
                <path d="M0 82.96L17 112.41H78.72V82.96H0Z" fill="black" />
              </svg>
              <div className="text-black font-[AkiraExpandedDemo] text-[1.667vw] font-extrabold leading-[normal] self-center my-auto relative">
                Lets make
                <br />
                some
                <br />
                great
                <br />
                projects!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.708vw"
                  height="2.708vw"
                  viewBox="0 0 52 52"
                  fill="none"
                  className="absolute top-1/2 right-2 -translate-y-1/2"
                >
                  <path
                    d="M26 0.999998C12.1929 0.999997 1 12.1929 1 26C1 39.8071 12.1929 51 26 51C39.8071 51 51 39.8071 51 26C51 12.1929 39.8071 0.999999 26 0.999998Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M29.9651 17.5953L38.3651 26.0003L29.9651 34.4053"
                    stroke="black"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M13.635 26L38.3651 26"
                    stroke="black"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex max-md:flex-col items-stretch justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
              <div className="text-black text-[1.0417vw] font-bold leading-[normal] shrink basis-auto max-md:max-w-full">
                Global Industrial Solutions
                <br />
                Industrijska bb, 84000{" "}
                <span className="break-keep">Bijelo Polje, Montenegro</span>
                <br />
                office@gi-solutions.me
              </div>
              <div className="text-black text-[1.0417vw] font-bold leading-[normal]">
                Services
                <br />
                Certificates
                <br />
                Locations
              </div>
              <div className="text-black text-[1.0417vw] font-bold leading-[normal]">
                Facebook
                <br />
                Instagram
                <br />
                LinkedIn
              </div>
            </div>
          </div>
        </div>
      </div>

      <Box className="bg-black py-4 flex text-white text-center text-[1.0417vw] font-bold leading-9 justify-center">
        © Copyright Global Industrial Solutions
      </Box>
    </Box>
  );
};
