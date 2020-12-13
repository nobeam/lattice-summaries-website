<template>
  <div class="border border-gray-100 overflow-hidden rounded shadow-sm">
    <table class="table-fixed text-sm w-full divide-y divide-gray-100">
      <thead class="bg-white">
        <tr>
          <th
            class="text-xs font-medium px-4 py-2 text-left text-gray-500 uppercase tracking-wider"
          >
            Namespace
          </th>
          <th
            class="text-xs font-medium px-4 py-2 text-left text-gray-500 uppercase tracking-wider"
          >
            Number of lattices
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-100">
        <tr v-for="(namespace, name, index) in namespaces" :key="index">
          <td class="px-4 py-2 font-semibold">
            <router-link
              :to="{ path: `/${namespace.name}` }"
              class="text-primary-500 hover:underline"
            >
              {{ namespace.name }}
            </router-link>
          </td>
          <td class="px-4 py-2">{{ namespace.lattices.length }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "NamespaceList",
  props: {
    namespaces: Object,
  },
};
</script>