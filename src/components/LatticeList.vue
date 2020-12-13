<template>
  <div class="grid gap-x-4 gap-y-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
    <Card v-for="lattice in lattices" :key="lattice.name">
      <LatticeInfo :lattice="lattice" />
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
  },
};
</script>