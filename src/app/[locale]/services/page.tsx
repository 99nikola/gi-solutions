import Image from "next/image";

import React from "react";
export default function Services() {
  return (
    <div className="flex flex-col relative">
      <div>
        <Image
          src={"/images/Services main image 4 1.png"}
          width={1920}
          height={750}
          alt=""
        />
        <div className="absolute top-[300px] left-[200px] text-white text-8xl font-bold leading-[75px] tracking-tighter max-w-[366px]">
          <span className="text-rose-800">
            Our
            <br />
          </span>
          <span className="text-white">Services</span>
        </div>
      </div>
      <div className="relative px-[100px] pt-[120px] pb-[300px] flex flex-col gap-[150px]">
        <div className="absolute top-0 right-0 bg-[#EEEEEE] w-[90%] h-[45%] -z-10"></div>
        <div className="flex">
          <div className="text-black text-6xl font-bold leading-[57px] tracking-tighter max-w-[400px] w-1/2">
            <span className="text-rose-800">Our services</span>
            <br />
            <span className="text-black">from industrial</span>
            <br />
            <span className="text-black">company</span>
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
        <div className="flex flex-col gap-[65px]">
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
        </div>
      </div>

      <div className="relative">
        <Image
          src={"/images/bg/DiagonalLines.svg"}
          alt=""
          width="1920"
          height="1590"
        />
        <div className="absolute top-0 left-0 flex w-full">
          <div className="w-1/2 flex flex-col gap-[75px] items-end">
            <Image
              src="/images/custom-solutions/Custom Solutions.png"
              alt=""
              width="960"
              height="960"
            />
            <Image
              src="/images/arrow/ArrowTopRight.svg"
              alt=""
              width="400"
              height="400"
              className="mr-[80px]"
            />
          </div>
          <div className="bg-white w-1/2 mr-[100px] mt-[150px] relative p-[80px]">
            <div className="absolute top-0 right-0 border-[1rem] border-l-transparent border-black border-b-transparent"></div>
            <div className="text-rose-800 text-8xl font-bold leading-[80px] tracking-tighter max-w-[350px]">
              <span className="text-black">
                Custom
                <br />
              </span>
              <span className="text-rose-800">Solution</span>
            </div>
            <svg
              className="mt-[75px]"
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="1"
              viewBox="0 0 110 1"
              fill="none"
            >
              <path d="M0 0.5H110" stroke="#A5002F" />
            </svg>
            <div className="text-black text-4xl font-bold leading-[80px] tracking-tighter max-w-[484px] mt-[65px] mb-[35px]">
              INNOVATIVE CUSTOMIZATION
            </div>
            <div className="text-black text-3xl font-bold leading-9 tracking-tighter max-w-[642px]">
              We recognize at GIS that each project is unique and necessitates
              an individualized approach to accomplish optimal outcomes. That is
              the reason we provide a diverse range of engineering and design
              services to assist you in bringing your ideas to life.
              <br />
              <br />
              Our panel of professionals will work closely with you to
              comprehend your particular requirements and produce a solution
              that fulfills your exact specifications. Whether you need
              customized tooling, specialized materials, or intricate design and
              engineering, we possess the skill and knowledge to deliver a
              solution that goes beyond your expectations.
              <br />
              <br />
              With our pledge to quality and precision, you can count on GIS to
              provide dependable, cost-efficient, and original tailored
              solutions for your most difficult undertakings.
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex justify-between px-[100px] py-[130px] pb-[200px]">
        <div className="text-black text-3xl font-bold leading-9 tracking-tighter max-w-[701px]">
          Overall, we do not see ourselves solely as suppliers but as partners
          in the automotive sector. We take pride in creating added value for
          your projects through our competencies and dedicated approach.
        </div>

        <Image
          src={"/images/logo/RedLine.svg"}
          alt=""
          width="308"
          height="327"
          className="absolute left-1/2 top-1/3 -translate-x-1/2"
        />

        <div className="text-rose-800 text-right text-7xl font-extrabold leading-[55px] tracking-tighter uppercase max-w-[7 00px] max-md:text-4xl max-md:leading-9">
          <span className="text-black">We are ready to</span>
          <br />
          <span className="text-rose-800">accompany you</span>
          <br />
          <span className="text-black">
            on your <span className="text-rose-800">path to</span>
          </span>
          <br />
          <span className="text-black">
            <span className="text-rose-800">success</span>and are
          </span>
          <br />
          <span className="text-black">available to</span>
          <br />
          <span className="text-black">assist you at</span>
          <br />
          <span className="text-rose-800">
            any time <span className="text-black">.</span>
          </span>
          <br />
        </div>
      </div>
    </div>
  );
}
