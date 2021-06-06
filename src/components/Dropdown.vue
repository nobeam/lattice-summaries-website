<template>
  <div class="relative">
    <button
      class="bg-white border-shadow flex h-12 px-4 items-center focus:outline-none"
      type="button"
      @click="isOpen = !isOpen"
    >
      <HeroIcon :paths="paths" />
      <span class="font-medium">{{ selected }}</span>
    </button>
    <div
      v-show="isOpen"
      class="bg-white border-shadow mt-2 w-56 absolute"
      :class="`origin-top-${orientation} ${orientation}-0`"
      @mouseleave="isOpen = false"
    >
      <div class="py-1">
        <div
          v-for="(option, index) in options"
          :key="index"
          class="cursor-pointer flex py-2 pr-1 pl-4 justify-between hover:bg-primary-50 hover:text-gray-900"
          @click="$emit('select', option)"
        >
          {{ option }}
          <HeroIcon v-if="option === selected" :paths="['M5 13l4 4L19 7']" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HeroIcon from "../components/HeroIcon.vue";

export default {
  name: "Dropdown",
  components: { HeroIcon },
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    selected: String,
    options: Array,
    paths: Array,
    orientation: {
      type: String,
      default: "left",
    },
  },
};
</script>