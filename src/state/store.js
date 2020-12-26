import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    searchInput: "",
    searchResults: [],
    selectedItem: 0,
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
    SET_SEARCH_INPUT(state, value) {
      state.searchInput = value;
    },
    SET_SELECTED_ITEM(state, value) {
      state.selectedItem = value;
    },
  },
  actions: {
    searchForInput({ commit, state }, value) {
      axios
        .get(`https://restcountries.eu/rest/v2/capital/${value}`)
        .then((result) => {
          if (result.status === 200) state.searchResults = result.data;
          else console.error(result);
          commit("SET_SEARCH_INPUT", value);
        });
    },
  },
});

export default store;
