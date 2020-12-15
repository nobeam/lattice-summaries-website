<template>
  <header
    class="container mx-auto p-4 flex flex-col md:flex-row md:justify-between items-center"
  >
    <div class="flex flex-col md:flex-row items-center">
      <router-link to="/" class="flex mr-4 items-center">
        <!-- TODO: make brands submodule of this repo -->
        <img draggable="false" src="../assets/logo-icon.svg" />
        <span class="p-2"></span>
        <h1 class="text-xl font-medium">Lattice Summaries</h1>
      </router-link>
      <!-- <router-link
        :to="{ path: '/', hash: '#summaries' }"
        class="m-2 p-2 text-gray-900 hover:text-gray-700"
      >
        Summaries
      </router-link>
      <router-link
        :to="{ path: '/', hash: '#how-it-works' }"
        class="m-2 p-2 text-gray-900 hover:text-gray-700"
      >
        How it works
      </router-link> -->
    </div>
    <a
      class="flex items-center m-2 p-2 text-sm hover:text-gray-700"
      href="https://www.github.com/nobeam/lattice-summaries-website/"
      target="_blank"
    >
      <HeroIcon :paths="['M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4']" />
      Source Code
    </a>
  </header>
</template>

<script>
import HeroIcon from "./HeroIcon.vue";

export default {
  name: "Header",
  components: {
    HeroIcon,
  },
};
</script>
