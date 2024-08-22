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
        success: null,
        userData: null
  },
  mutations: {
    // Mutations are responsible for changing the state
    SET_DATA(state, payload) {
      state.data = payload;
    },
    SET_TYPE(state, payload) {
      state.selectedType = payload;
    },
    SET_LOADING(state, status) {
      state.loading = status;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_SUCCESS(state, success) {
      state.success = success;
    },
    SET_USER_DATA(state, data) {
      state.userData = data;
      if (data == null) {
        localStorage.removeItem('user');
        return;
      }
      window.localStorage.setItem('user', JSON.stringify(data));
    },
    SET_USER_BALANCE(state, data) {
      state.userData.balance = data.walletDto;
    }
  },
  actions: {
    // Actions are used to commit mutations asynchronously    
    async getGames({commit}) {
      commit('SET_LOADING', true);
      try {
          await axios.get(`https://demo.esoterica.digital:8443/games`).then( response => {
            commit('SET_DATA', response.data);
            commit('SET_ERROR', null);
          });
      } catch (error) {
        commit('SET_ERROR', error);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async registerUser({commit}, payload) {
        commit('SET_LOADING', true);
        try {
          await axios.post(`https://demo.esoterica.digital:8443/users`, payload).then( response => {
            console.warn(response.data)
            commit('SET_ERROR', null);
            commit('SET_SUCCESS', 'User successfully registered!');
           });
        } catch (error) {
          commit('SET_ERROR',error.response.data._embedded.errors[0].message);
        } finally {
          commit('SET_LOADING', false);
        }
      },
      async authenticateUser({commit}, payload) {
          commit('SET_LOADING', true);
          try {
              await axios.post(`https://demo.esoterica.digital:8443/login`, payload).then( response => {
                console.warn(response.data)
                commit('SET_USER_DATA', response.data);
                commit('SET_ERROR', null);
                commit('SET_SUCCESS', 'User successfully registered!');
              });
          } catch (error) {
            commit('SET_ERROR',error.response.data._embedded.errors[0].message);
          } finally {
            commit('SET_LOADING', false);
          }
        },
        async userBalance({commit}, payload) {
            commit('SET_LOADING', true);
            try {
                await axios.post(`https://demo.esoterica.digital:8443/users/balance`, payload).then( response => {
                  console.warn(response.data)
                  commit('SET_USER_BALANCE', response.data);
                  commit('SET_ERROR', null);
                });
            } catch (error) {
              commit('SET_ERROR',error.response.data._embedded.errors[0].message);
            } finally {
              commit('SET_LOADING', false);
            }
          },
  },
  getters: {
    // Getters are used to retrieve state data with computed properties
    getData: (state) => {
      return state.selectedType == 'All' ? state.data : state.data.filter(item => item.type == state.selectedType )
    },
    getError: (state) => {
      return state.error;
    },
    getSuccess: (state) => {
      return state.success;
    },
    getBalance: (state) => {
      return state.userData.balance;
    },
    getUser: (state) => {
      return state.userData;
    },
    isAuthenticated: (state) => {
      return state.userData !== null;
    }
  },
});

export default store;