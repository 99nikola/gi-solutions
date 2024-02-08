import { Header } from "@/components/organisms/Header";
import { notFound } from "next/navigation";
import "./globals.css";
import { Footer } from "@/components/organisms/Footer";
import { LOCALES } from "@/constants";
import { ScrollToTop } from "@/components/molecules/ScrollToTop";
import { ServerPageProps } from "../../types/server-page-props";
import { getDeviceType } from "@/utils/server";

export default function LocaleLayout(
  props: React.PropsWithChildren<ServerPageProps>
) {
  // Validate that the incoming `locale` parameter is valid
  if (!Object.values(LOCALES).includes(props.params.locale)) notFound();

  return (
    <html
      lang={props.params.locale === LOCALES.MN ? "sr_ME" : props.params.locale}
    >
      <body>
        <Header locale={props.params.locale} deviceType={getDeviceType()} />
        {props.children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
