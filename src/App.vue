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
        </v-container>
      </v-form>
    </v-main>
  </v-app>
</template>

<script>
import SearchComponent from "@/components/SearchComponent";
import ResultBox from "@/components/ResultBox";
import DetailsInfo from "@/components/DetailsInfo";

export default {
  name: "App",
  components: {
    DetailsInfo,
    ResultBox,
    SearchComponent,
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
