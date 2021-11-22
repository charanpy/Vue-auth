import mutations from './mutation';
import getters from './getter';
import actions from './action';

export default {
  state() {
    return {
      message: '',
      type: 'error',
    };
  },
  mutations,
  actions,
  getters,
};
