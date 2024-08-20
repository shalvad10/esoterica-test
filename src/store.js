import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    // Your application state goes here
        API: 'https://demo.esoterica.digital:8443',
        data: [],
        gameTypes: [ 'All', 'CASCADE_FIVE_UP', 'CASCADE_THREE_UP', 'REELS_3', 'REELS_3X5', 'REELS_3X6' ],
        selectedType: 'All',
        loading: false,
        error: null,
  },
  mutations: {
    // Mutations are responsible for changing the state
    SET_DATA(state, payload) {
      console.warn(payload)
      state.data = payload;
    },
    SET_TYPE(state, payload) {
      console.warn(payload)
      state.selectedType = payload;
    },
    SET_LOADING(state, status) {
      state.loading = status;
    },
    SET_ERROR(state, error) {
      state.error = error;
    }
  },
  actions: {
    // Actions are used to commit mutations asynchronously    
    async getGames({commit}) {
        commit('SET_LOADING', true);
        try {
            await axios.get(`https://demo.esoterica.digital:8443/games`).then( response => commit('SET_DATA', response.data));
          commit('SET_DATA', response.data);
          commit('SET_ERROR', null);
        } catch (error) {
          commit('SET_ERROR', error);
        } finally {
          commit('SET_LOADING', false);
        }
      },
  },
  getters: {
    // Getters are used to retrieve state data with computed properties
    getData: (state) => {
      return state.selectedType == 'All' ? state.data : state.data.filter(item => item.type == state.selectedType )
    }
  },
});

export default store;