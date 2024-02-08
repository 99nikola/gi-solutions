import { DeviceTypeValues, HEADER_DEVICE_TYPE_NAME } from "@/constants";
import { headers } from "next/headers";

export function getDeviceType() {
  const deviceType = headers().get(HEADER_DEVICE_TYPE_NAME);

  if (!deviceType) {
    throw new Error(
      `Device type header: ${HEADER_DEVICE_TYPE_NAME} is not found`
    );
  }

  return deviceType as DeviceTypeValues;
}
