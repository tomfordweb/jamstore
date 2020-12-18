<template>
  <nav>
    <ul>
      <li
        v-for="link in links"
        :key="link.url"
        v-bind:class="{ active: isActive(link.url) }"
      >
        <NuxtLink :to="link.url">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['links'],
  methods: {
    isActive: function (path) {
      return this.$route.fullPath === path
    },
  },
}
</script>
