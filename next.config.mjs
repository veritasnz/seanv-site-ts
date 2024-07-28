/** @type {import('next').NextConfig} */

import nextTranslate from "next-translate-plugin";
import withPlaiceholder from "@plaiceholder/next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withPlaiceholder(
  bundleAnalyzer(
    nextTranslate({
      reactStrictMode: true,
      i18n: {
        locales: ["en", "jp"],
        defaultLocale: "en",
      },
      webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                // HACK: Stop SVGR from prefixing classnames inside of the SVGs
                svgoConfig: { plugins: [] },
              },
            },
          ],
        });

        return config;
      },
    })
  )
);
