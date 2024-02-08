export const LOCALES = {
  EN: "en",
  MN: "mn",
  DE: "de",
} as const;

type LocaleType = typeof LOCALES;
type LocaleKeys = keyof LocaleType;
export type LocaleValues = LocaleType[LocaleKeys];
