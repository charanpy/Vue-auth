import types from './type';

const mutation = {
  [types.SET_ALERT](state, payload) {
    state.message = payload.message;
    state.type = payload.type || 'error';
  },
  [types.REMOVE_ALERT](state) {
    state.message = '';
  },
};

export default mutation;
