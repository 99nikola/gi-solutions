import createMiddleware from "next-intl/middleware";
import { HEADER_DEVICE_TYPE_NAME, LOCALES } from "./constants";
import { NextRequest, userAgent } from "next/server";

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: Object.values(LOCALES),

  // Used when no locale matches
  defaultLocale: LOCALES.EN,
});

export default function middleware(request: NextRequest) {
  const { device } = userAgent(request);
  const deviceType = device.type === "mobile" ? "mobile" : "desktop";

  const response = intlMiddleware(request);

  response.headers.set(HEADER_DEVICE_TYPE_NAME, deviceType);
  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|en|mn)/:path*"],
};
