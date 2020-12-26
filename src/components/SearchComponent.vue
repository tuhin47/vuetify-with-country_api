<template>
  <v-col cols="4">
    <strong>Search with Capital</strong>
    <v-text-field
      v-model.lazy="input"
      label="Search with Capital"
      outlined
      shaped
    ></v-text-field>
  </v-col>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SearchComponent",
  data: () => ({
    input: "",
  }),
  methods: {
    ...mapActions(["searchForInput"]),
  },
  watch: {
    input(val) {
      if (val) this.searchForInput(val);
    },
  },
};
</script>
