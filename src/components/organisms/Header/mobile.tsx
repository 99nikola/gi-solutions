import SocialNetworkIcons from "@/components/atoms/SocialNetworkIcons/SocialNetworkIcons";
import { LOCALES, ROUTES } from "@/constants";
import { Box } from "@mui/material";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/utils/navigation";
import { useState } from "react";
import { HeaderProps } from ".";
import useBodyLock from "@/hooks/use-body-lock";
import { useLocale } from "next-intl";

const MobileHeader: React.FC<HeaderProps> = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { lockBody, unlockBody } = useBodyLock();

  const toggleHandler = () => {
    if (isOpen) {
      handleClose();
    } else {
      lockBody();
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    unlockBody();
  };

  return (
    <Box className="flex flex-col z-10 left-0 w-full h-full sticky top-0">
      <Box className="px-8 py-4 bg-white flex justify-between items-center">
        <Box>
          <Image
            src="/Logo.svg"
            alt="Gi-solutions logo"
            width={120}
            height={54}
          />
        </Box>

        <Box onClick={toggleHandler}>
          <Image src="/menu.svg" alt="menu icon" width={20} height={30} />
        </Box>
      </Box>
      {isOpen && (
        <div className={"absolute top-[87px]"}>
          <Box className={`bg-black h-full min-w-[100vw] min-h-[100vh] `}>
            <div className="text-white flex justify-between px-8 py-9">
              <div className="flex flex-col font-bold text-3xl leading-normal">
                <Link href={pathname} locale={LOCALES.EN} replace>
                  <span className={locale === LOCALES.EN ? "text-primary" : ""}>
                    Eng
                  </span>
                </Link>
                <Link href={pathname} locale={LOCALES.MN} replace>
                  <span className={locale === LOCALES.MN ? "text-primary" : ""}>
                    Mne
                  </span>
                </Link>
                <Link href={pathname} locale={LOCALES.DE} replace>
                  <span className={locale === LOCALES.DE ? "text-primary" : ""}>
                    Ger
                  </span>
                </Link>
              </div>
              <div className="flex flex-col items-end text-right font-NouvelRRegular text-5xl leading-normal font-bold">
                {Object.entries(ROUTES).map(([key, value]) => (
                  <div key={value}>
                    <span
                      className="font-[NouvelRBold]"
                      onClick={() => {
                        push(value);
                        handleClose();
                      }}
                    >
                      {key
                        .toLowerCase()
                        .replace(/_/g, " ")
                        .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())}
                    </span>
                  </div>
                ))}
                <SocialNetworkIcons />
              </div>
            </div>

            <Image
              src={"/images/logo/RedLine.svg"}
              alt=""
              width={200}
              height={212}
              className="absolute -left-8"
            />
            <Image
              alt=""
              src={"/images/Services lines.svg"}
              height={259}
              width={450}
              className="absolute bottom-0 w-full"
            />
          </Box>
        </div>
      )}
    </Box>
  );
};

export default MobileHeader;
