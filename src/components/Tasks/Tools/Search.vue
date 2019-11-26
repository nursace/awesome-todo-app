<template>
  <q-input @keyup.esc="searchField=''" v-select-all outlined v-model="searchField" label="Search" class="col">
    <template v-slot:append>
      <q-icon
        v-if="searchField !== ''"
        name="close"
        @click="searchField = ''"
        class="cursor-pointer"
      />
      <q-icon class="cursor-pointer" name="search" />
    </template>
  </q-input>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { selectAll } from "../../../directives/directive-select-all";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState("tasks", ["search"]),
    searchField: {
      get() {
        return this.search;
      },
      set(value) {
        this.setSearch(value);
      }
    }
  },

  methods: {
    ...mapActions("tasks", ["setSearch"])
  },

  directives: {
    selectAll
  }
};
</script>

<style lang="scss" scoped>
</style>