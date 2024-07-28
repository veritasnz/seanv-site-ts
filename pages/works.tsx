import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import { LocaleUnion } from "src/models/Translation.model";
import { Work } from "src/models/Works.model";
import { PageTransitionWrapper } from "../components/Layout/PageTransitionWrapper";
import { PageTitle } from "../components/Layout/Second/PageTitle";
import { Container } from "../components/UI/Container";
import WorksGrid from "../components/Works/WorksGrid";
import { REVALIDATION_DUR } from "../lib/constants";
import { getWorksData } from "../lib/works-api";

interface PageProps {
  works: Work[];
}

function Page({ works }: PageProps) {
  const { t } = useTranslation("common");
  const worksTitle = t("works-title");

  const breadcrumbs = [{ name: worksTitle, url: null }];

  return (
    <>
      <NextSeo title={worksTitle} />

      <PageTransitionWrapper>
        <PageTitle title={worksTitle} breadcrumbs={breadcrumbs} />
        <Container type="second">
          <WorksGrid works={works} />
        </Container>
      </PageTransitionWrapper>
    </>
  );
}

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async ({ locale }) => {
  if (!locale) throw new Error("No locale passed to works idnex");
  const worksData = await getWorksData(locale as LocaleUnion);

  return {
    props: { works: worksData },
    revalidate: REVALIDATION_DUR,
  };
};
