import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { logOut } from 'firebaseAPI';

export const useLogout = () => {
  const history = useHistory();
  return useMutation(() => logOut(), {
    onSuccess: () => {
      history.push('/signin');
    },
  });
};
