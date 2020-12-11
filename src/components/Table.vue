<template>
  <div class="border border-gray-100 overflow-hidden rounded shadow-sm">
    <table class="table-fixed text-sm w-full divide-y divide-gray-100">
      <thead class="bg-gray-50">
        <tr>
          <th
            class="text-xs font-medium px-4 py-2 text-left text-gray-500 uppercase tracking-wider"
          >
            Parameter
          </th>
          <th
            class="text-xs font-medium px-4 py-2 text-left text-gray-500 uppercase tracking-wider"
          >
            Value
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-100">
        <tr v-for="([parameter, value], i) in data" :key="i">
          <td class="px-4 py-2">{{ parameter }}</td>
          <td class="px-4 py-2">
            {{ Number.parseFloat(value).toPrecision(3) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "Table",
  props: {
    data: Object,
  },
};
</script>