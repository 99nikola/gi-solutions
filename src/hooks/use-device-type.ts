import { DEVICE_TYPE, DeviceTypeValues } from "@/constants";
import { useCallback, useEffect, useState } from "react";

export default function useDeviceType(initialDeviceType?: DeviceTypeValues) {
  const [deviceType, setDeviceTtype] = useState(initialDeviceType);

  const handleMediaChange = useCallback((event: MediaQueryListEvent) => {
    console.log(event.matches);
    if (event.matches) {
      setDeviceTtype(DEVICE_TYPE.MOBILE);
    } else {
      setDeviceTtype(DEVICE_TYPE.DESKTOP);
    }
  }, []);

  useEffect(() => {
    const matchMedia = window.matchMedia("(max-width: 1024px)");
    matchMedia.addEventListener("change", handleMediaChange);

    return () => {
      matchMedia.removeEventListener("change", handleMediaChange);
    };
  }, [handleMediaChange]);

  return {
    isMobile: deviceType === DEVICE_TYPE.MOBILE,
    isDesktop: deviceType === DEVICE_TYPE.DESKTOP,
  };
}
