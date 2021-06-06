<template>
  <main class="py-8">
    <div class="container m-auto px-4">
      <div class="grid gap-6">
        <div class="flex flex-wrap text-sm gap-4">
          <!-- <router-link to="/" class="flex items-center">
            <img draggable="false" src="../assets/logo-icon.svg" width="48" />
            <span class="p-2"></span>
            <h1 class="font-medium text-base">Lattice Summaries</h1>
          </router-link>-->
          <Dropdown
            @select="(option) => (filterNamespace = option)"
            :selected="filterNamespace"
            :options="allNamespaces"
            :paths="[
              'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
            ]"
          />
          <div
            class="bg-white border-shadow flex-grow flex h-12 px-4 items-center button-outline-within"
          >
            <HeroIcon :paths="['M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z']" />
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
          <Dropdown
            @select="(option) => (filterMachine = option)"
            :selected="filterMachine"
            :options="allMachines"
            :paths="[
              'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
            ]"
            orientation="right"
          />
          <Dropdown
            @select="(option) => (filterAuthor = option)"
            :selected="filterAuthor"
            :options="allAuthors"
            :paths="[
              'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
            ]"
            orientation="right"
          />
          <div class="border-shadow rounded flex bg-gray-100 h-12">
            <button
              class="rounded flex px-4 transition-colors duration-500 items-center button-outline"
              :class="[viewMode === 'grid' ? 'bg-white' : '']"
              @click="viewMode = 'grid'"
            >
              <HeroIcon
                :paths="[
                  'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
                ]"
              />Grid
            </button>
            <button
              class="rounded flex px-4 transition-colors duration-500 items-center button-outline"
              :class="[viewMode === 'list' ? 'bg-white' : '']"
              @click="viewMode = 'list'"
            >
              <HeroIcon :paths="['M4 6h16M4 10h16M4 14h16M4 18h16']" />List
            </button>
          </div>
        </div>
        <div class="flex text-sm text-gray-700 uppercase justify-end">
          {{ filteredLattices.length }} lattice{{
            filteredLattices.length > 1 ? "s" : ""
          }}
        </div>
        <LatticeList :viewMode="viewMode" :lattices="filteredLattices" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Fuse from "fuse.js";
import { mapGetters } from "vuex";

import LatticeList from "../components/LatticeList.vue";
import Dropdown from "../components/Dropdown.vue";
import HeroIcon from "../components/HeroIcon.vue";

const ANY_NAMESPACE = "Namespace";
const ANY_AUTHOR = "Author";
const ANY_MACHINE = "Machine";

export default {
  name: "Search",
  components: { LatticeList, HeroIcon, Dropdown },
  data() {
    return {
      namespace: null,
      viewMode: "grid",
    };
  },
  computed: {
    ...mapGetters(["allLattices"]),
    filterNamespace: {
      get() {
        if (this.$route.params.namespace === undefined) {
          return ANY_NAMESPACE;
        }
        return this.$route.params.namespace;
      },
      set(value) {
        this.$router.push({
          name: "search",
          params: { ...this.$route.params, namespace: value },
          query: this.$route.query,
        });
      },
    },
    filterName: {
      get() {
        return this.$route.query.name ?? "";
      },
      set(value) {
        this.$router.push({ query: { ...this.$route.query, name: value } });
      },
    },
    filterMachine: {
      get() {
        return this.$route.query.machine ?? ANY_MACHINE;
      },
      set(value) {
        this.$router.push({ query: { ...this.$route.query, machine: value } });
      },
    },
    filterAuthor: {
      get() {
        return this.$route.query.author ?? ANY_AUTHOR;
      },
      set(value) {
        this.$router.push({ query: { ...this.$route.query, author: value } });
      },
    },
    namespaceLattices() {
      if (this.filterNamespace !== ANY_NAMESPACE) {
        return this.allLattices.filter(
          (lattice) => lattice.namespace === this.filterNamespace
        );
      }
      return this.allLattices;
    },
    filteredLattices() {
      let lattices = this.namespaceLattices;
      if (this.filterMachine !== ANY_MACHINE) {
        lattices = lattices.filter(
          (lattice) => lattice.machine === this.filterMachine
        );
      }
      if (this.filterAuthor !== ANY_AUTHOR) {
        lattices = lattices.filter((lattice) =>
          lattice.authors.includes(this.filterAuthor)
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
    allNamespaces() {
      return [ANY_NAMESPACE].concat(
        Array.from(
          new Set(
            Array.from(this.allLattices, (lattice) => lattice.namespace)
          ).values()
        ).sort()
      );
    },
    allMachines() {
      return [ANY_MACHINE].concat(
        Array.from(
          new Set(
            Array.from(this.namespaceLattices, (lattice) => lattice.machine)
          ).values()
        ).sort()
      );
    },
    allAuthors() {
      return [ANY_AUTHOR].concat(
        Array.from(
          new Set(
            [].concat.apply(
              [],
              Array.from(this.namespaceLattices, (lattice) => lattice.authors)
            )
          ).values()
        ).sort()
      );
    },
  },
};
</script>
