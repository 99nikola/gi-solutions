"use client";
import { DeviceTypeValues, LocaleValues } from "@/constants";
import DesktopHeader from "./desktop";
import MobileHeader from "./mobile";
import useDeviceType from "@/hooks/use-device-type";

export type HeaderProps = {
  locale: LocaleValues;
  deviceType: DeviceTypeValues;
};

export const Header = (props: HeaderProps) => {
  const { isMobile } = useDeviceType(props.deviceType);

  if (isMobile) {
    return <MobileHeader {...props} />;
  }
  return <DesktopHeader {...props} />;
};
