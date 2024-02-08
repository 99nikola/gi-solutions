import { SmallMain } from "@/components/molecules/Main";
import Image from "next/image";
import React from "react";

export default function Automation() {
  return (
    <div>
      <SmallMain
        image={{ src: "/images/automation/Services main image 4 1 (2).png" }}
        text={{ red: "Laboratory", white: "Automation" }}
      />

      <div className="relative px-[100px] pt-[120px] pb-[300px] flex flex-col gap-[150px] overflow-hidden">
        <div className="absolute top-0 right-0 bg-[#EEEEEE] w-[90%] h-[45%] -z-10"></div>
        <div className="flex">
          <div className="text-black text-6xl font-bold leading-[57px] tracking-tighter max-w-[500px] w-3/4">
            <span className="text-rose-800">Our laboratory</span>
            <br />
            <span className="text-black">is the core of</span>
            <br />
            <span className="text-black">our services</span>
          </div>

          <Image
            src="/images/arrow/ArrowRight.svg"
            alt=""
            width="302"
            height="211"
            className="mx-[120px]"
          />
          <div className="text-black text-3xl font-bold leading-10 tracking-tighter max-w-[765px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            euismod .
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <Image
              src={"/images/services/Bending.png"}
              alt=""
              width={430}
              height={700}
              className="box-shadow-[0_4px_2px_-2px_primary]"
            />
          </div>
          <div>
            <Image
              src={"/images/services/LaserAndWatercutting.png"}
              alt=""
              width={430}
              height={700}
            />
          </div>
          <div>
            <Image
              src={"/images/services/TurningAndMilling.png"}
              alt=""
              width={430}
              height={700}
            />
          </div>
          <div>
            <Image
              src={"/images/services/Welding.png"}
              alt=""
              width={430}
              height={700}
            />
          </div>
        </div>
        <Image
          alt=""
          src="/images/Services lines.svg"
          width="1920"
          height="1108"
          className="absolute bottom-0 -z-10"
        />
      </div>

      <div className="flex justify-end relative">
        <Image
          alt=""
          src="/images/automation/Laboratory.png"
          width={1500}
          height={1000}
        />

        <div className=" absolute left-[100px] bottom-0 border shadow-2xl backdrop-blur-[26.600000381469727px] bg-slate-200 bg-opacity-60 flex max-w-[840px] flex-col pl-14 pr-16 py-12 rounded-[1rem_1rem_0_0] border-solid border-white max-md:px-5">
          <div className="text-primary text-6xl font-bold leading-[57px] tracking-tighter self-stretch mt-14 max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-10">
            Laboratory
            <br />
            <span className="text-black">Services</span>
          </div>
          <div className="w-[110px] h-[1px] bg-primary overflow-hidden max-w-full mt-16 self-start max-md:mt-10" />
          <div className="text-black text-4xl font-bold leading-[79.92px] tracking-tighter self-stretch mt-16 max-md:max-w-full max-md:mt-10">
            TO YOUR SPECIFICATIONS
          </div>
          <div className="text-black text-3xl font-bold leading-9 tracking-tighter self-stretch mt-16 mb-12 max-md:max-w-full max-md:my-10">
            The functionality of your systems is absolutely essential for your
            smooth workflows. Any disruption to your equipment costs time and
            money. Such failures cannot be prevented. But it is possible to keep
            them as low as possible. Our service concept offers you fast and
            individual solutions. From advice to on-site service we are there
            for you. We offer you professional competence with an experienced
            and innovative service team.
          </div>
        </div>
      </div>
      <div className="bg-black pb-20 mb-[200px] pl-[100px] mr-[100px]">
        <div className="bg-rose-800 flex w-[840px] items-center justify-between pl-14 pr-8 pt-12 pb-8 rounded-[0_0_1rem_1rem]">
          <div className="text-white text-6xl font-bold leading-[57px] tracking-tighter w-[440px] my-auto max-md:text-4xl max-md:leading-10">
            <span className="text-black">Our</span>
            <br />
            <span className="text-white">Services</span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="144"
            height="144"
            viewBox="0 0 144 144"
            fill="none"
          >
            <path
              d="M9.61572 -5.87412e-06L-4.20316e-07 9.61571L120.79 130.402L47.2298 130.402L47.2298 144L144 144L144 47.2298L130.402 47.2298L130.402 120.786L9.61572 -5.87412e-06Z"
              fill="#EEEEEE"
            />
          </svg>
        </div>
        <div className="flex flex-wrap">
          <div className="basis-1/4 mt-14 flex flex-col gap-4">
            <Image
              src="/images/automation/Artboard 18.svg"
              alt=""
              width={60}
              height={77}
            />
            <p className="text-white text-3xl font-semibold leading-9 tracking-tighter">
              Laboratory service
            </p>
          </div>
          <div className="basis-1/4 mt-14 flex flex-col gap-4">
            <Image
              src="/images/automation/Group 8.svg"
              alt=""
              width={60}
              height={77}
            />
            <p className="text-white text-3xl font-semibold leading-9 tracking-tighter">
              Laboratory service
            </p>
          </div>
          <div className="basis-1/4 mt-14 flex flex-col gap-4">
            <Image
              src="/images/automation/Group 10.svg"
              alt=""
              width={60}
              height={77}
            />
            <p className="text-white text-3xl font-semibold leading-9 tracking-tighter">
              Laboratory service
            </p>
          </div>
          <div className="basis-1/4 mt-14 flex flex-col gap-4">
            <Image
              src="/images/automation/Group 11.svg"
              alt=""
              width={60}
              height={77}
            />
            <p className="text-white text-3xl font-semibold leading-9 tracking-tighter">
              Laboratory service
            </p>
          </div>
          <div className="basis-1/4 mt-14 flex flex-col gap-4">
            <Image
              src="/images/automation/Group 12.svg"
              alt=""
              width={60}
              height={77}
            />
            <p className="text-white text-3xl font-semibold leading-9 tracking-tighter">
              Laboratory service
            </p>
          </div>
          <div className="basis-1/4 mt-14 flex flex-col gap-4">
            <Image
              src="/images/automation/Group 13.svg"
              alt=""
              width={60}
              height={77}
            />
            <p className="text-white text-3xl font-semibold leading-9 tracking-tighter">
              Laboratory service
            </p>
          </div>
          <div className="basis-1/4 mt-14 flex flex-col gap-4">
            <Image
              src="/images/automation/Group 14.svg"
              alt=""
              width={60}
              height={77}
            />
            <p className="text-white text-3xl font-semibold leading-9 tracking-tighter">
              Laboratory equipment maintenance
            </p>
          </div>
          <div className="basis-1/4 mt-14 flex flex-col gap-4">
            <Image
              src="/images/automation/Group 15.svg"
              alt=""
              width={60}
              height={77}
            />
            <p className="text-white text-3xl font-semibold leading-9 tracking-tighter">
              Laboratory service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
