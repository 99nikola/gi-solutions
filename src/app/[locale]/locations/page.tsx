import { CustomMarquee } from "@/components/atoms/CustomMarquee";
import { SmallMain } from "@/components/molecules/Main";
import Image from "next/image";
import React from "react";

export default function Locations() {
  return (
    <div>
      <SmallMain
        image={{ src: "/images/locations/main-image.png" }}
        text={{ red: "Our", white: "Locations" }}
      />
      <div className="py-[100px] px-[30px]">
        <div className="px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
              <div className="text-black text-8xl font-bold leading-[74.8px] tracking-tighter my-auto max-md:max-w-full max-md:text-4xl max-md:mt-10">
                WE OPERATE IN
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
              <Image
                src="/images/locations/Text.svg"
                width="315"
                height="430"
                alt=""
                className="aspect-[0.74] object-contain object-center w-[350px] overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col mt-52 items-start max-md:max-w-full max-md:mt-10 gap-10">
                <div className="text-black text-right text-8xl font-bold leading-[74.8px] tracking-tighter self-stretch max-md:max-w-full max-md:text-4xl">
                  COUNTRIES
                </div>
                <div className="h-[1px] w-24 bg-primary"></div>
                <div className="text-black text-xl leading-6 tracking-tighter self-stretch max-md:max-w-full max-md:mt-10">
                  Our operations function internationally and are always ready
                  for new production challenges.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EEEEEE] relative">
        <Image
          alt=""
          src={"/images/locations/map.svg"}
          width="1920"
          height="1143"
        />

        <div className="absolute left-[100px] top-[80px] bg-[rgba(255,255,255,0.2)] px-[64px] py-[52px] flex flex-col gap-[86px] w-[600px] backdrop-blur-lg">
          <div className="flex max-w-[278px] flex-col items-stretch gap-2">
            <Image
              alt=""
              src={"/images/locations/montenegro.svg"}
              width="70"
              height="41"
            />
            <div className="text-black text-4xl font-extrabold leading-5 tracking-tighter uppercase w-full mt-5">
              Montenegro
            </div>
            <div className="text-black text-xl leading-6 tracking-tight w-full">
              <div className="font-bold text-primary">HEADQUARTERS</div>
              <div>Global Industrial Solutions d.o.o.</div>
              <div>Industrijska bb</div>
              <div>84000 Bijelo Polje</div>
              <div>Montenegro</div>
              <div>+382 (0)50 683 555</div>
            </div>
          </div>

          <div className="flex max-w-[278px] flex-col items-stretch gap-2">
            <Image
              alt=""
              src={"/images/locations/montenegro.svg"}
              width="70"
              height="41"
            />
            <div className="text-black text-4xl font-extrabold leading-5 tracking-tighter uppercase w-full mt-5">
              Montenegro
            </div>
            <div className="text-black text-xl leading-6 tracking-tight w-full">
              <div className="font-bold text-primary">HEADQUARTERS</div>
              <div>Global Industrial Solutions d.o.o.</div>
              <div>Industrijska bb</div>
              <div>84000 Bijelo Polje</div>
              <div>Montenegro</div>
              <div>+382 (0)50 683 555</div>
            </div>
          </div>

          <div className="flex max-w-[278px] flex-col items-stretch gap-2">
            <Image
              alt=""
              src={"/images/locations/montenegro.svg"}
              width="70"
              height="41"
            />
            <div className="text-black text-4xl font-extrabold leading-5 tracking-tighter uppercase w-full mt-5">
              Montenegro
            </div>
            <div className="text-black text-xl leading-6 tracking-tight w-full">
              <div className="font-bold text-primary">HEADQUARTERS</div>
              <div>Global Industrial Solutions d.o.o.</div>
              <div>Industrijska bb</div>
              <div>84000 Bijelo Polje</div>
              <div>Montenegro</div>
              <div>+382 (0)50 683 555</div>
            </div>
          </div>
        </div>
      </div>

      <CustomMarquee>
        <div className="text-white font-[AkiraExpandedDemo] text-center text-5xl font-extrabold leading-[52px] max-md:text-4xl max-md:leading-10 mx-4">
          <span className="text-rose-800">GET</span>
          <span className="text-white">INTOUCH</span>
        </div>
      </CustomMarquee>
    </div>
  );
}
