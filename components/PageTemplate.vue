<template>
  <div>
    <section>
      <header>
        <h1>{{ page.title }}</h1>
      </header>
      <article>
        <nuxt-content :document="page" />
      </article>
    </section>
  </div>
</template>

<script>
export default {
  props: ['page'],
  async asyncData({ $content }) {
    const page = await $content('').fetch()

    return {
      page,
    }
  },
}
</script>
