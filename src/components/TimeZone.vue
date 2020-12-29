<template>
  <v-row>
    <v-col col="3">
      {{ this.time }}
    </v-col>
    <v-col col="9">{{ currentTime }}</v-col>
  </v-row>
</template>

<script>
export default {
  name: "TimeZone",
  props: ["time"],
  data: () => ({
    currentTime: null
  }),
  created() {
    this.getTime();
    setInterval(this.getTime, 1000);
  },
  methods: {
    getTime() {
      if (this.time) {
        this.currentTime = new Date(
          new Date().toUTCString() + this.time.substring(3)
        ).toUTCString();
        // return new Date().toLocaleTimeString();
      }
      return "";
    }
  }
};
</script>
