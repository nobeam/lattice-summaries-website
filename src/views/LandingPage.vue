<template>
  <main>
    <!-- <section class="py-8">
      <div class="container m-auto px-4 grid gap-y-8 justify-items-center">
        <h1 class="text-primary-900 text-2xl font-medium">
          Automatically generated summaries of BESSY III prototype lattices
        </h1>
        <h2 class="text-primary-600 text-lg">
          click on summary to view full lattice summary
        </h2>
      </div>
    </section> -->
    <section id="summaries" class="py-8 border-b-2 border-gray-100">
      <div class="container mx-auto px-4">
        <LatticeList :lattices="info.lattices" />
      </div>
    </section>
    <section
      v-if="False"
      id="how-it-works"
      class="bg-white py-8 border-b-2 border-gray-100"
    >
      <div class="container mx-auto px-4">
        <h1 class="text-center text-gray-900 font-semibold text-4xl mb-16">
          How It Works
        </h1>
      </div>
    </section>
  </main>
</template>


<script>
import Card from "../components/Card.vue";
import LatticeInfo from "../components/LatticeInfo.vue";
import LatticeList from "../components/LatticeList.vue";

export default {
  name: "LandingPage",
  components: { Card, LatticeInfo, LatticeList },
  data() {
    return {
      info: [],
    };
  },
  async created() {
    const response = await fetch(this.$dataURL + "/index.json");
    this.info = await response.json();
  },
};
</script>