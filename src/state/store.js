import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    searchInput: "",
    searchResults: [],
    selectedItem: null,
  },
  getters: {
    getResults: (state) => {
      return state.searchResults;
    },
    getSelectedCountry: (state) => {
      if (
        state.selectedItem >= 0 &&
        state.selectedItem < state.searchResults.length
      ) {
        return state.searchResults[state.selectedItem];
      } else return undefined;
    },
  },
  mutations: {
    SET_SELECTED_ITEM(state, value) {
      state.selectedItem = value;
    },
    GET_SEARCH_RESULT(state, { data, key }) {
      state.searchResults = data;
      state.searchInput = key;
    },
  },
  actions: {
    searchForInput({ commit }, key) {
      commit("SET_SELECTED_ITEM");
      axios
        .get(`https://restcountries.eu/rest/v2/capital/${key}`)
        .then((result) => {
          if (result.status === 200) {
            commit("GET_SEARCH_RESULT", { data: result.data, key });
          }
        })
        .catch((error) => {
          commit("GET_SEARCH_RESULT", { data: {}, key });
          console.error(key, error);
        });
    },
  },
});

export default store;
