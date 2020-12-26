<template>
  <v-col cols="4">
    <strong>Country Details</strong>
    <v-simple-table>
      <tr>
        <td>Country Name :</td>
        <td>{{ country.name || "" }}</td>
      </tr>
      <tr>
        <td>Capital :</td>
        <td>{{ country.capital || "" }}</td>
      </tr>
      <tr>
        <td>Language:</td>
        <td>{{ languages }}</td>
      </tr>
      <tr>
        <td>Flag:</td>
        <td>
          <v-img
            :lazy-src="country.flag"
            max-height="25"
            max-width="25"
            :src="country.flag"
          ></v-img>
        </td>
      </tr>
    </v-simple-table>
  </v-col>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "DetailsInfo",
  computed: {
    ...mapGetters(["getSelectedCountry"]),
    country() {
      if (this.getSelectedCountry) return this.getSelectedCountry;
      else return {};
    },
    languages() {
      let country = this.getSelectedCountry;
      if (country === undefined) return "";
      return country.languages.map((el) => el.name).join(",");
    },
  },
};
</script>
<style scoped>
td {
  text-align: left;
}
td:first-child {
  text-align: right;
  width: 50%;
}
</style>
