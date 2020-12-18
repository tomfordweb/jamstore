<template>
  <div id="site-wrapper__default">
    <header class="container">
      <logo />
      <navigation class="main" v-bind:links="links" />
    </header>
    <main class="container">
      <nuxt />
    </main>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      links: [
        { text: 'Home', url: '/' },
        {
          text: 'Blog',
          url: `/${this.$config.routes.blog}`,
        },
        {
          text: 'Shop',
          url: `/${this.$config.routes.store}`,
        },
      ],
    }
  },
}
</script>
