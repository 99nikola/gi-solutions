import { SmallMain } from "@/components/molecules/Main";
import Image from "next/image";
import React from "react";

export default function ContactUs() {
  return (
    <div>
      <SmallMain
        image={{ src: "/images/contact-us/main-image.png" }}
        text={{ red: "Contact", white: "Us" }}
      />
      <div className="flex">
        <MyComponent />

        <Image
          alt=""
          className="w-1/2"
          src="/images/contact-us/Rectangle.png"
          width={960}
          height={1000}
        />
      </div>
      <div className="flex justify-evenly py-[100px] px-[150px] bg-[#EEE]">
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
  );
}

function MyComponent() {
  return (
    <form className="px-[100px] pr-[120px] [pt-100px] [pb-90px] w-1/2 pt-[100px]">
      <div className="text-black text-6xl font-bold leading-[57px] tracking-tighter self-stretch w-full max-md:max-w-full max-md:text-4xl max-md:leading-10">
        <span className="text-rose-800">Contact </span>form
      </div>
      <div className="text-black text-2xl font-bold leading-9 tracking-[2.4px] self-stretch w-full mt-14 max-md:max-w-full max-md:mt-10">
        HAVE A QUESTION FOR US?
      </div>
      <div className="grid grid-cols-2 gap-5 mt-16">
        <div className="relative after:absolute after:bg-white after:border-b-[#828282] after:border-b-2 after:h-8 after:w-8 after:rotate-45 after:-translate-x-[17px] after:-translate-y-[14px]">
          <input
            type="text"
            className="focus:outline-none py-6 px-5 border-[#828282] border-2 w-full"
            placeholder="Name"
          ></input>
        </div>
        <div className="relative after:absolute after:bg-white after:border-b-[#828282] after:border-b-2 after:h-8 after:w-8 after:rotate-45 after:-translate-x-[17px] after:-translate-y-[14px]">
          <input
            type="text"
            className="focus:outline-none py-6 px-5 border-[#828282] border-2 w-full"
            placeholder="Email"
          ></input>
        </div>
        <div className="relative after:absolute after:bg-white after:border-b-[#828282] after:border-b-2 after:h-8 after:w-8 after:rotate-45 after:-translate-x-[17px] after:-translate-y-[14px]">
          <input
            type="text"
            className="focus:outline-none py-6 px-5 border-[#828282] border-2 w-full"
            placeholder="Phone"
          />
        </div>
        <div className="relative after:absolute after:bg-white after:border-b-[#828282] after:border-b-2 after:h-8 after:w-8 after:rotate-45 after:-translate-x-[17px] after:-translate-y-[14px]">
          <input
            type="text"
            className="focus:outline-none py-6 px-5 border-[#828282] border-2 w-full"
            placeholder="Subject"
          />
        </div>
      </div>
      <div className="relative after:absolute after:bg-white after:border-b-[#828282] after:border-b-2 after:h-8 after:w-8 after:top-0 after:right-0 after:rotate-45 after:translate-x-[15px] after:translate-y-[9px]">
        <textarea
          name="Message"
          id=""
          className="w-full py-6 px-5 mt-6 h-60 focus:outline-none border-2 border-[#828282]"
          placeholder="Message"
        ></textarea>
      </div>
      <div className="flex items-center gap-5 mt-14 self-start max-md:mt-10">
        <div className="text-black text-3xl font-bold leading-9 tracking-[2.8px] w-[276px] my-auto">
          SEND MESSAGE
        </div>
        <Image
          src="/ButtonPrimaryRight.svg"
          alt=""
          width={100}
          height={100}
          className="aspect-square object-contain object-center w-[100px] fill-rose-800 overflow-hidden self-stretch shrink-0 max-w-full"
        />
      </div>
    </form>
  );
}
