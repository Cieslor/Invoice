import { auth } from 'firebaseAPI';

export const signIn = (email: string, password: string) => {
  return auth.signInWithEmailAndPassword(email, password);
};
