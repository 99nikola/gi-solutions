import { Link, usePathname, useRouter } from "@/utils/navigation";
import { HeaderProps } from ".";
import { Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SocialNetworkIcons from "@/components/atoms/SocialNetworkIcons/SocialNetworkIcons";
import { LOCALES, ROUTES } from "@/constants";
import Image from "next/image";

const DesktopHeader = (props: HeaderProps) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Box className="bg-gradient-to-b from-black to-transparent px-[5.208vw] flex flex-col gap-[1.67vw] fixed z-10 top-0 left-0 w-full">
      <Box className="w-full flex justify-between border-b-[1px] border-gray h-[2.604vw]">
        <Box className="flex gap-[1.56vw]">
          <Box className="flex items-center gap-2">
            <LocationOnIcon className="text-primary" />
            <span className="text-gray text-[0.834vw]">
              Industrijska bb, 84000 Bijelo Polje, Montenegro
            </span>
          </Box>{" "}
          <Box className="flex items-center gap-2 border-l-[1px] border-gray pl-[1.56vw]">
            <EmailIcon sx={{ fill: "#A5002F", stroke: "none" }} />
            <a
              href="mailto:office@gi-solutions.me"
              className="text-gray text-[0.834vw]"
            >
              office@gi-solutions.me
            </a>
          </Box>
        </Box>
        <Box className="flex justify-end gap-16">
          <Box className="flex items-center">
            <SocialNetworkIcons />
          </Box>
          <Box className="text-gray flex gap-[4px] items-center">
            <Box
              className={`${
                props.locale === LOCALES.MN
                  ? "text-primary"
                  : "cursor-pointer text-gray"
              }`}
              onClick={() => {
                if (props.locale === LOCALES.MN) return;
                router.replace(pathname, { locale: LOCALES.MN });
              }}
            >
              Mne
            </Box>{" "}
            /{" "}
            <Box
              className={`${
                props.locale === LOCALES.EN
                  ? "text-primary"
                  : "cursor-pointer text-gray"
              }`}
              onClick={() => {
                if (props.locale === LOCALES.EN) return;
                router.replace(pathname, { locale: LOCALES.EN });
              }}
            >
              Eng
            </Box>{" "}
            /{" "}
            <Box
              className={`${
                props.locale === LOCALES.DE
                  ? "text-primary"
                  : "cursor-pointer text-gray"
              }`}
              onClick={() => {
                if (props.locale === LOCALES.DE) return;
                router.replace(pathname, { locale: LOCALES.DE });
              }}
            >
              Ger
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="flex justify-between">
        <Box>
          <Image
            src="/Logo.svg"
            alt="Gi-solutions logo"
            width={180}
            height={37}
            className="max-w-[8.6vw]"
            layout="responsive"
          />
        </Box>
        <Box className="flex gap-[1.822vw] items-center">
          {Object.entries(ROUTES).map(([key, value]) => (
            <div
              key={value}
              className={`relative after:w-full after:h-1 after:bg-primary after:absolute after:-bottom-1 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-all after:origin-left ${
                value === pathname ? "after:scale-x-100" : ""
              }`}
            >
              <Link
                href={`${value}`}
                className="text-white text-[1.042vw] font-bold leading-normal"
              >
                {key
                  .toLowerCase()
                  .replace(/_/g, " ")
                  .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())}
              </Link>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DesktopHeader;
