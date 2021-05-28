import { auth } from 'firebaseAPI';

export const logOut = () => {
  return auth.signOut();
};
