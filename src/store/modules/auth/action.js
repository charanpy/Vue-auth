import types from './types';
import alertTypes from '../alert/type';
import auth from '../../../hooks/UseAuth';

const actions = {
  userSubscription({ commit }, payload) {
    commit(types.SET_USER, payload);
  },
  userSubscriptionError({ commit }) {
    commit(types.SET_USER_ERROR);
  },
  async googleSignIn({ commit }) {
    try {
      await auth.signInWithGoogle();
      commit(types.GOOGLE_SIGNIN_SUCCESS);
    } catch (error) {
      commit(alertTypes.SET_ALERT, { message: 'Please Try again' });
    }
  },
  async registerUser({ commit }, payload) {
    try {
      await auth.emailPasswordRegister(payload);
      commit(alertTypes.SET_ALERT, { message: 'Account created', type: 'success' });
    } catch (error) {
      console.log(12);
      commit(alertTypes.SET_ALERT, { message: error.message });
    }
  },
  async loginUser({ commit }, payload) {
    try {
      await auth.login(payload.email, payload.password);
      commit(alertTypes.SET_ALERT, { message: 'Welcome Back', type: 'success' });
    } catch (error) {
      commit(alertTypes.SET_ALERT, { message: error.message });
    }
  },
  async logout({ commit }) {
    try {
      await auth.logout();
      commit(alertTypes.SET_ALERT, { message: 'Logged Out Successfully', type: 'success' });
    } catch (error) {
      commit(alertTypes.SET_ALERT, { message: error.message });
    }
  },
};

export default actions;
