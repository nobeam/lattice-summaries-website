<template>
  <main>
    <section class="py-8">
      <div class="container m-auto px-4 grid gap-y-8 justify-items-center">
        <h1 class="text-primary-900 text-2xl font-medium">
          Automatically generated summaries of BESSY III prototype lattices
        </h1>
        <h2 class="text-primary-600 text-lg">
          click on summary to view full lattice summary
        </h2>
      </div>
    </section>
    <section id="summaries" class="py-8 border-b-2 border-gray-100">
      <div class="container mx-auto px-4">
        <div
          class="grid gap-x-4 gap-y-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
        >
          <div
            class="p-5 border border-gray-100 rounded-lg shadow flex flex-col gap-4"
            v-for="lattice in info.lattices"
            :key="lattice.name"
          >
            <h2 class="text-xl font-medium">{{ lattice.title }}</h2>
            <h4 class="text-lg text-gray-700">by {{ lattice.author }}</h4>
            <p>{{ lattice.description }}</p>
            <h4 class="font-semibold text-sm">Lattice files:</h4>
            <p class="flex gap-2">
              <a
                v-for="format in lattice.formats"
                :key="format"
                class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded"
                target="_blank"
              >
                .{{ format }}
              </a>
            </p>
            <h4 class="font-semibold text-sm">Summaries:</h4>
            <p class="flex gap-2">
              <router-link
                v-for="format in lattice.formats"
                :key="format"
                class="px-8 py-2 border border-gray-300 rounded"
                :to="`/elegant/${lattice.name}`"
              >
                {{ nameMap[format] }}
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="how-it-works" class="py-8 border-b-2 border-gray-100">
      <div class="container mx-auto px-4">
        <h1 class="text-center text-primary-700 font-semibold text-4xl mb-16">
          How It Works
        </h1>
      </div>
    </section>
  </main>
</template>


<script>
export default {
  name: "LandingPage",
  data() {
    return {
      info: [],
      nameMap: {
        lte: "elegant",
        madx: "MAD-X",
        json: "apace",
      },
    };
  },
  async created() {
    const response = await fetch(this.$baseURL + "/index.json");
    this.info = await response.json();
  },
};
</script>