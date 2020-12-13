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
    <section id="namespaces" class="py-8 border-b-2 border-gray-100">
      <div class="container mx-auto px-4">
        <h1 class="my-4 text-2xl font-medium">Overview of Machines</h1>
        <NamespaceList :namespaces="latticesByMachine" />
      </div>
    </section>
    <section id="namespaces" class="py-8 border-b-2 border-gray-100">
      <div class="container mx-auto px-4">
        <h1 class="my-4 text-2xl font-medium">Overview of Namespaces</h1>
        <NamespaceList :namespaces="allNamespaces" />
      </div>
    </section>
    <section id="summaries" class="py-8 border-b-2 border-gray-100">
      <div class="container mx-auto px-4">
        <h1 class="my-4 text-2xl font-medium">Recent Lattices</h1>
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