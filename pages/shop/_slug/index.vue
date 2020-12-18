<template>
  <section>
    <navigation v-if="product" v-bind:links="breadcrumbs" />
    <app-title>{{ product.title }}</app-title>
    <article class="post-body">
      <nuxt-content :document="product" />
    </article>
  </section>
</template>

<script>
import AppTitle from '~/components/AppTitle.vue'
import Navigation from '../../../components/Navigation.vue'
export default {
  components: { AppTitle, Navigation },
  computed: {
    breadcrumbs() {
      return !this.product
        ? []
        : [
            {
              url: '/',
              text: 'Home',
            },
            {
              url: `/${this.$config.routes.store}`,
              text: 'Store',
            },
            {
              url: `/${this.$config.routes.store}/${this.product.slug}`,
              text: this.product.title,
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
