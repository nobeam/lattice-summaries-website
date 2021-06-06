<template>
  <div class="border-shadow overflow-hidden">
    <table class="divide-y divide-gray-100 text-sm w-full table-fixed">
      <thead class="bg-gray-50">
        <tr>
          <th
            class="font-medium text-xs text-left tracking-wider py-2 px-4 text-gray-500 uppercase"
          >Parameter</th>
          <th
            class="font-medium text-xs text-left tracking-wider py-2 px-4 text-gray-500 uppercase"
          >Value</th>
        </tr>
      </thead>
      <tbody class="divide-y bg-white divide-gray-100">
        <tr v-for="([parameter, value], i) in data" :key="i">
          <td class="py-2 px-4">{{ parameter }}</td>
          <td class="py-2 px-4">{{ Number.parseFloat(value).toPrecision(3) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script lang="ts">

export default {
  name: "Table",
  props: {
    data: Object,
  },
};
</script>
