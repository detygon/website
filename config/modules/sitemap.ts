export default async function () {
  const { $content } = require("@nuxt/content")
  const posts = await $content("blog").fetch()

  const routes = []
  for (const post of posts) {
    routes.push(`blog/articles/${post.slug}`)
  }

  return {
    hostname: "https://detygon.com",
    gzip: true,
    routes,
  }
}
