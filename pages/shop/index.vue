<template>
  <section>
    <h1>Store</h1>
    <article-excerpt
      v-for="product of products"
      v-bind:product="product"
      :key="product.id"
    />
  </section>
</template>

<script>
import ArticleExcerpt from '../../components/ArticleExcerpt.vue'
export default {
  components: { ArticleExcerpt },
  async asyncData({ $content, route }) {
    const products = await $content('products').fetch()
    return {
      products,
    }
  },
}
</script>
