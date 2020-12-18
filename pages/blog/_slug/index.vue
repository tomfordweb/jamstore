<template>
  <section>
    <navigation class="navigation" v-if="article" v-bind:links="breadcrumbs" />
    <app-title>{{ article.title }}</app-title>
    <article class="post-body">
      <nuxt-content :document="article" />
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
      console.log('article', this.article.title)
      return !this.article
        ? []
        : [
            {
              url: '/',
              text: 'Home',
            },
            {
              url: '/blog',
              text: 'Blog',
            },
            {
              url: `/blog/${this.article.slug}`,
              text: this.article.title,
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
