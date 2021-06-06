<template>
  <svg
    class="h-4 mr-2 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      v-for="(path, index) in paths"
      :key="index"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      :d="path"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: "HeroIcon",
  props: {
    paths: Array,
  },
};
</script>
