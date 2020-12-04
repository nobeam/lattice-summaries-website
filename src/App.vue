<template>
  <div>
    <div
      class="p-4 bg-warning-100 text-warning-900 text-lg flex justify-center"
    >
      🚧 Work in progress 🚧
    </div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default { name: "App", components: { Header, Footer } };
</script>
