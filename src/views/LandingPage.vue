<template>
  <main>
    <section id="overview-machines">
      <div class="container mx-auto border-b-2 border-gray-100 py-8 px-4">
        <h1 class="font-medium mb-8 text-2xl">Overview of machines</h1>
        <NamespaceList :namespaces="latticesByMachine" />
      </div>
    </section>
    <section id="overview-namespaces">
      <div class="container mx-auto border-b-2 border-gray-100 py-8 px-4">
        <h1 class="font-medium mb-8 text-2xl">Overview of namespaces</h1>
        <NamespaceList :namespaces="allNamespaces" />
      </div>
    </section>
    <section id="recent-summaries">
      <div class="container mx-auto border-b-2 border-gray-100 py-8 px-4">
        <h1 class="font-medium mb-8 text-2xl">Recently added lattices</h1>
        <LatticeList :lattices="allLattices" />
      </div>
    </section>
    <section v-if="false" id="how-it-works" class="bg-white border-b-2 border-gray-100 py-8">
      <div class="container mx-auto px-4">
        <h1 class="font-semibold text-center mb-16 text-gray-900 text-4xl">How It Works</h1>
      </div>
    </section>
  </main>
</template>


<script lang="ts">

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
