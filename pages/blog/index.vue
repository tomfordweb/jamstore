<template>
  <section>
    <h1>Blog</h1>
    <article-excerpt
      v-for="article of articles"
      v-bind:article="article"
      :key="article.id"
    />
  </section>
</template>

<script>
import ArticleExcerpt from '../../components/ArticleExcerpt.vue'
export default {
  components: { ArticleExcerpt },
  async asyncData({ $content, route }) {
    const articles = await $content('articles').fetch()

    return {
      articles,
    }
  },
}
</script>
