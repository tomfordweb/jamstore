import configuratoin from '../nuxt.config.js'
export default function extractContentCategories(cats) {
  const categories = cats
    .filter((page) => !!page.categories)
    .map((page) => page.categories)
    .flat()
    .map((category) => ({
      url: `/${configuratoin.publicRuntimeConfig.routes.store}/category/${category}`,
      text: category,
    }))
  return [...new Set(categories)]
}
