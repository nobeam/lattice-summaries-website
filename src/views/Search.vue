<template>
  <main class="py-8">
    <div class="container m-auto px-4">
      <div class="grid gap-6">
        {{ allMachines }}
        {{ allAuthors }}
        <div class="flex flex-wrap gap-4 text-sm">
          <!-- <router-link to="/" class="flex items-center">
            <img draggable="false" src="../assets/logo-icon.svg" width="48" />
            <span class="p-2"></span>
            <h1 class="text-base font-medium">Lattice Summaries</h1>
          </router-link> -->
          <button
            class="h-12 bg-white border-shadow px-4 flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500"
            type="button"
          >
            <HeroIcon
              :paths="[
                'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
              ]"
            />
            <span class="font-medium">{{ this.filterNamespace }}</span>
          </button>
          <div
            class="h-12 bg-white border-shadow px-4 flex-grow flex items-center focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-primary-500"
          >
            <HeroIcon
              :paths="['M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z']"
            />

            <input
              class="focus:outline-none"
              v-model="filterName"
              type="text"
              name="name"
              placeholder="Lattice Name ..."
              autocomplete="off"
              autofocus
            />
          </div>
          <button
            class="h-12 bg-white border-shadow px-4 flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500"
            type="button"
          >
            <HeroIcon
              :paths="[
                'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
              ]"
            />
            Machine
          </button>
          <button
            class="h-12 bg-white border-shadow px-4 flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500"
            type="button"
          >
            <HeroIcon
              :paths="[
                'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
              ]"
            />
            Author
          </button>
          <div class="h-12 bg-gray-100 p-1 rounded flex">
            <button
              class="px-4 flex items-center rounded focus:outline-none"
              :class="[viewMode === 'list' ? 'bg-white border-shadow' : '']"
              @click="viewMode = 'list'"
            >
              <HeroIcon :paths="['M4 6h16M4 10h16M4 14h16M4 18h16']" />
              List
            </button>
            <button
              class="px-4 flex items-center rounded focus:outline-none"
              :class="[viewMode === 'grid' ? 'bg-white border-shadow' : '']"
              @click="viewMode = 'grid'"
            >
              <HeroIcon
                :paths="[
                  'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
                ]"
              />
              Grid
            </button>
          </div>
        </div>
        <div class="text-sm text-gray-700 uppercase">
          {{ filteredLattices.length }} lattice{{
            filteredLattices.length > 1 ? "s" : ""
          }}
        </div>
        <LatticeList :viewMode="viewMode" :lattices="filteredLattices" />
      </div>
    </div>
  </main>
</template>

<script>
import Fuse from "fuse.js";
import { mapGetters } from "vuex";

import LatticeList from "../components/LatticeList.vue";
import HeroIcon from "../components/HeroIcon.vue";

const GLOBAL_NAME = "global";

export default {
  name: "Search",
  components: { LatticeList, HeroIcon },
  data() {
    return {
      namespace: null,
      viewMode: "grid",
      filterMachine: undefined,
      filterAuthors: undefined,
    };
  },
  computed: {
    ...mapGetters(["allLattices"]),
    filterName: {
      get() {
        if (this.$route.query.name === undefined) {
          return "";
        }
        return this.$route.query.name;
      },
      set(value) {
        this.$router.push({ query: { ...this.$route.query, name: value } });
      },
    },
    filterNamespace: {
      get() {
        if (this.$route.params.namespace === undefined) {
          return GLOBAL_NAME;
        }
        return this.$route.params.namespace;
      },
      set(value) {
        this.$router.push({
          params: { ...this.$route.params, namespace: value },
        });
      },
    },
    namespaceLattices() {
      if (this.filterNamespace !== GLOBAL_NAME) {
        return this.allLattices.filter(
          (lattice) => lattice.namespace === this.filterNamespace
        );
      }
      return this.allLattices;
    },
    filteredLattices() {
      let lattices = this.namespaceLattices;
      if (this.filterMachine !== undefined) {
        lattices = lattices.filter(
          (lattice) => lattice.machine === this.filterMachine
        );
      }
      if (this.filterAuthors !== undefined) {
        lattices = lattices.filter((lattice) =>
          lattice.authors.include(this.filterAuthors)
        );
      }
      if (this.filterName !== "") {
        const fuse = new Fuse(lattices, {
          keys: ["name", "title"],
        });
        lattices = Array.from(
          fuse.search(this.filterName, 10),
          (result) => result.item
        );
      }
      return lattices;
    },
    allMachines() {
      return Array.from(
        new Set(
          Array.from(this.namespaceLattices, (lattice) => lattice.machine)
        ).values()
      ).sort();
    },
    allAuthors() {
      return []
        .concat(
          Array.from(
            new Set(
              Array.from(this.namespaceLattices, (lattice) => lattice.authors)
            ).values()
          )
        )
        .sort();
    },
  },
};
</script>