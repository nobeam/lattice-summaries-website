<template>
  <div class="text-sm grid content-between">
    <div class="mb-4 grid gap-y-1">
      <!-- // TODO: better fix than v-if -->
      <h2 class="text-base font-medium">{{ lattice.title }}</h2>
      <div class="font-semibold">
        <router-link
          :to="{ path: `/${lattice.namespace}` }"
          class="text-primary-500 hover:underline"
        >
          {{ lattice.namespace }}
        </router-link>
        <span> / </span>
        <router-link
          :to="{ path: `/${lattice.namespace}/${lattice.name}` }"
          class="text-primary-500 hover:underline"
        >
          {{ lattice.name }}
        </router-link>
      </div>
      <h4 class="text-gray-700 italic">by {{ lattice.authors.join(", ") }}</h4>
      <div
        class="my-1"
        v-if="lattice.labels === undefined || lattice.labels.length"
      >
        <span
          v-for="(label, index) in lattice.labels"
          :key="index"
          class="mr-1 text-primary-700 bg-primary-50 border border-primary-100 h-10 rounded px-2 py-1 text-xs select-none"
        >
          {{ label }}
        </span>
      </div>
      <p>{{ lattice.description }}</p>
    </div>
    <div class="grid gap-1">
      <h4 class="font-medium">Lattice files</h4>
      <p class="flex gap-2">
        <a
          v-for="format in ['json', 'lte', 'madx']"
          :key="format"
          class="px-4 py-1 rounded bg-white border border-gray-100 shadow hover:underline transform hover:scale-105"
          :href="`https://github.com/nobeam/lattice-summaries-lattices/blob/generated/${lattice.namespace}/${lattice.name}.${format}`"
          target="_blank"
        >
          {{ format }}
        </a>
      </p>
      <h4 class="mt-1 font-medium">Summaries</h4>
      <p class="flex gap-2 flex-wrap">
        <router-link
          v-for="simulation in lattice.simulations"
          :key="simulation"
          class="px-4 py-1 rounded bg-white border border-gray-100 shadow transform hover:scale-105"
          :to="{
            path: `/${lattice.namespace}/${lattice.name}/${simulation}`,
          }"
        >
          {{ simulation }}
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LatticeInfo",
  data() {
    return {
      nameMap: {
        lte: "elegant",
        madx: "MAD-X",
        json: "apace",
      },
    };
  },
  props: {
    lattice: Object,
  },
};
</script>
