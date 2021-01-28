<template>
  <main class="py-8">
    <div v-if="lattice !== null" class="container m-auto px-4 grid gap-4">
      <Card>
        <LatticeInfo :lattice="lattice" />
      </Card>
      <Card>
        <h2 class="text-lg font-medium">Floorplan</h2>
        <Floorplan :lattice="lattice" />
      </Card>
    </div>
  </main>
</template>

<script>
import LatticeInfo from "../components/LatticeInfo.vue";
import Floorplan from "../components/Floorplan.vue";
import Card from "../components/Card.vue";

export default {
  name: "Lattice",
  components: { LatticeInfo, Floorplan, Card },
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
