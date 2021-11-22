import types from './types';

const mutations = {
  [types.SET_USER](state, payload) {
    state.user = payload;
    state.loading = false;
  },
  [types.SET_USER_ERROR](state) {
    state.user = '';
    state.loading = false;
  },
  [types.GOOGLE_SIGNIN_SUCCESS](state) {
    state.loading = false;
  },
  [types.LOGOUT_SUCCESS](state) {
    state.user = '';
  },
};

export default mutations;
