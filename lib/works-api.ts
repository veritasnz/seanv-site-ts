import { LocaleUnion } from "src/models/Translation.model";
import { Work } from "src/models/Works.model";
import englishWorks from "../data/works-en";
import japaneseWorks from "../data/works-jp";

export const getWorksData = async (locale: LocaleUnion): Promise<Work[]> => {
  if (locale === "en") {
    return englishWorks;
  } else {
    return japaneseWorks;
  }
};
