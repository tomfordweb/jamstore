<template>
  <nav class="main">
    <ul>
      <li v-for="link in links" :key="link.url">
        <NuxtLink :to="link.url">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    links: [
      { text: 'Home', url: '/' },
      {
        text: 'Blog',
        url: '/blog',
      },
    ],
  }),
}
</script>
