/* eslint-disable @next/next/no-img-element */
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import { Email } from "react-obfuscate-email";

import HeroImage from "../../svg/vincent-hero.svg";
import Hill from "../UI/Animations/Hill";

interface Props {}

export const Hero: React.FC<Props> = (props) => {
  const { t } = useTranslation("common");

  return (
    <section className="t-hero">
      <div className="t-hero__wrap">
        <HeroImage
          className="t-hero__img"
          title={t("hero-alt")}
          style={{ maxWidth: 205 }}
        />
        <div className="t-hero__txtbox">
          <h1>{t("hero-title")}</h1>
          <p>
            <Trans i18nKey="common:hero-intro" components={[<br key="0" />]} />
          </p>
          <p>
            <Trans i18nKey="common:hero-cta" components={[<br key="0" />]} />
          </p>
          <div className="t-hero__bttnbox">
            {process.env.NEXT_PUBLIC_EMAIL && (
              <Email
                className="o-bttn o-bttn--blue"
                email={process.env.NEXT_PUBLIC_EMAIL}
                subject="Hi there!"
              >
                {t("hero-contact-button")}
              </Email>
            )}

            {/* <LinkButton href="#">
                  {t("hero-resume-button")}
              </LinkButton> */}
          </div>
        </div>
      </div>
      <div className="t-hero-hills">
        <div className="t-hero-hills__left">
          <Hill height={108} color="blue" />
          <Hill height={25} color="orange" />

          <Hill height={73} color="blue" />
          <Hill height={20} color="orange" />
          <Hill height={61} color="blue" />
        </div>

        <div className="t-hero-hills__right">
          <Hill height={28} color="orange" isFacingLeft />
          <Hill height={108} color="blue" isFacingLeft />

          <Hill height={60} color="blue" isFacingLeft />
          <Hill height={46} color="orange" isFacingLeft />
        </div>
      </div>
    </section>
  );
};
