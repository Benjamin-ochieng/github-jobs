import { createStore } from 'vuex';
import jobsService from '@/services/jobsService';
import * as helperFuncs from '@/helpers';

export default createStore({
  state: {
    jobs: [],
    page: 1,
    loading: false,
    message: null,
    recentLocations: [],
  },
  mutations: {
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_PAGE(state, jobs) {
      if (!jobs.length) {
        state.page = 1;
      } else {
        state.page += 1;
      }
    },
    RESET_PAGE(state) {
      state.page = 1;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_MESSAGE(state, message) {
      state.message = message;
    },
    SET_RECENTLOCATIONS(state, location) {
      if (location) state.recentLocations = [...new Set([location, ...state.recentLocations])];
      if (state.recentLocations.length > 4) {
        state.recentLocations.pop();
      }
    },
  },
  actions: {
    async fetchJobs({ commit, state }, payload) {
      const { page } = state;
      const url = helperFuncs.generateUrl({ ...payload, page });
      if (!url) return;
      try {
        commit('SET_LOADING', true);
        const res = await jobsService.getJobs(url);
        const { data } = res;
        commit('SET_JOBS', data);
        commit('SET_MESSAGE', `Showing ${data.length} jobs`);
        commit('SET_PAGE', data);
        commit('SET_LOADING', false);
      } catch (error) {
        commit('SET_LOADING', false);
        commit('SET_MESSAGE', `We have encountered an error please try searching again`);
      }
    },

    setRecentLocations({ commit }, payload) {
      commit('SET_RECENTLOCATIONS', payload);
    },

    resetPage({ commit }) {
      commit('RESET_PAGE');
    },
  },
  modules: {},
});
