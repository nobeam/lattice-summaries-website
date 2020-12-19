<template>
  <div class="relative">
    <button
      class="h-12 bg-white border-shadow px-4 flex items-center focus:outline-none"
      type="button"
      @click="isOpen = !isOpen"
    >
      <HeroIcon :paths="paths" />
      <span class="font-medium">{{ selected }}</span>
    </button>
    <div
      v-show="isOpen"
      class="z-10 absolute mt-2 w-56 bg-white border-shadow"
      :class="`origin-top-${orientation} ${orientation}-0`"
      @mouseleave="isOpen = false"
    >
      <div class="py-1">
        <div
          v-for="(option, index) in options"
          :key="index"
          class="cursor-pointer flex justify-between pl-4 pr-1 py-2 hover:bg-primary-50 hover:text-gray-900"
          @click="$emit('select', option)"
        >
          {{ option }}
          <HeroIcon v-if="option === selected" :paths="['M5 13l4 4L19 7']" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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