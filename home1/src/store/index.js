import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: false, // 用户登录状态，默认为未登录
    keyword:null,
    userId:null,
  },
  mutations: {
    setAuthentication(state, value) {
      state.isAuthenticated = value;
    },
    setKeyword(state, keyword) {
      state.keyword = keyword;
    },
    setUserId(state, userId) {
      state.userId = userId;
    },
  },
  actions: {
    login({ commit }) {
      // 在这里执行登录操作
      // 登录成功后，将 isAuthenticated 设置为 true
      commit('setAuthentication', true);
    },
    logout({ commit }) {
      // 在这里执行登出操作
      // 登出成功后，将 isAuthenticated 设置为 false
      commit('setAuthentication', false);
    },
    setKeyword({ commit }, keyword) {
      commit('setKeyword', keyword);
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    getKeyword: (state) => state.keyword,
  },
  updateUserId({ commit }, userId) {
    commit('setUserId', userId);
  },
});
