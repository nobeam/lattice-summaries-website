<template>
  <main>
    <section id="overview-machines">
      <div class="container mx-auto px-4 py-8 border-b-2 border-gray-100">
        <h1 class="mb-8 text-2xl font-medium">Overview of machines</h1>
        <NamespaceList :namespaces="latticesByMachine" />
      </div>
    </section>
    <section id="overview-namespaces">
      <div class="container mx-auto px-4 py-8 border-b-2 border-gray-100">
        <h1 class="mb-8 text-2xl font-medium">Overview of namespaces</h1>
        <NamespaceList :namespaces="allNamespaces" />
      </div>
    </section>
    <section id="recent-summaries">
      <div class="container mx-auto px-4 py-8 border-b-2 border-gray-100">
        <h1 class="mb-8 text-2xl font-medium">Recently added lattices</h1>
        <LatticeList :lattices="allLattices" />
      </div>
    </section>
    <section
      v-if="false"
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
import { mapGetters } from "vuex";

import Card from "../components/Card.vue";
import LatticeList from "../components/LatticeList.vue";
import NamespaceList from "../components/NamespaceList.vue";

export default {
  name: "LandingPage",
  components: { Card, LatticeList, NamespaceList },
  computed: {
    ...mapGetters(["allLattices", "allNamespaces", "latticesByMachine"]),
  },
};
</script>
