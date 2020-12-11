<template>
  <main class="bg-white py-8">
    <div class="container m-auto px-4">
      <div>This is the namespace {{ $route.params.namespace }}!</div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Namespace",
};
</script>