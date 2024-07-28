import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { ReactNode } from "react";
import { Breadcrumb } from "./Breadcrumbs.model";

interface Props {
  crumbs: Breadcrumb[];
}

export const Breadcrumbs: React.FC<Props> = ({ crumbs }) => {
  const { t } = useTranslation("common");

  const breadcrumbContent: JSX.Element[] = [];

  // Add home crumb
  breadcrumbContent.push(
    <li key={"home"} className="breadcrumbs__item">
      <Link href="/">{t("home-title")}</Link>
    </li>
  );

  // Push rest of crumbs
  breadcrumbContent.push(
    ...crumbs.map((crumb) => {
      let crumbInner: ReactNode = crumb.name;

      if (crumb.url !== null) {
        crumbInner = (
          <li key={crumb.name}>
            <Link href={crumb.url}>{crumb.name}</Link>
          </li>
        );
      }

      return (
        <li key={crumb.name} className="breadcrumbs__item">
          {crumbInner}
        </li>
      );
    })
  );

  return <ul className="breadcrumbs">{breadcrumbContent}</ul>;
};
