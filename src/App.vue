<template>
  <v-app>
    <v-main>
      <v-form>
        <v-container>
          <v-row>
            <SearchComponent />
            <ResultBox />
            <DetailsInfo />
          </v-row>
          <v-row>
            <v-col cols="6"><TimeZoneList/></v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-main>
  </v-app>
</template>

<script>
import SearchComponent from "@/components/SearchComponent";
import ResultBox from "@/components/ResultBox";
import DetailsInfo from "@/components/DetailsInfo";
import TimeZoneList from "@/components/TimeZoneList";


export default {
  name: "App",
  components: {
    DetailsInfo,
    ResultBox,
    SearchComponent,
    TimeZoneList
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
