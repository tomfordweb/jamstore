<template>
  <section>
    <breadcrumbs v-if="article" v-bind:crumbs="breadcrumbs" />
    <app-title>{{ article.title }}</app-title>
    <article class="post-body">
      <nuxt-content :document="article" />
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
      console.log('article', this.article.title)
      return !this.article
        ? []
        : [
            {
              link: '/',
              title: 'Home',
            },
            {
              link: '/blog',
              title: 'Blog',
            },
            {
              link: `/blog/${this.article.slug}`,
              title: this.article.title,
            },
          ]
    },
  },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return {
      article,
    }
  },
}
</script>
