import { atom } from 'recoil';
import { User } from 'models';

export const isUserLoaded = atom({
  key: 'isUserLoaded',
  default: false,
});

export const currentUser = atom({
  key: 'currentUser',
  default: null as User | null,
});
