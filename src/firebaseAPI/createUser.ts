import { auth } from 'firebaseAPI';

export const createUser = (email: string, password: string) => {
  return auth.createUserWithEmailAndPassword(email, password);
};
