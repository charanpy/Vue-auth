import { createStore, createLogger } from 'vuex';
import auth from './modules/auth';
import alert from './modules/alert';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    auth,
    alert,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
