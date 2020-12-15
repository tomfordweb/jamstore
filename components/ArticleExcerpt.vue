<template>
  <div>
    <section v-if="article">
      <header>
        <h1>
          <NuxtLink :to="`/blog/${article.slug}`">{{ article.title }}</NuxtLink>
        </h1>
      </header>
      <article>{{ article.description }}</article>
    </section>
  </div>
</template>
<script>
export default {
  props: ['article'],
  mounted() {
    console.log(this.article)
  },
}
</script>
