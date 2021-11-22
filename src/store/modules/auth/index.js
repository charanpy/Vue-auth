import mutations from './mutation';
import actions from './action';
import getters from './getter';

export default {
  state() {
    return {
      user: null,
      loading: true,
    };
  },
  mutations,
  actions,
  getters,
};
