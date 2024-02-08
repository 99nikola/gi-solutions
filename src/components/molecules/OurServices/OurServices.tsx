"use client";
import useDeviceType from "@/hooks/use-device-type";
import { DeviceTypeProps } from "@/types/server-page-props";
import React from "react";
import OurServicesMobile from "./mobile";
import OurServicesDesktop from "./desktop";

export interface OurServicesProps extends DeviceTypeProps {
  title: string;
  content: string;
  more: string;
}

export const OurServices: React.FC<OurServicesProps> = (props) => {
  const { isMobile } = useDeviceType(props.deviceType);

  if (isMobile) {
    return <OurServicesMobile {...props} />;
  }
  return <OurServicesDesktop {...props} />;
};
