<template>
  <section>
    <h1>Store</h1>
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
import ArticleExcerpt from '../../components/ArticleExcerpt.vue'
import extractContentCategories from '~/lib/extractContentCategories.js'
import Navigation from '../../components/Navigation.vue'
export default {
  components: { ArticleExcerpt },
  computed: {
    categoryNames: function () {
      return extractContentCategories(this.categories)
    },
  },
  async asyncData({ $content, route }) {
    const products = await $content('products').where().fetch()
    const categories = await $content('products').only(['categories']).fetch()
    return {
      products,
      categories,
    }
  },
}
</script>
