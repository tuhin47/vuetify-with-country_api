<template>
  <v-col cols="4">
    <strong>Country Details</strong>
    <table>
      <tr>
        Country Name :
        {{
          country.name || ""
        }}
      </tr>
      <tr>
        Capital :{{
          country.capital
        }}
      </tr>
      <tr>
        Language:{{
          languages
        }}
      </tr>
      <tr>
        Flag:
      </tr>
    </table>
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
