<template>
  <div class="border-shadow overflow-hidden">
    <table class="divide-y divide-gray-100 text-sm w-full table-fixed">
      <thead class="bg-white">
        <tr>
          <th
            class="font-medium text-xs text-left tracking-wider py-2 px-4 text-gray-500 uppercase"
          >Namespace</th>
          <th
            class="font-medium text-xs text-left tracking-wider py-2 px-4 text-gray-500 uppercase"
          >Number of lattices</th>
        </tr>
      </thead>
      <tbody class="divide-y bg-white divide-gray-100">
        <tr v-for="(namespace, name, index) in namespaces" :key="index">
          <td class="font-semibold py-2 px-4">
            <router-link
              :to="{ path: `/${namespace.name}` }"
              class="text-primary-500 hover:underline"
            >{{ namespace.name }}</router-link>
          </td>
          <td class="py-2 px-4">{{ namespace.lattices.length }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: "NamespaceList",
  props: {
    namespaces: Object,
  },
};
</script>
