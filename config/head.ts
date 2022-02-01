import { NuxtOptionsHead } from "@nuxt/types/config/head"

/* Define constants */
const image = "https://detygon.com/icon.png"
const description =
  "Artificial Intelligence Enthusiast; Afro Optimist; Data Junkie"

const Head: NuxtOptionsHead = {
  title: "detygon.com",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: description,
    },
    /* Twitter */
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "detygon",
    },
    {
      hid: "twitter:creator",
      name: "twitter:creator",
      content: "detygon",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "detygon.com",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: image,
    },
    /* Open-Graph */
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "detygon.com",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: description,
    },
    {
      hid: "og:image",
      name: "og:image",
      content: image,
    },
    /* Others */
    {
      hid: "theme-color",
      name: "theme-color",
      content: "#171717",
    },
  ].map((i) => {
    // @ts-ignore-next-line
    if (i.name && !i.property) i.property = i.name
    return i
  }),
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "https://detygon.com/assets/icons/icon.ico",
    },
    {
      rel: "search",
      type: "application/opensearchdescription+xml",
      title: "Le blog de Salomon Dion",
      href: "https://detygon.com/opensearch.xml",
    },
  ],
}

export default Head
