<template>
  <div>
    <section v-if="article">
      <header>
        <h1>
          <NuxtLink :to="`/${$config.routes.blog}/${article.slug}`">{{
            article.title
          }}</NuxtLink>
        </h1>
      </header>
      <article>{{ article.description }}</article>
    </section>
  </div>
</template>
<script>
export default {
  props: ['article'],
}
</script>
