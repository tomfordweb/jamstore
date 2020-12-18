<template>
  <section>
    <h1>{{ !!category ? category.title : $route.params.category }}</h1>
    <article v-if="category">
      <nuxt-content :document="category" />
    </article>
    <navigation v-bind:links="categoryNames" />
    <section class="products">
      <product-card
        v-for="product of products"
        :key="product.slug"
        v-bind:product="product"
      />
    </section>
  </section>
</template>

<script>
import ArticleExcerpt from '~/components/ArticleExcerpt.vue'
import extractContentCategories from '~/lib/extractContentCategories.js'
import Navigation from '../../../components/Navigation.vue'
export default {
  components: { ArticleExcerpt },
  computed: {
    routeCategoryName: function () {},
    categoryNames: function () {
      return extractContentCategories(this.categories)
    },
  },
  async asyncData({ $content, route }) {
    const products = await $content('products')
      .where({
        categories: {
          $contains: route.params.category,
        },
      })
      .fetch()
    let category = null
    try {
      category = await $content(
        'product_categories',
        route.params.category
      ).fetch()
    } catch (error) {}
    const categories = await $content('products').only(['categories']).fetch()
    return {
      products,
      categories,
      category,
    }
  },
}
</script>
