import { SmallMain } from "@/components/molecules/Main";
import Image from "next/image";
import React from "react";

export default function Quality() {
  return (
    <div>
      <SmallMain
        image={{ src: "/images/quality/main-image.png" }}
        text={{ red: "Our", white: "Quality" }}
      />
      <MyComponent />
      <MyComponent1 />
      <MyComponent2 />
    </div>
  );
}

function MyComponent() {
  return (
    <div className="flex pl-[100px] gap-[80px] relative">
      <div className="flex max-w-[771px] flex-col px-5 pt-[80px]">
        <div className="text-black text-6xl font-bold leading-[57px] tracking-tighter self-stretch w-full max-md:max-w-full max-md:text-4xl max-md:leading-10">
          <span className="text-primary">Our</span>
          <br />
          <span className="text-black">Certificates</span>
        </div>
        <div className="w-[110px] h-[1px] bg-rose-800 mt-14"></div>
        <div className="text-black text-4xl font-bold leading-[80px] tracking-tighter self-stretch w-full mt-16 max-md:max-w-full max-md:mt-10">
          EXCEEDING YOUR EXPECTATIONS
          <br />
        </div>
        <div className="text-black text-2xl font-bold leading-9 tracking-tighter self-stretch w-full mt-20 max-md:max-w-full max-md:mt-10">
          With the established system and the certification of the international
          management system, Global Industrial Solutions provides clients with
          an absolute level of trust in the business environment and quality
          when providing their services.IQNET (The International Certification
          Network) is an international association of certification bodies based
          in Switzerland. With the certificates issued by IQNET, Global
          Industrial Solutions has an exclusive tool that enables the
          affirmation of the contribution in promoting quality when providing
          its services.Confirmation of the quality and safety of our services is
          provided by accredited and internationally recognized IQNET
          certificates:
        </div>
      </div>
      <Image
        src="/images/quality/business-team-manager-meeting 1.png"
        alt=""
        width={960}
        height={1100}
      />
      <div className="absolute bottom-0 left-0 translate-y-1/2 mr-[100px] backdrop-blur-[15px] bg-black bg-opacity-80 pl-20 pr-14 py-12 max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
            <div className="flex items-stretch gap-5 my-auto max-md:mt-10">
              <Image
                src="/ButtonPrimaryDown.svg"
                width="100"
                height="100"
                alt=""
              />
              <div className="text-white text-2xl font-semibold leading-9 tracking-tighter self-center w-[368px] my-auto">
                EN ISO 9001:2015
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex items-stretch gap-5 my-auto max-md:mt-10">
              <Image
                src="/ButtonPrimaryDown.svg"
                width="100"
                height="100"
                alt=""
              />
              <div className="text-white text-2xl font-semibold leading-9 tracking-tighter self-center w-[368px] my-auto">
                EN ISO 14001:2015
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex items-stretch gap-5 my-auto max-md:mt-10">
              <Image
                src="/ButtonPrimaryDown.svg"
                width="100"
                height="100"
                alt=""
              />
              <div className="text-white text-2xl font-semibold leading-9 tracking-tighter self-center w-[368px] my-auto">
                EN ISO 45001:2018
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex items-stretch gap-5 my-auto max-md:mt-10">
              <Image
                src="/ButtonPrimaryDown.svg"
                width="100"
                height="100"
                alt=""
              />
              <div className="text-white text-2xl font-semibold leading-9 tracking-tighter self-center w-[368px] my-auto">
                EN ISO IEC 27001:2013
              </div>
            </div>
          </div>
        </div>
        <button className="absolute top-0 -translate-y-full left-[100px] bg-primary text-white text-xl tracking-[9.92px] px-10 py-3">
          DOWNLOAD
        </button>
      </div>
    </div>
  );
}

function MyComponent1() {
  return (
    <div className="flex justify-between mt-[280px] mb-[150px] mx-[300px]">
      <Image
        src="/images/quality/Rectangle.png"
        alt=""
        width={215}
        height={215}
      />
      <Image
        src="/images/quality/Rectangle-4.png"
        alt=""
        width={215}
        height={215}
      />
      <Image
        src="/images/quality/Rectangle-2.png"
        alt=""
        width={215}
        height={215}
      />
      <Image
        src="/images/quality/Rectangle-3.png"
        alt=""
        width={215}
        height={215}
      />
      <Image
        src="/images/quality/Rectangle-1.png"
        alt=""
        width={215}
        height={215}
      />
    </div>
  );
}

