import { MainSection } from "@/components/molecules/Main";
import React from "react";
import { CustomMarquee } from "@/components/atoms/CustomMarquee";
import { OurServices } from "@/components/molecules/OurServices";
import { CustomSolutions } from "@/components/molecules/CustomSolutions";
import { Testimonials } from "@/components/molecules/Testimonials/";
import { AboutUs } from "@/components/molecules/AboutUs";
import { getDeviceType } from "@/utils/server";
import { useTranslations } from "next-intl";

export default function Home() {
  const deviceType = getDeviceType();
  const t = useTranslations("Index");

  return (
    <>
      <MainSection
        deviceType={deviceType}
        title={t("main.title")}
        subtitle={t("main.subtitle")}
      />
      <AboutUs
        deviceType={deviceType}
        title={t("about-us.title")}
        content={t("about-us.content")}
        more={t("about-us.more")}
      />
      <OurServices
        deviceType={deviceType}
        title={t("services.title")}
        content={t("services.content")}
        more={t("services.more")}
      />
      <CustomSolutions
        deviceType={deviceType}
        title={t("custom-solution.title")}
        content={t("custom-solution.content")}
        more={t("custom-solution.more")}
      />
      <CustomMarquee>
        <div className="text-white font-[AkiraExpandedDemo] text-center text-[2.5vw] font-extrabold leading-[normal] mx-4">
          <span className="text-rose-800">GET</span>
          <span className="text-white">INTOUCH</span>
        </div>
      </CustomMarquee>
      <Testimonials
        deviceType={deviceType}
        name={t("testimonials.name")}
        content={t("testimonials.content")}
      />
    </>
  );
}
