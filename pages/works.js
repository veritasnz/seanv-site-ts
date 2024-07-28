import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import PageTransitionWrapper from "../components/Layout/PageTransitionWrapper";
import { PageTitle } from "../components/Layout/Second/PageTitle";
import { Container } from "../components/UI/Container";
import WorksGrid from "../components/Works/WorksGrid";
import { REVALIDATION_DUR } from "../lib/constants";
import { getWorksData } from "../lib/works-api";

function WorksArchive(props) {
  const { t } = useTranslation("common");
  const worksTitle = t("works-title");

  const breadcrumbs = [{ name: worksTitle, url: null }];

  return (
    <>
      <NextSeo title={worksTitle} />

      <PageTransitionWrapper>
        <PageTitle title={worksTitle} breadcrumbs={breadcrumbs} />
        <Container type="second">
          <WorksGrid works={props.works} />
        </Container>
      </PageTransitionWrapper>
    </>
  );
}

export default WorksArchive;

export async function getStaticProps(context) {
  const { locale } = context;
  const worksData = await getWorksData(locale);

  return {
    props: { works: worksData },
    revalidate: REVALIDATION_DUR,
  };
}