function MyComponent2() {
  return (
    <div className="relative flex pb-[700px]">
      <Image
        src="/images/quality/business-team-manager-meeting.png"
        width={960}
        height={1100}
        alt=""
        className="w-1/2 "
      />
      <div className="w-1/2 bg-[#EEEEEE] pt-[100px] pr-[100px] pl-20">
        <div className="flex max-w-[779px] flex-col px-5 items-end">
          <div className="flex w-[241px] max-w-full flex-col items-stretch">
            <div className="text-black text-right text-6xl font-bold leading-[57px] tracking-tighter max-md:text-4xl max-md:leading-10">
              Business
              <br />
              <span className="text-black">Policy</span>
            </div>
            <div className="w-[110px] h-[1px] bg-rose-800 overflow-hidden max-w-full mt-16 self-end max-md:mt-10"></div>
          </div>
          <div className="text-black text-right text-3xl font-bold leading-[80px] tracking-tighter self-stretch mt-16 max-md:max-w-full max-md:mt-10">
            QUALITY, ENVIRONMENT, HEALTH AND SAFETY
            <br />
          </div>
          <div className="text-black text-right text-2xl font-bold leading-9 tracking-tighter self-stretch w-full mt-20 max-md:max-w-full max-md:mt-10">
            By establishing and improving the Integrated Management System (ISO
            9001:2015, ISO 14001:2015, ISO 45001:2018, and ISO/IEC 27001:2013),
            we meet the requirements and expectations of customers and owners.
          </div>
        </div>
      </div>
      <div className="absolute bottom-[150px] left-1/2 backdrop-blur-[15px] bg-black bg-opacity-80 flex flex-col pl-16 pr-14 py-6 items-start max-md:px-5 -translate-x-[100px]">
        <div className="text-white text-3xl font-bold leading-[80px] tracking-tighter max-w-[766px] ml-4 mt-6 max-md:max-w-full">
          THE ESTABLISHED POLICY OF IMS GUARANTEES
          <br />
        </div>
        <ul className="text-white text-2xl leading-10 tracking-tighter self-stretch mt-16 max-md:max-w-full max-md:mt-10 list-disc pl-4">
          <li>
            Satisfied clients, because we demonstrate the ability and
            reliability to provide high-quality services
          </li>
          <li>Our quality, courtesy and professionalism</li>
          <li>Effective and efficient process management</li>
          <li>
            Providing services of the required and expected quality, which
            enables increasing the placement and competitiveness of our company
          </li>
          <li>
            Continuous improvement of environmental protection performance
          </li>
          <li>Sustainable, healthy and safe working environment</li>
          <li>
            Establishing effective communication with all interested parties and
            other relevant organizations
          </li>
          <li>
            Protection of the information system and all information resources
            from various threats
          </li>
          <li>Ensuring business continuity</li>
        </ul>
        <div className="w-[454px] max-w-full mt-10 self-end">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[76%] max-md:w-full max-md:ml-0">
              <div className="text-white text-2xl font-bold leading-9 my-auto max-md:mt-10">
                DOWNLOAD IMS POLICY
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
              <Image
                alt=""
                src="/ButtonPrimaryDown.svg"
                height={100}
                width={100}
                className="aspect-square object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full max-md:mt-9"
              />
            </div>
          </div>
        </div>
        <svg
          className="absolute bottom-0 left-0 -translate-x-[calc(100%+60px)]"
          xmlns="http://www.w3.org/2000/svg"
          width="452"
          height="452"
          viewBox="0 0 452 452"
          fill="none"
        >
          <path
            d="M0 421.817L30.1827 452L409.316 72.8551L409.316 303.751H452L452 0L148.249 0V42.6838L379.134 42.6838L0 421.817Z"
            fill="#A5002F"
          />
        </svg>
      </div>
    </div>
  );
}
