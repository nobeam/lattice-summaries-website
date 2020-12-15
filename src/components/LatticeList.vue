<template>
  <div
    v-if="viewMode === 'grid'"
    class="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
  >
    <Card v-for="lattice in lattices" :key="lattice.name">
      <LatticeInfo :lattice="lattice" />
    </Card>
  </div>
  <div v-if="viewMode === 'list'" class="grid gap-4 text-sm">
    <Card v-for="lattice in lattices" :key="lattice.name">
      {{ lattice.namespace }} / {{ lattice.name }}
    </Card>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import LatticeInfo from "../components/LatticeInfo.vue";

export default {
  name: "LatticeList",
  components: { Card, LatticeInfo },
  props: {
    lattices: Array,
    viewMode: String,
  },
};
</script>
