import { storage } from 'firebaseAPI';

export const uploadAvatar = (image: File) => {
  return storage.ref(`/avatars/${image.name}`).put(image);
};
