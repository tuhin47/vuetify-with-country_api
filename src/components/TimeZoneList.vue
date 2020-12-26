<template>
  <div class="timezones">
    <strong>Time Zones</strong>
    <TimeZone v-for="time in zones" :time="time" :key="time"></TimeZone>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TimeZone from "@/components/TimeZone";

export default {
  name: "TimeZoneList",
  computed: {
    ...mapGetters(["timeZones"]),
    zones() {
      if (this.timeZones) {
        return this.timeZones;
      }
      return [];
    },
  },
  components: {
    TimeZone,
  },
};
</script>

<style scoped>
.timezones {
  height: 300px;
  overflow: paged-y;
}
</style>
