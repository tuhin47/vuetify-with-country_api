<template>
  <v-col cols="4">
    <strong>Results</strong>
    <v-list dense>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in getResults" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-col>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ResultBox",
  data: () => ({
    items: [],
    selectedItem: null,
  }),
  computed: {
    ...mapGetters(["getResults"]),
  },
  methods: {
    setSelectedItem(val) {
      this.$store.commit("SET_SELECTED_ITEM", val);
    },
  },
  watch: {
    selectedItem(val) {
      this.setSelectedItem(val);
    },
  },
};
</script>
