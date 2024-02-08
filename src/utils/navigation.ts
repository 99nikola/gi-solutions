import { LOCALES } from "@/constants";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales: ["en", "mn", "de"] });
