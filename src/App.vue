<template>
  <!-- <div
    v-if="showBanner"
    class="p-4 bg-warning-100 text-warning-900 text-lg flex justify-center cursor-pointer"
    @click="showBanner = false"
  >
    🚧 Work in progress 🚧
  </div> -->
  <div class="bg-gray-50 min-h-screen flex flex-col">
    <Header />
    <router-view></router-view>
    <div class="flex-grow"></div>
    <Footer />
  </div>
  <div class="h-1"></div>
</template>

<script lang="ts">
import { mapActions } from "vuex";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { Header, Footer },
  data() {
    return {
      showBanner: true,
    };
  },
  methods: {
    ...mapActions(["getInfo"]),
  },
  mounted() {
    this.getInfo();
  },
};
</script>
