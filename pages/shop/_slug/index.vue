<template>
  <section>
    <breadcrumbs v-if="product" v-bind:crumbs="breadcrumbs" />
    <app-title>{{ product.title }}</app-title>
    <article class="post-body">
      <nuxt-content :document="product" />
    </article>
  </section>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import AppTitle from '~/components/AppTitle.vue'
export default {
  components: { Breadcrumbs, AppTitle },
  computed: {
    breadcrumbs() {
      return !this.product
        ? []
        : [
            {
              link: '/',
              title: 'Home',
            },
            {
              link: `/${this.$config.routes.store}`,
              title: 'Store',
            },
            {
              link: `/${this.$config.routes.store}/${this.product.slug}`,
              title: this.product.title,
            },
          ]
    },
  },
  async asyncData({ $content, params }) {
    const product = await $content('products', params.slug).fetch()

    return {
      product,
    }
  },
}
</script>
