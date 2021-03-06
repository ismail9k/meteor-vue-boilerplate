import Vue from 'vue';
import Vuex from 'vuex';

import accounts from './modules/accounts';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { accounts },
});

export default store;
