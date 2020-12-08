<template>
  <div class="bg-gray-50">
    <!-- <div
      v-if="showBanner"
      class="p-4 bg-warning-100 text-warning-900 text-lg flex justify-center cursor-pointer"
      @click="showBanner = false"
    >
      🚧 Work in progress 🚧
    </div> -->
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
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
};
</script>
