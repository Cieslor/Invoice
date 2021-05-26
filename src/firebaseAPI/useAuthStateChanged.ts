import { useEffect } from 'react';
import { auth } from 'firebaseAPI';
import { useSetRecoilState } from 'recoil';
import { isUserLoaded, currentUser } from 'state';

export const useAuthStateChanged = () => {
  const setUser = useSetRecoilState(currentUser);
  const setIsLoaded = useSetRecoilState(isUserLoaded);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsLoaded(true);
    });
    return unsubscribe;
  }, []);
};
