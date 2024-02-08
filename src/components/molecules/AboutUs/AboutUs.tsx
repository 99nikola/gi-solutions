"use client";

import useDeviceType from "@/hooks/use-device-type";

import AboutUsMobile from "./mobile";
import AboutUseDesktop from "./desktop";
import { DeviceTypeProps } from "@/types/server-page-props";

export interface AboutUsProps extends DeviceTypeProps {
  title: string;
  content: string;
  more: string;
}

export const AboutUs: React.FC<AboutUsProps> = (props) => {
  const { isMobile } = useDeviceType(props.deviceType);

  if (isMobile) {
    return <AboutUsMobile {...props} />;
  }

  return <AboutUseDesktop {...props} />;
};
