<template>
  <table class="table-auto border border-gray-100 text-sm">
    <thead class="bg-gray-100 text-gray-900">
      <tr>
        <th class="p-2">Parameter</th>
        <th class="p-2">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="([parameter, value], i) in data" :key="i">
        <td class="px-4 py-1">{{ parameter }}</td>
        <td class="px-4 py-1">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>


<script>
export default {
  name: "Table",
  props: {
    data: Object,
  },
};
</script>