import { atom } from 'recoil';
import { User } from 'models';

export const isUserLoaded = atom({
  key: 'isUserLoaded',
  default: false,
});

export const currentUser = atom<User | null>({
  key: 'currentUser',
  default: null,
});
