import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    searchInput: "",
    searchResults: [],
  },
  getters: {
    getResults: (state) => {
      return state.searchResults;
    },
  },
  mutations: {
    SET_SEARCH_INPUT(state, value) {
      state.searchInput = value;
    },
  },
  actions: {
    searchForInput({ commit, state }, value) {
      commit("SET_SEARCH_INPUT", value);
      axios
        .get(`https://restcountries.eu/rest/v2/capital/${value}`)
        .then((data) => {
          state.searchResults = data;
        });
    },
  },
});

export default store;
