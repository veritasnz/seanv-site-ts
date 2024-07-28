/**
 * Declarations for 3rd-party packages that don't have TS-support
 */

/**
 * next-translate/useTranslation
 * Make sure that 'lang' is always a LocaleUnion
 */
declare module "next-translate/useTranslation" {
  import { Translate } from "next-translate";
  import { LocaleUnion } from "src/models/Translation.model";

  export type I18n = {
    t: Translate;
    lang: LocaleUnion;
  };

  export default function useTranslation(defaultNS?: string): I18n;
}
