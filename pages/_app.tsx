import Clouds from "components/UI/Animations/Clouds";
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { LocaleUnion } from "src/models/Translation.model";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import { SITE_URL } from "../lib/constants";
import "../styles/style.global.scss";

function App({ Component, pageProps, router }: AppProps) {
  /**
   * SEO Setup
   */
  const locale = router.locale as LocaleUnion;

  const isEnglish = locale === "en";
  const seoName = isEnglish ? "Sean Veritas" : "ショーンヴェリタス";
  const seoRole = isEnglish ? "Web Developer" : " ウェブ開発者";
  const seoSite = seoName + " | " + seoRole;
  const seoDescription = isEnglish
    ? "The blog & portfolio website of Sean Veritas, a developer that makes websites using tools such as Wordpress & React."
    : "ショーンＶのポートフォリオサイトとブログです。ウェブ開発者で、Wordpressやリアクトといった道具でサイトを作ります";

  const seo = {
    titleTemplate: `%s | ${seoName}`,
    defaultTitle: seoSite,
    description: seoDescription,
    openGraph: {
      title: seoName,
      description: seoDescription,
      type: "website",
      locale: locale,
      url: "seanv.dev",
      site_name: seoSite,
      images: [
        {
          url: `${SITE_URL}/img/og-image-${locale}.png`,
          width: 1201,
          height: 630,
          alt: seoSite,
        },
      ],
    },
    twitter: {
      handle: "@veritas_nz",
      site: "@veritas_nz",
      cardType: "summary_large_image",
    },
  };

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/favicon.png" />
        <link rel="stylesheet" href={`/fonts/${locale}/fonts.css`} />
        {getFontPreloadTags(locale)}
      </Head>

      <DefaultSeo {...seo} />

      <Header />

      <main className={isEnglish ? "en" : "jp"}>
        <Clouds count="3" yOffset="-2vw" />
        <Clouds count="2" yOffset="-2vw" />

        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}

export default App;

/**
 *
 * Helpers
 *
 */
const getFontPreloadTags = (locale: LocaleUnion) => {
  if (locale === "jp") {
    return (
      <link
        rel="preload"
        href="/fonts/jp/DotGothic16-Regular.woff2"
        as="font"
        cross-origin="true"
      />
    );
  }

  return (
    <>
      <link
        rel="preload"
        href="/fonts/en/AnonymousPro-Bold.woff2"
        as="font"
        cross-origin="true"
      />
      <link
        rel="preload"
        href="/fonts/en/AnonymousPro.woff2"
        as="font"
        cross-origin="true"
      />
    </>
  );
};
