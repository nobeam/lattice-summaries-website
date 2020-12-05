<template>
  <header
    class="container mx-auto p-4 flex flex-col md:flex-row md:justify-between items-center"
  >
    <div class="flex flex-col md:flex-row items-center">
      <router-link to="/" class="flex mr-4 items-center">
        <!-- TODO: make brands submodule of this repo -->
        <img draggable="false" src="../assets/logo-icon.svg" height="48" />
        <!-- <img draggable="false" src="../assets/logo-type.svg" height="48" /> -->
        <span class="p-1"></span>
        <h1 class="text-xl font-medium">Lattice Summaries</h1>
      </router-link>
      <router-link
        :to="{ path: '/', hash: '#summaries' }"
        class="m-2 p-2 text-primary-900 hover:text-primary-700"
      >
        Summaries
      </router-link>
      <router-link
        :to="{ path: '/', hash: '#how-it-works' }"
        class="m-2 p-2 text-primary-900 hover:text-primary-700"
      >
        How it works
      </router-link>
    </div>
    <div class="flex items-center">
      <a
        href="https://www.github.com/nobeam/b3-lattice-summaries/"
        class="m-2 p-2 text-primary-900 hover:text-primary-700"
      >
        Source Code ↗
      </a>
    </div>
  </header>
</template>

<script>
export default { name: "Header" };
</script>
