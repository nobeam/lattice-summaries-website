<template>
  <main class="py-8">
    <div class="container m-auto px-4">
      <h1 class="text-2xl font-medium mb-4">
        Namespace
        <router-link
          :to="{ path: `/${namespace}` }"
          class="text-primary-500 hover:underline"
        >
          {{ namespace }}
        </router-link>
      </h1>
      <LatticeList :lattices="lattices" />
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

import LatticeList from "../components/LatticeList.vue";

export default {
  name: "Namespace",
  components: { LatticeList },
  data() {
    return {
      namespace: null,
    };
  },
  created() {
    this.update();
  },
  methods: {
    update() {
      this.namespace = this.$route.params.namespace;
    },
  },
  watch: {
    $route() {
      this.update();
    },
  },
  computed: {
    ...mapGetters(["allLattices"]),
    lattices() {
      return this.allLattices.filter(
        (lattice) => lattice.namespace === this.namespace
      );
    },
  },
};
</script>