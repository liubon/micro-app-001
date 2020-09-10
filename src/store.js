import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    propValue: 0,
  },
  mutations: {
    update(state, value) {
      state.propValue = value;
    },
  },
});
