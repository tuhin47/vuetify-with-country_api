<template>
  <v-row>
    <v-col col="3">
      {{ this.time }}
    </v-col >
    <v-col col="9">{{ getTime }}</v-col>
  </v-row>
</template>

<script>
export default {
  name: "TimeZone",
  props: ["time"],
  computed: {
    getTime() {
      if (this.time) {
        return new Date(
          new Date().toUTCString() + this.time.substring(3)
        ).toUTCString();
        // return new Date().toLocaleTimeString();
      }
      return "";
    },
  },
};
</script>
