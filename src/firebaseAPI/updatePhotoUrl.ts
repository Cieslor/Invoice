import { auth } from 'firebaseAPI';

export const updatePhotoUrl = (avatar: string) => {
  return auth.currentUser?.updateProfile({ photoURL: avatar });
};
