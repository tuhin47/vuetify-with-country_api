<template>
  <v-app>
    <v-main>
      <v-form>
        <v-container>
          <v-row>
            <SearchComponent></SearchComponent>
            <v-col
                cols="4"

            >
              <v-text-field

                  label="Last Name"
                  filled
                  shaped
              ></v-text-field>
            </v-col>
            <v-col
                cols="4"

            >
              <v-text-field

                  label="Last Name"
                  filled
                  shaped
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>

    </v-main>
  </v-app>
</template>

<script>
import SearchComponent from "@/components/SearchComponent";

export default {
  name: 'App',
  components: {
    SearchComponent
  }
}
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
