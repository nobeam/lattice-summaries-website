<template>
  <footer class="container mx-auto px-4 py-24 text-gray-700">
    <div class="grid gap-8 md:grid-cols-4 items-start">
      <ul class="grid gap-4">
        <li class="text-gray-900 font-medium">Overview</li>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/', hash: '#summaries' }">Summaries</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/', hash: '#how-it-works' }">How it works</router-link>
        </li>
      </ul>
      <ul class="grid gap-4">
        <li class="text-gray-900 font-medium">Links</li>
        <li>
          <a href="https://github.com/nobeam" target="_blank">NoBeam Github</a>
        </li>
        <li>
          <a href="https://github.com/nobeam/b3-lattice-summaries" target="_blank">Source Code</a>
        </li>
        <li>
          <a href="https://github.com/nobeam/latticejson" target="_blank">LatticeJSON</a>
        </li>
        <li>
          <a href="https://github.com/nobeam/eleganttools" target="_blank">eleganttools</a>
        </li>
      </ul>
      <ul class="grid gap-4">
        <li class="text-gray-900 font-medium">Simulation Software</li>
        <li>
          <a
            href="https://www.aps.anl.gov/Accelerator-Operations-Physics/Software"
            target="_blank"
          >elegant</a>
        </li>
        <li>
          <a href="http://madx.web.cern.ch/madx/" target="_blank">MAD-X</a>
        </li>
        <li>
          <a href="https://github.com/andreasfelix/apace" target="_blank">apace</a>
        </li>
      </ul>
      <ul class="grid gap-4">
        <li class="text-gray-900 font-medium">Built with</li>
        <li>
          <a href="https://vuejs.org/" target="_blank">Vue 3</a>
        </li>
        <li>
          <a href="https://github.com/vitejs/vite/" target="_blank">Vite</a>
        </li>
        <li>
          <a href="https://tailwindcss.com/" target="_blank">tailwindcss</a>
        </li>
      </ul>
    </div>
    <a class="flex py-8" href="https://github.com/nobeam" target="_blank">
      <img draggable="false" src="../assets/logo-mark.svg" />
      <img draggable="false" src="../assets/logo-type.svg" />
    </a>
    <span>Lattice summaries &copy; {{ new Date().getFullYear() }} NoBeam</span>
  </footer>
</template>

<script lang="ts">
export default { name: "Footer" };
</script>
