import { currentUser } from 'state';
import { selector } from 'recoil';

export const userPhotoUrl = selector({
  key: 'userPhotoUrl',
  get: ({ get }) => {
    const user = get(currentUser);

    return user?.photoURL;
  },
});
