<template>
  <header
    class="container mx-auto p-4 flex flex-col md:flex-row md:justify-between items-center"
  >
    <div class="flex flex-col md:flex-row items-center">
      <router-link to="/" class="flex mr-4 items-center">
        <!-- TODO: make brands submodule of this repo -->
        <img draggable="false" src="../assets/logo-icon.svg" width="48" />
        <span class="p-1"></span>
        <h1 class="text-lg font-medium">Lattice Summaries</h1>
      </router-link>
      <router-link
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
      </router-link>
    </div>
    <div class="flex items-center">
      <a
        class="m-2 p-2 italic text-gray-900 hover:text-gray-700"
        href="https://www.github.com/nobeam/lattice-summaries-website/"
        target="_blank"
      >
        Source Code ↗
      </a>
    </div>
  </header>
</template>

<script>
export default { name: "Header" };
</script>
