import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_SEBDER_ID,
  appId: process.env.VUE_APP_APP_ID,
};

if (!getApps.length) {
  initializeApp(firebaseConfig);
}

// eslint-disable-next-line
export const auth = getAuth();
export const db = getFirestore();
