"use client";

import { DeviceTypeProps } from "@/types/server-page-props";
import { MainMobile } from "./mobile";
import { MainDesktop } from "./desktop";

export interface MainProps extends DeviceTypeProps {
  title: string;
  subtitle: string;
}

export function MainSection(props: MainProps) {
  if (props.deviceType) {
    return <MainMobile {...props} />;
  }

  return <MainDesktop {...props} />;
}
