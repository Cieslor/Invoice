import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { createUser } from 'firebaseAPI';
import { SignInAndUpResponse } from 'models';
import { currentUser } from 'state';

export const useSignUp = () => {
  const history = useHistory();
  const setCurrentUser = useSetRecoilState(currentUser);
  return useMutation(({ email, password }: { email: string; password: string }) => createUser(email, password), {
    onSuccess: (response: SignInAndUpResponse) => {
      const { user } = response;
      if (user) {
        setCurrentUser({
          email: user.email ?? '',
          photoURL: user.photoURL ?? '',
          uid: user.uid ?? '',
        });
        history.push('/');
      } else {
        setCurrentUser(null);
      }
    },
  });
};
