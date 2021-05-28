import React, { FC } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { logOut } from 'firebaseAPI';

export const DashboardView: FC = () => {
  const history = useHistory();

  const handleLogout = async () => {
    await logOut()
      .then(() => history.push('/signin'))
      .catch((error) => console.log(error));
  };
  return (
    <Flex justifyContent="center">
      <Button onClick={handleLogout}>Log out</Button>
    </Flex>
  );
};
