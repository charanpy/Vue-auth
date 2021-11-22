import { doc, getDoc, setDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth, db } from '../firebase/firebaseinit';

const createUser = async (userDetails) => {
  if (!userDetails?.uid) return false;
  const newUserRef = doc(db, 'users', userDetails?.uid);
  const res = await setDoc(newUserRef, userDetails);
  return res;
};

const isUserExist = async (user) => {
  const docRef = doc(db, 'users', user.uid);
  const docSnapshot = await getDoc(docRef);
  if (!docSnapshot.exists()) return false;
  return createUser({
    email: user.email,
    displayName: user.displayName,
    photo: user.photoURL,
    uid: user?.uid || '',
  });
};

const provider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  const res = await signInWithPopup(auth, provider);
  return isUserExist(res.user);
};

const emailPasswordRegister = async (userDetails) => {
  const user = await createUserWithEmailAndPassword(auth, userDetails.email, userDetails.password);
  return createUser({ ...userDetails, uid: user.user.uid });
};

const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

const logout = () => signOut(auth);

export default {
  signInWithGoogle,
  emailPasswordRegister,
  login,
  logout,
};
