<template>
  <main class="bg-white py-8">
    <div class="container m-auto px-4">
      <LatticeInfo v-if="lattice !== null" :lattice="lattice" />
    </div>
  </main>
</template>

<script>
import LatticeInfo from "../components/LatticeInfo.vue";
export default {
  name: "Lattice",
  components: { LatticeInfo },
  data() {
    return {
      name: null,
      namespace: null,
      lattice: null,
    };
  },
  async created() {
    this.name = this.$route.params.name;
    this.namespace = this.$route.params.namespace;
    this.simulation = this.$route.params.simulation;
    const base_path = `${this.$dataURL}/${this.namespace}/${this.name}/`;
    const response = await fetch(base_path + "index.json");
    this.lattice = await response.json();
  },
};
</script>
