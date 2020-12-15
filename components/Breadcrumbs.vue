<template>
  <ul class="breadcrumbs">
    <li v-for="crumb of crumbs" :key="crumb.slug">
      <NuxtLink :to="`${crumb.link}`">{{ crumb.title }}</NuxtLink>
    </li>
  </ul>
</template>
<script>
export default {
  props: ['crumbs'],
}
</script>
