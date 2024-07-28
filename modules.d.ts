/**
 * Declarations for 3rd-party packages that don't have TS-support
 */

/**
 * next-translate/useTranslation
 * Make sure that 'lang' is always a LocaleUnion
 */
declare module "next-translate/useTranslation" {
  import { Translate } from "next-translate";

  export type I18n = {
    t: Translate;
    lang: "en" | "ja";
  };

  export default function useTranslation(defaultNS?: string): I18n;
}
