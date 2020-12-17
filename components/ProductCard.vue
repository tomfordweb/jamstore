<template>
  <article>
    <template v-if="!!image">
      <NuxtLink :to="productLink"
        ><img :src="image.src" :alt="!!image.alt ? image.alt : null"
      /></NuxtLink>
    </template>
    <template v-else><img src="" alt="" /> </template>
    <h4>
      <NuxtLink :to="productLink">{{ product.title }}</NuxtLink>
    </h4>
    <p>{{ product.description }}</p>
  </article>
</template>
<script>
export default {
  props: ['product'],
  computed: {
    image: function () {
      return !!this.product.images && this.product.images.length > 0
        ? this.product.images[0]
        : null
    },
    productLink: function () {
      return `/${this.$config.routes.store}/${this.product.slug}`
    },
  },
}
</script>
