<template>
  <svg
    class="mr-2 w-4 h-4"
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

<script>
export default {
  name: "HeroIcon",
  props: {
    paths: Array,
  },
};
</script>
