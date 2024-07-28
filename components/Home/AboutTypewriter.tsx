import useTranslation from "next-translate/useTranslation";
import Typewriter from "typewriter-effect";

interface Props {}

export const AboutTypewriter: React.FC<Props> = () => {
  const { t } = useTranslation("common");

  const base = t("about-typewriter-base");
  const translationArray = t(
    "about-typewriter-content",
    { count: 1 },
    { returnObjects: true }
  ) as { text: string }[];

  const typewriterOptions = {
    delay: 90, // speed up insertion
    deleteSpeed: 40, // speed up deletion
    strings: translationArray.map((item) => item.text),
    autoStart: true,
    loop: true,
    cursor: "_",
  };

  return (
    <>
      {base}
      <Typewriter options={typewriterOptions} />
    </>
  );
};
