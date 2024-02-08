export const DEVICE_TYPE = {
  MOBILE: "mobile",
  DESKTOP: "desktop",
} as const;

type DeviceType = typeof DEVICE_TYPE;
type DeviceTypeKeys = keyof DeviceType;
export type DeviceTypeValues = DeviceType[DeviceTypeKeys];

export const HEADER_DEVICE_TYPE_NAME = "x-device-type";
