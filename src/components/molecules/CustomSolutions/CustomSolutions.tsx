"use client";
import useDeviceType from "@/hooks/use-device-type";
import { DeviceTypeProps } from "@/types/server-page-props";
import React from "react";
import CustomSolutionsMobile from "./mobile";
import CustomSolutionsDesktop from "./desktop";

export interface CustomSolutionsProps extends DeviceTypeProps {
  title: string;
  content: string;
  more: string;
}

export const CustomSolutions: React.FC<CustomSolutionsProps> = (props) => {
  const { isMobile } = useDeviceType(props.deviceType);

  if (isMobile) {
    return <CustomSolutionsMobile {...props} />;
  }

  return <CustomSolutionsDesktop {...props} />;
};
