import { DeviceTypeValues, LocaleValues } from "@/constants";

export interface ServerPageProps {
  params: {
    locale: LocaleValues;
    [paramName: string]: string;
  };
  searchParams: {
    viewport: DeviceTypeValues;
    [searchParamName: string]: string;
  };
}

export interface DeviceTypeProps {
  deviceType: DeviceTypeValues;
}
