import types from './type';

const action = {
  setAlert({ commit }, payload) {
    commit(types.SET_ALERT, payload);
  },
  removeAlert({ commit }, payload) {
    commit(types.REMOVE_ALERT, payload);
  },
};

export default action;
