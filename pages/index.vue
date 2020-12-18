<template>
  <div>
    <section class="jumbotron">
      <h1>{{ jumbotronText.title }}</h1>
      <nuxt-content :document="jumbotronText" />
      <article></article>
    </section>
    <section class="products">
      <product-card
        v-for="product of homepageProducts"
        :key="product.slug"
        v-bind:product="product"
      />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, route, $config }) {
    const jumbotronText = await $content('pages/home').fetch()
    const homepageProducts = await $content('products')
      .where({ featured: { $eq: true } })
      .limit($config.homepageProductCardLimit)
      .fetch()
    return {
      jumbotronText,
      homepageProducts,
    }
  },
}
</script>

<style>
.container {
}
</style>
