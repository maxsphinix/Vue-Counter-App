import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    newCount: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    reset(state) {
      state.count = 0;
    },
    setValue(state, newCount) {
      state.count = newCount;
    }
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
    reset({ commit }) {
      commit("reset");
    },
    setValue({ commit }, newCount) {
      commit("setValue", newCount);
    }
  }
});
