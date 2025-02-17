import { Work } from "src/models/Works.model";
import BoilerplateThumbnail from "./img/works/boilerplate.png";
import VariousSitesThumbnail from "./img/works/client-sites.png";
import DevclockThumbnail from "./img/works/devclock.png";
import KurageThumbnail from "./img/works/kurage-digital.png";
import MaplinkThumbnail from "./img/works/map-link.png";
import WonidetoThumbnail from "./img/works/wonideto.png";
import NextWordlessThumbnail from "./img/works/wordless.png";

const works: Work[] = [
  /**
   * Wonideto
   */
  {
    name: "Wonideto (WIP)",
    url: "https://wonideto.seanv.dev/",
    thumbnail: WonidetoThumbnail,
    type: "Personal Project - App",
    stack: ["typescript", "nextjs", "react", "nodejs"],
    summary:
      "An app for practicing particle use in Japanese. This is going to be an ongoing project for me. Written in Typescript with NextJS. Testing with Vitest.",
    links: [
      {
        icon: "anchor",
        url: "https://wonideto.seanv.dev/",
        tooltip: "See the app",
      },
      {
        icon: "github",
        url: "https://github.com/veritasnz/wonideto",
        tooltip: "See the code",
      },
    ],
  },
  /**
   * Next Wordless
   */
  {
    name: "Next Wordless",
    url: "https://github.com/veritasnz/next-wordless-front",
    thumbnail: NextWordlessThumbnail,
    type: "Personal Project - App",
    stack: ["nextjs", "react", "graphql", "wordpress", "nodejs", "php"],
    summary:
      "Concept project for a headless Wordpress template. Utilises NextJS serverless functions + NodeJS for the 'Contact' form",
    links: [
      {
        icon: "anchor",
        url: "https://wordless.seanv.dev/",
        tooltip: "See the sample site",
      },
      {
        icon: "github",
        url: "https://github.com/veritasnz/next-wordless-front",
        tooltip: "See the code",
      },
    ],
  },

  /**
   * _Devclock
   */
  {
    name: "_Devclock",
    url: "https://devclock.seanv.dev/",
    thumbnail: DevclockThumbnail,
    type: "Personal Project - App",
    stack: ["react", "redux", "javascript"],
    summary:
      "An interactive pomodoro-style countdown timer app that works in cycles, with fully configurable cycle & voice settings, which are stored between visits.",
    links: [
      {
        icon: "github",
        url: "https://github.com/veritasnz/devclock",
        tooltip: "See the code",
      },
    ],
  },

  /**
   * WP Boilerplate
   */
  {
    name: "Wordpress Boilerplate",
    url: null,
    thumbnail: BoilerplateThumbnail,
    type: "Personal Project",
    stack: ["wordpress", "webpack", "sass", "javascript", "php"],
    summary:
      "My boilerplate for creating WP themes. Gets me straight into theme production quickly and smoothly, supporting all my heavily used plugins and libraries.",
    links: [
      {
        icon: "github",
        url: "https://github.com/veritasnz/wp-boilerplate",
        tooltip: "See the code",
      },
    ],
  },

  /**
   * Kurage Digital Site
   */
  {
    name: "Kurage Digital Site",
    url: "https://kuragedigital.com/",
    thumbnail: KurageThumbnail,
    type: "Client Work - Complete design & development",
    stack: ["wordpress", "sass", "javascript", "php"],
    summary:
      "Kurage Digital is a boutique agency specialising in corporate website production with Wordpress.",
    links: [],
  },

  /**
   * Various Client Sites
   */
  {
    name: "Various Client Sites",
    url: "/posts/various-client-sites",
    thumbnail: VariousSitesThumbnail,
    type: "Client Work - Development",
    stack: ["wordpress", "sass", "javascript", "php"],
    summary:
      "Various client sites created using Wordpress CMS and bespoke PHP-based themes for the front end. Read the article for details.",
    links: [
      {
        icon: "article",
        url: "/posts/various-client-sites",
        tooltip: "Read the article",
      },
    ],
  },

  /**
   * Maplink
   */
  {
    name: "Map-Link",
    url: "/posts/map-link-app",
    thumbnail: MaplinkThumbnail,
    type: "Client Work - Development",
    stack: ["react", "svg", "javascript"],
    summary:
      "A React-based map-manipulation tool. Pan, paint, and zoom the map, and then download the final product as a PNG file. Note the demo is in Japanese.",
    links: [
      {
        icon: "article",
        url: "/posts/map-link-app",
        tooltip: "Read the article",
      },
      {
        icon: "anchor",
        url: "https://ee-arts.biz/map/mollweide-0/",
        tooltip: "Demo the app",
      },
    ],
  },
];

export default works;
